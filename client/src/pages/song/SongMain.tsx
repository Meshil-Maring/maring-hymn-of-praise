import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Navigation from "./Navigation";
import TypeSelect from "./TypeSelect";
import SongLyrics from "./SongLyrics";
import PageNavigate from "./PageNavigate";

// Define the type for your song data
interface SongData {
  _id: string;
  id: number;
  title: string;
  key: string;
  sections: any;
}

const SongMain = () => {
  const [songData, setSongData] = useState<SongData | null>(null);
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const songId = Number(id);

  useEffect(() => {
    let lastId = 0;

    if (!songData || lastId != songId) {
      lastId = songId;

      console.log("Hello what happen");

      fetch(`https://maring-hymn-of-praise.onrender.com/song/${songId}`)
        .then((res) => res.json())
        .then((data) => setSongData(data))
        .catch(console.error);
    }
  }, [songId]);

  // handle back
  useEffect(() => {
    const backHandler = (event: PopStateEvent) => {
      event.preventDefault();
      navigate("/");
    };
    window.addEventListener("popstate", backHandler);
    return () => window.removeEventListener("popstate", backHandler);
  }, [navigate]);

  if (!songData) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen ">
      <Navigation id={songId} title={songData.title} />
      <TypeSelect />
      <SongLyrics
        song={{
          key: songData.key,
          sections: songData.sections,
        }}
      />
      <PageNavigate />
    </div>
  );
};

export default SongMain;

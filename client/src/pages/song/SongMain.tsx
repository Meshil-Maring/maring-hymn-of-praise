import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Search from "../../component/nav/header/Search";
import SearchIcon from "../../assets/icons/search";

import Navigation from "./Navigation";
import TypeSelect from "./TypeSelect";
import SongLyrics from "./SongLyrics";
import PageNavigate from "./PageNavigate";
import ZoomButton from "../../component/ZoomButton";

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

  // Handle touch
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [touchY, setTouchY] = useState<number | null>(null);
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    let lastId = 0;

    if (!songData || lastId != songId) {
      lastId = songId;

      if (localStorage.getItem("songData")) {
        const res = JSON.parse(localStorage.getItem("songData")!);

        const data = res.find((items: any) => items.id === songId);
        setSongData(data);
      } else {
        fetch(
          `https://maring-hymn-of-praise-server.onrender.com/song/${songId}`
        )
          .then((res) => res.json())
          .then((data) => setSongData(data))
          .catch(console.error);
      }
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

  // Start touch
  const startTouch = (e: React.TouchEvent) => {
    setTouchY(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchY !== null) {
      const current = e.touches[0].clientX;
      const diff = current - touchY;

      if (diff > 0 && diff < 200) {
        setTranslateX(diff);
      }
    }
  };

  const endTouch = () => {
    if (translateX > 100) {
      setIsSearching(true);
    }

    setTranslateX(0);
    setTouchY(null);
  };

  function searchClickHandler() {
    setIsSearching(false);
  }

  return (
    <div className="flex flex-col h-screen justify-center">
      <Navigation id={songId} title={songData.title} />
      <TypeSelect />
      <SongLyrics
        song={{
          key: songData.key,
          sections: songData.sections,
        }}
      />
      <PageNavigate />

      <div
        onTouchStart={startTouch}
        onTouchMove={handleTouchMove}
        onTouchEnd={endTouch}
        className="w-[20%] rounded-r-2xl h-[70%] fixed z-20 bottom-18 left-2"
      ></div>

      {isSearching && <Search searchClickHandler={searchClickHandler} />}

      <ZoomButton />

      <aside
        style={{
          transform:
            translateX < 100
              ? `translateX(${translateX}px)`
              : "translateX(100px)",
        }}
        className={`fixed rounded-full p-1 -left-10 ${
          translateX > 100 ? "bg-active" : "bg-active/10"
        }`}
      >
        <SearchIcon size={32} stroke={translateX > 100 ? "white" : "black"} />
      </aside>
    </div>
  );
};

export default SongMain;

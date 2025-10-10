import { useParams } from "react-router-dom";

import Navigation from "./Navigation";
import TypeSelect from "./TypeSelect";
import SongLyrics from "./SongLyrics";
import PageNavigate from "./PageNavigate";
import { SongContext } from "../../routes/main-routes";

// fetching data

const Song = () => {
  const { id } = useParams<{ id: string }>();
  const numberId = Number(id);

  return (
    <div className="flex flex-col h-[100vh] justify-between">
      <Navigation />
      <TypeSelect />
      <SongLyrics song={selectedSong} />
      <PageNavigate />
    </div>
  );
};

export default Song;

import Navigation from "./Navigation";
import TypeSelect from "./TypeSelect";
import SongLyrics from "./SongLyrics";
import PageNavigate from "./PageNavigate";

const Song = () => (
  <div className="flex flex-col h-[100vh] justify-between">
    <Navigation />
    <TypeSelect />
    <SongLyrics />
    <PageNavigate />
  </div>
);

export default Song;

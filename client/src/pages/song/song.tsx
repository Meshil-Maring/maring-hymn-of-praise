import Navigation from "./Navigation";
import TypeSelect from "./TypeSelect";
import SongLyrics from "./SongLyrics";
import PageNavigate from "./PageNavigate";
import { SongContext } from "../../routes/main-routes";

const Song = () => (
  <SongContext.Consumer>
    {(value) => (
      <div className="flex flex-col h-[100vh] justify-between">
        <Navigation />
        <TypeSelect />
        <SongLyrics data={value} />
        <PageNavigate />
      </div>
    )}
  </SongContext.Consumer>
);

export default Song;

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Navigation from "./Navigation";
import TypeSelect from "./TypeSelect";
import SongLyrics from "./SongLyrics";
import PageNavigate from "./PageNavigate";
import { SongContext } from "../../routes/main-routes";

const Song = () => {
  const navigate = useNavigate();

  // handling back press
  useEffect(() => {
    const backHandler = (event: PopStateEvent) => {
      event.preventDefault();
      navigate("/");
    };

    window.addEventListener("popstate", backHandler);

    return () => window.removeEventListener("popstate", backHandler);
  }, [navigate]);

  return (
    <SongContext.Consumer>
      {() => (
        <div className="flex flex-col h-[100vh]">
          <Navigation />
          <TypeSelect />
          <SongLyrics song={[]} />
          <PageNavigate />
        </div>
      )}
    </SongContext.Consumer>
  );
};

export default Song;

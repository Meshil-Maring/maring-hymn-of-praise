import { seEffect } from "react";
import { useParams } from "react-router-dom";

import Navigation from "./Navigation";
import TypeSelect from "./TypeSelect";
import SongLyrics from "./SongLyrics";
import PageNavigate from "./PageNavigate";

const Song = () => {
  const { id } = useParams<{ id: string }>();
  const numberId = Number(id);

  seEffect(() => {
    fetch("");
  }, []);

  return (
    <div className="flex flex-col h-[100vh] justify-between">
      <Navigation />
      <TypeSelect />
      <SongLyrics song={"Hello"} />
      <PageNavigate />
    </div>
  );
};

export default Song;

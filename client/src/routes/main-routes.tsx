import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Song from "../pages/song/SongMain";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/song/:id" element={<Song />} />
    </Routes>
  );
}

export default MainRoutes;

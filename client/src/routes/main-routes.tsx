import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Signup from "../pages/auth/Signup";
import Song from "../pages/song/SongMain";
import EditSong from "../pages/song/EditSong";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home />} />
      <Route path="/song/:id" element={<Song />} />
      <Route path="/song/edit/:id" element={<EditSong />} />
    </Routes>
  );
}

export default MainRoutes;

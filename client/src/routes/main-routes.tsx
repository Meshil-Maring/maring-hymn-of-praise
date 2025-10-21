import { useState, useEffect, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Song from "../pages/song/Song";

export const SongContext = createContext(null);

function MainRoutes() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/")
      .then((res) => res.json())
      .then((data) => setSongs(data))
      .catch((err) => console.error("Error fetching songs:", err));
  }, []);

  return (
    <SongContext.Provider value={songs}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/song/:id" element={<Song />} />
      </Routes>
    </SongContext.Provider>
  );
}

export default MainRoutes;

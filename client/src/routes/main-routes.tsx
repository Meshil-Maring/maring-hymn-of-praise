// MainRoutes.tsx
import { useState, useEffect, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Song from "../pages/song/song";

// 1️⃣ Define context type
interface SongContextType {
  songs: any[]; // You can replace `any` with your song type
  loading: boolean;
  error: Error | null;
}

// 2️⃣ Create context with type
export const SongContext = createContext<SongContextType | null>(null);

function MainRoutes() {
  const [songs, setSongs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch("http://localhost:8000/")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch songs");
        return res.json();
      })
      .then((data) => {
        setSongs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching songs:", err);
        setError(err);
        setLoading(false);
      });
  }, []);

  const contextValue: SongContextType = { songs, loading, error };

  return (
    <SongContext.Provider value={contextValue}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/song/:id" element={<Song />} />
      </Routes>
    </SongContext.Provider>
  );
}

export default MainRoutes;

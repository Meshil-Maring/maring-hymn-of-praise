import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import { useNetworkStatus } from "../../component/UseNetworkStatus.js";
import Search from "../../component/nav/header/Search";
import SearchIcon from "../../assets/icons/search";

import Navigation from "./Navigation";
import TypeSelect from "./TypeSelect";
import SongLyrics from "./SongLyrics";
import PageNavigate from "./PageNavigate";
import ZoomButton from "../../component/ZoomButton";

interface SongData {
  _id: string;
  id: number;
  title: string;
  key: string;
  sections: any;
}

const SongMain = () => {
  const [songData, setSongData] = useState<SongData | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [touchX, setTouchX] = useState<number | null>(null);
  const [translateX, setTranslateX] = useState(0);
  const [fontSize, setFontSize] = useState<number>(() => {
    const saved = localStorage.getItem("fontSize");
    return saved ? Number(saved) : 14;
  });

  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const songId = Number(id);

  // Load song data
  useEffect(() => {
    const saved = localStorage.getItem("songData");

    if (saved) {
      const allSongs = JSON.parse(saved);
      const found = allSongs.find((item: any) => item.id === songId);
      if (found) {
        setSongData(found);
        return;
      }
    }

    // If not found in localStorage → fetch from API
    fetch(`https://maring-hymn-of-praise-server.onrender.com/song/${songId}`)
      .then((res) => res.json())
      .then((data) => setSongData(data))
      .catch(console.error);
  }, [songId]);

  // Save font size whenever it changes
  useEffect(() => {
    localStorage.setItem("fontSize", String(fontSize));
  }, [fontSize]);

  // Back button handling
  useEffect(() => {
    const handleBack = (event: PopStateEvent) => {
      event.preventDefault();
      navigate("/");
    };
    window.addEventListener("popstate", handleBack);
    return () => window.removeEventListener("popstate", handleBack);
  }, [navigate]);

  // Touch swipe for search
  const startTouch = (e: React.TouchEvent) => setTouchX(e.touches[0].clientX);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchX !== null) {
      const diff = e.touches[0].clientX - touchX;
      if (diff > 0 && diff < 200) setTranslateX(diff);
    }
  };

  const endTouch = () => {
    if (translateX > 100) setIsSearching(true);
    setTranslateX(0);
    setTouchX(null);
  };

  const handleSearchClose = () => setIsSearching(false);

  if (!songData) {
    return (
      <div className="flex items-center justify-center h-screen text-lg font-semibold">
        Loading...
      </div>
    );
  }

  return (
    <div
      className="flex flex-col h-screen justify-center relative scrollbar-hidden"
      style={{ height: "calc(var(--vh) * 100)" }}
    >
      <Navigation id={songId} title={songData.title} />
      <TypeSelect />

      {/* Lyrics */}
      <SongLyrics
        fontSize={fontSize}
        song={{
          key: songData.key,
          sections: songData.sections,
        }}
      />

      <PageNavigate />

      {/* Swipe area */}
      <div
        onTouchStart={startTouch}
        onTouchMove={handleTouchMove}
        onTouchEnd={endTouch}
        className="w-[20%] rounded-r-2xl h-[70%] fixed z-20 bottom-18 left-2"
      ></div>

      {isSearching && <Search searchClickHandler={handleSearchClose} />}

      {/* Zoom control */}
      <ZoomButton fontSize={fontSize} onFontSizeChange={setFontSize} />

      {/* Search icon with swipe animation */}
      <aside
        style={{
          transform: `translateX(${Math.min(translateX, 100)}px)`,
        }}
        className={`fixed rounded-full p-1 -left-10 transition-all duration-200 ${
          translateX > 100 ? "bg-active" : "bg-active/10"
        }`}
      >
        <SearchIcon size={32} stroke={translateX > 100 ? "white" : "black"} />
      </aside>
    </div>
  );
};

export default SongMain;

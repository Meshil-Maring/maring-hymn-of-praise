import { useState, useEffect, useMemo } from "react";

export type Bookmark = {
  id: string;
  title: string;
};

export default function useBookmarks() {
  const bookmarkKey = "bookmarkList";

  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);

  // Load bookmarks once
  useEffect(() => {
    refreshBookmarks();
  }, []);

  //Refresh function
  const refreshBookmarks = () => {
    const saved = localStorage.getItem(bookmarkKey);
    if (saved) {
      setBookmarks(JSON.parse(saved));
    } else {
      setBookmarks([]);
    }
  };

  // Fast lookup (Set)
  const bookmarkSet = useMemo(() => {
    return new Set(bookmarks.map((b) => b.id));
  }, [bookmarks]);

  // Add bookmark
  const addBookmark = (id: string | number, title: string) => {
    setBookmarks((prev) => {
      const found = prev.some((b) => b.id === String(id));
      const updated = found
        ? prev
        : [...prev, { id: String(id), title }].reverse();

      localStorage.setItem(bookmarkKey, JSON.stringify(updated));
      return updated;
    });
  };

  // Remove bookmark
  const removeBookmark = (id: string) => {
    setBookmarks((prev) => {
      const updated = prev.filter((b) => b.id !== id);
      localStorage.setItem(bookmarkKey, JSON.stringify(updated));
      return updated;
    });
  };

  // Check bookmark
  const isBookmark = (id: string) => bookmarkSet.has(id);

  return {
    bookmarks,
    addBookmark,
    removeBookmark,
    isBookmark,
    refreshBookmarks,
  };
}

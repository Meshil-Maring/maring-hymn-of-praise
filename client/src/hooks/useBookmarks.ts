import { useState, useEffect, useMemo, use } from "react";

export type Bookmark = {
  id: string;
  title: string;
};

export default function useBookmarks() {
  const [bookmark, setBookmark] = useState<Bookmark[]>([]);

  const bookmarkKey = "bookmarkList";

  //   Load from local storage
  useEffect(() => {
    const savedBookmark = localStorage.getItem(bookmarkKey);

    savedBookmark && setBookmark(JSON.parse(savedBookmark));
  }, []);

  // store in hash table
  const bookmarkSet = useMemo(() => {
    return new Set(bookmark.map((value) => value.id));
  }, [bookmark]);

  // add bookmark
  const addBookmark = (id: string | number, title: string) => {
    setBookmark((prev) => {
      const findId = prev.find((value) => value.id == id);

      const updated = !findId ? [...prev, { id: String(id), title }] : prev;

      localStorage.setItem(bookmarkKey, JSON.stringify(updated));

      return updated;
    });
  };

  // remove bookmark
  const removeBookmark = (id: string) => {
    setBookmark((prev) => {
      const updated = prev.filter((items) => items.id !== id);

      localStorage.setItem(bookmarkKey, JSON.stringify(updated));

      return updated;
    });
  };

  // check bookmark
  const isBookmark = (id: string) => {
    return bookmarkSet.has(id);
  };

  return { addBookmark, removeBookmark, isBookmark };
}

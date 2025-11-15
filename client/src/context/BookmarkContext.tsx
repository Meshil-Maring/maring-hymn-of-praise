import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Bookmark = { id: string; title: string };

type BookmarkContextType = {
  bookmarks: Bookmark[];
  addBookmark: (id: string, title: string) => void;
  removeBookmark: (id: string) => void;
  isBookmark: (id: string) => boolean;
};

const BookmarkContext = createContext<BookmarkContextType | null>(null);

export const BookmarkProvider = ({ children }: any) => {
  const bookmarkKey = "bookmarkList";
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem(bookmarkKey);
    setBookmarks(saved ? JSON.parse(saved) : []);
  }, []);

  const bookmarkSet = useMemo(
    () => new Set(bookmarks.map((b) => b.id)),
    [bookmarks]
  );

  const addBookmark = (id: string, title: string) => {
    setBookmarks((prev) => {
      if (prev.some((b) => b.id === id)) return prev;
      const updated = [...prev, { id, title }];
      localStorage.setItem(bookmarkKey, JSON.stringify(updated));
      return updated;
    });
  };

  const removeBookmark = (id: string) => {
    setBookmarks((prev) => {
      const updated = prev.filter((b) => b.id !== id);
      localStorage.setItem(bookmarkKey, JSON.stringify(updated));
      return updated;
    });
  };

  const isBookmark = (id: string) => bookmarkSet.has(id);

  return (
    <BookmarkContext.Provider
      value={{ bookmarks, addBookmark, removeBookmark, isBookmark }}
    >
      {children}
    </BookmarkContext.Provider>
  );
};

export const useBookmarks = () => useContext(BookmarkContext)!;

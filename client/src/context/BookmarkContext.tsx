import { createContext, useContext, useState, useEffect, useMemo } from "react";

type Bookmark = {
  id: number;
  title: string;
};

type BookmarkContextType = {
  bookmarks: Bookmark[];
  addBookmark: (id: number, title: string) => void;
  removeBookmark: (id: number) => void;
  isBookmark: (id: number) => boolean;
};

const BookmarkContext = createContext<BookmarkContextType | null>(null);

export const BookmarkProvider = ({ children }: any) => {
  const bookmarkKey = "bookmarkList";

  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);

  // Load bookmarks once
  useEffect(() => {
    const saved = localStorage.getItem(bookmarkKey);
    setBookmarks(saved ? JSON.parse(saved) : []);
  }, []);

  // Fast lookup using Set
  const bookmarkSet = useMemo(
    () => new Set(bookmarks.map((b) => b.id)),
    [bookmarks]
  );

  const addBookmark = (id: number, title: string) => {
    id = Number(id);

    setBookmarks((prev) => {
      if (prev.some((b) => b.id === id)) return prev;

      const updated = [...prev, { id, title }].reverse();
      localStorage.setItem(bookmarkKey, JSON.stringify(updated));
      return updated;
    });
  };

  const removeBookmark = (id: number) => {
    id = Number(id);

    setBookmarks((prev) => {
      const updated = prev.filter((b) => b.id !== id);
      localStorage.setItem(bookmarkKey, JSON.stringify(updated));
      return updated;
    });
  };

  const isBookmark = (id: number) => {
    id = Number(id);
    return bookmarkSet.has(id);
  };

  return (
    <BookmarkContext.Provider
      value={{ bookmarks, addBookmark, removeBookmark, isBookmark }}
    >
      {children}
    </BookmarkContext.Provider>
  );
};

export const useBookmarks = () => useContext(BookmarkContext)!;

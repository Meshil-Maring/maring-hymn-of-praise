import { useState, useEffect } from "react";

import Back from "../../assets/icons/back";
import BookmarkList from "../../component/nav/header/BookmarkList";

type BookmarkItems = {
  id: string;
  title: string;
};

const Bookmark = ({ bookmark }: any) => {
  const [bookmarkList, setBookmarkList] = useState<BookmarkItems[]>([]);

  let arr: string[] | null = null;

  useEffect(() => {
    const savedBookmark = localStorage.getItem("bookmarkList");

    if (savedBookmark) {
      try {
        arr = JSON.parse(savedBookmark);
      } catch (e) {
        console.error("Failed to parse bookmarkList from localStorage", e);
      }
    }

    fetch("/index.json")
      .then((res) => res.json())
      .then((data) => {
        if (arr && Array.isArray(arr)) {
          const found = arr
            .map((value: string) => {
              const number = Number(value);
              return data[number - 1];
            })
            .reverse();
          setBookmarkList(found);
        }

        return data;
      })
      .catch((e) => {
        console.error("Failed to load index.json", e);
      });
  }, []);

  // remove bookmark
  const removeBookmarkHandler = (id: string) => {
    setBookmarkList((prev) => {
      const updated = prev.filter((item) => item.id !== id);

      const onlyIds = updated.map((items) => items.id);

      localStorage.setItem("bookmarkList", JSON.stringify(onlyIds));
      return updated;
    });
  };

  // Render bookmark
  const renderBookmark = () => {
    return bookmarkList.map((items: BookmarkItems, key) => (
      <BookmarkList
        key={key}
        id={items.id}
        title={items.title}
        cb={removeBookmarkHandler}
      />
    ));
  };

  return (
    <div className="bg-white flex justify-start h-screen w-full absolute top-0 right-0 z-30 text-yellow flex-col">
      <nav className="bg-bg-light flex p-3 w-full">
        <button onClick={() => bookmark()}>
          <Back fill="black" />
        </button>
        <p className="text-center w-full text-active">My Bookmark</p>
        <p className="text-transparent font-black">.</p>
      </nav>

      <div className="p-3 h-full flex justify-center overflow-auto">
        {bookmarkList.length !== 0 ? (
          <ul className="flex w-full self-start flex-col gap-2">
            {renderBookmark()}
          </ul>
        ) : (
          <p className="text-active text-xl text-center">No bookmark</p>
        )}
      </div>
    </div>
  );
};

export default Bookmark;

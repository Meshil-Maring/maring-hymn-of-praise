import { useState, useEffect } from "react";
import ListItem from "./ListItem";

type BookmarkList = string[];

const ListView = ({ listType }: { listType: string }) => {
  const [bookmarkList, setBookmarkList] = useState<BookmarkList>([]);
  const [listData, setListData] = useState<{ id: string; title: string }[]>([]);

  useEffect(() => {
    if (localStorage.getItem("index")) {
      const index = JSON.parse(localStorage.getItem("index")!);

      setListData(index);
    } else {
      fetch("/index.json")
        .then((res) => res.json())
        .then((data) => setListData(data));
    }
  }, []);

  // Sorting logic
  const sortedData = [...listData].sort((a, b) =>
    listType === "Numerical"
      ? a.id.localeCompare(b.id)
      : a.title.localeCompare(b.title)
  );

  const addBookmarkListHandler = (id: string) => {
    setBookmarkList((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const checkBookmark = (id: string) => bookmarkList.includes(id);

  return (
    <div className="grow bg-white relative z-10 py-4 mt-2 rounded-t-2xl h-full overflow-y-auto scrollbar-hidden shadow-sm">
      {sortedData.map((ele, index) => (
        <ListItem
          key={ele.id}
          title={ele.title}
          id={ele.id}
          even={index % 2 === 0}
          cb={addBookmarkListHandler}
          bookmark={checkBookmark(ele.id)}
        />
      ))}
    </div>
  );
};

export default ListView;

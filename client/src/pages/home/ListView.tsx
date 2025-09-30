import { useState, useEffect } from "react";
import ListItem from "./ListItem";

type BookmarkList = string[];

const ListView = ({ listType }: { listType: string }) => {
  const [bookmarkList, setBookmarkList] = useState<BookmarkList>([]);
  const [listData, setListData] = useState<{ id: string; title: string }[]>([]);

  // load JSON once
  useEffect(() => {
    fetch("/index.json")
      .then((res) => res.json())
      .then((data) => setListData(data));
  }, []);

  if (listType === "Numerical") {
    listData.sort((a, b) => a.id.localeCompare(b.id));
  }

  if (listType === "Alphabetical") {
    listData.sort((a, b) => a.title.localeCompare(b.title));
  }

  // handling bookmarkList add and remove
  const addBookmarkListHandler = (id: string) => {
    setBookmarkList((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );

    console.log(bookmarkList);
  };

  const checkBookmark = (id: string) => bookmarkList.includes(id);

  return (
    <div className="bg-white w-full py-4 mt-2 rounded-t-2xl h-full overflow-y-auto">
      {listData.map((ele, index) => (
        <ListItem
          key={index}
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

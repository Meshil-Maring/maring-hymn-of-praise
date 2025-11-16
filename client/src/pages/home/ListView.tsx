import { useState, useEffect } from "react";
import ListItem from "./ListItem";
import { useBookmarks } from "../../context/BookmarkContext";

const ListView = ({ listType }: { listType: string }) => {
  const [listData, setListData] = useState<{ id: string; title: string }[]>([]);
  const { addBookmark, removeBookmark, isBookmark } = useBookmarks();

  useEffect(() => {
    fetch("/index.json")
      .then((res) => res.json())
      .then((data) => setListData(data));
  }, []);

  const sortedData = [...listData].sort((a, b) =>
    listType === "Numerical"
      ? a.id.localeCompare(b.id)
      : a.title.localeCompare(b.title)
  );

  return (
    <div className="grow bg-white relative z-10 py-4 mt-2 rounded-t-2xl h-full overflow-y-auto scrollbar-hidden shadow-sm">
      {sortedData.map((ele, index) => (
        <ListItem
          key={ele.id}
          title={ele.title}
          id={ele.id}
          even={index % 2 === 0}
          addBookmark={addBookmark}
          removeBookmark={removeBookmark}
          isBookmark={isBookmark(Number(ele.id))}
        />
      ))}
    </div>
  );
};

export default ListView;

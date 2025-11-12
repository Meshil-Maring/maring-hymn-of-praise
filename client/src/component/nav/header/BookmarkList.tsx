import { useState } from "react";
import BookmarkIcon from "../../../assets/icons/star";

const BookmarkList = ({ id, title }: { id: string; title: string }) => {
  const [bookmark, setBookmark] = useState<boolean>(true);

  const bookmarkHandler = () => {
    setBookmark(!bookmark);
  };

  return (
    <div className="w-full flex flex-col gap-2 justify-center items-center">
      <div className="flex w-full gap-3 items-center">
        <p className="bg-yellow h-9 w-9 flex justify-center items-center rounded-full shrink-0 text-md font-bold text-black">
          {id}
        </p>

        <p className="text-active">{title}</p>

        <button onClick={bookmarkHandler} className="ml-auto">
          <BookmarkIcon
            fill={bookmark ? "black" : "transparent"}
            stroke="black"
          />
        </button>
      </div>
      <hr className="w-[80%] border-gray-300" />
    </div>
  );
};

export default BookmarkList;

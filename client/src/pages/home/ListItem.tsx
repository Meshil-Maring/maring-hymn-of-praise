import { useState } from "react";
import StarIcon from "../../assets/icons/star";
import { COLORS } from "../../constants/color";

type ListItemProps = {
  title: string;
  id: string | number;
  even: boolean;
  cb: Function;
  bookmark: boolean;
};

const ListItem = ({ title, id, even, cb, bookmark }: ListItemProps) => {
  const [bookmarkValue, setBookmarkValue] = useState(bookmark);
  type BookmarkHandlerProps = () => void;

  // handling bookmark
  const bookmarkHandler: BookmarkHandlerProps = () => {
    setBookmarkValue(!bookmarkValue);
    cb(id);
  };

  return (
    <li
      className="flex justify-between pr-4 py-2 z-0"
      style={{ backgroundColor: `${even ? COLORS.bgAlpha : "transparent"}` }}
    >
      <button className="flex  gap-4 items-center">
        <label className="bg-yellow py-1 rounded-r-md w-10 text-center">
          {id}
        </label>
        <p className="">{title}</p>
      </button>

      <button onClick={bookmarkHandler}>
        <StarIcon
          stroke={bookmark ? COLORS.primary : COLORS.active}
          fill={bookmark ? COLORS.primary : "none"}
        />
      </button>
    </li>
  );
};

export default ListItem;

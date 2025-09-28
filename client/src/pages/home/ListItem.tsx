import { useState } from "react";
import StarIcon from "../../assets/icons/star";
import { COLORS } from "../../constants/color";

type ListItemProps = {
  title: string;
  id: string | number;
  even: boolean;
  cb: Function;
};

const ListItem = ({ title, id, even, cb }: ListItemProps) => {
  const [bookmark, setBookmark] = useState(false);
  type BookmarkHandlerProps = () => void;

  // handling bookmark
  const bookmarkHandler: BookmarkHandlerProps = () => {
    setBookmark(!bookmark);
    cb(id);
  };

  return (
    <li
      className="flex justify-between pr-4 py-2"
      style={{ backgroundColor: `${even ? COLORS.bgAlpha : "transparent"}` }}
    >
      <button className="flex  gap-4 items-center">
        <label className="bg-yellow px-3 py-1 rounded-r-md">{id}</label>
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

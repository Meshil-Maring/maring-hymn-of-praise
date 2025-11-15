import { useNavigate } from "react-router-dom";

import StarIcon from "../../assets/icons/star";
import { COLORS } from "../../constants/color";

type ListItemProps = {
  title: string;
  id: string | number;
  even: boolean;
  addBookmark: any;
  removeBookmark: any;
  isBookmark: any;
};

const ListItem = ({
  title,
  id,
  even,
  addBookmark,
  removeBookmark,
  isBookmark,
}: ListItemProps) => {
  const navigate = useNavigate();

  return (
    <li
      className="flex justify-between pr-4 py-2 z-0"
      style={{
        backgroundColor: `${even ? COLORS.bgAlpha : "transparent"}`,
      }}
    >
      <button
        onClick={() => navigate(`/song/${id}`)}
        className="flex  gap-4 items-center grow"
      >
        <label className="bg-yellow py-1 rounded-r-md w-10 text-center flex-none">
          {id}
        </label>
        <p className="text-start grow">{title}</p>
      </button>

      <button
        onClick={() =>
          isBookmark ? removeBookmark(String(id)) : addBookmark(id, title)
        }
      >
        <StarIcon fill={isBookmark ? "black" : "transparent"} />
      </button>
    </li>
  );
};

export default ListItem;

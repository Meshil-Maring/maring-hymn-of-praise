import BookmarkIcon from "../../../assets/icons/star";
import { useNavigate } from "react-router-dom";

const BookmarkList = ({
  id,
  title,
  removeBookmark,
}: {
  id: string;
  title: string;
  removeBookmark: Function;
}) => {
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col gap-2 justify-center items-center">
      <div className="flex w-full gap-3 items-center">
        <button
          onClick={() => navigate(`/song/${id}`)}
          className="flex gap-3 items-center w-full"
        >
          <p className="bg-yellow h-9 w-9 flex justify-center items-center rounded-full shrink-0 text-md font-bold text-black">
            {id}
          </p>

          <p className="text-active">{title}</p>
        </button>

        <button onClick={() => removeBookmark(String(id))} className="ml-auto">
          <BookmarkIcon fill="black" stroke="black" />
        </button>
      </div>
      <hr className="w-[80%] border-gray-300" />
    </div>
  );
};

export default BookmarkList;

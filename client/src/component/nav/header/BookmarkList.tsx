import BookmarkIcon from "../../../assets/icons/star";

const BookmarkList = ({
  id,
  title,
  removeBookmark,
}: {
  id: string;
  title: string;
  removeBookmark: Function;
}) => {
  return (
    <div className="w-full flex flex-col gap-2 justify-center items-center">
      <div className="flex w-full gap-3 items-center">
        <p className="bg-yellow h-9 w-9 flex justify-center items-center rounded-full shrink-0 text-md font-bold text-black">
          {id}
        </p>

        <p className="text-active">{title}</p>

        <button onClick={() => removeBookmark(String(id))} className="ml-auto">
          <BookmarkIcon fill="black" stroke="black" />
        </button>
      </div>
      <hr className="w-[80%] border-gray-300" />
    </div>
  );
};

export default BookmarkList;

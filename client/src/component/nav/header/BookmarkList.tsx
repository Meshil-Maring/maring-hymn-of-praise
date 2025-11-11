import BookmarkIcon from "../../../assets/icons/star";

const BookmarkList = () => {
  return (
    <button className="w-full flex flex-col gap-2 justify-center items-center">
      <div className="flex w-full gap-3 items-center">
        <p className="bg-yellow h-9 w-9 flex justify-center items-center rounded-full shrink-0 text-md font-bold text-black">
          23
        </p>

        <p className="text-active">Hello</p>

        <span className="ml-auto">
          <BookmarkIcon fill="black" stroke="black" />
        </span>
      </div>
      <hr className="w-[80%] border-gray-300" />
    </button>
  );
};

export default BookmarkList;

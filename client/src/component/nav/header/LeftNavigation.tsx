const LeftNavigation = ({ navigateHandler }: any) => {
  const clickHandler = () => {
    console.log("Hello");
  };

  return (
    <div
      onClick={navigateHandler}
      className="w-full absolute z-80 h-full top-0 left-0 bg-[#fffa]"
    >
      <div
        className="w-3/4 bg-bg-white2 h-full p-2 flex gap-2 flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={clickHandler}
          className="text-white p-3 text-center bg-blue-950 w-full"
        >
          My Bookmark
        </button>

        <button
          onClick={clickHandler}
          className="text-white p-3 text-center bg-blue-950 w-full"
        >
          My Contribute
        </button>

        <button
          onClick={clickHandler}
          className="text-white p-3 text-center bg-blue-950 w-full"
        >
          Contact us
        </button>

        <button
          onClick={clickHandler}
          className="text-white p-3 text-center bg-blue-950 w-full"
        >
          About us
        </button>

        <button
          onClick={clickHandler}
          className="text-white p-3 text-center bg-blue-950 w-full"
        >
          Setting
        </button>
      </div>
    </div>
  );
};

export default LeftNavigation;

const SearchList = ({ items }) => {
  return (
    <button
      onClick={() => navigateToSong(items.id)}
      className="w-full flex flex-col gap-2 justify-center items-center"
      key={index}
    >
      <div className="flex w-full gap-3 items-center">
        <p className="bg-yellow h-9 w-9 flex justify-center items-center rounded-full shrink-0 text-md font-bold">
          {items.id}
        </p>
        <p
          dangerouslySetInnerHTML={{
            __html: highlightMatch(items.title),
          }}
        ></p>
        <span className="ml-auto">
          <SearchIcon />
        </span>
      </div>
      <hr className="w-[80%] border-gray-300" />
    </button>
  );
};

export default SearchList;

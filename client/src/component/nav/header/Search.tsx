import { useState, useRef, useEffect } from "react";

import CloseIcon from "../../../assets/icons/close";
import ChangeToAIcon from "../../../assets/icons/changeToA";
import ChangeToNIcon from "../../../assets/icons/changeToN";
import HistoryIcon from "../../../assets/icons/history";

const Search = ({ searchClickHandler }: any) => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [inputType, setInputType] = useState<string>("text");
  const inputRef = useRef<HTMLInputElement>(null);

  // handling search input
  function searchHandler(event: string) {
    setSearchInput(event.target.value);
  }

  // focus input
  useEffect(() => {
    inputRef.current?.focus();
  }, [inputType]);

  // change input type
  function inputTypeHandler() {
    if (inputType === "text") setInputType("number");
    else setInputType("text");

    setSearchInput("");
  }

  //   clear the text
  function clearInputHandler() {
    setSearchInput("");
  }

  //  search result render
  const searchResult = () => (
    <ul className="mt-4 flex flex-col justify-between items-center gap-2">
      <li className="w-ful flex items-center w-full">
        <p className="mr-6 font-bold bg-yellow text-sm shadow w-9 h-9 rounded-full flex items-center justify-center">
          461
        </p>
        <p className="">PRAISE OUR CREATOR</p>
        <span className="ml-auto mr-2">
          <HistoryIcon size={24} />
        </span>
      </li>
      <hr className="w-[80%] border-gray-300"></hr>
    </ul>
  );

  return (
    <div className="absolute h-full w-full bg-bg-light z-20 top-0 right-0 px-6 py-5">
      <div className="flex flex-grow gap-2 h-10">
        {searchInput.length ? (
          <button
            className="bg-white rounded-full p-2 justify-center items-center shadow"
            onClick={searchClickHandler}
          >
            <CloseIcon />
          </button>
        ) : (
          ""
        )}

        <div className="flex w-full items-center pl-2 rounded-full bg-white gap-2 shadow">
          <button
            onClick={inputTypeHandler}
            className="bg-active text-white rounded-full px-2 py-1 flex justify-center items-center gap-1"
          >
            {inputType === "text" ? (
              <>
                <label>Alph</label>
                <ChangeToNIcon fill="white" size={16} />
              </>
            ) : (
              <>
                <label>Num</label>
                <ChangeToAIcon fill="white" size={16} />
              </>
            )}
          </button>

          <input
            className="w-full mr-2 border-none focus:outline-none pr-2"
            max={inputType == "number" ? 461 : undefined}
            min={inputType == "number" ? 0 : undefined}
            ref={inputRef}
            onChange={searchHandler}
            value={searchInput}
            name="search"
            placeholder="Search..."
            type={inputType}
          />

          {searchInput.length ? (
            <button onClick={clearInputHandler} className="pr-3">
              Clear
            </button>
          ) : (
            ""
          )}
        </div>

        {!searchInput.length && (
          <button
            className="bg-white rounded-full p-2 justify-center items-center shadow"
            onClick={searchClickHandler}
          >
            <CloseIcon />
          </button>
        )}
      </div>

      {searchResult()}
    </div>
  );
};

export default Search;

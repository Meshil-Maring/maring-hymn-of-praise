import { useState, useRef, useEffect } from "react";

import CloseIcon from "../../../assets/icons/close";
import ChangeToAIcon from "../../../assets/icons/changeToA";
import ChangeToNIcon from "../../../assets/icons/changeToN";

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

  return (
    <div className="absolute h-full w-full bg-bg-light z-20 top-0 right-0 px-6 py-5">
      <div className="flex flex-grow gap-2 h-9">
        {searchInput.length ? (
          <button
            className="bg-white rounded-full h-9 w-11 flex justify-center items-center shadow"
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
            className="bg-active text-white rounded-full px-2 flex justify-center items-center gap-1"
          >
            {inputType === "text" ? (
              <>
                <label>Alpha</label>
                <ChangeToNIcon fill="white" size={16} />
              </>
            ) : (
              <>
                <label>Numb</label>
                <ChangeToAIcon fill="white" size={16} />
              </>
            )}
          </button>

          <input
            className="w-full mr-2 border-none focus:outline-none pr-2"
            ref={inputRef}
            onChange={searchHandler}
            value={searchInput}
            name="search"
            placeholder="Search..."
            type={inputType}
          ></input>

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
            className="bg-white rounded-full h-9 w-11 flex justify-center items-center shadow"
            onClick={searchClickHandler}
          >
            <CloseIcon />
          </button>
        )}
      </div>
    </div>
  );
};

export default Search;

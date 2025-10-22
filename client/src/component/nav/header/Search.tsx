import { useState, useRef, useEffect, useMemo } from "react";

import CloseIcon from "../../../assets/icons/close";
import ChangeToAIcon from "../../../assets/icons/changeToA";
import ChangeToNIcon from "../../../assets/icons/changeToN";
import SearchIcon from "../../../assets/icons/search";

const Search = ({ searchClickHandler }: any) => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [inputType, setInputType] = useState<string>("text");
  const [searchHistory, setSearchHistory] = useState<string>();
  const [indexData, setIndexData] = useState<{ id: string; title: string }[]>(
    []
  );
  const inputRef = useRef<HTMLInputElement>(null);

  // --- Fetch index data only once ---
  useEffect(() => {
    fetch("/index.json")
      .then((res) => res.json())
      .then((data) => setIndexData(data))
      .catch((err) => console.error(err));

    // TODO: Fix this real search history
    if (1 == 1) return;
    setSearchHistory("1");
  }, []);

  // --- Focus input when input type changes ---
  useEffect(() => {
    inputRef.current?.focus();
  }, [inputType]);

  // --- Debounced search input ---
  const [debouncedInput, setDebouncedInput] = useState(searchInput);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedInput(searchInput);
    }, 200); // 200ms debounce delay
    return () => clearTimeout(timer);
  }, [searchInput]);

  // --- Handle input change ---
  function searchHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchInput(e.target.value);
  }

  // --- Filter results using memoization ---
  const searchFound = useMemo(() => {
    if (!debouncedInput.trim() || !indexData.length) return [];

    const inputValue = debouncedInput.toLowerCase();
    if (inputType === "text") {
      return indexData.filter(
        (data) =>
          data.title.toLowerCase().includes(inputValue) ||
          data.id.includes(inputValue)
      );
    } else {
      return indexData.filter((data) => data.id.includes(inputValue));
    }
  }, [debouncedInput, inputType, indexData]);

  // --- Change input type ---
  function inputTypeHandler() {
    setInputType((prev) => (prev === "text" ? "number" : "text"));
    setSearchInput("");
  }

  // --- Clear input ---
  function clearInputHandler() {
    setSearchInput("");
  }

  // --- Highlight matched text (memoized) ---
  const highlightMatch = useMemo(() => {
    return (text: string) => {
      if (!debouncedInput) return text;
      const regex = new RegExp(`(${debouncedInput})`, "gi");
      return text.replace(
        regex,
        '<span class="bg-yellow-200 text-black font-semibold">$1</span>'
      );
    };
  }, [debouncedInput]);

  // --- Render search results ---
  const searchResult = () => {
    return !searchHistory ? (
      <ul className="mt-4 flex flex-col between items-center gap-2 overflow-y-auto scrollbar-hidden">
        {searchFound.map((items, index) => (
          <li
            className="w-full flex flex-col gap-2 justify-center items-center"
            key={index}
          >
            <a className="flex w-full gap-3 items-center">
              <p className="bg-yellow h-9 w-9 flex justify-center items-center rounded-full flex-shrink-0 text-md font-bold">
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
            </a>
            <hr className="w-[80%] border-gray-300" />
          </li>
        ))}
      </ul>
    ) : (
      <p className="mt-8 flex flex-col justify-between items-center gap-2"></p>
    );
  };

  return (
    <div className="absolute h-[100vh] w-full bg-bg-light z-20 top-0 right-0 px-4 py-5 flex flex-col">
      <div className="flex gap-2 h-10">
        {searchInput.length ? (
          <button
            className="bg-white rounded-full p-2 justify-center items-center shadow"
            onClick={searchClickHandler}
          >
            <CloseIcon />
          </button>
        ) : null}

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
            max={inputType === "number" ? 461 : undefined}
            min={inputType === "number" ? 0 : undefined}
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
          ) : null}
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

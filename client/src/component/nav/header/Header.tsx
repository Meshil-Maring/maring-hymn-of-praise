import { useState, useRef, useEffect } from "react";

import MenuIcon from "../../../assets/icons/menu";
import SearchIcon from "../../../assets/icons/search";
import StarIcon from "../../../assets/icons/star";
import CloseIcon from "../../../assets/icons/close";
import ChangeToAIcon from "../../../assets/icons/changeToA";
import ChangeToNIcon from "../../../assets/icons/changeToN";

import { COLORS } from "../../../constants/color";

const Header = () => {
  const [searchActive, setSearchActive] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>("");
  const [inputType, setInputType] = useState<string>("text");
  const inputRef = useRef<HTMLInputElement>(null);

  const searchClickHandler = () => {
    setSearchActive(!searchActive);
  };

  // handling search input
  function searchHandler(event: string) {
    setSearchInput(event.target.value);
  }

  // change input type
  function inputTypeHandler() {
    if (inputType === "text") setInputType("number");
    else setInputType("text");

    setSearchInput("");
  }

  // focus input when user click search
  useEffect(() => {
    inputRef.current?.focus();
  }, [searchActive, inputType]);

  return (
    <>
      <header className="flex h-18 gap-1 items-center justify-between px-2">
        <MenuIcon fill={COLORS.primary} stroke={COLORS.primary} size={24} />

        {!searchActive ? (
          <div className="flex flex-grow justify-between items-center px-4">
            <h1 className="text-lg font-bold text-center w-full">
              DUNPUYA MATHANGNA LAA
            </h1>

            <button className="ml-auto" onClick={searchClickHandler}>
              <SearchIcon stroke={COLORS.primary} />
            </button>
          </div>
        ) : (
          <div className="flex flex-grow gap-2 h-9 pl-2">
            <div className="flex w-full items-center pl-2 rounded-full bg-white gap-2">
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
                ref={inputRef}
                onChange={searchHandler}
                value={searchInput}
                name="search"
                className="w-full mr-2 border-none focus:outline-none"
                placeholder="Search..."
                type={inputType}
              ></input>
            </div>

            <button
              className="bg-white rounded-full h-9 w-11 flex justify-center items-center"
              onClick={searchClickHandler}
            >
              <CloseIcon />
            </button>
          </div>
        )}

        <StarIcon fill={COLORS.primary} stroke={COLORS.primary} />
      </header>
    </>
  );
};

export default Header;

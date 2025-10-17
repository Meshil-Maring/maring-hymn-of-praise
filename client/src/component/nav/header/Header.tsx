import { useState } from "react";

import MenuIcon from "../../../assets/icons/menu";
import SearchIcon from "../../../assets/icons/search";
import StarIcon from "../../../assets/icons/star";
import CloseIcon from "../../../assets/icons/close";

import { COLORS } from "../../../constants/color";

const Header = () => {
  const [searchActive, setSearchActive] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>("");

  const searchClickHandler = () => {
    setSearchActive(!searchActive);
  };

  function searchHandler(event: string) {
    setSearchInput(event.target.value);
  }

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
            <div className="flex w-full items-center pl-2 rounded-full bg-white">
              <SearchIcon stroke={COLORS.active} />
              <input
                onChange={searchHandler}
                className="w-full mr-2 border-none focus:outline-none"
                placeholder="Search..."
                type="text"
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

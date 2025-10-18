import { useState } from "react";

import MenuIcon from "../../../assets/icons/menu";
import SearchIcon from "../../../assets/icons/search";
import StarIcon from "../../../assets/icons/star";

import { COLORS } from "../../../constants/color";
import Search from "./Search";

const Header = () => {
  const [searchActive, setSearchActive] = useState<boolean>(false);

  const searchClickHandler = () => {
    setSearchActive(!searchActive);
    console.log("Hello");
  };

  return (
    <>
      <header className="flex h-18 items-center justify-between px-2 ">
        <MenuIcon fill={COLORS.primary} stroke={COLORS.primary} size={24} />
        {!searchActive ? (
          <div className="flex flex-grow justify-between items-center mr-2">
            <h1 className="text-md font-bold text-center w-full">
              DUNPUYA MATHANGNA LAA
            </h1>

            <button className="" onClick={searchClickHandler}>
              <SearchIcon stroke={COLORS.primary} />
            </button>
          </div>
        ) : (
          <Search searchClickHandler={searchClickHandler} />
        )}

        <StarIcon fill={COLORS.primary} stroke={COLORS.primary} />
      </header>
    </>
  );
};

export default Header;

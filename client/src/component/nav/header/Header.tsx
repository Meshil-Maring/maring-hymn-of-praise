import { useState } from "react";

import MenuIcon from "../../../assets/icons/menu";
import SearchIcon from "../../../assets/icons/search";
import StarIcon from "../../../assets/icons/star";
import { COLORS } from "../../../constants/color";

import Search from "./Search";
import Bookmark from "../../../pages/home/Bookmark";
import LeftNavigation from "../../../component/nav/header/LeftNavigation";

const Header = () => {
  const [searchActive, setSearchActive] = useState<boolean>(false);
  const [bookmarkActive, setBookmarkActive] = useState<boolean>(false);
  const [navigation, setNavigation] = useState<boolean>(false);

  const searchClickHandler = () => {
    setSearchActive(!searchActive);
  };

  const bookmarkHandler = () => {
    setBookmarkActive((prev) => !prev);
  };

  const openNavigate = () => {
    return setNavigation((prev) => !prev);
  };

  return (
    <>
      <header className="flex h-[72px] items-center justify-between px-2">
        <button onClick={openNavigate}>
          <MenuIcon fill={COLORS.primary} stroke={COLORS.primary} size={24} />
        </button>

        {navigation && <LeftNavigation navigateHandler={openNavigate} />}

        {!searchActive ? (
          <div className="flex grow justify-between items-center mr-2">
            <h1 className="text-base font-bold text-center w-full">
              DUNPUYA MATHANGNA LAA
            </h1>

            <button onClick={searchClickHandler}>
              <SearchIcon stroke={COLORS.primary} />
            </button>
          </div>
        ) : (
          <Search searchClickHandler={searchClickHandler} />
        )}

        <button onClick={bookmarkHandler}>
          <StarIcon fill={COLORS.primary} stroke={COLORS.primary} />
        </button>

        {bookmarkActive && <Bookmark bookmark={bookmarkHandler} />}
      </header>
    </>
  );
};

export default Header;

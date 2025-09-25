import MenuIcon from "../../assets/icons/menu";
import SearchIcon from "../../assets/icons/search";
import StarIcon from "../../assets/icons/star";

import { COLORS } from "../../constants/color";

const Header = () => {
  return (
    <>
      <header className="bg-white flex p-4 justify-between">
        <MenuIcon fill={COLORS.primary} stroke={COLORS.primary} size={24} />
        <h1 className="text-lg font-bold">DUNPUYA MATHANGNA LAA</h1>

        <div className="flex gap-4">
          <SearchIcon stroke={COLORS.primary} />
          <StarIcon fill={COLORS.primary} stroke={COLORS.primary} />
        </div>
      </header>
    </>
  );
};

export default Header;

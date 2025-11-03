import { useNavigate } from "react-router-dom";
import { useState } from "react";

import BackIcon from "../../assets/icons/back";
import MenuIcon from "../../assets/icons/menu_dot";

const Navigation = ({ id, title }: any) => {
  const navigate = useNavigate();
  const [openNav, setOpenNav] = useState<boolean>(false);

  const navigateHomeHandler = () => navigate("/");

  const openNavHandler = () => {
    setOpenNav(!openNav);
  };

  return (
    <nav className="flex w-full justify-between p-4 bg-bg-alpha shadow">
      <button onClick={navigateHomeHandler}>
        <BackIcon fill="black" />
      </button>

      <div className="flex gap-1 text-sm font-bold text-center mx-4">
        <p>{id}.</p>
        <h1>{title}</h1>
      </div>

      <button onClick={openNavHandler}>
        <MenuIcon fill="black" />
      </button>

      {openNav ? (
        <aside
          onClick={openNavHandler}
          className="absolute top-0 left-0 h-full w-full"
        >
          <menu className="action-menu flex flex-col items-start mt-14 bg-black gap-4 w-fit px-6 rounded-xl text-white py-6 ml-auto mr-4 z-20">
            <button type="button">Add Bookmark</button>
            <button type="button">Edit</button>
            <button type="button">Share</button>
            <button type="button">Report</button>
          </menu>
        </aside>
      ) : (
        <></>
      )}
    </nav>
  );
};

export default Navigation;

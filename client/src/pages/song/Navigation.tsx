import { useNavigate } from "react-router-dom";
import { useState } from "react";

import BackIcon from "../../assets/icons/back";
import MenuIcon from "../../assets/icons/menu_dot";

const Navigation = ({ id, title }: any) => {
  const navigate = useNavigate();
  const [openNav, setOpenNav] = useState<boolean>(false);
  const [bookmark, setBookmark] = useState<boolean>(false);

  const navigateHomeHandler = () => navigate("/");

  const toggleNavHandler = () => {
    setOpenNav((prev) => !prev);
  };

  const closeNavHandler = () => {
    setOpenNav(false);
  };

  // Navigatge to other page
  const navigatePage = (value: string) => {
    if (value === "edit") {
      navigate(`/song/${id}/edit`);
    } else if (value === "report") {
      navigate(`/song/${id}/report`);
    }
  };

  // Share to any platfrom handling
  const shareHandling = () => {
    console.log("hello");
  };

  return (
    <nav className="flex w-full justify-between p-4 bg-bg-alpha shadow relative">
      <button onClick={navigateHomeHandler}>
        <BackIcon fill="black" />
      </button>

      <div className="flex gap-1 text-sm font-bold text-center mx-4">
        <p>{id}.</p>
        <h1>{title}</h1>
      </div>

      <button onClick={toggleNavHandler}>
        <MenuIcon fill="black" />
      </button>

      {openNav && (
        <aside
          onClick={closeNavHandler}
          className="fixed top-0 left-0 h-full w-full bg-black/50 z-10"
        >
          <menu
            onClick={(e) => e.stopPropagation()}
            className="action-menu flex flex-col items-start mt-14 bg-active gap-4 w-fit px-6 rounded-xl text-white py-6 ml-auto mr-4 z-20 shadow-lg"
          >
            <button type="button" onClick={() => setBookmark(!bookmark)}>
              {!bookmark ? "Add " : "Remove"} Bookmark
            </button>

            <button type="button" onClick={() => navigatePage("edit")}>
              Edit
            </button>

            <button type="button" onClick={shareHandling}>
              Share
            </button>

            <button type="button" onClick={() => navigatePage("report")}>
              Report
            </button>
          </menu>
        </aside>
      )}
    </nav>
  );
};

export default Navigation;

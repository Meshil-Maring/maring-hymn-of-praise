import { useNavigate } from "react-router-dom";

import BackIcon from "../../assets/icons/back";
import MenuIcon from "../../assets/icons/menu_dot";

const Navigation = ({ id, title }: any) => {
  const navigate = useNavigate();

  const navigateHomeHandler = () => navigate("/");

  return (
    <nav className="flex w-full justify-between p-4 bg-bg-alpha shadow">
      <button onClick={navigateHomeHandler}>
        <BackIcon fill="black" />
      </button>

      <div className="flex gap-1 text-sm font-bold text-center mx-4">
        <p>{id}.</p>
        <h1>{title}</h1>
      </div>

      <MenuIcon fill="black" />
    </nav>
  );
};

export default Navigation;

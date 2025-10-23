import { useNavigate } from "react-router-dom";

import BackIcon from "../../assets/icons/back";
import EditIcon from "../../assets/icons/edit";
import StarIcon from "../../assets/icons/star";

const Navigation = () => {
  const navigate = useNavigate();

  const navigateHomeHandler = () => navigate("/");
  return (
    <nav className="flex w-full justify-between p-4 bg-amber-50">
      <button onClick={navigateHomeHandler}>
        <BackIcon fill="black" />
      </button>

      <div className="flex gap-1 font-bold">
        <p>001</p>
        <p> PRAISE OUR CREATOR</p>
      </div>

      <div className="flex gap-2 items-center">
        <StarIcon />
        <EditIcon fill="black" size={20} />
      </div>
    </nav>
  );
};

export default Navigation;

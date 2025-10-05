import BackIcon from "../../assets/icons/back";
import EditIcon from "../../assets/icons/edit";
import StarIcon from "../../assets/icons/star";

const Navigation = () => (
  <nav className="flex w-full justify-between p-4 bg-amber-50">
    <BackIcon fill="black" />

    <div className="flex gap-1 font-bold">
      <p>001</p>
      <p> PRAISE OUR CREATOR</p>
    </div>

    <div className="flex gap-1">
      <StarIcon />
      <EditIcon />
    </div>
  </nav>
);

export default Navigation;

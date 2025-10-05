import RightIcon from "../../assets/icons/right";
import LeftIcon from "../../assets/icons/left";

const PageNavigate = () => (
  <div className="flex gap-6 mx-auto items-center mb-2">
    <button className="bg-yellow p-2 rounded-full">
      <LeftIcon />
    </button>

    <div className="flex items-center w-full">
      <p className="bg-bg-light px-4 text-blue-300 py-1 text-center rounded-l-lg">
        1
      </p>
      <p className="bg-active text-white flex w-10 h-10 justify-center items-center rounded-lg text-2xl font-bold">
        2
      </p>
      <p className="bg-bg-light px-4 text-blue-300 py-1 text-center rounded-r-lg">
        3
      </p>
    </div>

    <button className="bg-yellow p-2 rounded-full">
      <RightIcon size={24} />
    </button>
  </div>
);

export default PageNavigate;

import { useState } from "react";
import RightIcon from "../../assets/icons/right";
import LeftIcon from "../../assets/icons/left";

const PageNavigate = () => {
  const [index, setIndex] = useState<number>(1);

  //   Handling next and previous button
  const clickHandler = (value: string) => {
    if (value === "next" && index < 461) {
      setIndex(index + 1);
    } else if (value === "prev" && index > 1) {
      setIndex(index - 1);
    }
  };

  return (
    <div className="flex gap-6 mx-auto items-center mb-2">
      <button
        onClick={() => clickHandler("prev")}
        className="bg-yellow p-2 rounded-full"
      >
        <LeftIcon />
      </button>

      <div className="flex items-center w-full">
        <p
          className={`${
            index == 1
              ? "bg-transparent text-transparent"
              : "bg-bg-light text-blue-300"
          }  px-4  py-1 text-center rounded-l-lg`}
        >
          {index - 1}
        </p>

        <p className="bg-active text-white flex w-10 h-10 justify-center items-center rounded-lg text-xl font-medium">
          {index}
        </p>

        <p
          className={`${
            index == 461
              ? "bg-transparent text-transparent"
              : "bg-bg-light text-blue-300"
          }  px-4  py-1 text-center rounded-r-lg`}
        >
          {index + 1}
        </p>
      </div>

      <button
        onClick={() => clickHandler("next")}
        className="bg-yellow p-2 rounded-full"
      >
        <RightIcon size={24} />
      </button>
    </div>
  );
};

export default PageNavigate;

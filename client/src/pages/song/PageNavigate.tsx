import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import RightIcon from "../../assets/icons/right";
import LeftIcon from "../../assets/icons/left";

const PageNavigate = () => {
  const [index, setIndex] = useState<number>();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    setIndex(Number(id));
  }, [id]);

  //   Handling next and previous button
  const clickHandler = (value: string) => {
    if (index === undefined || "") return;

    if (value === "next" && index < 461) {
      setIndex(index + 1);
      navigate(`/song/${index + 1}`);
    } else if (value === "prev" && index > 1) {
      setIndex(index - 1);
      navigate(`/song/${index - 1}`);
    }
  };

  return (
    <div className="flex gap-6 mx-auto items-center mb-2 mt-auto">
      <button
        onClick={() => clickHandler("prev")}
        className={`${
          index == 1
            ? "bg-transparent text-transparent"
            : "bg-yellow text-black"
        }  rounded-full p-2`}
      >
        <LeftIcon />
      </button>

      <div className="flex items-center w-full">
        <p
          className={`${
            index == 1
              ? "bg-transparent text-transparent"
              : "bg-bg-light text-blue-300"
          }  px-3  py-1 text-center rounded-l-lg`}
        >
          {index && index - 1}
        </p>

        <p className="bg-active text-white flex w-10 h-10 justify-center items-center rounded-lg text-lg font-medium">
          {index}
        </p>

        <p
          className={`${
            index == 461
              ? "bg-transparent text-transparent"
              : "bg-bg-light text-blue-300"
          }  px-3  py-1 text-center rounded-r-lg`}
        >
          {index && index + 1}
        </p>
      </div>

      <button
        onClick={() => clickHandler("next")}
        className={`${
          index == 461
            ? "bg-transprent text-transparent"
            : "bg-yellow text-black"
        }  rounded-full p-2`}
      >
        <RightIcon size={24} />
      </button>
    </div>
  );
};

export default PageNavigate;

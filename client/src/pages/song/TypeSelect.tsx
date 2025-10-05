import { useState } from "react";

const TypeSelect = () => {
  const [songActive, setSongActive] = useState<boolean>(true);

  const changeTypeHandler = (value: boolean) => {
    setSongActive(value);
  };

  return (
    <div className="flex rounded-lg m-auto bg-bg-alpha mt-2 justify-start w-fit shadow-inner">
      <button
        className={`${
          songActive ? "rounded-l-lg bg-active text-white m-[2px]" : ""
        }  px-6 py-1`}
        onClick={() => changeTypeHandler(true)}
      >
        Song
      </button>

      <button
        className={`${
          songActive ? "" : "rounded-r-lg bg-active text-white m-[2px]"
        } px-6 py-1`}
        onClick={() => changeTypeHandler(false)}
      >
        Tune
      </button>
    </div>
  );
};

export default TypeSelect;

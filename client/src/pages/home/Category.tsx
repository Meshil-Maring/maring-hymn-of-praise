import { useEffect, useState } from "react";
import CategoryList from "./CategoryList";
import DropIcon from "../../assets/icons/drop";
import DropDown from "./DropDown";

const list = {
  number: "Numerical",
  alphabet: "Alphabetical",
};

interface CategoryProps {
  activeHandler: (params: { id: string | number }) => void;
}

const Category = ({ activeHandler }: CategoryProps) => {
  const [active, setActive] = useState("Numerical");
  const [topical, setTopical] = useState();

  useEffect(() => {
    fetch("/topical_index.json")
      .then((res) => res.json())
      .then((data) => setTopical(data));
  }, []);

  const clickHandler = ({ id }: { id: string | number }) => {
    setActive(String(id));

    activeHandler({ id: id });
  };

  // Drop down typical handler
  const dropHandler = () => {
    console.log("Hello");
  };

  return (
    <ul className="p-2 flex gap-3 w-full overflow-x-auto z-0">
      {Object.entries(list).map(([key, value]) => (
        <button key={key} onClick={() => clickHandler({ id: value })}>
          <CategoryList name={value} active={active === String(value)} />
        </button>
      ))}

      <button
        onClick={dropHandler}
        className="bg-white flex rounded-full p-1 h-8 px-5 pr-2 justify-between gap-1 relative z-10"
      >
        <li className="text-zinc-400">Topical Index</li>
        <DropIcon fill="#8888" />

        <aside className="bg-yellow w-[90%] left-0 top-8 absolute z-20 h-3 rounded-t-full"></aside>
      </button>
    </ul>
  );
};

export default Category;

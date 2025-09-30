import { useEffect, useState } from "react";
import CategoryList from "./CategoryList";
import DropIcon from "../../assets/icons/drop";

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

  const clickHandler = ({ id }: { id: string | number }) => {
    setActive(String(id));

    activeHandler({ id: id });
  };

  useEffect(() => {
    fetch("/topical_index.json")
      .then((res) => res.json())
      .then((data) => setTopical(data));
  }, []);

  return (
    <ul className="p-2 flex gap-3 w-full overflow-x-auto overflow-hidden">
      {Object.entries(list).map(([key, value]) => (
        <button key={key} onClick={() => clickHandler({ id: value })}>
          <CategoryList name={value} active={active === String(value)} />
        </button>
      ))}

      {/* <button
        // className={`${
        //   active ? "bg-active text-white" : "bg-white text-primary"
        // } p-1 rounded-full px-5 text-white"`}
      >
        Default
      </button> */}

      <button className="bg-white flex rounded-full p-1 h-8 px-5 pr-2 justify-between gap-1">
        <li className="text-zinc-800">Default</li>
        <DropIcon fill="#8888" />
      </button>
    </ul>
  );
};

export default Category;

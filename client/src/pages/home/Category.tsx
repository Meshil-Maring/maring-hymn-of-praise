import { useState } from "react";
import CategoryList from "./CategoryList";

const list = {
  number: "Numerical",
  alphabet: "Alphabetical",
  christmas: "Christmas",
};

interface CategoryProps {
  activeHandler: (params: { id: string | number }) => void;
}

const Category = ({ activeHandler }: CategoryProps) => {
  const [active, setActive] = useState("number");

  const clickHandler = ({ id }: { id: string | number }) => {
    setActive(String(id));

    activeHandler({ id: id });
  };

  return (
    <ul className="p-2 flex gap-3 w-full overflow-x-auto">
      {Object.entries(list).map(([key, value]) => (
        <li key={key}>
          <button onClick={() => clickHandler({ id: key })}>
            <CategoryList name={value} active={active === String(key)} />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Category;

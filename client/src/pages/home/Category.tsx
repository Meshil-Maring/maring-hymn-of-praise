import { useState } from "react";

const list = {
  number: "Numerical",
  alphabet: "Alphabetical",
};

interface CategoryProps {
  activeHandler: (params: { id: string | number }) => void;
}

const Category = ({ activeHandler }: CategoryProps) => {
  const [active, setActive] = useState<string>("Numerical");

  const clickHandler = (id: string) => {
    setActive(id);
    activeHandler({ id });
  };

  return (
    <div className="flex gap-4 p-4 bg-white shadow-sm z-10 relative">
      {Object.values(list).map((item) => (
        <button
          key={item}
          onClick={() => clickHandler(item)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            active === item
              ? "bg-yellow-400 text-black shadow-md"
              : "bg-gray-200 text-gray-600 hover:bg-gray-300"
          }`}
        >
          {item}
        </button>
      ))}

      <button>Topical Index</button>
    </div>
  );
};

export default Category;

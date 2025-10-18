import { useEffect, useState } from "react";

const list = {
  number: "Numerical",
  alphabet: "Alphabetical",
};

interface CategoryProps {
  activeHandler: (params: { id: string | number }) => void;
}

const Category = ({ activeHandler }: CategoryProps) => {
  const [active, setActive] = useState<string>("Numerical");
  const [topicalActive, setTopicalActive] = useState<boolean>(true);

  interface TopicalItem {
    category: string;
    // add other properties if needed
  }
  const [topicalData, setTopicalData] = useState<TopicalItem[]>();

  useEffect(() => {
    fetch("./topical_index.json")
      .then((res) => res.json())
      .then((data) => setTopicalData(data));
  }, []);

  const clickHandler = (id: string) => {
    setActive(id);
    activeHandler({ id });
  };

  const TopicalIndexHandler = () => {
    setTopicalActive(!topicalActive);
  };

  // Rendring the data
  // Rendering Order Fomate
  const RenderingOrderFormate = () => (
    <div className="flex gap-2 p-2 items-center">
      {Object.values(list).map((item) => (
        <button
          key={item}
          onClick={() => clickHandler(item)}
          className={`px-4 py-2 text-[12px]  rounded-full text-md font-medium transition-all duration-300 h-9 ${
            active === item
              ? "bg-active text-white shadow"
              : "bg-gray-200 text-gray-600 hover:bg-gray-300 shadow-"
          }`}
        >
          {item}
        </button>
      ))}

      <button
        onClick={TopicalIndexHandler}
        className="bg-gray-200 text-[12px] rounded-full h-9 px-4 py-2 text-nowrap"
      >
        Topical Index
      </button>
    </div>
  );

  // Rendering Topical Index
  const RenderingTopicalIndex = () => (
    <div className="flex bg-alpha py-1 m-1 w-full justify-start gap-2 rounded-full shadow-inner text-[12px]">
      <button
        onClick={TopicalIndexHandler}
        className="bg-active text-white rounded-full py-1 px-2 flex-nowrap whitespace-nowrap"
      >
        Topical Index
      </button>

      <div className="w-full max-w-full overflow-x-auto scrollbar-hidden rounded-r-full">
        <ul className="flex gap-2 min-w-max p-2 cursor-pointer">
          {topicalData?.map((item, key: number) => (
            <li
              className="px-2 bg-gray-200 rounded-full py-1 text-[12px]"
              key={key}
            >
              {item.category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div className="flex gap-4 bg-white shadow-sm z-10 relative overflow-x-auto scrollbar-hidden h-18">
      {topicalActive ? <RenderingOrderFormate /> : <RenderingTopicalIndex />}
    </div>
  );
};

export default Category;

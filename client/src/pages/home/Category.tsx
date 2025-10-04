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
  const [topicalActive, setTopicalActive] = useState<boolean>(false);
  const [topicalData, setTopicalData] = useState<string[]>();

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

  return (
    <div className="flex gap-4 p-4 bg-white shadow-sm z-10 relative">
      {topicalActive ? (
        <div className="flex gap-2">
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

          <button
            onClick={TopicalIndexHandler}
            className="bg-amber-100 rounded-full h-full px-4 py-2"
          >
            Topical Index
          </button>
        </div>
      ) : (
        <div className="flex items-center bg-alpha  w-full justify-start gap-2 rounded-full shadow-inner">
          <button
            onClick={TopicalIndexHandler}
            className="bg-amber-100 rounded-full h-full px-4 py-1 flex-nowrap whitespace-nowrap"
          >
            Topical Index
          </button>

          <div className="w-full max-w-full overflow-x-auto rounded-full scrollbar-hidden">
            <ul className="flex gap-2 min-w-max p-2">
              {topicalData?.map((ele: string, key: number) => (
                <li className="bg-yellow px-2 rounded-full py-1" key={key}>
                  {ele.category}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Category;

import { useEffect, useState } from "react";
import CategoryList from "./CategoryList";
import DownIcon from "../../assets/icons/drop";
import UpIcon from "../../assets/icons/up";

const list = {
  number: "Numerical",
  alphabet: "Alphabetical",
};

interface CategoryProps {
  activeHandler: (params: { id: string | number }) => void;
}

const Category = ({ activeHandler }: CategoryProps) => {
  const [active, setActive] = useState("Numerical");
  const [topicalDisplay, setTopicalDisplay] = useState<boolean>(false);
  const [topical, setTopical] = useState<Array<{ category: string }>>([]);

  // Fetching the data from Topical Index
  useEffect(() => {
    fetch("/topical_index.json")
      .then((res) => res.json())
      .then((data) => setTopical(data));
  }, []);

  const clickHandler = ({ id }: { id: string | number }) => {
    setActive(String(id));

    activeHandler({ id: id });
  };

  //  typical index handler
  const displayTopicalHandler = () => {
    setTopicalDisplay(!topicalDisplay);
  };

  //topicalDisplayRender is for render the topic list
  const topicalDisplayRender = () => {
    if (topicalDisplay && Array.isArray(topical)) {
      return (
        <div className="flex absolute w-full justify-center backdrop-blur-2xl">
          <ul className="p-4 w-[70vw] h-[80vh] overflow-y-auto rounded-2xl scrollbar-hidden bg-active top-0">
            {topical.map((ele: { category: string }, key: number) => (
              <li
                className="py-2 text-yellow-50 border-b-1 border-yellow-950"
                key={key}
              >
                {ele.category}
              </li>
            ))}
          </ul>
        </div>
      );
    } else {
      return;
    }
  };

  return (
    <div className="relative z-30">
      <ul className="p-2 flex gap-3 w-full overflow-x-auto z-0 scrollbar-hidden">
        {Object.entries(list).map(([key, value]) => (
          <button key={key} onClick={() => clickHandler({ id: value })}>
            <CategoryList name={value} active={active === String(value)} />
          </button>
        ))}

        <button
          onClick={displayTopicalHandler}
          className="bg-amber-100 flex rounded-full p-1 h-8 pl-3 pr-1 justify-between gap-1 relative z-10 flex-nowrap"
        >
          <li className="text-zinc-800 whitespace-nowrap">Topical Index</li>
          {topicalDisplay ? <UpIcon fill="#8888" /> : <DownIcon fill="#8888" />}
        </button>
      </ul>

      {topicalDisplayRender()}
    </div>
  );
};

export default Category;

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
        <ul className="p-4">
          {topical.map((ele: { category: string }, key: number) => (
            <li key={key}>{ele.category}</li>
          ))}
        </ul>
      );
    } else {
      return;
    }
  };

  return (
    <>
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
    </>
  );
};

export default Category;

import PlusIcon from "../assets/icons/plus";
import MinusIcon from "../assets/icons/minus";

const ZoomButton = () => {
  return (
    <div className="fixed right-2 bg-black/20 flex flex-col gap-1 justify-center items-center rounded-full p-1 py-1.5 top-3/8">
      <button className="bg-white rounded-full">
        <PlusIcon size={28} />
      </button>

      <div className="w-8 mx-auto relative">
        <ul className="scrollbar-hidden overflow-y-scroll snap-y snap-mandatory text-center text-md text-black/20 flex flex-col">
          <li className="snap-center text-[13px]">39</li>
          <li className="snap-center font-bold text-active">38</li>
          <li className="snap-center text-[13px]">37</li>
        </ul>
      </div>

      <button className="bg-white rounded-full">
        <MinusIcon size={28} />
      </button>
    </div>
  );
};

export default ZoomButton;

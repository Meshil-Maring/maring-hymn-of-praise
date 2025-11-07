import { useEffect, useState } from "react";
import PlusIcon from "../assets/icons/plus";
import MinusIcon from "../assets/icons/minus";

interface ZoomButtonProps {
  fontSize: number;
  onFontSizeChange: (newSize: number) => void;
}

const ZoomButton: React.FC<ZoomButtonProps> = ({
  fontSize,
  onFontSizeChange,
}) => {
  const [size, setSize] = useState(fontSize);

  useEffect(() => {
    localStorage.setItem("fontSize", String(size));
    onFontSizeChange(size);
  }, [size, onFontSizeChange]);

  const increaseSize = () => setSize((prev) => Math.min(prev + 1, 24));
  const decreaseSize = () => setSize((prev) => Math.max(prev - 1, 8));

  return (
    <div className="fixed right-2 top-1/3 bg-black/20 flex flex-col gap-1 justify-center items-center rounded-full p-1 py-1.5">
      <button onClick={increaseSize} className="bg-white rounded-full">
        <PlusIcon size={28} />
      </button>

      <div className="w-8 mx-auto relative">
        <ul className="scrollbar-hidden overflow-y-scroll snap-y snap-mandatory text-center text-md text-black/20 flex flex-col justify-center items-center">
          <li className={size === 24 ? "text-transparent" : "snap-center"}>
            {size + 1}
          </li>
          <li className="snap-center font-bold text-active">{size}</li>
          <li className={size === 8 ? "text-transparent" : "snap-center"}>
            {size - 1}
          </li>
        </ul>
      </div>

      <button onClick={decreaseSize} className="bg-white rounded-full">
        <MinusIcon size={28} />
      </button>
    </div>
  );
};

export default ZoomButton;

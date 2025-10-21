import { createPortal } from "react-dom";

const Dropdown = () => {
  return createPortal(
    <aside className="absolute left-4 top-4 z-50 bg-yellow w-20 h-2 rounded-t-full cursor-pointer">
      Dropdown content
    </aside>,
    document.body
  );
};

export default Dropdown;

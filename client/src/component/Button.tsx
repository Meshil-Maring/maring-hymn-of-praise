import DownloadIcon from "../assets/animation_icons/download";

const Button = () => (
  <button className="text-sm bg-active text-white w-fit  px-4 rounded-full py-2 absolute flex gap-2 justify-center items-center cursor-pointer bottom-10 z-20 right-10">
    <DownloadIcon width={24} height={24} />
    Install App
  </button>
);
export default Button;

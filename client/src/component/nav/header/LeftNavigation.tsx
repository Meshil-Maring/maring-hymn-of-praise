import Button from "./Button";

const LeftNavigation = ({ navigateHandler }: any) => {
  // const clickHandler = () => {
  //   console.log("Hello");
  // };

  return (
    <div
      onClick={navigateHandler}
      className="w-full absolute z-80 h-full top-0 left-0 bg-[#fffa]"
    >
      <div
        className="w-3/4 bg-bg-white2 h-full p-2 flex gap-2 flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <Button title={"Log in "} url="/signup" />
      </div>
    </div>
  );
};

export default LeftNavigation;

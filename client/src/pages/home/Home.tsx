import { useState } from "react";

import Header from "../../component/nav/header/Header";
import Category from "./Category";
import ListView from "./ListView";
import InstallPWA from "../../component/InstallButton";
import Button from "../../component/Button";

const Home = () => {
  const [listType, setListType] = useState<string>("Numerical");

  const activeHandler = ({ id }: { id: string | number }) => {
    setListType(String(id));
  };

  return (
    <div className="bg-bg-light h-screen flex flex-col relative">
      <Button />
      <Header />
      <InstallPWA />
      <Category activeHandler={activeHandler} />
      <ListView listType={listType} />
    </div>
  );
};

export default Home;

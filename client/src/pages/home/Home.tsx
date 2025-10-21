import { useState } from "react";

import Header from "../../component/nav/header/Header";
import Category from "./Category";
import ListView from "./ListView";

const Home = () => {
  const [listType, setListType] = useState<string>("Numerical");

  const activeHandler = ({ id }: { id: string | number }) => {
    setListType(String(id));
  };

  return (
    <div className="bg-bg-light h-[100vh] flex flex-col relative">
      <Header />
      <Category activeHandler={activeHandler} />
      <ListView listType={listType} />
    </div>
  );
};

export default Home;

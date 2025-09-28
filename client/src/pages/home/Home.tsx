import Header from "../../component/nav/header/Header";
import Category from "./Category";
import ListView from "./ListView";

const activeHandler = ({ id }: { id: String | Number }) => {
  console.log(String(id));
};

const Home = () => {
  return (
    <div className="bg-bg-light h-[100vh] flex flex-col">
      <Header />
      <Category activeHandler={activeHandler} />
      <ListView />
    </div>
  );
};

export default Home;

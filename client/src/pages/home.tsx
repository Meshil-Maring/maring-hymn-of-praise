import Header from "../component/nav/header/Header";
import Category from "../component/nav/header/Category";

const activeHandler = ({ id }: { id: String | Number }) => {
  console.log(String(id));
};

const Home = () => {
  return (
    <div className="bg-bg-light">
      <Header />
      <Category activeHandler={activeHandler} />
    </div>
  );
};

export default Home;

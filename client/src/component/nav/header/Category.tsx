import CategoryList from "./CategoryList";

const list = ["Numerical", "Alphabetical", "Christmas"];

const Category = () => {
  return (
    <ul className={`p-2 flex scroll-auto gap-3`}>
      {list.map((ele) => (
        <CategoryList key={ele} active={ele === "Numerical"} name={ele} />
      ))}
    </ul>
  );
};

export default Category;

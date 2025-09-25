type CategoryListProps = {
  active?: boolean;
  name: string;
};

const CategoryList = ({ active = false, name }: CategoryListProps) => {
  return (
    <li
      className={`${
        active ? "bg-active text-white" : "bg-white text-primary"
      } p-1 rounded-full px-5 text-white"`}
    >
      {name}
    </li>
  );
};

export default CategoryList;

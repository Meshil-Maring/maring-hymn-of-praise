const Button = ({ title }: { title: string }) => {
  return (
    <button className="text-white p-3 text-center bg-blue-950 w-full">
      {title}
    </button>
  );
};

export default Button;

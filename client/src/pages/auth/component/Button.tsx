const Button = ({ title, valid }: { title: string; valid: boolean }) => {
  return (
    <button
      className={` p-2 mt-8 ${
        valid ? "bg-blue-800 text-white" : "bg-blue-400/10 text-black/40"
      } cursor-pointer`}
      disabled={!valid}
    >
      {title}
    </button>
  );
};

export default Button;

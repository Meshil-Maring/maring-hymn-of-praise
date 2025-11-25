import { useNavigate } from "react-router-dom";

const Button = ({ title, url }: { title: string; url: string }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`${url}`)}
      className="text-white p-3 text-center bg-blue-950 w-full"
    >
      {title}
    </button>
  );
};

export default Button;

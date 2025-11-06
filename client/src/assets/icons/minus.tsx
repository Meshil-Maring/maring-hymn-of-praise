const Icon = ({
  size = 24,
  fill = "none",
  stroke = "currentColor",
  strokeW = "1.5",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 24H38"
      stroke={stroke}
      strokeWidth={strokeW}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Icon;

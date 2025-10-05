const Icon = ({
  size = 24,
  fill = "none",
  stroke = "currentColor",
  strokeW = "1.5",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 6L18 12L8 18V6Z"
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeW}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Icon;

const Icon = ({
  size = 24,
  fill = "none",
  stroke = "currentColor",
  strokeW = "1.5",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 35 35"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.29169 10.2083H27.7084"
      stroke={stroke}
      strokeWidth={strokeW}
      strokeLinecap="round"
    />
    <path
      d="M7.29169 17.5H27.7084"
      stroke={stroke}
      strokeWidth={strokeW}
      strokeLinecap="round"
    />
    <path
      d="M7.29169 24.7917H27.7084"
      stroke={stroke}
      strokeWidth={strokeW}
      strokeLinecap="round"
    />
  </svg>
);

export default Icon;

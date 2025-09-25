const Icon = ({
  size = 24,
  fill = "none",
  stroke = "currentColor",
  strokeW = "1.5",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 25"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="11" cy="11.5" r="7" stroke={stroke} strokeWidth={strokeW} />
    <path
      d="M20 20.5L17 17.5"
      stroke={stroke}
      strokeWidth={strokeW}
      strokeLinecap="round"
    />
  </svg>
);

export default Icon;

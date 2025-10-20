const Icon = ({
  size = 24,
  fill = "none",
  stroke = "currentColor",
  strokeW = "1.5",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 23 20"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.625 12.25L10.25 11.125V6.42087M19.25 10C19.25 5.02944 15.2206 1 10.25 1C5.27944 1 1.25 5.02944 1.25 10C1.25 14.9706 5.27944 19 10.25 19C13.5813 19 16.4898 17.1901 18.046 14.5M16.7811 9.01234L19.0311 11.2623L21.2811 9.01234"
      stroke={stroke}
      strokeWidth={strokeW}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Icon;

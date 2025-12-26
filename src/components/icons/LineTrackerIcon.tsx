import type { SVGProps } from "react";
const LineTrackerIcon = ({
  stroke = "#18181B",
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 50 176"
    {...props}
  >
    <g stroke={stroke} strokeWidth={4}>
      <circle cx={25} cy={16} r={14} />
      <path d="M25 32v112" />
      <circle cx={25} cy={160} r={14} />
    </g>
  </svg>
);
export default LineTrackerIcon;

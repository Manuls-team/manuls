import type { SVGProps } from "react";

const VueIcon = ({ fill = "#41B883", ...props }: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 36.8363 32" fill="none" {...props}>
    <path
      d="M22.6716 31.9997L18.4181 24.6097L14.1647 31.9997H0L18.4181 0L36.8363 31.9997H22.6716Z"
      fill={fill}
    />
  </svg>
);

export default VueIcon;

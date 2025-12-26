import type { SVGProps } from "react";
const CheckmarkIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 48 35.794"
    {...props}
  >
    <defs>
      <linearGradient
        id="checkMarkGrad"
        x1={0}
        x2={32.516}
        y1={35.797}
        y2={11.847}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="var(--color-accent)" />
        <stop offset={1} stopColor="var(--color-accent-light)" />
      </linearGradient>
    </defs>
    <path
      fill="url(#checkMarkGrad)"
      d="m16.303 35.087-15.6-15.6a2.395 2.395 0 0 1 0-3.39l3.394-3.39a2.395 2.395 0 0 1 3.394 0L18 23.207 40.509.707a2.395 2.395 0 0 1 3.394 0l3.394 3.39c.937.94.937 2.46 0 3.39l-27.6 27.6c-.937.94-2.457.94-3.394 0"
    />
  </svg>
);
export default CheckmarkIcon;

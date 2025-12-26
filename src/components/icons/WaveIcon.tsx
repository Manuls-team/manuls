import type { SVGProps } from "react";
const WaveIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 48 42"
    {...props}
  >
    <defs>
      <linearGradient
        id="waveGrad"
        x1={0}
        x2={35.98}
        y1={42}
        y2={19.42}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="var(--color-accent)" />
        <stop offset={1} stopColor="var(--color-accent-light)" />
      </linearGradient>
    </defs>
    <path
      fill="url(#waveGrad)"
      d="M6 3c0-1.66-1.34-3-3-3S0 1.34 0 3v31.5C0 38.64 3.36 42 7.5 42H45c1.66 0 3-1.34 3-3s-1.34-3-3-3H7.5c-.82 0-1.5-.67-1.5-1.5zm38.12 8.12a3.01 3.01 0 0 0 0-4.25 3.01 3.01 0 0 0-4.25 0L30 16.75l-5.38-5.38a3.01 3.01 0 0 0-4.25 0l-10.5 10.5a3.01 3.01 0 0 0 0 4.25 3.01 3.01 0 0 0 4.25 0l8.38-8.37 5.38 5.38a3.01 3.01 0 0 0 4.25 0l12-12z"
    />
  </svg>
);
export default WaveIcon;

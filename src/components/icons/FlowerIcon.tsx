import type { SVGProps } from "react";

const FlowerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 48 48"
    {...props}
  >
    <defs>
      <linearGradient
        id="flowerGrad"
        x1={0}
        x2={38.531}
        y1={48}
        y2={26.84}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="var(--color-accent)" />
        <stop offset={1} stopColor="var(--color-accent-light)" />
      </linearGradient>
    </defs>
    <path
      fill="url(#flowerGrad)"
      d="m42.996 23.99 4.311-4.22c1.285-1.21.686-3.38-1-3.78l-5.873-1.5 1.655-5.81c.468-1.67-1.109-3.25-2.78-2.78l-5.812 1.65-1.499-5.87c-.396-1.66-2.583-2.27-3.78-1L24 5.02 19.782.68c-1.184-1.25-3.379-.68-3.78 1l-1.499 5.87L8.691 5.9c-1.672-.47-3.248 1.11-2.78 2.78l1.655 5.81-5.873 1.5c-1.687.4-2.285 2.57-1 3.78l4.311 4.22-4.311 4.22c-1.285 1.22-.686 3.38 1 3.78l5.873 1.5-1.656 5.82c-.467 1.67 1.109 3.25 2.781 2.78l5.812-1.66 1.499 5.88c.416 1.74 2.596 2.25 3.78 1L24 42.99l4.218 4.32c1.172 1.26 3.373.7 3.78-1l1.499-5.88 5.812 1.66c1.672.47 3.248-1.11 2.78-2.78l-1.655-5.82 5.873-1.5c1.686-.4 2.284-2.56 1-3.78z"
    />
  </svg>
);

export default FlowerIcon;

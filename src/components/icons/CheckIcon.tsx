import type { SVGProps } from "react";

const CheckIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" fill="none" {...props}>
    <defs>
      <linearGradient
        id="checkGrad"
        x1="0"
        y1="41.8971"
        x2="32.5162"
        y2="17.9498"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="var(--color-accent)" />
        <stop offset="1" stopColor="var(--color-accent-light)" />
      </linearGradient>
    </defs>
    <path
      d="M16.3029 41.1941L0.702938 25.5941C-0.234281 24.6569 -0.234281 23.1373 0.702938 22.2L4.09697 18.8059C5.03419 17.8686 6.55388 17.8686 7.49109 18.8059L18 29.3147L40.5089 6.80588C41.4461 5.86866 42.9658 5.86866 43.903 6.80588L47.2971 10.2C48.2343 11.1372 48.2343 12.6568 47.2971 13.5941L19.6971 41.1942C18.7598 42.1314 17.2402 42.1314 16.3029 41.1941Z"
      fill="url(#checkGrad)"
    />
  </svg>
);

export default CheckIcon;

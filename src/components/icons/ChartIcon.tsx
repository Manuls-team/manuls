import type { SVGProps } from "react";

const ChartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" fill="none" {...props}>
    <defs>
      <linearGradient
        id="chartGrad"
        x1="0"
        y1="45"
        x2="35.9789"
        y2="22.4176"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="var(--color-accent)" />
        <stop offset="1" stopColor="var(--color-accent-light)" />
      </linearGradient>
    </defs>
    <path
      d="M6 6C6 4.34062 4.65938 3 3 3C1.34062 3 0 4.34062 0 6V37.5C0 41.6438 3.35625 45 7.5 45H45C46.6594 45 48 43.6594 48 42C48 40.3406 46.6594 39 45 39H7.5C6.675 39 6 38.325 6 37.5V6ZM44.1188 14.1188C45.2906 12.9469 45.2906 11.0438 44.1188 9.87188C42.9469 8.7 41.0437 8.7 39.8719 9.87188L30 19.7531L24.6188 14.3719C23.4469 13.2 21.5438 13.2 20.3719 14.3719L9.87188 24.8719C8.7 26.0437 8.7 27.9469 9.87188 29.1188C11.0438 30.2906 12.9469 30.2906 14.1188 29.1188L22.5 20.7469L27.8812 26.1281C29.0531 27.3 30.9563 27.3 32.1281 26.1281L44.1281 14.1281L44.1188 14.1188Z"
      fill="url(#chartGrad)"
    />
  </svg>
);

export default ChartIcon;

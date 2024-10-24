import * as React from "react";

const Heart = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={32}
      height={33}
      viewBox="0 0 32 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className="group cursor-pointer"
    >
      <path
        d="M15.999 28.5722C-10.6672 13.8333 7.9995 -2.16666 15.999 7.95075C23.9995 -2.16666 42.6661 13.8333 15.999 28.5722Z"
        strokeWidth={1.5}
        className="stroke-gray-900 group-hover:stroke-primary group-hover:fill-primary group-active:stroke-primary-dark group-active:fill-primary-dark"
      />
    </svg>
  );
};

export default Heart;

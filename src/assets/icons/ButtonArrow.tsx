import * as React from "react";

const ButtonArrow = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={17}
      height={15}
      viewBox="0 0 17 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16 7.50055H1"
        stroke="#FFFFFF"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.9502 1.47552L16.0002 7.49953L9.9502 13.5245"
        stroke="#FFFFFF"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ButtonArrow;

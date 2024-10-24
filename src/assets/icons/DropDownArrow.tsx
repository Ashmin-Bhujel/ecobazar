import * as React from "react";

const DropDownArrow = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={9}
      height={6}
      viewBox="0 0 9 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8 1.25L4.5 4.75L1 1.25"
        stroke="#B3B3B3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DropDownArrow;

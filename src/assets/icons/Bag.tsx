import * as React from "react";

const Bag = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={34}
      height={35}
      viewBox="0 0 34 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className="group cursor-pointer"
    >
      <path
        d="M11.3333 14.6667H7.08333L4.25 30.25H29.75L26.9167 14.6667H22.6667M11.3333 14.6667V10.4167C11.3333 7.28705 13.8704 4.75 17 4.75V4.75C20.1296 4.75 22.6667 7.28705 22.6667 10.4167V14.6667M11.3333 14.6667H22.6667M11.3333 14.6667V18.9167M22.6667 14.6667V18.9167"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="stroke-gray-900 group-hover:stroke-primary group-active:stroke-primary-dark"
      />
    </svg>
  );
};

export default Bag;

import * as React from "react";

const EyeOpen = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={20}
      height={21}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className="group"
    >
      <path
        d="M1.66663 10.5003C1.66663 10.5003 4.69663 4.66699 9.99996 4.66699C15.3033 4.66699 18.3333 10.5003 18.3333 10.5003C18.3333 10.5003 15.3033 16.3337 9.99996 16.3337C4.69663 16.3337 1.66663 10.5003 1.66663 10.5003Z"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="stroke-gray-900 group-hover:stroke-primary active:stroke-primary-dark"
      />
      <path
        d="M10 13C10.663 13 11.2989 12.7366 11.7678 12.2678C12.2366 11.7989 12.5 11.163 12.5 10.5C12.5 9.83696 12.2366 9.20107 11.7678 8.73223C11.2989 8.26339 10.663 8 10 8C9.33696 8 8.70107 8.26339 8.23223 8.73223C7.76339 9.20107 7.5 9.83696 7.5 10.5C7.5 11.163 7.76339 11.7989 8.23223 12.2678C8.70107 12.7366 9.33696 13 10 13V13Z"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="stroke-gray-900 group-hover:stroke-primary active:stroke-primary-dark"
      />
    </svg>
  );
};

export default EyeOpen;

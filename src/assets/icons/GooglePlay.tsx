import * as React from "react";

const GooglePlay = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={24}
      height={25}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_8953_14955)">
        <path
          d="M15.0652 11.7299L4.7188 1.35472L17.8828 8.91232L15.0652 11.7299ZM2.0176 0.745117C1.408 1.06432 1 1.64512 1 2.40112V23.0891C1 23.8451 1.408 24.4259 2.0176 24.7451L14.05 12.7427L2.0176 0.745117ZM21.9532 11.3219L19.192 9.72352L16.1116 12.7475L19.192 15.7715L22.0096 14.1731C22.8532 13.5023 22.8532 11.9927 21.9532 11.3219ZM4.7188 24.1403L17.8828 16.5827L15.0652 13.7651L4.7188 24.1403Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath>
          <rect
            width={24}
            height={24}
            fill="white"
            transform="translate(0 0.245117)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default GooglePlay;

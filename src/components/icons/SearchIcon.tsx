import React from "react";

interface Props {
  svgStyles?: string;
  svgContainerStyles?: string;
}

const SearchIcon: React.FC<Props> = ({ svgStyles, svgContainerStyles }) => {
  return (
    <span className={svgContainerStyles}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={svgStyles}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
    </span>
  );
};

export default SearchIcon;
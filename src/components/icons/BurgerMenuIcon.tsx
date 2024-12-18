import React from "react";

interface Props {
  svgStyles?: string;
  svgContainerStyles?: string;
}

const BurgerMenuIcon: React.FC<Props> = ({ svgStyles, svgContainerStyles }) => {
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
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </span>
  );
};

export default BurgerMenuIcon;

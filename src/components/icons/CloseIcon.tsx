import React from "react";

interface Props {
  svgStyles?: string;
  svgContainerStyles?: string;
}

const CloseIcon: React.FC<Props> = ({ svgStyles, svgContainerStyles }) => {
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
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
    </span>
  );
};

export default CloseIcon;

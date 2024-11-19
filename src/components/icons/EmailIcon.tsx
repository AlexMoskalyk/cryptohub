import React from "react";

interface Props {
  svgStyles?: string;
  svgContainerStyles?: string;
}

const EmailIcon: React.FC<Props> = ({ svgStyles, svgContainerStyles }) => {
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
          d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
        />
      </svg>
    </span>
  );
};

export default EmailIcon;

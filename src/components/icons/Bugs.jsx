import React from "react";

function Bugs({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width="32"
      height="32"
      fill="none"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13 8l-3-1a1 1 0 010-2l4 2 2 3 2-3 4-2a1 1 0 110 2l-2 1-2 4c3-3 8-5 10-2 3 3-2 10-5 11 2 1 3 4 1 5-3 2-6-1-8-3-1 2-5 5-8 3-1-1-1-4 1-5-3-1-7-8-5-11 3-3 7-1 11 2l-2-4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default Bugs;

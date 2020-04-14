import React from "react";

function Daily({ className }) {
  return (
    <svg
      className={className}
      width="32"
      height="32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 10h13M12 16h13M12 22h13M7 16h.01M7 22h.01M9 8.5l-2.75 2.75L5 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Daily;

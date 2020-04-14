import React from "react";

function Fossils({ className }) {
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
        d="M14 22.7a.8.8 0 000-1.2c-.5-.4-1.9-2-1.9-5 0-3.6 2.5-6 5-6 1.4 0 2.4.5 3.1 1.2.7.7 1.2 1.7 1.2 2.9 0 1.1-.5 1.8-1 2.2-.6.4-1.4.5-2 .5-1 0-1.3-.5-1.4-.6a.8.8 0 10-1.3.7c.3.6 1.2 1.4 2.7 1.4.8 0 2-.2 2.8-.8a4 4 0 001.7-3.4c0-1.6-.6-3-1.6-4S18.8 9.1 17 9.1c-3.5 0-6.5 3.1-6.5 7.5 0 3.4 1.6 5.5 2.6 6.1.3.2.6.2.9 0 .3.6.6 1.6-.2 2.4l-2.1 2-1.7 1.5c-1 1-2 0-3-1-.5-.5-4-4-4-10.5S7.6 2.3 16.4 2.3c8.7 0 13 5.8 13 12.3 0 6.5-4 10.2-9.5 10.2a8 8 0 01-5.8-2.1z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default Fossils;

import React from "react";

function Song({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width="32"
      height="32"
      fill="none"
    >
      <path
        fill="#000"
        d="M14.6 4.5c0-1.3 1.6-2 2.6-1l8.7 8c2 2 1.5 7.3-2.7 9.6 1.1-2.7 1.1-3.8-1.6-6.1l-3.1-2.6v11.3c-.2 2.6-2.8 5-6.2 5.3-3.7.3-7-1.7-7.3-4.6-.3-3 2.5-5.6 6.2-6 1.2-.1 2.4 0 3.4.3V4.5z"
      />
    </svg>
  );
}

export default Song;

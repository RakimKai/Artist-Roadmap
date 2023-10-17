import React from "react";

const Button = ({ text, handleClick }) => {
  return (
    <div>
      <button
        onClick={handleClick}
        className="bg-spotifyGreen px-2 py-1 rounded font-normal hover:bg-green-500 transition-colors duration-200 ease-in-out "
      >
        {text}
      </button>
    </div>
  );
};

export default Button;

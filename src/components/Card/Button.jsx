import React from "react";

const Button = ({ text, className }) => {
  return (
    <button
      className={`px-8 rounded-md text-white py-3 bg-gray-400 font-semibold ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;

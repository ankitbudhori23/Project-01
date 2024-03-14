import React from "react";

export interface ButtonProps {
  label: string;
  onClick: () => void;
  color?: "blue" | "gray" | "red" | "green" | "yellow";
}

function Button({ label, onClick, color = "blue" }: ButtonProps) {
  let buttonColorClass = "bg-blue-500";
  switch (color) {
    case "gray":
      buttonColorClass = "bg-gray-500";
      break;
    case "red":
      buttonColorClass = "bg-red-500";
      break;
    case "green":
      buttonColorClass = "bg-green-500";
      break;
    case "yellow":
      buttonColorClass = "bg-yellow-500";
      break;
    default:
      buttonColorClass = "bg-blue-500";
  }

  return (
    <button
      className={`${buttonColorClass} text-white px-4 py-2 rounded-md mx-1`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;

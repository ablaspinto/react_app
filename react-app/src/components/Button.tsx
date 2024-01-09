import React from "react";
interface Props {
  children: string;
  color?: string;
  onClick: () => void;
}

export const Button = ({ children, onClick, color = "dark" }) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};
// Button.js
import React from "react";

type TButton = {
  label: string;
  onClick: () => void;
};
export const Button: React.FC<TButton> = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};

import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      className={`${theme.cardBg} px-4 py-2 rounded-md transition-colors duration-200`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;

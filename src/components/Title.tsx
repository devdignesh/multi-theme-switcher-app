import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <h2
      className={`text-base font-bold mb-4 text-gray-400 ${theme.fontFamily} }`}
    >
      {text}
    </h2>
  );
};

export default Title;

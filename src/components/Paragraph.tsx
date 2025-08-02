import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

interface ParagraphProps {
  text: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ text }) => {
  const { theme } = useContext(ThemeContext);

  return <p className={`mb-4  ${theme.fontFamily}`}>{text}</p>;
};

export default Paragraph;

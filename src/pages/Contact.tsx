import React from "react";
import Header from "../components/Header";
import Title from "../components/Title";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Contact: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Header />
      <div
        className={`${theme.background} ${theme.fontFamily} ${theme.transition}`}
      >
        <div className={`min-h-screen w-full max-w-7xl mx-auto sm:p-4 p-2 `}>
          <div className="p-4">
            <Title text="Get in Touch" />
            <Paragraph text="Have questions? Reach out to us and we'll get back to you soon!" />
            <Button
              text="Contact Us"
              onClick={() => alert("Contact form opened!")}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

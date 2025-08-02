import React from "react";
import Header from "../components/Header";
import Title from "../components/Title";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const About: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Header />
      <div
        className={`${theme.background} ${theme.fontFamily} ${theme.transition}`}
      >
        <div className={`min-h-screen w-full max-w-7xl mx-auto p-4 `}>
          <div className={`flex flex-col md:flex-row gap-6`}>
            {theme.layout === "sidebar" && (
              <aside className="w-44 shrink-0 p-4 rounded-md h-fit md:block hidden">
                <Title text="About Us" />
                <ul>
                  <li className="mb-2">Our Story</li>
                  <li className="mb-2">Mission</li>
                  <li className="mb-2">Team</li>
                </ul>
              </aside>
            )}

            <div className="min-w-0 flex-1 overflow-hidden p-2 sm:p-4 ">
              <main className="space-y-8 w-full">
                <Title text="About Our Store" />
                <Paragraph text="We are a passionate team dedicated to bringing you the best products with a delightful shopping experience." />
                <Button
                  text="Learn More"
                  onClick={() => alert("Learn more clicked!")}
                />
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

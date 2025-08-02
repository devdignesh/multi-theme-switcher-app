import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { ThemeContext } from "../context/ThemeContext";

const NotFound: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Header />
      <div
        className={`${theme.background} ${theme.fontFamily} ${theme.transition} `}
      >
        <div className="min-h-screen w-full max-w-7xl mx-auto p-4 flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold mb-4">404 - Page Not Found</h1>
          <p>Sorry, the page you are looking for does not exist.</p>
          <Link to="/" className="text-blue-500 hover:underline">
            Go back to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;

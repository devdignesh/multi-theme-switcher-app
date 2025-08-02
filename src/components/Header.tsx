import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { themes, type ThemeName } from "../themes";
import { Menu, X } from "lucide-react"; // optional icons

const Header: React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value as ThemeName;
    setTheme(selected);
  };

  return (
    <header
      className={`sticky top-0 left-0 w-full border-b border-b-gray-200 z-10 backdrop-blur-md ${theme.background} ${theme.fontFamily} ${theme.transition}`}
    >
      <div className={`max-w-7xl mx-auto py-4 px-4 `}>
        <div className="flex justify-between items-center">
          {/* logo */}
          <Link to="/" className="text-xl font-bold">
            MY STORE
          </Link>

          {/* desktop navbar */}
          <nav className="hidden md:flex space-x-4 items-center">
            <Link to="/" className="font-semibold text-sm py-2 px-4">
              Home
            </Link>
            <Link to="/about" className="font-semibold text-sm py-2 px-4">
              About
            </Link>
            <Link to="/contact" className="font-semibold text-sm py-2 px-4">
              Contact
            </Link>
            <select
              aria-label="Select Theme"
              value={Object.keys(themes).find(
                (key) => themes[key as ThemeName].name === theme.name
              )}
              onChange={handleThemeChange}
              className={`border border-gray-400 p-2 rounded-sm focus:outline-none ${theme.background} cursor-pointer px-3`}
            >
              <option value="theme1">Theme 1</option>
              <option value="theme2">Theme 2</option>
              <option value="theme3">Theme 3</option>
            </select>
          </nav>

          {/* mobile toggle button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* mobile menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-2">
            <Link
              to="/"
              className="font-semibold py-2 px-3"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="font-semibold py-2 px-3"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="font-semibold py-2 px-3"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
            <select
              aria-label="Select Theme"
              value={Object.keys(themes).find(
                (key) => themes[key as ThemeName].name === theme.name
              )}
              onChange={handleThemeChange}
              className={`border border-gray-400 p-2 rounded-sm focus:outline-none ${theme.background} cursor-pointer px-3`}
            >
              <option value="theme1">Minimalist</option>
              <option value="theme2">Dark</option>
              <option value="theme3">Colorful</option>
            </select>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

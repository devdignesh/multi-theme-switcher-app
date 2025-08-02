import React, { useState, useEffect, type ReactNode } from "react";

import { ThemeContext } from "./ThemeContext";
import { themes, type ThemeName, type ThemeStyles } from "../themes";

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeStyles>(themes.theme1);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as ThemeName | null;
    if (savedTheme && themes[savedTheme]) {
      setThemeState(themes[savedTheme]);
    }
  }, []);

  const setTheme = (themeName: ThemeName) => {
    setThemeState(themes[themeName]);
    localStorage.setItem("theme", themeName);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

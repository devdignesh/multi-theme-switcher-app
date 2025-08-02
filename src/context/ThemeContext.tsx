import { createContext } from "react";
import { themes, type ThemeName, type ThemeStyles } from "../themes";

interface ThemeContextType {
  theme: ThemeStyles;
  setTheme: (themeName: ThemeName) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: themes.theme2,
  setTheme: () => {},
});

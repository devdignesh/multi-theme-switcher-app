import { createContext } from 'react';
import { themes, type ThemeName, type ThemeStyles } from '../types/theme';


interface ThemeContextType {
  theme: ThemeStyles;
  setTheme: (themeName: ThemeName) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: themes.theme1,
  setTheme: () => {},
});




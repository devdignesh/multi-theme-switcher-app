// Define the structure of a single theme style
export interface ThemeStyles {
  name: string;
  fontFamily: string;
  layout: "masonry" | "sidebar" | "grid";
  background?: string;
  transition?: string;
  button: string;
  card?: string;
  gradient?: string;
}

export type ThemeName = "theme1" | "theme2" | "theme3";

// Store multiple themes with unique styles
export const themes: Record<ThemeName, ThemeStyles> = {
  theme1: {
    name: "Minimalist",
    fontFamily: "font-sans",
    layout: "masonry",
    transition: "transition-all duration-500 ease-in-out",
    background: "bg-white text-gray-800",
    card: "bg-[#f5f5f5]",
    button: "bg-black hover:bg-black/80 text-white",
    gradient: "bg-gradient-to-r from-white to-gray-100",
  },

  theme2: {
    name: "Dark",
    fontFamily: "font-serif",
    layout: "sidebar",
    transition: "transition-all duration-500 ease-in-out",
    background: "bg-gray-900 text-gray-100",
    card: "bg-gray-800 border border-gray-700 shadow-md hover:shadow-lg",
    button: "bg-blue-600 hover:bg-blue-500 text-white",
    gradient: "bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900",
  },

  theme3: {
    name: "Colorful",
    fontFamily: "font-pacific",
    layout: "grid",
    transition: "transition-all duration-500 ease-in-out",
    background:
      "bg-gradient-to-r from-pink-50 via-yellow-50 to-purple-100 text-gray-800",
    card: "bg-white shadow-md border-l-4 border-pink-400 hover:border-purple-400",
    button:
      "bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 text-white hover:opacity-90",
    gradient: "bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200",
  },
};

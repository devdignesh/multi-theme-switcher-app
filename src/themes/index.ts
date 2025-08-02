export interface ThemeStyles {
  name: string;
  fontFamily: string;
  layout: "flex" | "sidebar" | "grid";
  background?: string;
  transition?: string;

  buttonBg: string;
  buttonText: string;
  cardBg?: string;
  cardShadow?: string;
  gradient?: string;
  borderRadius?: string;
}

export type ThemeName = "theme1" | "theme2" | "theme3";

export const themes: Record<ThemeName, ThemeStyles> = {
  theme1: {
    name: "Minimalist",
    fontFamily: "font-sans",
    transition: "transition-all duration-300 ease-in-out",
    layout: "flex",
    background: "bg-white text-gray-800",
    cardBg: "bg-[#f5f5f5]",

    buttonBg: "bg-blue-500 hover:bg-blue-600",
    buttonText: "text-white",
    cardShadow: "shadow-md",
    gradient: "bg-gradient-to-r from-white to-gray-100",
    borderRadius: "rounded-md",
  },
  theme2: {
    name: "Dark",
    fontFamily: "font-serif",
    layout: "sidebar",
    transition: "transition-all duration-300 ease-in-out",
    background: "bg-gray-900 text-white",
    cardBg: "bg-white/10",

    buttonBg: "bg-red-500 hover:bg-red-600",
    buttonText: "text-white",
    cardShadow: "shadow-lg",
    gradient: "bg-gradient-to-r from-gray-900 to-gray-700",
    borderRadius: "rounded-lg",
  },
  theme3: {
    name: "Colorful",
    fontFamily: "font-pacific",
    layout: "grid",
    buttonBg: "bg-purple-500 hover:bg-purple-600",
    buttonText: "text-white",
    cardBg: "bg-white",
    cardShadow: "shadow-xl hover:shadow-2xl",
    gradient: "bg-gradient-to-r from-yellow-100 to-pink-100",
    borderRadius: "rounded-xl",
    transition: "transition-all duration-300 ease-in-out",
  },
};

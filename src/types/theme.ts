export interface ThemeStyles {
  name: string;
  background: string;
  text: string;
  accent: string;
  fontFamily: string;
  layout: 'flex' | 'sidebar' | 'grid';
  spacing: string;
  buttonBg: string;
  buttonText: string;
  cardBg?: string;
}

export type ThemeName = 'theme1' | 'theme2' | 'theme3';

export const themes: Record<ThemeName, ThemeStyles> = {
  theme1: {
    name: 'Minimalist',
    background: 'bg-white',
    text: 'text-gray-900',
    accent: 'bg-blue-500',
    fontFamily: 'font-sans',
    layout: 'flex',
    spacing: 'p-4',
    buttonBg: 'bg-blue-500 hover:bg-blue-600',
    buttonText: 'text-white',
  },
  theme2: {
    name: 'Dark',
    background: 'bg-gray-900',
    text: 'text-white',
    accent: 'bg-red-500',
    fontFamily: 'font-serif',
    layout: 'sidebar',
    spacing: 'p-6',
    buttonBg: 'bg-red-500 hover:bg-red-600',
    buttonText: 'text-white',
  },
  theme3: {
    name: 'Colorful',
    background: 'bg-yellow-100',
    text: 'text-gray-800',
    accent: 'bg-purple-500',
    fontFamily: 'font-pacifico',
    layout: 'grid',
    spacing: 'p-8',
    buttonBg: 'bg-purple-500 hover:bg-purple-600',
    buttonText: 'text-white',
    cardBg: 'bg-white',
  },
};
import React, { createContext, useContext, useState, useEffect } from 'react';
import { type Theme, type ThemeContextType } from './types';

const themes: { [key: string]: Theme } = {
  theme1: {
    name: "Minimalist Light",
    colors: {
      primary: 'theme-1-primary',
      secondary: 'theme-1-secondary',
      background: 'theme-1-background',
      text: 'theme-1-text',
    },
    font: "font-sans",
    layout: "flex flex-col min-h-screen",
  },
  theme2: {
    name: "Dark Sidebar",
    colors: {
      primary: 'theme-2-primary',
      secondary: 'theme-2-secondary',
      background: 'theme-2-background',
      text: 'theme-2-text',
    },
    font: "font-serif-bold",
    layout: "flex flex-col min-h-screen",
  },
  theme3: {
    name: "Colorful Grid",
    colors: {
      primary: 'theme-3-primary',
      secondary: 'theme-3-secondary',
      background: 'theme-3-background',
      text: 'theme-3-text',
    },
    font: "font-pacifico",
    layout: "flex flex-col min-h-screen",
  },
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentThemeName, setCurrentThemeName] = useState('theme1');
  
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && themes[savedTheme]) {
      setCurrentThemeName(savedTheme);
    }
  }, []);

  const setTheme = (themeName: string) => {
    setCurrentThemeName(themeName);
    localStorage.setItem('theme', themeName);
  };

  const theme = themes[currentThemeName] || themes.theme1;

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

'use client'
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext({});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const theme = isDarkMode ? 'bg-slate-700 text-slate-50' : 'bg-slate-50 text-slate-950'
   
  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

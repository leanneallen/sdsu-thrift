import React, { createContext, useContext, useMemo, useState, useEffect } from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery'; // Import useMediaQuery

const ThemeContext = createContext({
  toggleTheme: () => {},
  isDarkMode: false
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  // Use the system preference as the default unless overridden by stored settings
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [isDarkMode, setIsDarkMode] = useState(
    () => {
      const storedThemePreference = localStorage.getItem('theme');
      return storedThemePreference !== null ? storedThemePreference === 'dark' : prefersDarkMode;
    }
  );

  // Effect to store theme changes in local storage
  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const theme = useMemo(() => createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
    },
  }), [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode); // Toggle between true and false
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;


import React, { createContext, useContext, useState, useEffect } from "react";

// Create a new context for the theme
const ThemeContext = createContext();

// Custom hook to use the theme
const useTheme = () => useContext(ThemeContext);

// ThemeProvider component
const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    // Apply dark mode class to the root element
    if (darkMode) {
      document.documentElement.classList.add("dark-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider };
export default useTheme;

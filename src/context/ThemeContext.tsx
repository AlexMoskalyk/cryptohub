import React, { createContext, useContext, useEffect, useState } from "react";

interface ThemeContextProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

// Create the context
const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });

  const applyTheme = (isDark: boolean) => {
    const theme = isDark ? "dark" : "light";
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", theme);
  };

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      applyTheme(newMode);
      return newMode;
    });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme") === "dark";
      applyTheme(storedTheme);
      setIsDarkMode(storedTheme);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

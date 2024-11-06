import React, { useEffect, useState } from "react";
import DarkModeIcon from "./icons/darkModeIcon";
import LightModeIcon from "./icons/LightModeIcon";

interface Props {
  stylesContainer?: string;
  stylesButton?: string;
  svgStyles?: string;
}

const ThemeSwitcher: React.FC<Props> = ({ stylesContainer, stylesButton }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage for a saved theme preference
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });

  // Toggle theme and save preference in localStorage
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      const theme = newMode ? "dark" : "light";
      document.documentElement.classList.toggle("dark", newMode);
      localStorage.setItem("theme", theme);
      return newMode;
    });
  };

  // Set the initial theme based on localStorage
  useEffect(() => {
    const theme = localStorage.getItem("theme") || "light";
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, []);

  return (
    <div className={`flex items-center ${stylesContainer}`}>
      {isDarkMode ? (
        <button onClick={toggleTheme} className={stylesButton}>
          <LightModeIcon
            svgStyles="size-6 stroke-2 stroke-lt-text-main fill-lt-text-main hover:fill-accent-color hover:stroke-accent-color dark:fill-dt-text-main dark:stroke-dt-text-main dark:hover:fill-accent-color dark:hover:stroke-accent-color"
            svgContainerStyles="cursor-pointer w-full hover:fill-accent-color"
          />
        </button>
      ) : (
        <button onClick={toggleTheme} className={stylesButton}>
          <DarkModeIcon
            svgStyles="size-6 fill-lt-text-main hover:fill-accent-color"
            svgContainerStyles="cursor-pointer"
          />
        </button>
      )}
    </div>
  );
};

export default ThemeSwitcher;

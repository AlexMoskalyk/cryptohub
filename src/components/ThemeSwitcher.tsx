import React from "react";
import { useTheme } from "../context/ThemeContext";
import LightModeIcon from "./icons/LightModeIcon";
import DarkModeIcon from "./icons/darkModeIcon";

interface Props {
  stylesContainer?: string;
  stylesButton?: string;
}

const ThemeSwitcher: React.FC<Props> = ({ stylesContainer, stylesButton }) => {
  const { isDarkMode, toggleTheme } = useTheme();

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

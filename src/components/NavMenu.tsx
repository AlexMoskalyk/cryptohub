import React from "react";
import { NavLink } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";

interface Props {
  stylesContainer?: string;
  stylesLink?: string;
  stylesLinkActive?: string;
}

const NavMenu: React.FC<Props> = ({
  stylesContainer,
  stylesLink,
  stylesLinkActive,
}) => {
  return (
    <nav className={stylesContainer}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? `${stylesLinkActive}  ` : `${stylesLink} `
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) =>
          isActive ? `${stylesLinkActive}  ` : `${stylesLink} `
        }
      >
        Login
      </NavLink>
      <NavLink
        to="/register"
        className={({ isActive }) =>
          isActive ? `${stylesLinkActive}  ` : `${stylesLink} `
        }
      >
        Sing Up
      </NavLink>
      <ThemeSwitcher
        stylesButton="w-full hover:fill-accent-color"
        stylesContainer="px-4 "
      />
    </nav>
  );
};

export default NavMenu;

import React from "react";
import { NavLink } from "react-router-dom";

interface Props {
  stylesContainer?: string;
  stylesLink?: string;
  stylesLinkActive?: string;
  closeModal?: () => void;
}

const NavMenu: React.FC<Props> = ({
  stylesContainer,
  stylesLink,
  stylesLinkActive,
  closeModal,
}) => {
  return (
    <nav className={stylesContainer}>
      <NavLink
        onClick={closeModal}
        to="/"
        className={({ isActive }) =>
          isActive ? `${stylesLinkActive}  ` : `${stylesLink} `
        }
      >
        Home
      </NavLink>
      <NavLink
        onClick={closeModal}
        to="/login"
        className={({ isActive }) =>
          isActive ? `${stylesLinkActive}  ` : `${stylesLink} `
        }
      >
        Login
      </NavLink>
      <NavLink
        onClick={closeModal}
        to="/register"
        className={({ isActive }) =>
          isActive ? `${stylesLinkActive}  ` : `${stylesLink} `
        }
      >
        Sing Up
      </NavLink>
    </nav>
  );
};

export default NavMenu;

import React from "react";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../redux/store";

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
  const user = useAppSelector((state) => state.auth.user);

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
      {user ? (
        <NavLink
          to="/user"
          onClick={closeModal}
          className={({ isActive }) =>
            isActive ? `${stylesLinkActive}  ` : `${stylesLink} `
          }
        >
          {user.email}
        </NavLink>
      ) : (
        <>
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
        </>
      )}
    </nav>
  );
};

export default NavMenu;

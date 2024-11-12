import React from "react";
import { Link } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";
import PhoneIcon from "./icons/PhoneIcon";
import EmailIcon from "./icons/EmailIcon";

const Footer = () => {
  return (
    <footer className="px-8 pb-5 grid grid-cols-1 gap-y-3 md:grid md:grid-rows-2 md:grid-cols-2 md:justify-items-evenly	">
      <div
        id="links"
        className="grid grid-cols-1 md:row-start-1  md:row-end-3  md:justify-items-center "
      >
        <Link
          to="/"
          className="hover:text-accent-color  focus:text-accent-color   dark:hover:text-accent-color  dark:focus:text-accent-color dark:text-dt-text-main"
        >
          About Us
        </Link>
        <Link
          to="/"
          className="hover:text-accent-color  focus:text-accent-color   dark:hover:text-accent-color  dark:focus:text-accent-color dark:text-dt-text-main"
        >
          Support
        </Link>
        <Link
          to="/"
          className="hover:text-accent-color  focus:text-accent-color   dark:hover:text-accent-color  dark:focus:text-accent-color dark:text-dt-text-main"
        >
          FAQs
        </Link>
      </div>
      <div id="contacts" className="md:justify-self-center">
        <a className="flex" href="tel:+777777777">
          <PhoneIcon
            svgStyles="size-6 fill-none stroke-elements-main stroke-2"
            svgContainerStyles="mr-2"
          />
          <span className=" hover:text-accent-color  focus:text-accent-color   dark:hover:text-accent-color  dark:focus:text-accent-color dark:text-dt-text-main">
            +777777777
          </span>
        </a>

        <a className="flex" href="mailto:cryptohub@email.com">
          <EmailIcon
            svgStyles="size-6 fill-none stroke-elements-main stroke-2"
            svgContainerStyles="mr-2"
          />
          <span className=" hover:text-accent-color  focus:text-accent-color   dark:hover:text-accent-color  dark:focus:text-accent-color dark:text-dt-text-main">
            cryptohub@email.com
          </span>
        </a>
      </div>
      <div id="features" className="md:justify-self-center">
        <ThemeSwitcher stylesButton="hover:fill-accent-color" />
      </div>
    </footer>
  );
};

export default Footer;

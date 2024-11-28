import React from "react";
import { Link } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";
import PhoneIcon from "./icons/PhoneIcon";
import EmailIcon from "./icons/EmailIcon";
import InstagramIcon from "./icons/InstagramIcon";
import FacebookIcon from "./icons/FacebookIcon";
import LinkedInIcon from "./icons/LinkedInIcon";
import Twitter from "./icons/Twitter";

const Footer = () => {
  return (
    <footer className="relative bottom-0 w-full mt-16 px-8 pb-5 grid grid-cols-1 gap-y-3 md:grid md:grid-rows-2 md:grid-cols-2 md:justify-items-evenly	">
      <div
        id="links"
        className="grid grid-cols-1 justify-items-center md:row-start-1  md:row-end-3  "
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
      <div id="contacts" className="justify-self-center">
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
        <div className="flex mt-3 justify-between">
          <a
            className="cursor-pointer"
            href="https://www.instagram.com/"
            target="_blank"
          >
            <InstagramIcon svgStyles="size-6 fill-elements-main stroke-elements-main stroke-2 hover:stroke-accent-color hover:fill-accent-color" />
          </a>
          <a
            className="cursor-pointer"
            href="https://www.facebook.com/"
            target="_blank"
          >
            <FacebookIcon
              svgStyles="size-6 fill-elements-main stroke-elements-main stroke-2 hover:stroke-accent-color hover:fill-accent-color"
              svgContainerStyles="w-fit"
            />
          </a>
          <a
            className="cursor-pointer"
            href="https://www.linkedin.com/"
            target="_blank"
          >
            <LinkedInIcon svgStyles="size-6 fill-elements-main stroke-elements-main stroke-2 hover:stroke-accent-color hover:fill-accent-color" />
          </a>
          <a className="cursor-pointer" href="https://x.com/" target="_blank">
            <Twitter svgStyles="size-6 fill-elements-main stroke-elements-main stroke-2 hover:stroke-accent-color hover:fill-accent-color" />
          </a>
        </div>
      </div>
      <div id="features" className="justify-self-center">
        <ThemeSwitcher stylesButton="hover:fill-accent-color" />
      </div>
    </footer>
  );
};

export default Footer;

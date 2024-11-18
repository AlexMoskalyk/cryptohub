import React, { useState } from "react";
import { Link } from "react-router-dom";

import Modal from "./Modal";
import BurgerMenuIcon from "./icons/BurgerMenuIcon";
import SearchBar from "./SearchBar";
import NavMenu from "./NavMenu";
import ThemeSwitcher from "./ThemeSwitcher";

interface Props {
  className?: string;
}

const Header: React.FC<Props> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen((prev) => !prev);

  return (
    <header className="mb-16 px-8 pt-5 grid grid-cols-2 items-center  lg:grid-cols-[1fr_2fr_1fr_100px]">
      <Link to="/" className="text-xl font-bold text-accent-color">
        CryptoHUB
      </Link>
      <SearchBar
        stylesInput="bg-transparent w-full px-4 py-2 pl-10 text-lt-text-main border border-elements-main rounded-lg placeholder-elements-main focus:outline-none focus:ring-2 focus:ring-accent-color focus:border-accent-color dark:text-dt-text-main"
        stylesContainer="hidden  lg:block relative"
      />
      <NavMenu
        stylesLinkActive="text-accent-color"
        stylesLink="hover:text-accent-color  focus:text-accent-color   dark:hover:text-accent-color  dark:focus:text-accent-color "
        stylesContainer="hidden lg:flex space-x-4 justify-self-end dark:text-dt-text-main"
      />
      <div className="hidden lg:block">
        <ThemeSwitcher
          stylesButton="w-full hover:fill-accent-color"
          stylesContainer="px-4 "
        />
      </div>

      <button
        id="burger_menu"
        onClick={toggleModal}
        className="justify-self-end  lg:hidden"
      >
        <BurgerMenuIcon svgStyles="size-8 stroke-2 stroke-lt-text-main hover:stroke-accent-color focus:stroke-accent-color dark:stroke-dt-text-main dark:hover:stroke-accent-color dark:focus:stroke-accent-color" />
      </button>
      <Modal
        isOpen={isModalOpen}
        onClose={toggleModal}
        modalStyles="w-full h-full pt-4 bg-lt-background-main dark:bg-dt-background-main"
      >
        <SearchBar
          stylesInput="block bg-transparent relative w-full  py-2 pl-10 text-lt-text-main  border border-elements-main rounded-lg placeholder-elements-main focus:outline-none focus:ring-2 focus:ring-accent-color focus:border-accent-color dark:text-dt-text-main"
          stylesContainer="flex mb-4 mx-4 relative"
        />

        <NavMenu
          stylesLinkActive="text-accent-color bg-lt-background-secondary py-2 px-4 block text-start dark:bg-dt-background-secondary"
          stylesLink="py-2 px-4  block text-start hover:text-accent-color  focus:text-accent-color hover:bg-lt-background-secondary focus:bg-lt-background-secondary   dark:hover:text-accent-color  dark:focus:text-accent-color dark:hover:bg-dt-background-secondary dark:focus:bg-dt-background-secondary"
          stylesContainer="space-y-1 dark:text-dt-text-main"
        />
        <div className="mt-1 ">
          <ThemeSwitcher
            stylesButton="w-full hover:fill-accent-color"
            stylesContainer="px-4 py-2 hover:bg-lt-background-secondary focus:bg-lt-background-secondary    dark:hover:bg-dt-background-secondary dark:focus:bg-dt-background-secondary"
          />
        </div>
      </Modal>
    </header>
  );
};

export default Header;

import React from "react";
import SearchIcon from "./icons/SearchIcon";

interface Props {
  stylesContainer?: string;
  stylesInput?: string;
}

const SearchBar: React.FC<Props> = ({ stylesContainer, stylesInput }) => {
  return (
    <div id="searchBar" className={stylesContainer}>
      <input type="text" placeholder="Search..." className={stylesInput} />
      <SearchIcon
        svgStyles="size-6 fill-none stroke-elements-main stroke-2"
        svgContainerStyles="absolute inset-y-0 left-2 flex items-center pointer-events-none"
      />
    </div>
  );
};

export default SearchBar;

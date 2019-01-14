import React from "react";
import Logo from "./Logo";
import Icons from "./Icons";
import SearchBar from "./SearchBar";
import "./NavBar.scss";

const NavBarContainer = props => {
  return (
    <div className="navbar-container">
      <Logo />
      <SearchBar />
      <Icons />
    </div>
  );
};

export default NavBarContainer;

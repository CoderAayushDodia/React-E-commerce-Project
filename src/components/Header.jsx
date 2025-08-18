import React from "react";
import UpperHeader from "./UpperHeader";
import SearchBar from "./SearchBar";
import Navbar from "./Navbar";

function Header({ toggleMenu, toggleSignIn }) {
  return (
    <div>
      <UpperHeader />
      <SearchBar toggleMenu={toggleMenu} toggleSignIn={toggleSignIn}/>
      <Navbar />
    </div>
  );
}

export default Header;

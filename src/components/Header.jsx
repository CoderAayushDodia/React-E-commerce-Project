import React from "react";
import UpperHeader from "./UpperHeader";
import SearchBar from "./SearchBar";
import Navbar from "./Navbar";

function Header({ toggleMenu }) {
  return (
    <div>
      <UpperHeader />
      <SearchBar toggleMenu={toggleMenu} />
      <Navbar />
    </div>
  );
}

export default Header;

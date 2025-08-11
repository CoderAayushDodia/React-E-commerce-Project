import React from "react";
import "./App.css";
import UpperHeader from "./components/UpperHeader";
import SearchBar from "./components/SearchBar";
import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import FeaturedCategories from "./components/FeaturedCategories";
import OfferBanner from "./components/OfferBanner";
import PopularProducts from "./components/PopularProducts";
import BestSeller from "./components/BestSeller";
import Facilities from "./components/Facilities";
import Footer from "./components/Footer";
import ToggleMenu from "./components/ToggleMenu";
import { useState } from "react";

// const btnClose = document.querySelector(".btn-close");
// const offCanvas = document.querySelector(".toggle-menu");
// const menuBtn = document.querySelector(".menu-open")
// const btn = document.querySelector(".toggle-btn")
// const dropdown = document.querySelector(".submenu-wrapper")

// menuBtn.addEventListener("click", () => {
//   offCanvas.classList.add("add");
// })

// btnClose.addEventListener("click", () => {
//   offCanvas.classList.remove("add");
//   console.log("click")
// })

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    console.log("clicked");
  };

  // const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div>
        <UpperHeader />
        <SearchBar toggleMenu={toggleMenu} />
        <Navbar />
        <HeroSlider />
        <FeaturedCategories />
        <OfferBanner />
        <PopularProducts />
        <BestSeller />
        <Facilities />
        <Footer />
        {/* {true && <ToggleMenu />} */}
        {menuOpen && <ToggleMenu toggleMenu={toggleMenu}/>}
      </div>
    </div>
  );
}

export default App;

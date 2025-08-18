import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import ToggleMenu from "./components/ToggleMenu";
import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import SignUpHeader from "./components/SignUpHeader";
import ForgotPassword from "./components/ForgotPassword";
import SignInModal from "./components/SignInModal";

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
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const location = useLocation();

  const isSignUpPage = location.pathname === "/signup" || location.pathname === "/signin" || location.pathname === "/forgot-password";

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    console.log("clicked");
  };

  const toggleSignIn = () => {
    setIsSignInOpen((prev) => !prev);
    console.log("clicked");
  }

  // const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div>
        {isSignUpPage ? (<SignUpHeader />) : (<Header toggleMenu={toggleMenu} toggleSignIn={toggleSignIn}/>)}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
        {/* <Main /> */}
        <Footer />
        {/* {true && <ToggleMenu />} */}
        {menuOpen && <ToggleMenu toggleMenu={toggleMenu} />}
        <SignInModal isOpen={isSignInOpen} toggleSignIn={toggleSignIn}/>
      </div>
    </div>
  );
}

export default App;

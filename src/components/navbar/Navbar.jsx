import React from "react";
import logo from "../../assets/images/gamemano-logo-2-removebg-preview.png";
const Navbar = () => {
  return (
    <header class="header sticky">
      <img src={logo} alt="gamemano-logo" class="gamemano-logo" />
      <nav class="main-nav">
        <ul class="main-nav-list">
          <li>
            <a class="main-nav-link nav-cta" href="#how-it-work">
              Home
            </a>
          </li>
          <li>
            <a class="main-nav-link nav-cta" href="#meals">
              Products
            </a>
          </li>
          {/* <li>
            <a class="main-nav-link nav-cta" href="#try-for-free">
              Try for free
            </a>
          </li> */}
        </ul>
      </nav>
      <button class="btn-mobile-nav">
        <ion-icon
          name="menu-outline"
          class="icon-mobile-nav menu-icon"
        ></ion-icon>
        <ion-icon
          name="close-outline"
          class="icon-mobile-nav close-icon"
        ></ion-icon>
      </button>
    </header>
  );
};

export default Navbar;

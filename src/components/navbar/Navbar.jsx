import React, { useState } from "react";
import Logo from "../../assets/images/logo.svg";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  const handleNavToggle = () => {
    setNavOpen(!isNavOpen);
  };
  return (
    <>
      <header className={`header sticky ${isNavOpen ? "open-nav" : ""}`}>
        <Link to="/">
          <img src={Logo} alt="logo" className="logo" />
        </Link>
        <nav className="main-nav">
          <ul className="main-nav-list">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "active"
                    : "main-nav-link nav-cta"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "active"
                    : "main-nav-link nav-cta"
                }
                to="/product-list"
              >
                Products
              </NavLink>
            </li>
          </ul>
        </nav>

        <button className="btn-mobile-nav" onClick={handleNavToggle}>
          {isNavOpen ? (
            <ion-icon
              name="close-outline"
              className="icon-mobile-nav close-icon"
            ></ion-icon>
          ) : (
            <ion-icon
              name="menu-outline"
              className="icon-mobile-nav menu-icon"
            ></ion-icon>
          )}
        </button>
      </header>
    </>
  );
};

export default Navbar;

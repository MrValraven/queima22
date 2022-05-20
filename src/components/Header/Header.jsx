import React, { useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import Logo from "../../assets/logo.png";
import useWindowDimensions from "../../hooks/useWindowDimensions";

import "./styles.scss";

const Header = ({ appRef }) => {
  const { width: windowWidth } = useWindowDimensions();
  let location = useLocation();
  const burgerIconRef = useRef(null);
  const burgerTextRef = useRef(null);
  const navbarRef = useRef(null);

  const toggleNavbarMenu = () => {
    if (windowWidth < 1000) {
      burgerIconRef.current.classList.toggle("activatedNavbarBurger");
      burgerTextRef.current.classList.toggle("toggleBurgerText");
      navbarRef.current.classList.toggle("toggleNavbar");
      appRef.current.classList.toggle("removeScrolling");
    }
  };

  return (
    <header>
      <Link onClick={toggleNavbarMenu} to="/" className="logo">
        <img src={Logo} alt="logo" />
      </Link>

      <nav ref={navbarRef}>
        <ul className="activatedNavbar">
          <div className="logoMobile">
            <Link onClick={toggleNavbarMenu} to="/" className="logo">
              <img src={Logo} alt="logo" />
            </Link>
            <hr />
          </div>
          <Link
            onClick={toggleNavbarMenu}
            to="/"
            className={`navItem ${
              location.pathname === "/" ? "currentPage" : ""
            }`}
          >
            Home
          </Link>
          <Link
            onClick={toggleNavbarMenu}
            to="/cartaz"
            className={`navItem ${
              location.pathname === "/cartaz" ? "currentPage" : ""
            }`}
          >
            Cartaz
          </Link>
          <li className="dropdown">
            <div className="text navItem">
              <a className="dropdownName">FAQ</a>
              <i className="fas fa-chevron-down"></i>
            </div>
            <div className="subMenu">
              <Link
                onClick={toggleNavbarMenu}
                to="/comochegar"
                className={`navItem ${
                  location.pathname === "/comochegar" ? "currentPage" : ""
                }`}
              >
                <span>⚆</span> Como Chegar
              </Link>
              <Link
                onClick={toggleNavbarMenu}
                to="/ecocopo"
                className={`navItem ${
                  location.pathname === "/ecocopo" ? "currentPage" : ""
                }`}
              >
                <span>⚆</span> Ecocopo
              </Link>
              <Link
                onClick={toggleNavbarMenu}
                to="/cashless"
                className={`navItem ${
                  location.pathname === "/cashless" ? "currentPage" : ""
                }`}
              >
                <span>⚆</span> Cashless
              </Link>
            </div>
          </li>
          <Link
            onClick={toggleNavbarMenu}
            to="/precario"
            className={`navItem ${
              location.pathname === "/precario" ? "currentPage" : ""
            }`}
          >
            Precário
          </Link>
          <a
            href="https://e.3cket.com/queimadasfitasevora"
            target="_blank"
            rel="noopenner noreferrer"
            className="bilhetes navItem"
          >
            Bilhetes
          </a>
        </ul>
      </nav>

      <div className="burger" onClick={toggleNavbarMenu}>
        <div className="burgerText" ref={burgerTextRef}>
          MENU
        </div>
        <div className="drawing" ref={burgerIconRef}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;

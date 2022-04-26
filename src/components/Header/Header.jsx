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
                to="/link1"
                className={`navItem ${
                  location.pathname === "/link1" ? "currentPage" : ""
                }`}
              >
                <span>⚆</span> Link 1
              </Link>
              <Link
                onClick={toggleNavbarMenu}
                to="/link2"
                className={`navItem ${
                  location.pathname === "/link2" ? "currentPage" : ""
                }`}
              >
                <span>⚆</span> Link 2
              </Link>
            </div>
          </li>
          <Link
            onClick={toggleNavbarMenu}
            to="/faq"
            className={`navItem ${
              location.pathname === "/faq" ? "currentPage" : ""
            }`}
          >
            FAQ
          </Link>
          <Link
            onClick={toggleNavbarMenu}
            to="/bilhetes"
            className={`navItem bilhetes ${
              location.pathname === "/bilhetes" ? "currentPage" : ""
            }`}
          >
            Bilhetes
          </Link>
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

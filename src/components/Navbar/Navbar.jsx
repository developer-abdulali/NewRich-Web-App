import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";
import Logo from "../../images/logo.svg";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className={`navbar ${scrolling ? "scrolled" : ""}`}>
        <div className="nav-container">
          <NavLink to="/" className="nav-logo">
            <div className="icon">
              <img src={Logo} alt="logo" />
              <span className="newRichText">NewRich</span>
            </div>
          </NavLink>

          <ul
            className={click ? "nav-menu active" : "nav-menu"}
            style={{ background: "white", padding: "20px" }}
          >
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
              >
                What is Newrich.com?
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
              >
                Careers
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
              >
                Join the Community
              </NavLink>
            </li>
            <NavLink
              exact
              to="/"
              activeClassName="active"
              className="nav-links nav-item"
              id="loginBtn"
            >
              Login
            </NavLink>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {click ? (
              <span className="icon">
                <HamburgetMenuClose className="menuIcon" />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuOpen className="menuIcon" />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;

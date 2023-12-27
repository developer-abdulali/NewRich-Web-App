import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";
import Logo from "../../images/logo.svg";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink to="/" className="nav-logo">
            <span className="icon">
              <img src={Logo} alt="logo" />
            </span>
            <span className="newRich">NewRich</span>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
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
}

export default NavBar;

// import React, { useState } from "react";
// import Logo from "../../images/logo.svg";
// import "./Navbar.css";
// import { Link } from "react-router-dom";
// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <navbar className="Navbar">
//       <img src={Logo} alt="Logo" />
//       <span className="nav-logo">NewRich</span>
//       <div className={`nav-items ${isOpen && "open"}`}>
//         <Link href="/">What is Newrich.com?</Link>
//         <Link href="/">Careers</Link>
//         <Link href="/">The Life Style</Link>
//         <Link href="/contact">Join The Community</Link>
//         <button className="loginBtn">Login</button>
//       </div>
//       <div
//         className={`nav-toggle ${isOpen && "open"}`}
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <div className="bar"></div>
//       </div>
//     </navbar>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsPerson } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";
import { MdOutlineHome } from "react-icons/md";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
const Nav = () => {
  const [navbarblur, setNavbarBlur] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY >= 20) {
        setNavbarBlur(true);
      } else {
        setNavbarBlur(false);
      }
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const showMenu = () => {
    setMenuOpen(true);
  };

  const hideMenu = () => {
    setMenuOpen(false);
  };

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={navbarblur ? "Navbar blur" : "Navbar"}>
      <h1 className="Logo">Nikhil Gautam</h1>

      <div className="Hamburger" onClick={showMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <ul className={menuOpen ? "NavbarLinks showNavbar" : "NavbarLinks"}>
        <li onClick={hideMenu}>
          <Link to="/">
            <MdOutlineHome />
            Home
          </Link>
        </li>
        <li onClick={hideMenu}>
          <Link to="/About">
            <BsPerson />
            About
          </Link>
        </li>
        <li onClick={hideMenu}>
          <Link to="/Project">
            <AiOutlineFundProjectionScreen />
            Projects
          </Link>
        </li>
        <li onClick={hideMenu}>
          <Link to="/Resume">💼Hire Me</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

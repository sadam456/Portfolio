import React, { useState } from "react";
import useTheme from "../context/Porto_Context";
// Navbar Component
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { darkMode, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav id="desktop-nav" className={darkMode ? "dark-mode" : ""}>
        <div className="logo">Rohith Sadam</div>
        <div>
          <ul className="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <button onClick={toggleTheme} className="theme-toggle">
          {darkMode ? "☀️" : "🌙"}
        </button>
      </nav>
      <nav id="hamburger-nav" className={darkMode ? "dark-mode" : ""}>
        <div className="logo">John Doe</div>
        <div className="hamburger-menu">
          <div className="hamburger-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`menu-links ${menuOpen ? "open" : ""}`}>
            <li>
              <a href="#about" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#experience" onClick={toggleMenu}>
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" onClick={toggleMenu}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </div>
        </div>
        <button onClick={toggleTheme} className="theme-toggle">
          {darkMode ? "☀️" : "🌙"}
        </button>
      </nav>
    </>
  );
};

export default Navbar;

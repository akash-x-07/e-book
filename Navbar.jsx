import React, { useState } from 'react';
import './Navbar.css';
import logo from "../logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="logo" />
        <h1>eBookNest</h1>
      </div>

      <nav className={`navbar__links ${isOpen ? 'open' : ''}`}>
        <a href="#home">Home</a>
        <a href="#preview">Preview</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <button className="cta-button">Buy Now</button>
      </nav>

      <div
        className={`hamburger ${isOpen ? 'toggle' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    </header>
  );
}

export default Navbar; 
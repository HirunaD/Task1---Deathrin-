// src/Navbar.jsx
import React from 'react';
import './Navbar.css'; // Import the custom CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          Pictures
        </div>
        <a href="/" className="navbar-link font-poppins">Tokenomics</a>
        <a href="/about" className="navbar-link">Features</a>
        <a href="/contact" className="navbar-link">Connect Wallet</a>

        {/* <ul className="navbar-links">
          <li>
            <a href="/" className="navbar-link">Tokenomics</a>
          </li>
          <li>
            <a href="/about" className="navbar-link">Features</a>
          </li>
          <li>
            <a href="/contact" className="navbar-link">Connect Wallet</a>
          </li>
        </ul> */}
      </div>
    </nav>
  );
};

export default Navbar;

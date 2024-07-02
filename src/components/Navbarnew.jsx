// src/Navbar.jsx
import React from 'react';
// import deathringlogo from '../assets/deathringlogo.png'

const Navbar = () => {
  return (
    <nav className="navbar border-b-4 border-gray-600 bg-gradient-to-r from-leftBlue to-rightBlue">
      <div className="navbar-container max-w-screen-xl mx-auto px-4 flex justify-between items-center">
        <div className="flex space-x-4">
          <a href="./" className="navbar-link text-white hover:text-gray-400 transition duration-300">Pictures</a>
        </div>
        <div>
            <a href="/" className="navbar-link text-white hover:text-gray-400 transition duration-300 font-poppins font-normal text-custom">Tokenomics</a>
        </div>
        <div>
        <a href="/" className="navbar-link text-white hover:text-gray-400 transition duration-300 ml-1 font-poppins font-normal">Features</a>
        </div>
        <a href="/contact" className="navbar-link text-white hover:text-gray-400 transition duration-300 font-poppins font-normal">Connect Wallet</a>
      </div>
    </nav>
  );
};

export default Navbar;

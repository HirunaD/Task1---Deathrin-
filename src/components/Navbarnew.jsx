import React, { useState } from 'react';
import navLogo from '/deathrinlogo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-leftBlue to-rightBlue mx-[72px] rounded-b-lg  h-[80px] ">
      <div className="flex justify-between items-center h-full px-4 lg:px-8 relative">
        <div>
          <img src={navLogo} alt="Logo" className="w-74 h-74"/>
        </div>
        <div className="flex-grow flex justify-end items-center space-x-12">
          <div className="hidden md:flex flex-col justify-between h-full">
            <a href="/" className="navbar-link text-white hover:text-gray-400 transition duration-300 font-poppins font-normal self-end">
              Tokenomics
            </a>
          </div>
          <div className="hidden md:flex space-x-12">
            <a href="/" className="navbar-link text-white hover:text-gray-400 transition duration-300 font-poppins font-normal self-center">
              Features
            </a>
            <a href="/contact" className="navbar-link text-yellow hover:text-gray-400 transition duration-300 font-rubik font-bold border-2 border-yellow rounded-customet w-[163px] h-[50px] flex items-center justify-center text-center">
              Connect Wallet
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="navbar-link block text-white hover:text-gray-400 transition duration-300 font-poppins font-normal">
              Tokenomics
            </a>
            <a href="/" className="navbar-link block text-white hover:text-gray-400 transition duration-300 font-poppins font-normal">
              Features
            </a>
            <a href="/contact" className="navbar-link block text-yellow hover:text-gray-400 transition duration-300 font-rubik font-bold border-2 border-yellow rounded-customet w-full h-[50px] flex items-center justify-center text-center">
              Connect Wallet
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

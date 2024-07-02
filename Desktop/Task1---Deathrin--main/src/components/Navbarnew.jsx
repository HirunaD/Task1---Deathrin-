import React from 'react';

const Navbar = () => {
  return (
    <nav className="border-b-4 border-gray-600 bg-gradient-to-r from-leftBlue to-rightBlue mx-auto rounded-b-lg" 
      style={{ maxWidth: '1296px', height: '80px' }}
    >
      <div className="flex justify-between items-center h-full px-4 lg:px-8">
        <div className="flex items-center space-x-4">
          <a href="./" className="navbar-link text-white hover:text-gray-400 transition duration-300">Pictures</a>
        </div>
        <div className="flex-grow flex justify-end items-center space-x-12">
          <a href="/" className="navbar-link text-white hover:text-gray-400 transition duration-300 font-poppins font-normal text-custom">Tokenomics</a>
          <a href="/" className="navbar-link text-white hover:text-gray-400 transition duration-300 font-poppins font-normal ">Features</a>
          <a href="/contact" className="navbar-link text-yellow hover:text-gray-400 transition duration-300 font-rubik font-bold border-2 border-yellow rounded-customet"
          style={{
            width: '163px',
            height: '50px',
            display: 'flex',
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center'
          }}>Connect Wallet</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

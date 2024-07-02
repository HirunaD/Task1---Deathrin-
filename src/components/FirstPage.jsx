// src/pages/FirstPage.jsx
import React from 'react';
import backgroundImage from "/1bg.png";

const FirstPage = () => {
  return (
    <div 
      className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-8" 
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }}
    >
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}

      {/* Content */}
      <div className="relative z-10 text-center text-white">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          Welcome to DEATHRIN
        </h1>
        <p className="mt-4 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto">
          Deathrine is a revolutionary token designed to redefine decentralized finance. 
          Inspired by the fierce and fearless characters of Deadpool and Wolverine, 
          Deathrine combines strength, agility, and resilience in the world of blockchain.
        </p>
        <p className="mt-2 text-base sm:text-lg lg:text-xl">
          BuY NoW
        </p>
      </div>
    </div>
  );
};

export default FirstPage;

// src/pages/FirstPage.jsx
import React from 'react';
import backgroundImage from "/1bg.png";

const FirstPage = () => {
  return (
    <div 
      className="relative flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-8" 
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        // width: '1440px',
        height: '465px'
      }}
    >
     
      <div className="relative z-10 text-center text-white">
        <div>
        <p className="font-deadpool font-normal text-customff">
          WELCOME TO
        </p>
        <p className='font-deadpool font-normal text-large'>
          DEATHRIN
        </p>
        </div>
        <div>
        <p className="mt-2 text-base sm:text-lg lg:text-xl max-w-6xl mx-auto font-rubik font-normal text-customtw">
          Deathrine is a revolutionary token designed to redefine decentralized finance. 
          Inspired by the fierce and fearless characters of Deadpool and Wolverine, 
          Deathrine combines strength, agility, and resilience in the world of blockchain.
        </p>
        </div>
        <div>
        <button className="mt-2 text-base sm:text-lg lg:text-xl bg-gradient-to-r from-leftbuynow to-rightbuynow hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          BuY NoW
        </button>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;

import React from 'react';
import twitesbg from '/twitesbg.png';
import insta from '/insta.png'; 
import fight from '/fight.png'; 
import first from '/1.png';
import second from '/2.png'; 
import third from '/3.png'; 
import fourth from '/4.png'; 
import fifth from '/5.png'; 
import sixth from '/6.png'; 
import mount from '/twitmount.png';
import TwitterPost from '../components/TwitterPost';

function Tweets() {
  return (
    <div className="relative flex flex-col items-center">
      
      <img 
        src={twitesbg} 
        alt="Twites Background" 
        className="w-full h-auto object-cover" 
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-8 -mt-[1200px]">
        
        <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl text-center font-deadpool font-normal text-customff">
          SEE TWITES
        </h1>

        <div className="relative flex flex-wrap items-center justify-center mt-20 space-x-4 space-y-4">

          <TwitterPost />

          <div className="flex flex-col space-y-4">
            <img 
              src={first} 
              alt="1st" 
              className="w-[185px] h-[185px] object-cover" 
            />
            <img 
              src={second} 
              alt="2nd" 
              className="w-[185px] h-[185px] object-cover" 
            />
          </div>

          <div className="flex flex-col space-y-4">
            <img 
              src={third} 
              alt="3rd" 
              className="w-[185px] h-[185px] object-cover" 
            />
            <img 
              src={fourth} 
              alt="4th" 
              className="w-[185px] h-[185px] object-cover" 
            />
          </div>

          <img 
            src={fifth} 
            alt="5th" 
            className="w-[185px] h-[185px] object-cover" 
          />

          <img 
            src={sixth} 
            alt="6th" 
            className="w-[185px] h-[185px] object-cover" 
          />

        </div>
      </div>

      <div className="relative w-full mt-2">
        <img 
          src={mount} 
          alt="Mount Background" 
          className="w-full h-auto object-cover" 
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <button className="mt-2 text-base sm:text-lg lg:text-xl bg-gradient-to-r from-leftbuynow to-rightbuynow hover:bg-blue-700 
             text-white font-bold py-2 px-4 rounded-customet w-[210px] h-[48px]">            
            BuY NoW
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tweets;

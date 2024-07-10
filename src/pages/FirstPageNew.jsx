import React from 'react';
import mountainImg from '/mountain.png'; 
import moonImg from '/assets/newmoon.png'; 
import mens4x from '/mens4x.png';
import stars from '/stars.png';
import bluestars from '/bluestar.png'
import Navbar from '../components/Navbarnew';
import fullbg from '/assets/fullnew2.png'

const FirstPageNew = () => {
  return (
    <div className="relative w-full h-screen max-w-screen-[1600px] mx-auto">
        <div className='absolute inset-0 h-[screen]' style={{backgroundImage: `url(${stars})`}}>

            <Navbar />
                  
        <div className='absolute inset-0 top-[22%] h-[465px]' style={{backgroundImage: `url(${bluestars})`}}></div>
         <div className="relative z-30 flex flex-col items-center justify-center text-center text-white p-4">
         <p className="font-deadpool font-normal h-[30px] md:mt-0 md:text-customff text-[23px] -mt-12">WELCOME TO</p>
         <p className='font-deadpool font-normal md:text-large text-[51px] -mt-2'>DEATHRIN</p>
         <p className="mt-2 text-base text-[14px] sm:text-[14px] md:text-[20px] lg:text-xl max-w-6xl mx-auto font-rubik font-normal">
              Deathrine is a revolutionary token designed to redefine decentralized finance. 
              Inspired by the fierce and fearless characters of Deadpool and Wolverine, 
              Deathrine combines strength, agility, and resilience in the world of blockchain.
         </p>        
         
         <button className="mt-6 text-[13px] sm:text-lg lg:text-xl bg-gradient-to-r from-leftbuynow to-rightbuynow hover:bg-blue-700 
              text-white font-bold py-2 px-4 rounded-customet w-[170px] h-[38px] md:w-[210px] md:h-[48px]">            
              BuY NoW
         </button>      
        </div>
        </div>
      <div className="absolute inset-0 bg-contain bg-no-repeat bg-center z-10 -bottom-[40%]" style={{ backgroundImage: `url(${mountainImg})` }}></div>
      <div className="absolute top-0 left-[5%] right-0 lg:-bottom-[20%] bottom-0 bg-no-repeat bg-center z-20 " style={{ backgroundImage: `url(${moonImg})` }}></div>
      <div className="absolute top-[0%] left-0 right-0 -bottom-[80%] bg-contain bg-no-repeat bg-center z-20" style={{ backgroundImage: `url(${mens4x})` }}></div>
   
    </div>
  );
};

export default FirstPageNew;
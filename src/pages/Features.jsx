import React from 'react'
import featurebg from '/featuresbg.png'
import twoface from '/twoface.png'

function Features() {
  return (
    <div>
      <div className="relative flex flex-col items-center">
      
      {/* Tokenomics Background Section */}
      <div className="relative w-full">
        <img 
          src={featurebg} 
          alt="Tokenomics Background" 
          className="w-full h-[316px] object-cover " 
        />

        <img
            src={twoface}
            alt='twofaces'
            className='relative inset-0 z-0 w-[883px] h-[883px] -top-[200px]'
        />
            {/* relative inset-0 object-cover z-0 -top-[00px] h-[883px] w-[883px] */}
      </div>

      <div className="absolute inset-0 flex items-center justify-center z-10 top-[10px] left-[900px]">
          <div className="flex flex-col items-start pl-10">
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-roguehero font-normal text-customft mb-5 h-[60px]">
              FEATURES
            </h1>
            <p className="text-white text-lg sm:text-xl lg:text-2xl font-rubik text-customtw max-w-lg">
            Deathrine combines robust security with the agility of DeFi solutions, inspired by the bold characters of 
            Deadpool and Wolverine. Enjoy secure and transparent transactions on our advanced blockchain platform. 
            Engage in lending, borrowing, and staking with low fees and fast processing speeds. Benefit from cross-chain 
            compatibility, allowing seamless integration across various blockchain networks. As a community-driven token, 
            Deathrine empowers you to have a say in the platform's future, ensuring a decentralized and inclusive financial 
            system. Embrace the future of finance with the power and resilience of Deathrine.            
            </p>

            <div>
            <button className="mt-12 text-base sm:text-lg lg:text-xl bg-gradient-to-r from-leftbuynow to-rightbuynow hover:bg-blue-700 
             text-white font-bold py-2 px-4 rounded-customet w-[210px] h-[48px]">            
                BuY NoW
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features

import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
<div
  className="relative flex items-center justify-start h-[400px] sm:h-[450px] bg-cover bg-center rounded-lg overflow-hidden"
  style={{
    backgroundImage: `url(${assets.hero_img})`, // Use your background image here
  }}
>
  {/* Overlay for better text readability (optional) */}
  <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>

  {/* Text content */}
  <div className="relative z-10 px-4 sm:px-10 text-white w-full sm:w-1/2">
    <div className="text-left">
      {/* Tagline */}
      <div className="flex items-center gap-2 mb-3">
        <p className="w-8 h-[2px] bg-white"></p>
        <p className="font-medium text-sm sm:text-base">OUR BESTSELLERS</p>
      </div>

      {/* Main Heading */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
        Latest Arrivals
      </h1>

      {/* Subtitle
      <p className="text-lg text-gray-200 mb-6">
        Explore a World of Cutting-Edge Tech
      </p> */}

      {/* Shop Now Button */}
      <button className="px-6 py-2 bg-white text-black font-semibold rounded-full hover:bg-gray-300 transition duration-300">
        Shop now
      </button>
    </div>
  </div>
</div>


  )
}

export default Hero

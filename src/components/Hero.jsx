import React from 'react'
import ghmVideo from '../assets/ghm-trailer.mp4';
import poster from '../assets/poster.png'
import useLocoScroll from "../hooks/useLocoScroll";



const Hero = ({preloader}) => {
  // useLocoScroll(!preloader)
  return (
    <div id="hero" className="section bg-ghmDark w-full text-left px-10 py-28 md:py-40 md:px-[400px] h-screen flex flex-col justify-center">
      <video src={ghmVideo} className="object-cover w-screen absolute top-0 left-0 h-screen" playsInline autoPlay loop muted id="video" poster={poster}> {/* CUSTOM CSS in App.CSS */}
      </video>
      <div id="video-text" className="leading=[15rem]">
        <p className="headerText text-outline text-4xl md:text-6xl 2xl:text-7xl">Experience the</p>
        <p className="text-ghmGreen text-4xl md:text-6xl 2xl:text-7xl font-bold">True power of</p>
        <p className="headerText text-outline text-4xl md:text-6xl 2xl:text-7xl">Electric Bikes</p>
        

        <button className="my-10 text-sm bg-ghmGreen px-5 py-3 rounded-full">Explore Now</button>
      </div>
    </div>
  )
}

export default Hero
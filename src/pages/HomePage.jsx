import { useEffect, useRef } from 'react'
import {BikeComponent, Features, Hero, HomeCarousel} from '../components'
import useLocoScroll from "../hooks/useLocoScroll";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


const HomePage = ({preloader}) => {
    // useLocoScroll(!preloader)
    gsap.registerPlugin(ScrollTrigger);
  
 
  return (
    <>
      <div className="bg-ghmLight" preloader={preloader} data-scroll-section>
        <Hero id="heros" className='section' preloader={preloader} data-scroll/>
        <Features id="featt" className='section' preloader={preloader} data-scroll/>
        <BikeComponent className='section' preloader={preloader} data-scroll />
      </div>
    </>
  )
}

export default HomePage;
import React,{useState} from 'react';
import {models} from '../utils/data';
import RightArrow from '../assets/arrow-right-2.png'
import LeftArrow from '../assets/arrow-left-2.png'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
//import useLocoScroll from "../hooks/useLocoScroll";

const HomeCarousel = () => {
  gsap.registerPlugin(ScrollTrigger)
   //   useLocoScroll()
  const [current, setCurrent] = useState(0);
  const length = models.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }



  if(!Array.isArray(models) || models.length <=0 ){
    return null;
  }

  

  return (
    <>

            <div className="hidden w-full h-screen bg-ghmGray px-10 md:flex justify-center items-center relative gap-10"> 
                <div className="flex items-center justify-center w-full">
                    <img src={RightArrow} className="absolute right-10 cursor-pointer" onClick={nextSlide} alt="" />
                    <img src={LeftArrow} className="absolute left-10  cursor-pointer"  onClick={prevSlide} alt="" />
                </div>
                {models && models.map((model, key) => (
                    <div className={`${key === current ? 'slide active': 'slide'}`} key={key}>
                        <img src={model.image} className="2xl:w-auto w-[550px] absolute left-48 2xl:left-72 2xl:top-72 top-48" alt="" />
                        <h1 className="absolute top-24 left-48 text-7xl">{model.name}</h1>
                        <div className="absolute w-80 md:right-48 2xl:right-72 flex flex-col gap-8 justify-center items-center">
                            <p className="">{model.desc}</p>
                            <button className="border-2 px-12 py-4 rounded-full cursor-pointer transition-all duration-200 ease-in-out" >Visit</button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="md:hidden w-full h-screen justify-center items-center relative bg-ghmGray py-10 overflow-x-hidden">
                  {models && models.map((model, key) => (
                    <div className={`${key === current ? 'slide-mobile active': 'slide-mobile'} absolute w-screen`} key={key}>
                        <img src={model.image} className="w-72" alt="" />
                        <div className="flex flex-col justify-center items-end gap-5 absolute cursor-pointer">
                          <h1 className="text-4xl">{model.name}</h1>
                          <div className="w-80 text-right">
                            <p className="py-8">{model.desc}</p>
                            <button className="border-2 border-ghmDark bg-ghmGray text-ghmDark hover:bg-ghmDark hover:text-ghmLight px-12 py-4 rounded-full cursor-pointer transition-all duration-200 ease-in-out" >Visit</button>
                          </div>
                          
                        </div>
                    </div>
                  ))}

                  <div className="flex items-center justify-center gap-10 w-full absolute bottom-36">
                      <img src={LeftArrow} className="cursor-pointer"  onClick={prevSlide} alt="" />
                      <img src={RightArrow} className="cursor-pointer" onClick={nextSlide} alt="" />
                  </div>
            </div>
    
    </>
  )
}

export default HomeCarousel
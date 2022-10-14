import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import { Pagination, Mousewheel, Navigation } from "swiper";
import "swiper/scss/pagination";
import "swiper/scss/mousewheel";
import "swiper/scss/navigation"
import useLocoScroll from "../hooks/useLocoScroll";
import ModelL from '../assets/L1.png';
import EMIBox from '../assets/emi.png'
import { Range, ColorGreen, ColorLight, ColorBW, ColorOrange } from "../assets/index";
import CarouselBG from '../assets/CarouselBG.png'

const Models = ({preloader}, product) => {
  // useLocoScroll(!preloader)
  return (
    <>
    <div className="bg-ghmLight" data-scroll-section>
      <div className="flex justify-center items-center flex-col overflow-hidden" data-scroll>
        <img src={ModelL} alt="" />
        <div className="w-full h-[300px] bg-[#E3E3E3] absolute flex top-48 -z-10">
          <p className="text-9xl font-bold text-outline mt-auto text-white">MODEL-L</p>
        </div>
      </div>

      <div className="w-full flex justify-center items-center gap-24 px-16" data-scroll>
        <div className="w-[25%] flex flex-col justify-center items-center gap-10">
          <ul className="flex flex-col justify-center items-center gap-10">
            <li>
              <h2 className="text-4xl font-semibold">MODEL-L</h2>
            </li>
            <li>
              <p className="text-left">Best e- bike you can get  at the best price available in market, smoothest and cleanest ride.</p>
            </li>
            <li className="flex items-center justify-center mr-auto gap-4">
              <p>Rs 24,999</p>
              <p className="text-ghmGray line-through">Rs.27,999</p>
              <button className="bg-[#EC493F] px-7 py-2 ml-auto rounded-md text-white">Buy Now</button>
            </li>
            <li className="">
              <img src={EMIBox} alt="" />
            </li>
          </ul>
        </div>

        <div className="w-[55%] h-full bg-no-repeat bg-cover rounded-3xl overflow-hidden flex justify-center items-center py-16 relative" style={{backgroundImage:`url(${CarouselBG})`}}>
            <Swiper modules={[Navigation, Pagination]} navigation = {true} pagination>
                <SwiperSlide>
                  <img className="w-[500px]" src={ModelL} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="w-[500px]" src={ModelL} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="w-[500px]" src={ModelL} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="w-[500px]" src={ModelL} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="w-[500px]" src={ModelL} alt="" />
                </SwiperSlide>
            </Swiper>
            <div className="flex justify-center items-center gap-5 absolute right-10 bottom-5">
              <div className="color-active"><img src={ColorGreen} className="w-4" alt="" /></div>
              <div className=""><img src={ColorBW} className="w-4" alt="" /></div>
              <div className=""><img src={ColorOrange} className="w-4" alt="" /></div>
              <div className=""><img src={ColorLight} className="w-4" alt="" /></div>
            </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-10">
      </div>
      
    </div>
    </>
  )
}

export default Models
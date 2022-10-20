import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import { Pagination, Mousewheel, Navigation } from "swiper";
import "swiper/scss/pagination";
import "swiper/scss/mousewheel";
import "swiper/scss/navigation"
import ModelL from '../assets/L1.png';
import Range from "../assets/range.png";
import useLocoScroll from "../hooks/useLocoScroll";

const Product = () => {
    useLocoScroll()
  return (
    <div className="w-full flex flex-col md:flex-row 2xl:px-32 md:px-12 px-3 bg-ghmLight h-screen overflow-hidden">
        <div className="w-full md:w-3/4 py-16 pt-40 md:pt-15 flex justify-center items-center relative md:h-screen">
            <h1 className="2xl:text-9xl md:text-8xl text-4xl font-extrabold text-gray-300 absolute">MODEL-L</h1>
            <Swiper modules={[Navigation, Pagination]} navigation = {true} pagination>
                <SwiperSlide>
                    <img className="w-3/4" src={ModelL} alt="model-l-bike.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-3/4" src={ModelL} alt="model-l-bike.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-3/4" src={ModelL} alt="model-l-bike.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-3/4" src={ModelL} alt="model-l-bike.png" />
                </SwiperSlide>
            </Swiper>
        </div>

        <ul className="flex flex-col justify-start items-center md:basis-1/3 text-black py-12 md:mt-28 h-screen overflow-scroll bg-white rounded-md">
            <li className="w-full flex flex-col justify-center items-center px-10">
                <h1 className="block text-left text-5xl md:text-5xl 2xl:7xl">MODEL-L</h1>
                <p className="py-6 text-sm 2xl:text-base">E-bike you can get at the best price available in market, smoothest and cleanest ride.</p>
            </li>

            <li className="w-full flex flex-col justify-center items-start px-6 py-8">
                <h3 className="text-ghmDark text-left">Price</h3>
                <div className="w-full flex gap-2 flex-row justify-center items-center text-sm 2xl:text-base">
                    <p>Rs 24,999</p>
                    <p className="text-ghmGray line-through">Rs.27,999</p>
                    <button className="bg-ghmGreen px-5 py-2 ml-auto rounded-full">Buy Now</button>
                </div> 
            </li>
            
            <li className="w-full mb-36">
                <Swiper pagination={{dynamicBullets: true}}
                    modules={[Pagination, Mousewheel]}
                    mousewheel={{enabled: true  }}
                    className="mySwiper">
                    <SwiperSlide>
                        <ul>
                            <li className="w-full flex flex-col justify-center items-center px-6 py-8 mb-12">
                                <h3 className="text-ghmDark text-left">Experience</h3>
                                <ul className="grid grid-cols-2 grid-rows-2 gap-8 2xl:gap-x-18 py-6">
                                    <li className="flex flex-col justify-center items-center">
                                        <p className="text-3xl font-semibold">60<span className="text-lg font-normal">KMPC</span></p>
                                        <img width={80} src={Range} alt="range.png" />
                                    </li>

                                    <li className="flex flex-col justify-center items-center">
                                        <p className="text-3xl font-semibold">60<span className="text-lg font-normal">KMPC</span></p>
                                        <img width={80} src={Range} alt="range.png" />
                                    </li>

                                    <li className="flex flex-col justify-center items-center">
                                        <p className="text-3xl font-semibold">60<span className="text-lg font-normal">KMPC</span></p>
                                        <img width={80} src={Range} alt="range.png" />
                                    </li>

                                    <li className="flex flex-col justify-center items-center">
                                        <p className="text-3xl font-semibold">60<span className="text-lg font-normal">KMPC</span></p>
                                        <img width={80} src={Range} alt="range.png" />
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </SwiperSlide>

                    <SwiperSlide>
                        <ul>
                            <li className="w-full flex flex-col justify-center items-center px-6 py-8 mb-12">
                                <h3 className="text-ghmDark text-left">Experience</h3>
                                <ul className="grid grid-cols-2 grid-rows-2 gap-8 2xl:gap-x-18 py-6">
                                    <li className="flex flex-col justify-center items-center">
                                        <p className="text-3xl font-semibold">60<span className="text-lg font-normal">KMPC</span></p>
                                        <img width={80} src={Range} alt="range.png" />
                                    </li>

                                    <li className="flex flex-col justify-center items-center">
                                        <p className="text-3xl font-semibold">60<span className="text-lg font-normal">KMPC</span></p>
                                        <img width={80} src={Range} alt="range.png" />
                                    </li>

                                    <li className="flex flex-col justify-center items-center">
                                        <p className="text-3xl font-semibold">60<span className="text-lg font-normal">KMPC</span></p>
                                        <img width={80} src={Range} alt="range.png" />
                                    </li>

                                    <li className="flex flex-col justify-center items-center">
                                        <p className="text-3xl font-semibold">60<span className="text-lg font-normal">KMPC</span></p>
                                        <img width={80} src={Range} alt="range.png" />
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </SwiperSlide>
                </Swiper>
            </li>
        </ul>
    </div>
  )
}

export default Product
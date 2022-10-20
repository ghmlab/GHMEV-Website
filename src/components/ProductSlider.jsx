import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import { Pagination, Navigation } from "swiper";
import "swiper/scss/pagination";
import "swiper/scss/mousewheel";
import "swiper/scss/navigation"

const ProductSlider = ({data}) => {
    // console.log(data)

  return (
    <>
        {data && (data.map((item) => (
            <Swiper key={item.id} modules={[Navigation, Pagination]} navigation = {true} pagination>
                {item?.cycles?.images?.map((data) => (
                    <SwiperSlide key={data.id}>
                        <img className="w-[300px] md:w-[500px]" src={data.image} alt="" />
                    </SwiperSlide>
                ))}
            </Swiper>
        )))}
    </>
  )
}

export default ProductSlider
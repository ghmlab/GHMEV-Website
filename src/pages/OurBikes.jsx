import React from 'react'
import {BikeOverview} from "../components/"
import useLocoScroll from "../hooks/useLocoScroll"
import {models} from '../utils/data'

const OurBikes = () => {
  useLocoScroll()
  return (
    <div className="bg-ghmLight w-full h-screen text-ghmDark px-10 py-28 md:py-40 md:px-32 flex flex-col gap-14 justify-start items-start" >
        <h1>Our Bikes</h1>
        
        <div className="flex flex-col md:flex-row w-full justify-center gap-10 md:text-xs 2xl:text-base" >
            {models && models.map((ele, id) => (
                <ul className="px-4 py-10 rounded-2xl hover:shadow-lg transition-all duration-200 ease-in-out " key={id}>
                    <li><BikeOverview name={ele.name} price={ele.price} desc={ele.desc} image={ele.image}/></li>
                </ul>
            ))}
        </div>
    </div>
  )
}

export default OurBikes
import React from 'react';
import {Link} from 'react-router-dom'
import useLocoScroll from "../hooks/useLocoScroll";


const BikeOverview = ({key, name, price, desc, image}) => {
  useLocoScroll()
  return (
    <div key={key} className="w-full flex flex-col items-center md:w-50">
        <img className="w-60 md:w-80" src={image} alt="model-l-bicycle" />
        <h2>{name}</h2>
        <p>{desc}</p>
        <Link to="/Product"><button className="mt-5 border-2 border-ghmDark px-8 py-2 rounded-full hover:bg-ghmDark hover:text-white transition-all duration-100 ease-in-out">Buy Now</button></Link>
    </div>
  )
}

export default BikeOverview
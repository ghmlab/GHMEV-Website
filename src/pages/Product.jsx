import React, {useState, useEffect} from 'react';
import EMIBox from '../assets/emi.png'
import CarouselBG from '../assets/CarouselBG.png'
import {ProductFeatures, ProductSlider} from "../components/";
import { Link, useLocation } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const Product = ({product, key}) => {
 const [{cartItems}, dispatch] = useStateValue();
 
 const[isActive, setIsActive] = useState(0);
 const [filter, setFilter] = useState(product.colors[0].id)

 const location = useLocation()

 useEffect(() => {

 },[location.pathname])
 const addToCart = (product, id) => {
    
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: [...cartItems, product]
    })

    
    let cartCount = parseInt(localStorage.getItem("cartCount"))
    localStorage.setItem("cartCount", cartCount+1)
 }
  return (
    <>
    <div key={key} className="section w-full bg-ghmLight flex flex-col justify-center items-center gap-10 mt-[100px]">
      <div className="w-full flex justify-center items-center flex-col overflow-hidden relative" >
        <img src={product.mainImage} className="w-[800px] py-10 z-10" alt="" />
        <div className="w-full h-[300px] bg-[#E3E3E3] absolute flex top-52 z-0">
          <p className="text-9xl font-bold text-outline mt-auto text-white">{product.title}</p>
        </div>
      </div>

      <div className="w-full flex md:flex-row flex-col justify-center items-center gap-24 md:px-12 2xl:px-16" >
        <div className="md:w-[35%] 2xl:w-[25%] w-full flex flex-col justify-center items-center gap-10 md:px-12 px-16">
          <ul className="flex flex-col justify-center items-center gap-5">
            <li>
              <h2 className="text-4xl font-semibold capitalize">{product.title}</h2>
            </li>
            <li>
              <p>{product.desc}</p>
            </li>
            <li className="flex items-center justify-center gap-4">
              <p>Rs.{product.discountPrice.toLocaleString()}</p>
              <p className="text-gray-400 line-through">{product.price.toLocaleString()}</p>
              <Link to="/cart"><button className="bg-[#EC493F] px-7 py-2 ml-auto rounded-md text-white" onClick={() => addToCart(product, product.id)}>Add to Cart</button></Link>
            </li>
            <li className="">
              <img src={EMIBox} alt="" />
            </li>
            <li  className="grid grid-cols-2 gap-5 ">
              {product.experience.map((e) => <div key={e.id}><img src={e.image} alt={e.title} className="w-28" /></div>)}
            </li>
          </ul>
        </div>

        <div className="md:w-[55%] 2xl:w-[35%] w-full h-full bg-no-repeat bg-cover rounded-lg gap-6 md:rounded-3xl overflow-hidden flex md:flex-row flex-col justify-center items-center py-16 relative" style={{backgroundImage:`url(${CarouselBG})`}} >
            <ProductSlider data={product?.colors?.filter((color) => color.id === filter)} />
            <div>
              <div className="flex justify-center items-center gap-5 md:absolute right-10 bottom-5" >
                {product.colors.map((color) => <div key={color.id}><img key={color.id} src={color.image} className={`w-4 cursor-pointer ${isActive === color.id ? 'color-active' : ''}`} onClick = {() => {setIsActive(color.id); setFilter(color.id)}} alt="" /></div>)}
              </div>
            </div>
        </div>
      </div>

      <div id="feature-section" className="w-full h-screen md:overflow-scroll relative">
        <h1 id="feature-sticky" className="hidden md:block montserrat font-bold text-ghmDark -rotate-90 text-9xl 2xl:text-[10rem] absolute top-96 -left-[20%] 2xl:-left-[20%]">FEATURES</h1> 
        <ProductFeatures product={product.features}/>
      </div>
      
    </div>
    
    <div className="h-[200px]">
    </div>
    </>
  )
}

export default Product
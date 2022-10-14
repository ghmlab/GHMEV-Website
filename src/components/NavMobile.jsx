import React from 'react'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion';
import { Products } from "../utils/product";

const NavMobile = (navOpen, showNav) => {
  
  const animated = {
    open: {x:0, duration: 0.5},
    closed: {x: "-100%"}
  }

  return (
    <>
        <motion.ul animate={navOpen ? 'open' : 'close'} variants={animated}
        className={`flex flex-col text-white w-full absolute top-0 right-0 h-screen justify-center items-center transition-all ease-linear duration-200 gap-10 text-2xl bg-ghmDark`}>
                <li className="hover:text-ghmGreen transition all ease-in-out duration-200">
                  ABOUT
                </li>
                <ul className="text-white flex flex-col justify-between items-center text-sm gap-12">
                {
                  (Products.map((product, key) => <Link key={key} to={{pathname: `/${product.url}`, state: {product: product}}} onClick={showNav}><li className="hover:text-ghmGreen text-2xl transition all ease-in-out duration-200 cursor-pointer" data-scroll-section>{product.title}</li></Link>))
                }
                </ul>
        </motion.ul>
    </>
  )
}

export default NavMobile
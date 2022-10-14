import React, { useEffect } from 'react'
import {Products} from '../utils/product'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'
import logoDark from '../assets/logoDark.png'
import Menu from '../assets/menu.png'
import MenuDark from '../assets/menu-dark.png'
import Close from '../assets/close.png'
import { actionType } from '../context/reducer';
import { useStateValue } from '../context/StateProvider'
import NavMobile from "./NavMobile";
import useLocoScroll from "../hooks/useLocoScroll"


const Navbar = ({preloader, ref}) => {
  
  const location  = useLocation()

  let URLs = []
  
  for (let i = 0; i < Products.length; i++) {
    URLs[i] = Products[i].url
  }

  const path = `/${URLs.indexOf(location.pathname) > -1}` && location.pathname !== '/'



  const [{ navOpen }, dispatch] = useStateValue()

  useEffect(() => {
    const handleScroll = event => {
      console.log('scrolled', window.scrollY)
    };

    window.addEventListener('scroll', handleScroll);

    return() => {
      window.removeEventListener('scroll', handleScroll);
    }
  },[])

  const showNav = () => {
    dispatch({
      type: actionType.SET_NAV_OPEN,
      navOpen: !navOpen
    })
  }
  return (
    
    <nav id="navbar" className="w-screen fixed" data-scroll-section>
      {/* ------------ DARK NAVBAR----------------- */}
      {path ? (// This path is used to know on the path of the page to change nav color accordingly

        <div className={`hidden md:flex w-full justify-between items-center bg-ghmLight px-5 md:px-10 lg:px-20 py-6`} data-scroll-section>
        <Link to="/"><img src={logoDark} className=" md:w-20" alt="ghm logo" /></Link>
        <ul className="text-ghmDark flex justify-between items-center text-sm gap-12">
          {
            (Products.map((product, key) => <Link key={key} to={{pathname: `/${product.url}`, state: {product: product}}} ><li className="hover:text-ghmGreen transition all ease-in-out duration-200 cursor-pointer" data-scroll-section>{product.title}</li></Link>))
          }
        </ul>
        <ul className="text-ghmDark flex justify-between items-center gap-5 text-sm">
          <li className="hover:text-ghmGreen transition all ease-in-out duration-200">ABOUT</li>
          <li className="hover:text-ghmGreen transition all ease-in-out duration-200">
            <Link to="/OurBikes">OUR BIKES</Link>
          </li>
        </ul>
        </div>
        
      ) :
      
      (
        <div className={`navMain hidden md:flex w-full justify-between items-center px-5 md:px-10 lg:px-20 py-6`}>
          <Link to="/"><img src={logo} className=" md:w-20" alt="ghm logo" /></Link>
          <ul className="text-white flex justify-between items-center text-sm gap-12">
            {
              (Products.map((product, key) => <Link key={key} to={{pathname: `/${product.url}`, state: {product: product}}} ><li className="hover:text-ghmGreen transition all ease-in-out duration-200 cursor-pointer" data-scroll-section>{product.title}</li></Link>))
            }
          </ul>
          <ul className="text-white flex justify-between items-center gap-5 text-sm">
            <li className="hover:text-ghmGreen transition all ease-in-out duration-200">ABOUT</li>
            <li className="hover:text-ghmGreen transition all ease-in-out duration-200">
              <Link to="/OurBikes">OUR BIKES</Link>
            </li>
          </ul>
        </div>
      )
      }

      

        {/*-------MOBILE VIEW------------ */}
        {path? ( // This path is used to know on the path of the page to change nav color accordingly
        <div className="md:hidden w-full flex justify-between items-center px-5 md:px-10 lg:px-20 py-6 bg-ghmLight">
        <Link to='/' className="z-50" onClick={navOpen === true ? showNav : ''}><img src={logoDark} className="w-16" alt="ghm logo" /></Link>
        <button onClick={showNav} className="z-50">{navOpen === true ? <img src={Close} alt="menu-button" className="w-8"/> : <img src={MenuDark} alt="menu-button" className="w-8"/>}</button>
        {navOpen && (
          <>
            <NavMobile navOpen = {navOpen} showNav = {showNav} />
          </>
        )}
        </div>
        ) : (
          <div className="md:hidden w-full flex justify-between items-center px-5 md:px-10 lg:px-20 py-6">
            <Link className="z-50" onClick={navOpen === true ? showNav : ''}><img src={logo} className="w-16" alt="ghm logo" /></Link>
            <button onClick={showNav} className="z-50">{navOpen ? <img src={Close} alt="menu-button" className="w-8"/> : <img src={Menu} alt="menu-button" className="w-8"/>}</button>
            {navOpen && (
              <>
                <NavMobile  navOpen = {navOpen} showNav = {showNav} />
              </>
            )}
        </div>
        )
        }
    </nav>
  )
}

export default Navbar
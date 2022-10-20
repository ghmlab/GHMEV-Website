import React from 'react';
import { Link } from "react-router-dom";
import { BsFillTelephoneFill, BsFillEnvelopeFill, BsInstagram, BsLinkedin } from "react-icons/bs";
import { MdLocationOn } from 'react-icons/md'
import logo from '../assets/logoDark.png'

const Footer = () => {
  return (
    <footer className="flex justify-between items-center bg-white z-1 relative gap-20 p-10">
        <img src={logo} alt="logo" className="w-24" />
        <ul className="flex justify-center items-center gap-5 w-[90%] text-gray-700"> 
            <Link to="/model-l"><li>Model L</li></Link>
            <Link to="/model-i"><li>Model I</li></Link>
            <Link to="/model-f"><li>Model F</li></Link>
            <Link to="/model-e"><li>Model E</li></Link>
        </ul>
        <ul className="flex flex-col justify-center items-center gap-2 text-gray-700 flex-wrap"> 
            <li className="flex justify-center items-center gap-5">
              <a href="tel:9000977879"><BsFillTelephoneFill /></a>
              <a href="mailto:switch@ghmev.com"><BsFillEnvelopeFill /></a>
              <a href="https://www.instagram.com/ghmev"><BsInstagram /></a>
              <a href="https://www.linkedin.com/company/gear-head-motors"><BsLinkedin /></a>
              <a  className="text-xs text-gray-600" href="https://www.google.com/maps?q=Plot+8-19,+20-21,+Narepally,+Hyderabad,+Telangana+501301"><MdLocationOn size={18} /></a>
            </li>
        </ul>
    </footer>
  )
}

export default Footer
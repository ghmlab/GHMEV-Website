import React, { useState, useCallback } from 'react'
import logo from '../assets/logoDark.png'
import {BsArrowRightShort, BsCart2 } from 'react-icons/bs'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import { Pagination, Navigation } from "swiper";
import "swiper/scss/pagination";
import "swiper/scss/mousewheel";
import "swiper/scss/navigation"
import { actionType } from "../context/reducer";
import { useStateValue } from "../context/StateProvider";
import { CartComponent } from "../components";
import { Link, redirect, useNavigate } from "react-router-dom";
import { useEffect } from "react";

let checkout = []

const CartPage = ({cartItems}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('')
  const [pinCode, setPinCode] = useState();

  const [temp, setTemp] = useState(false)
  const [total, setTotal] = useState(0);
  const emailValidate = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  const phoneValidate = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/g;


  const redirect = useNavigate()
  const handleSubmit = (data) => {

    if(!name || !address || !city || state === 'State' || !pinCode){
      document.getElementById("error-main").classList.remove('hidden')
    }
    if(!emailValidate.test(email)){
      document.getElementById("email-error").classList.remove('hidden')
      document.getElementById("email-input").style.borderColor = "red"
    }

    if(!phoneValidate.test(phone) || phone.length < 10){
      document.getElementById("phone-error").classList.toggle('hidden')
      document.getElementById("phone-input").style.borderColor = "red"
    }

    else{
      const user = {
        name: name,
        email: email,
        phone: phone,
        address: address,
        city: city,
        state: state,
        pinCode: pinCode
      }
      setTemp(true)
      localStorage.setItem("userData", JSON.stringify(user));
      
      setTimeout(() => {
        setTemp(false)
        clearData()
      }, 2000); 

      redirect("/checkout")

    }
  }

  const clearData = () => {
    setName('');
    setAddress('');
    setCity('');
    setEmail('')
    setPhone('')
    setPinCode('')
    setState('')
  }

  

  return (
    <>
      {cartItems && cartItems.length > 0 ? (
        <div className="w-full flex md:flex-row flex-col justify-center items-center montserrat mt-[100px] md:px-24">
        <div className="md:w-[55%] 2xl:w-[35%] bg-no-repeat bg-cover rounded-3xl flex flex-col gap-5 justify-center items-center py-6 px-6" >
              <div className="text-left w-full">
                <h1 className="text-4xl font-semibold">CART</h1>
                <p className="text-sm"><i>Slide to view more added items</i></p>
              </div>
              <Swiper modules={[Navigation, Pagination]} navigation = {true} pagination>
                {cartItems && cartItems.map((item) => (
                  <SwiperSlide key={item.id}>
                    <CartComponent item={item} total={total} setTotal={setTotal} setTemp={setTemp} temp={temp}/>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="md:w-1/2 flex bg-[#FFD566] py-3 px-4 rounded-xl items-center justify-between font-semibold gap-6">
                <span className="flex items-center justify-center"><BsCart2 className="mx-2" />TOTAL</span>
                <p>Rs {total}</p>
              </div>
        </div>
  
        <div className="md:w-1/2 flex flex-col gap-5 items-center justify-center py-16">
          <h1 className="text-xl font-semibold">ADD DETAILS TO CHECKOUT</h1>
          <div id="error-main" className="hidden">
            <p className="text-red-600">Please fill out all the details</p>
          </div>
          <form className="md:w-1/2  flex flex-col gap-5">
            <input id="name-input" type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-2  border border-gray-300 rounded-md" placeholder="Full Name" required />
            <input id="email-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2  border border-gray-300 rounded-md" placeholder="Email" required  />
            <label id="email-error" htmlFor="email-input" className="text-xs text-red-600 hidden">Invalid email address</label>

            <input id="phone-input" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full px-4 py-2  border border-gray-300 rounded-md" placeholder="Number" required  />
            <label id="phone-error" htmlFor="phone-input" className="text-xs text-red-600 hidden">Invalid phone number</label>
            
            <input id="address-input" type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="w-full px-4 py-2  border border-gray-300 rounded-md" placeholder="Address" required  />
            <input id="city-input" type="text" value={city} onChange={(e) => setCity(e.target.value)} className="w-full px-4 py-2  border border-gray-300 rounded-md" placeholder="City" required  />
            <select id="state-input" name="state" value={state}  onChange={(e) => setState(e.target.value)} className="w-full px-4 py-2  border border-gray-300 rounded-md" required>
                  <option value="State">State</option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                  <option value="Daman and Diu">Daman and Diu</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Lakshadweep">Lakshadweep</option>
                  <option value="Puducherry">Puducherry</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="West Bengal">West Bengal</option>
            </select>
            <input id="pincode-input" type="text" value={pinCode} onChange={(e) => setPinCode(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md" placeholder="Pincode" required  />
          </form>
          <button id="button-submit" type="submit" className="md:w-1/2 flex justify-center items-center px-24 py-2 gap-2 bg-[#101010] text-white font-semibold" onClick={handleSubmit}>NEXT <span><BsArrowRightShort color="#ffffff" /></span></button>
          <div className="md:hidden h-[100px]"></div>
        </div>
      </div>
      ) : (
        <div className="w-full h-screen flex items-center justify-center">
          <h1>NO ITEMS IN CART</h1>
        </div>
      )}
    </>
  )
}

export default CartPage
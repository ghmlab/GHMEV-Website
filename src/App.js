import './App.css';
import logo from './assets/logo.png';
import {Products} from './utils/product'
import React, { useState, useEffect, useRef } from 'react'
import { Routes, Route} from 'react-router-dom'
import { BikeComponent, Navbar } from "./components";
import {HomePage, OurBikes, Product, CartPage, Payment} from "./pages/";
import { motion, AnimatePresence } from 'framer-motion';
import { useStateValue } from "./context/StateProvider";
import Footer from "./components/Footer";
import CheckoutPage from "./pages/CheckoutPage";


function App() {
  const [{cartItems, userData}, dispatch] = useStateValue();
  const [preloader, setPreloader] = useState(false);
  const[timer, setTimer] = useState(3);

  

  

  const id = useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreloader(false);
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((timer) => timer - 1)
    }, 1000)
  }, [])

  useEffect(() => {
    if(timer === -1){
      clear();
    }
  }, [timer])

  // useLocoScroll(!preloader)
  return (
    <>
    <AnimatePresence>
      {preloader ? (
          <motion.div className="flex justify-center items-center bg-ghmDark w-full h-screen" >
            <img src={logo} alt="logo" />
          </motion.div>
        ):(
          <div className="App" >
            <Navbar preloader={preloader} />
              <div className="w-full ">
                <Routes>
                    <Route path="/" preloader={preloader} element = {<HomePage />} />
                    <Route path="OurBikes" preloader={preloader} element = {<OurBikes/>} />
                    <Route path="dev" element = {<BikeComponent />} />
                    {Products && Products.map((product) => 
                      <Route key={product.id} path={product.url} element={<Product product={product} />} />
                      )
                    }
                    <Route path="/cart" element={<CartPage cartItems={cartItems} userData={userData} dispatch={dispatch} />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                    <Route path="/payment" element={<Payment />} />
                </Routes>
              </div>
              <Footer/>
          </div>
        )}
    </AnimatePresence>
    </>
  );
}

export default App;

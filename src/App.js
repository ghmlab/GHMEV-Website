import './App.css';
import logo from './assets/logo.png';
import {Products} from './utils/product'
import React, { useState, useEffect, useRef } from 'react'
import { Routes, Route} from 'react-router-dom'
import { BikeComponent, Navbar } from "./components";
import {HomePage, OurBikes, Product, CheckoutPage} from "./pages/";
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios'
import 'locomotive-scroll/src/locomotive-scroll.scss'


function App() {

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
              <div className="w-full h-screen" id="smooth-scroll" data-scroll-container>
                <Routes>
                    <Route path="/" preloader={preloader} element = {<HomePage />} />
                    <Route path="OurBikes" preloader={preloader} element = {<OurBikes/>} />
                    <Route path="dev" element = {<BikeComponent />} />
                    {Products && Products.map((product) => 
                      <Route key={product.id} path={product.url} element={<Product product={product} />} />
                      )
                    }

                    {Products && Products.map((product) => <Route key={product.id} path={`${product.url}/checkout`} element={<CheckoutPage product={product} />} />)}
                </Routes>
              </div>
          </div>
        )}
    </AnimatePresence>
    </>
  );
}

export default App;

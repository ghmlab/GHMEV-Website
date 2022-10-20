import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import { StateProvider } from "./context/StateProvider";
import { initialState } from './context/initialState';
import reducer from './context/reducer'

window.onload = window.localStorage.clear();

const user = [
  {
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pinCode: ""

  }
]
const cartData = [
  {
    title: "MODEL-L",
    price: 0,
    discountPrice: 0,
    color: "",
    isPresent: false,
    quantity: 0,
    image: ''
  },

  {
    title: "MODEL-I",
    price: 0,
    discountPrice: 0,
    color: "",
    isPresent: false,
    quantity: 0,
    image: ''
  },

  {
    title: "MODEL-F",
    price: 0,
    discountPrice: 0,
    color: "",
    isPresent: false,
    quantity: 0,
    image: ''
  },

  {
    title: "MODEL-E",
    price: 0,
    discountPrice: 0,
    color: "",
    isPresent: false,
    quantity: 0,
    image: ''
  }
]
  if(!localStorage.getItem("cartData")){
    localStorage.setItem("cartData", JSON.stringify(cartData))
  }

  if(!localStorage.getItem("userData")){
    localStorage.setItem("userData", JSON.stringify(user))
  }

  if(localStorage.getItem("cartCount")==undefined){
   console.log("monk database ");
    // var cc= parseInt( localStorage.getItem("cartCount"));
    localStorage.setItem("cartCount",0);
     // localStorage.setItem("cartCount",)
  }

ReactDOM.render(
  <React.StrictMode>
    <StateProvider  initialState={initialState} reducer={reducer}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

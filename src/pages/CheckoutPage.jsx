import { useState, useCallback } from "react"
import useRazorpay from "react-razorpay";
import { OrderComponent } from "../components"
import logo from '../assets/logoDark.png'
import { useNavigate } from "react-router-dom";
import uuid from "react-uuid";
import { useEffect } from "react";



const CheckoutPage = () => {
  const[flag, setFlag] = useState(false)
  const data = JSON.parse(localStorage.getItem("cartData"))
  const user = JSON.parse(localStorage.getItem("userData"))

  const cartCount = parseInt(localStorage.getItem("cartCount"))
  
  const redirect = useNavigate()

  // const post = {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(data, uuid()),
  // };
  
  // fetch("https://jsonplaceholder.typicode.com/posts", post)
  //   .then((data) => {
  //     if (!data.ok) {
  //       throw Error(data.status);
  //     }
  //     return data.json();
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  let subTotal = 0
 

const pp=[
  {
    "n":data[0]["l"],
    "c":data[0]["color"],
    "p":data[0]["discountPrice"],
    "q":data[0]["quantity"],
    "ip":data[0]["isPresent"]
    },
    {
      "n":data[1]["title"],
      "c":data[1]["color"],
      "p":data[1]["discountPrice"],
      "q":data[1]["quantity"],
      "ip":data[1]["isPresent"]
      },
      {
        "n":data[2]["title"],
        "c":data[2]["color"],
        "p":data[2]["discountPrice"],
        "q":data[2]["quantity"],
        "ip":data[2]["isPresent"]
      },
      {
        "n":data[3]["title"],
        "c":data[3]["color"],
        "p":data[3]["discountPrice"],
        "q":data[3]["quantity"],
        "ip":data[3]["isPresent"]
        }
]

  
  data.forEach((element, i) => subTotal += (element.discountPrice * element.quantity))
  let tax = 18/100 * subTotal
  let grandTotal = subTotal + tax
 
  const Razorpay = useRazorpay();

  const handlePayment = useCallback( async () => {

    const rzpay = new Razorpay({
      key: "rzp_live_MRCl2l05Qq6vD5",
      amount: grandTotal*100,
      currency: "INR",
      name: "Gear Head Motors",
      description: "Test Transaction",
      image: logo,
      handler: (res) => {
        console.log(res);
      },
      prefill: {
        name: user.name,
        email: user.email,
        contact:user.phone,
        address: user.address,
        city:user.city,
        state:user.state,
        pinCode:user.pinCode
      },
      notes: {
        notes: JSON.stringify(pp)
      },
      theme: {
        color: "#3399cc",
      },
    });
    rzpay.open();
  }, [Razorpay]);

  return (
    <>
      {(cartCount > 0) ? (
        <div className="flex md:flex-row flex-col justify-center items-center bg-ghmGray py-10 md:gap-0 gap-5 mt-[100px]">
        <div className="flex md:w-1/2 md:flex-col items-center justify-center gap-5">
          {data && data.map((item) => item.isPresent == true && <OrderComponent key={item.id} item={item} />)}
        </div>
        <div className="flex flex-col md:w-[30%] w-[90%] items-center rounded-md text-left justify-center gap-5">
          <p className="mr-auto">Shipping Info</p>
          <div className="w-full flex flex-col text-left bg-ghmLight p-5 flex-wrap shadow-lg">
            <h2 className="text-sm font-semibold">{user.name}</h2>
            <p className="text-sm text-gray-500">{user.address}, {user.city}, {user.state}, {user.pinCode} </p>
          </div>
  
          <div className="w-full flex flex-col text-left bg-ghmLight p-5 shadow-lg gap-5 flex-wrap">
            <h2 className="text-lg font-semibold">Billing Summary</h2>
            <div className="flex flex-col justify-center items-center py-5 gap-4 border-b-2 border-gray-200">
              <div className=" w-full flex justify-between items-center">
                <h3 className="text-sm text-gray-500">Subtotal</h3>
                <h3 className="text-sm text-gray-800">Rs {subTotal.toLocaleString()}</h3>
              </div>
              
              <div className=" w-full flex justify-between items-center">
                <h3 className="text-sm text-gray-500">Shipping</h3>
                <h3 className="text-sm text-gray-800">Rs 0.00</h3>
              </div>
  
              <div className=" w-full flex justify-between items-center">
                <h3 className="text-sm text-gray-500">Tax</h3>
                <h3 className="text-sm text-gray-800">{tax}</h3>
              </div>
            </div>
  
            <div className=" w-full flex justify-between items-center">
                <h3 className="text-base text-ghmDark font-semibold">Grand Total</h3>
                <h3 className="text-sm text-gray-800">{grandTotal.toLocaleString()}</h3>
            </div>
  
            <div className="border-2 border-gray-200">
              <textarea className="w-full px-5 py-3" name="Comments" placeholder="Type here..." id="" cols="30" rows="2 "></textarea>
            </div>
            
            <div className="flex justify-start items-center gap-3">
              <input type="checkbox" id="checkbox" name="checkbox" />
              <label className="text-xs" htmlFor="checkbox">Please check to acknowledge our Privacy & Terms Policy</label>
            </div>
  
            <button onClick={handlePayment} className="w-full bg-ghmGreen rounded-sm p-4 text-white">
              Pay Rs {grandTotal.toLocaleString()}.00
            </button>
          </div>
        </div>
      </div>
      ) : (
        <div className="flex justify-center items-center h-screen">
          {redirect('/')}
        </div>
      ) }
    </>
  )
}

export default CheckoutPage
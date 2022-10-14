import React, { useState } from 'react'
import { ProductSlider } from "../components";
import {BsPlusLg, BsDashLg, BsCart2, BsArrowRightShort } from 'react-icons/bs'

const CheckoutPage = ({product, key}) => {
  const[isActive, setIsActive] = useState({
    colorId: 1,
    colorTitle: 'Luminous Green'
  });

  const [cartItem, setCartItem] = useState(0)
  

  const [filter, setFilter] = useState(product.colors[0].id)
  return (
    <div key={key} className="w-full flex md:flex-row flex-col justify-center items-center montserrat relative md:top-[100px] md:px-24">
      <div className="md:w-[55%] 2xl:w-[35%] bg-no-repeat bg-cover rounded-3xl overflow-hidden flex flex-col gap-5 justify-center items-center py-16 px-6" data-scroll>
            <ProductSlider data={product?.colors?.filter((color) => color.id === filter)} />
            <div>
              <div className="flex flex-col justify-center items-center gap-5" data-scroll>
                <h2 className="text-lg font-semibold">COLOUR</h2>
                <div className="flex justify-center items-center gap-6">
                {product.colors.map((color) => <div key={color.id}><img key={color.id} src={color.image} className={`w-5 cursor-pointer ${isActive.colorId === color.id ? 'color-active' : ''}`} onClick = {() => {setIsActive({colorId: color.id, colorTitle: color.title}); setFilter(color.id)}} alt="" /></div>)}
                </div>
              </div>
            </div>
            
            <div className="flex flex-col justify-center items-start gap-4">
              <div className="flex justify-center items-center gap-4 font-semibold">
                <h2 className="capitalize text-base md:text-xl">{`${product.title} (${isActive.colorTitle})`}</h2>
                <div className="flex items-center justify-center gap-3">
                  <i className="md:p-3 p-2 bg-gray-200 rounded-full cursor-pointer" onClick={() => setCartItem(cartItem - 1)}><BsDashLg size={8} /></i>
                  <p className="select-none">{cartItem}</p>
                  <i className="md:p-3 p-2 bg-gray-200 rounded-full cursor-pointer" onClick={() => setCartItem(cartItem + 1)}><BsPlusLg size={8} /></i>
                </div>
              </div>

              <div className="text-left">
                <h2 className="text-xl font-semibold">Rs {product.discountPrice.toLocaleString()}<small className="text-sm font-medium"> (5% inclusive GST)</small></h2>
                <h2 className="text-base text-gray-400 line-through font-medium">MRP Rs {product.price}</h2>
              </div>
              
              <div className="w-full flex bg-[#FFD566] py-3 px-4 rounded-xl items-center justify-between font-semibold">
                <span className="flex items-center justify-center"><BsCart2 className="mx-2" />TOTAL</span>
                <p>Rs {product.price.toLocaleString()}</p>
              </div>
            </div>
      </div>

      <div className="md:w-1/2 flex flex-col gap-5 items-center justify-center">
        <h1 className="text-xl font-semibold">ADD DETAILS TO CHECKOUT</h1>
        <form className="md:w-1/2  flex flex-col gap-5">
          <input type="text" className="w-full px-4 py-2  border border-gray-300 rounded-md" placeholder="Full Name"  />
          <input type="text" className="w-full px-4 py-2  border border-gray-300 rounded-md" placeholder="Email"  />
          <input type="text" className="w-full px-4 py-2  border border-gray-300 rounded-md" placeholder="Address"  />
          <input type="text" className="w-full px-4 py-2  border border-gray-300 rounded-md" placeholder="City"  />
          <select name="state" className="w-full px-4 py-2  border border-gray-300 rounded-md" id="state">
                <option value="A">State</option>
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
          <input type="text" className="w-full px-4 py-2   border border-gray-300 rounded-md" placeholder="Pincode"  />
        </form>
        <button type="submit" className="w-full md:w-1/2 flex justify-center items-center px-4 py-2 gap-2 bg-[#219653] text-white font-semibold">NEXT <span><BsArrowRightShort color="#ffffff" /></span></button>
        <div className="h-[100px]"></div>
      </div>
    </div>
  )
}

export default CheckoutPage
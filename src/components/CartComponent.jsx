import { useState, useEffect } from 'react'
import {BsPlusLg, BsDashLg} from 'react-icons/bs'
import { SwiperSlide } from 'swiper/react';
import { actionType } from "../context/reducer";
import { useStateValue } from "../context/StateProvider";
let items= [];
let cartdata = {}
let local

const ProductBuy = ({item, total, setTotal, temp}) => {
    const [{cartItems}, dispatch] = useStateValue();
    const [quantity, setQuantity] = useState(item.quantity)
    const [flag, setFlag] = useState(1)
    const[isActive, setIsActive] = useState({
        colorId: item.colors[0].id,
        colorTitle: item.colors[0].title,
        colorImage: item.colors[0].cycles.images[0].image
    });

    console.log("coloorrr", isActive.colorTitle)
    
    useEffect(() => {
        let totalPrice = cartItems.reduce((accumulator, item) => accumulator + (item.quantity * item.discountPrice), 0);
        setTotal(totalPrice);
    }, [total, flag])

    const cartDispatch = () => {
        dispatch({
            type: actionType.SET_CARTITEMS,
            cartItems: items
        })
    }
    const updateQuantity = (action, id) => {
        if(action == "add"){
            setQuantity(quantity + 1);
            cartItems.map((item) => {
                if(item.id === id){
                    item.quantity += 1;
                    setFlag(flag + 1);
                }
            })
            let cartCount = parseInt(localStorage.getItem("cartCount"))
            localStorage.setItem("cartCount", cartCount+1)
            cartDispatch();
        }
        
        else if(quantity === 1){

            items = cartItems.filter((item) => item.id !== id);
            setFlag(flag + 1);
            setQuantity(0)
            cartDispatch()
            local = JSON.parse(localStorage.getItem("cartData"));
            localStorage.setItem("cartCount", localStorage.getItem("cartCount") - 1)
            
            if(item.title==local[item.id]["title"]){
                local[item.id]["isPresent"]=false;
                localStorage.setItem("cartData",JSON.stringify(local))
            }
        }
        else{
            setQuantity(quantity - 1);
            cartItems.map((item) => {
                if(item.id === id){
                    item.quantity -= 1;
                    setFlag(flag + 1);
                }
            })

            let cartCount = parseInt(localStorage.getItem("cartCount"))
            localStorage.setItem("cartCount", cartCount-1)
            cartDispatch()
        }
    }

    useEffect(() => {
        items = cartItems
        let local = JSON.parse(localStorage.getItem("cartData"))

        local.map((element) => {
            if(element.title === item.title){
                element.price = item.price
                element.discountPrice = item.discountPrice
                element.quantity = item.quantity
                element.color = isActive.colorTitle
                element.image = isActive.colorImage

                if(element.quantity > 0){
                    element.isPresent = true
                }
                else{
                    element.isPresent = false
                }
            }
        })
        localStorage.setItem("cartData", JSON.stringify(local))
        // if(items!=undefined){
        //     var kk=[];
        //     items.forEach( function(element,indext6) {
    
        //         if(indext6==items.length-1){
        //             kk.push(element["inCart"]);
    
        //             localStorage.setItem("cartdata",JSON.stringify(kk));
                  
    
    
        //         }
        //         else{
    
        //             kk.push(element["inCart"]);
    
    
        //         }
                
                
        //     });
    
        //    }
        
    }, [quantity, items, isActive])

    const clearCart = () => {
        dispatch({
            type: actionType.SET_CARTITEMS,
            cartItems: []
        })
    }
  return (
    
        <div id={item.id} className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-5 py-5">
            <img src={isActive.colorImage} alt="" />
            <h2 className="text-lg font-semibold">COLOUR</h2>
            <div className="flex justify-center items-center gap-6">
                {item.colors.map((color) => 
                <div key={color.id}>
                <img src={color.image} className={`w-5 cursor-pointer ${isActive.colorId === color.id ? 'color-active' : ''}`} onClick={() => setIsActive({colorId: color.id, colorTitle: color.title, colorImage: color.cycles.images[0].image})} alt="" />
                </div>)}
            </div>

            <div className="flex flex-col w-[70%] items-center">
                <div className="flex justify-between items-center gap-4 font-semibold">
                    <h2 className="capitalize text-base md:text-xl">{`${item.title} (${isActive.colorTitle})`}</h2>
                    <div className="flex items-center justify-center gap-3">
                        <i className="md:p-3 p-2 bg-gray-200 rounded-full cursor-pointer" onClick={() => updateQuantity("remove", item.id)}><BsDashLg size={8} /></i>
                        <p className="select-none">{item.quantity}</p>
                        <i className="md:p-3 p-2 bg-gray-200 rounded-full cursor-pointer" onClick={() => updateQuantity("add", item.id)}><BsPlusLg size={8} /></i>
                    </div>
                    </div>
                </div>
                
                <div className="flex flex-col items-center justify-center text-left">
                    <h2 className="text-xl font-semibold mr-auto flex justify-center items-center">Rs {item.discountPrice.toLocaleString()}<small className="text-sm font-medium"> (5% inclusive GST)</small></h2>
                    <h2 className="text-sm text-gray-400 line-through font-medium  mr-auto">MRP Rs {item.price}</h2>
                </div>
            </div>
        </div>
  )
}

export default ProductBuy
import React from 'react'

const OrderComponent = ({item, key}) => {
  return (
    <div key={item.id} className="flex justify-center bg-ghmLight w-[500px] items-center shadow-lg p-5">
        <img src={item.image} className="w-[150px]" alt="" />
        <div className="flex flex-col gap-3 justify-center items-start p-5">
            <p>(5% inclusive GST)</p>
            <h3 className="text-xl font-semibold">{item.title} {item.color}</h3>
            <div className="text-left">
              <p className="text-lg font-semibold">Rs {item.discountPrice}</p>
              <p className="text-base line-through text-gray-400">MRP: Rs {item.price}</p>
            </div>
        </div>
    </div>
  )
}

export default OrderComponent
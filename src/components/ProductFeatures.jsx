import React from 'react'
import useLocoScroll from "../hooks/useLocoScroll"

const  ProductFeatures = ({preloader, product}) => {
  console.log('feihfifif',product[0].images)

  // useLocoScroll(!preloader)
  return (
    <>
    <div className="w-full">
      <div className="w-full flex md:flex-row flex-col justify-center items-center h-full py-10">
        <div className="grid-wrapper md:w-[50%]">
          {product[0].images.map((image) => 
            <img key={image.id} className="md:w-[300px] 2xl:w-[400px] p-4 w-[150px]" src={image.image} alt="" />
          )}
        </div>

        <div className="grid grid-cols-2 gap-0 md:w-[20%]">
          {product[0].icons.map((icon) => 
          <div key={icon.id} className="">
            <img className="md:w-[150px] w-[120px]" src={icon.image} alt="" />
          </div>
          )}
        </div>
      </div>
    </div>
    </>
  )
}

export default ProductFeatures
import React from 'react';
import PostContent from "../PostContent";
// import useLocoScroll from "../hooks/useLocoScroll";


const Features = ({preloader}) => {

    // useLocoScroll(!preloader)
   return (                                                                                                 
    <div className="section flex flex-col justify-center items-center w-full bg-[#101010] relative p-6 md:p-40">
        <ul className="w-full md:border-2 border-[#222222] bg-[#101010] rounded-xl md:rounded-2xl flex flex-col justify-between items-center overflow-hidden">
            <PostContent reverse={false} />
            <PostContent reverse={true}/>
            <PostContent reverse={false}/>
        </ul>
    </div>
  )
}

export default Features
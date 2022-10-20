import React, { useState } from 'react'
import ModelE from '../../assets/E0.png';
import Bullet from '../../assets/bullet.png'
import { motion } from 'framer-motion'
import { BikeComponent as data } from "../../utils/data";

const BikeComponent = ({preloader}) => {
  const [ content, setContent ] = useState({
    heading: '',
    desc: ''
  })
    // useLocoScroll(!preloader)
    // const banner = {
    //   animate: {
    //     transition: {
    //       delayChildren: 0.4,
    //       staggerChildren: 0.1,
    //     },
    //   },
    // }

    // const lettering = {
    //   hidden: {y: 200},
    //   visible:{
    //     y: 0,
    //   },
    //   transition: {
    //     ease: [0.6, 0.01, -0.05, 0.95],
    //     duration: 1,
    //   },
    // }


  return (
    <>
        <div className="section w-full hidden md:h-[100vh] bg-ghmLight md:flex flex-col justify-center items-center relative md:py-96 py-48" data-header-nav="light">
          {/* ------------------------ DESKTOP SCREEN --------------------------- */}
          <div className="w-full flex justify-center items-center z-10">
            <img src={ModelE} className="w-[700px]" alt="" />
          </div>

          <ul className="hover relative">
            <li>
              {/* ----------- RALSON HI-TRACTION TIRES ----------------- */}
              <ul className="tyres-hover">
                <li className="bullet absolute bottom-[120px] right-[60px] md:bottom-[250px] md:right-[150px] w-3 md:w-4 z-10 cursor-pointer">
                  <motion.img whileHover={{scale: 1.75}} src={Bullet} alt="" />
                </li>
                <li className="textbox flex flex-col w-72 justify-center items-center py-3 px-5 bg-[#D9D9D9] rounded-xl absolute bottom-[350px] right-[290px] z-10">
                  <p className="text-base font-semibold">RALSON HI-TRACTION TIRES</p>
                  <p className="text-xs">Ralson strong boy tires which are 26x4.0 wide which gives the rider a better grip on any road with punture-resistant ability.</p>
                </li>
                {/* <li className="w-40 h-40 absolute top-[180px] left-[400px]">
                  <object className="">
                    <embed src={TyresPath} type="" />
                  </object>
                </li> */}
              </ul>
            </li>

            <li>
              {/* ----------- SUSPENSION FORK ----------------- */}
              <ul className="suspension-hover">
                <li className="bullet absolute bottom-[120px] left-[70px] md:bottom-[230px] md:left-[140px] w-3 md:w-4 z-10 cursor-pointer">
                  <motion.img whileHover={{scale: 1.75}} src={Bullet} alt="" />
                </li>
                <li className="textbox flex flex-col w-72 justify-center items-center py-3 px-5 bg-[#D9D9D9] rounded-xl absolute bottom-[360px] left-[270px] z-10">
                  <p className="text-base font-semibold">Suspension Fork</p>
                  <p className="text-xs">It works excellent for bumpy roads and mild-off roading, giving a jerk-free riding experience.</p>
                </li> 
              </ul>
            </li>

          <li>{/* ----------- 7 Speed Free Wheels ----------------- */}
              <ul className="free-wheels-hover">
                <li className="bullet absolute bottom-[75px] right-[90px] md:bottom-[150px] md:right-[190px] w-3 md:w-4 z-10 cursor-pointer">
                  <motion.img whileHover={{scale: 1.75}} src={Bullet} alt="" />
                </li>
                <li className="textbox flex flex-col w-72 justify-center items-center py-3 px-5 bg-[#D9D9D9] rounded-xl absolute bottom-[100px] right-[340px] z-10">
                  <p className="text-base font-semibold">7 Speed Free Wheels</p>
                  <p className="text-xs">Helps to reduce the effort on pedal as well as  increases the motion of e-bike</p>
                </li>
              </ul>
          </li>

          <li>
              {/* ----------- Mechinacal Disk Brakes ----------------- */}
              <ul className="disk-brakes-hover">
                <li className="bullet absolute bottom-[75px] left-[90px] md:bottom-[150px] md:left-[180px] w-3 md:w-4 z-10 cursor-pointer">
                  <motion.img whileHover={{scale: 1.75}} src={Bullet} alt="" />
                </li>
                <li className="textbox flex flex-col w-64 justify-center items-center py-4 px-8 bg-[#D9D9D9] rounded-xl absolute bottom-[50px] left-[320px] z-10">
                  <p className="text-base font-semibold">Mechinacal Disk Brakes</p>
                  <p className="text-xs">Model-E comes with dual disk brakes with 160mm rotor disk, this provides the e-bike an extra braking power for quick and skid-free braking in all weather conditions.</p>
                </li> 
              </ul>
            </li>

            <li>
              {/* ----------- Ghm Alloy Crank ----------------- */}
              <ul className="alloy-crank-hover">
                <li className="bullet absolute bottom-[70px] right-[20px] md:bottom-[140px] md:right-[40px] w-3 md:w-4 z-10 cursor-pointer">
                  <motion.img whileHover={{scale: 1.75}} src={Bullet} alt="" />
                </li>
                <li className="textbox flex flex-col w-64 justify-center items-center py-4 px-8 bg-[#D9D9D9] rounded-xl absolute bottom-[380px] left-[250px] z-10">
                  <p className="text-base font-semibold">Ghm Alloy Crank</p>
                  <p className="text-xs">It is lighter & stronger, providing a smooth riding experience over various terrains such as up hills and downhills.</p>
                </li> 
              </ul>
            </li>
          </ul>

          <div>
            <div className="w-full absolute md:top-80 top-60 left-0 flex justify-center">
                <h1
                  className="md:text-[8.5rem] text-4xl 2xl:text-[12rem] opacity-25"
                  >
                  KNOW YOUR BIKE
                  </h1>
            </div>
          </div>
        </div>
        
        {/*===============================================================================================
        ===================================== MOBILE SCREEN ============================================== 
        ==================================================================================================*/}

        <div className="section w-full md:hidden md:h-[100vh] bg-ghmLight flex flex-col justify-center items-center relative md:py-96 py-20" data-header-nav="light">
          {/* ------------------------ DESKTOP SCREEN --------------------------- */}
          <div className="w-full flex justify-center items-center z-10">
            <img src={ModelE} className="w-[700px]" alt="" />
          </div>

          <ul className="hover relative">
            {data && data.map((element, id) => (
              <li key={id}>
                <ul className={element.mainClass}>
                  <li className={`bullet absolute ${element.classNames} w-3 md:w-4 z-10 cursor-pointer`}>
                    <img onClick={() => setContent({heading: element.heading, desc: element.desc})} src={Bullet} alt="" />
                  </li>
                  {/* <li className="w-40 h-40 absolute top-[180px] left-[400px]">
                    <object className="">
                      <embed src={TyresPath} type="" />
                    </object>
                  </li> */}
                </ul>
              </li>
            ))}
          </ul>
          <div className={`w-[80%] my-6 flex flex-col justify-center items-center rounded-xl bg-gray-300 ${content.heading === '' ? 'p-0 gap-0' : 'p-4 gap-3'}`}>
              <h2 className="text-xl font-semibold">{content.heading}</h2>
              <p className="text-[0.6rem]">{content.desc}</p>
          </div>
          

          <div>
            <div className="w-full absolute md:top-80 top-32 left-0 flex justify-center">
                <h1
                  className="md:text-[8.5rem] text-4xl 2xl:text-[12rem] opacity-25"
                  >
                  KNOW YOUR BIKE
                  </h1>
            </div>
          </div>
        </div>  
    </>
  )
}

export default BikeComponent
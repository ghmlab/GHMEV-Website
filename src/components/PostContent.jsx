import React from 'react';

import {motion} from 'framer-motion';
import { banner } from "./Animations";
import Image1 from '../assets/image1.jpg'

const PostContent = ({reverse}) => {
  return (
    <>
        <li className={`flex md:flex-row flex-col w-full pb-20`}>
            <ul className={`flex  md:flex-row flex-col justify-between w-full`}>
                <li className={`flex flex-col md:${reverse ? 'flex-row-reverse': 'flex-row'} md:w-2/3 w-full`}>
                    <motion.ul className={`flex flex-col text-left justify-center ${reverse? 'md:items-end': 'md:items-start'} items-center md:w-[70%] md:px-24 px-5 py-5`} id="text-content">
                            <motion.li variants={banner} className={`flex ${reverse ? 'justify-end' : 'justify-start'} items-start md:w-1/2`}>
                                <motion.h2
                                initial={reverse ? { opacity: 0, x:-50} : { opacity: 0, x:50} }
                                whileInView={{ opacity: 1, x:0}}
                                transition={{
                                ease: "easeInOut",
                                duration: 1,
                                }}
                                className="flex justify-center items-center font-semibold 2xl:text-9xl md:text-7xl text-4xl leading-[8rem] md:py-5 text-ghmGreen text-center">Tech Marvel
                                </motion.h2>
                            </motion.li>
                            <motion.li variants={banner} className={`flex justify-center text-center md:${reverse ? 'text-right' : 'text-left'} items-start text-[#868686]`}>
                            <ul className="2xl:text-lg text-md">
                            <li>
                                <motion.p initial={reverse ? { opacity: 0, x:50} : { opacity: 0, x:-50} }
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{
                                ease: "easeInOut",
                                duration: 1,
                                }}>While we develop the next smart tech of the world we also understand how intelligent a vehicle can get. 
                                </motion.p>
                            </li>
                            <li>
                                <motion.p initial={reverse ? { opacity: 0, x:50} : { opacity: 0, x:-50} }
                                whileInView={{ opacity: 1, x:0}}
                                transition={{
                                ease: "easeInOut",
                                duration: 1,
                                }}>With our integrated systems we comprehend the vehicle performance and diagnosis on the go.
                                </motion.p>
                            </li>
                            </ul>
                            </motion.li>
                        </motion.ul>
                </li>
                <motion.li className="md:w-1/3 w-full rounded-md shadow-xl">
                    <motion.img 
                    initial={{ opacity: 0}}
                    whileInView={{ opacity: 1}}
                    whileHover={{scale: 1.05}}
                    transition={{
                    ease: "easeInOut",
                    duration: 0.5,
                    }}
                    src={Image1} alt="" />
                </motion.li>
            </ul>
        </li>
    </>
  )
}

export default PostContent
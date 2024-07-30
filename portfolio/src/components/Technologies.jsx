import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { motion } from "framer-motion";

const iconVariation = (duration) => ({
    initial:{y:-10},
    animate:{y:[10, -10],
        transition:{
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        },
    },

})

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h1
            whileInView={{opacity:1, y:0}}
            initial={{y:-100, opacity:0}}
            transition={{duration: 1.5}}
            className='my-20 text-center text-4xl'>Technologies</motion.h1>
            <motion.div whileInView={{opacity:1, x:0}}
            initial={{x:-100, opacity:0}}
            transition={{duration: 1.5}}
            className='flex flex-wrap items-center justify-center gap-4'>

            <motion.div 
                variants={iconVariation(2.5)}
                initial="initial"
                animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaHtml5 className='text-7xl text-[#f4470b]' />
            </motion.div>

            <motion.div 
            variants={iconVariation(4)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
            <IoLogoJavascript  className='text-7xl text-[#f0d81e]' />
            </motion.div>

            <motion.div
            variants={iconVariation(5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaNodeJs  className='text-7xl text-green-500' />
            </motion.div>

            <motion.div
            variants={iconVariation(2)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaReact  className='text-7xl text-cyan-400' />
            </motion.div>

            <motion.div
            variants={iconVariation(6)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiMongodb  className='text-7xl text-green-500' />
            </motion.div>

            <motion.div
            variants={iconVariation(9)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FiFigma  className='text-7xl text-[#9d57f8]' />
            </motion.div>

        </motion.div>
    </div>
  )
}

export default Technologies



{/* <IoLogoCss3 />





*/}
import React from 'react'
import aboutImg from "../assetss/about2.jpg"
import {ABOUT_TEXT} from "../constants"
import { motion } from "framer-motion"

const About = () => {
  return (
    <div className='overflow-x-hidden border-b border-neutral-900 pb-4'>
        <h2 className='my-20 text-center text-4xl'>About 
            <span className='text-neutral-500'> Me</span>
        </h2>

        <div className='flex flex-wrap'>
        <motion.div
            whileInView ={
                {opacity:1, x:0}
            }
            initial={{x:-100, opacity:0}}
            transition={{duration:1, delay: 0.5}}
            className='w-full lg:w-1/2 lg:p-8'>
            <div className='flex items-center justify-between'>
                <img className='rounded-2xl h-[500px] w-[500px]' src={aboutImg} alt='about'></img>
            </div>
        </motion.div>

            <motion.div
                whileInView ={
                    {opacity:1, x:0}
                }
                initial={{x:100, opacity:0}}
                transition={{duration:1, delay: 0.5}}
                className='w-full lg:w-1/2'>
                <div className='flex justify-center lg:justify-start'>
                    <p className='my-2 max-w-xl py-6'>{ABOUT_TEXT}</p>
                </div>
            </motion.div>
        </div>
        
    </div>
  )
}

export default About
import React from 'react'
import {CONTACT} from "../constants"
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
        <motion.h2 
            whileInView={{opacity:1, y:0}}
            initial={{y:-100, opacity:0}}
            transition={{duration: 0.5}}
            className='my-10 text-center text-4xl'>Get in Touch</motion.h2>
        <div className="text-center tracking-tighter">

            <motion.p 
            whileInView={{opacity:1, x:0}}
            initial={{x:-100, opacity:0}}
            transition={{duration: 1}}
            className='my-4'>{CONTACT.phoneNo}</motion.p>

            <motion.p 
            whileInView={{opacity:1, x:0}}
            initial={{x:100, opacity:0}}
            transition={{duration: 1}}
            className='my-4'>{CONTACT.email}</motion.p>

        </div>
    </div>
  )
}

export default Contact
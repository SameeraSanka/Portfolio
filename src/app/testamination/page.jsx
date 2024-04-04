"use client"
import {motion} from "framer-motion"
import React, { createContext } from 'react';

const TestPage = () => {
    
    const variants = {
        varient1 :{
            x: 400,
            y: 300,
            opacity: 0.5,
            transition:{
                duration:3
            }
        },
        varient2 :{
            x: 100,
            y: -300,
            roration: 45,
        }
    }
  return (
    <div className='flex items-center justify-center h-full'>
        <motion.div className='w-96 h-96 bg-red-400 rounded'
        variants={variants}
        animate="varient1"
       ></motion.div>
    </div>
  )
}

export default TestPage
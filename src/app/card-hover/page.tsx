"use client"
import { motion } from 'motion/react'
import React from 'react'

const page = () => {
  return (
    <div
    className='w-[80%] mx-auto parent h-screen flex items-center justify-center '
    >
        {/* <img
                className='w-full max-w-4xl absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'
        src="temp.avif" alt="" /> */}



        <motion.img
   
  transition={{ type: "spring", stiffness: 200, damping: 15 }}

        className='w-full max-w-4xl problem'
        src={'/problem.avif'}
        />



        <div
        className='w-full max-w-4xl d3 absolute scale-60 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 card-div'
        >


        <img 
        src="card.avif" 
        className=' mix-blend-screen card'
        alt="" />



        <img src="glow.avif" 
        className=' absolute top-0 left-0 scale-80  -translate-x-[70px] glow'
        alt="" />


        </div>

        <img
        className='w-full max-w-4xl d3 absolute bg-[#151106]/90 rounded-2xl top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 codess'
        src={'/code.avif'}
        />
        <img
        className='w-full max-w-sm d3 absolute  top-1/2 left-1/2 -translate-y-full -translate-x-1/2 controles'
        src={'controls.avif'}
        />
    </div>
  )
}

export default page
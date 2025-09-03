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
        initial={{
            transform:'rotateX(0deg) rotateY(0deg) translateZ(0px) skewX(0deg) scale(1)',
            translateY:0,
        }}
        animate={{
            transform:'rotateX(2deg) rotateY(0deg) translateZ(0px) skewX(27deg) translateY(0px) scale(0.8) translateX(-6rem)',
       
        }}
  transition={{ type: "spring", stiffness: 200, damping: 15 }}

        className='w-full max-w-4xl problem'
        src={'/problem.avif'}
        />
        <motion.div
        initial={{
            transform:'rotateX(0deg) rotateY(0deg) translateZ(0px) skewX(0deg) scale(0.6)',
            opacity:0
        }}
        animate={{
            transform:'rotateX(0deg) rotateY(0deg) translateZ(0px) skewX(0deg) scale(0.5) translateY(-44px) translateX(-386px)',
            opacity:1
        }}
  transition={{ type: "spring", stiffness: 200, damping: 15 }}

        className='w-full max-w-4xl d3 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 card-div'
        >
        <motion.img 
          initial={{
            opacity:0
        }}
        animate={{
            opacity:0.4
        }}
  transition={{ type: "spring", stiffness: 200, damping: 15 }}

        src="card.avif" 
        className=' mix-blend-screen card'
        alt="" />
        <motion.img src="glow.avif" 
        initial={{
            clipPath:'polygon(0 0, 100% 0%, 100% 0, 0 0)'
        }}
        animate={{
            clipPath:' polygon(0 0, 100% 0%, 100% 100%, 0% 100%)'
        }}
          transition={{ type: "spring", stiffness: 200, damping: 15,delay:0.1 }}

        className=' absolute top-0 left-0 scale-80  -translate-x-[70px] glow'
        alt="" />
        </motion.div>
        <motion.img
        initial={{
            transform:'rotateX(0deg) rotateY(0deg) translateZ(0px) skewX(0deg) scale(0.6)',
            translateY:0,
        }}
        animate={{
            transform:'rotateX(3deg) rotateY(0deg) translateZ(10px) skewX(27deg)  scale(0.5) translateX(200px) translateZ(-50px) translateY(-300px)',
       
        }}
  transition={{ type: "spring", stiffness: 200, damping: 15 }}

        className='w-full max-w-4xl d3 absolute bg-[#151106]/90 rounded-2xl top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 codess'
        src={'/code.avif'}
        />
        <motion.img
        initial={{
            transform:'rotateX(0deg) rotateY(0deg) translateZ(0px) skewX(0deg) ',
        }}
        animate={{
            transform:'rotateX(3deg) rotateY(0deg) translateZ(10px) skewX(27deg)   translateX(40px) scale(0.9) translateZ(-50px) translateY(-1040%)',
       
        }}
  transition={{ type: "spring", stiffness: 200, damping: 15 }}

        className='w-full max-w-sm d3 absolute  top-1/2 left-1/2 -translate-y-full -translate-x-1/2 controles'
        src={'controls.avif'}
        />
    </div>
  )
}

export default page
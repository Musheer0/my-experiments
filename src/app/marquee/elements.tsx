"use client"
import React, { act, useEffect, useRef, useState } from 'react'

const Element = ({rect,active,trigger}:{rect:number,active:boolean,trigger:any}) => {
    const element = useRef<HTMLDivElement|null>(null)
    const btn = useRef<HTMLButtonElement|null>(null)
    const [w,setW] = useState(100)
    const [b,setB] = useState(100)
   useEffect(()=>{
    if(rect && element.current){
        const el = element.current.getBoundingClientRect();
         setW(Math.min((Math.max(rect-el.left,0)/el.width)*100,100))
    }
     if(rect && btn.current){
        const bt = btn.current.getBoundingClientRect();
         setB(Math.min((Math.max(rect-bt.left,0)/bt.width)*100,100))
    }
   },[rect,active,trigger])
  return (
    <div className='flex flex-col items-center gap-5'
    ref={element}
   
    >
        <div className="main relative w-[300px] h-[250px]">
            <div 
            style={{
                clipPath:`inset(0 ${100-w}% 0 0)`
            }}
            className="before absolute left-0 bg-green-500 right-0 w-full h-full"></div>
            <div className='w-full h-full bg-sky-500'></div>
        </div>
        <button 
  className="relative w-[100px] h-[40px] select-none overflow-hidden rounded-lg"
  ref={btn}
  
>
  <div 
  style={{ clipPath: `inset(0 ${100 - b}% 0 0)` }}
  className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-full bg-zinc-900 text-zinc-50">
    before
  </div>

  <div className="w-full h-full  bg-zinc-50 text-zinc-900">
    after
  </div>
</button>

    </div>
  )
}

export default Element
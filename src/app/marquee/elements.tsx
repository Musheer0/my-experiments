/* eslint-disable @typescript-eslint/no-explicit-any */

"use client"
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import React, {useEffect, useRef, useState } from 'react'

const Element = ({rect,active,trigger,imgObj}:{rect:number,active:boolean,trigger:any,imgObj:{before:string,after:string}}) => {
    const element = useRef<HTMLDivElement|null>(null)
    const btn = useRef<HTMLButtonElement|null>(null)
    const [w,setW] = useState(100)
    const [b,setB] = useState(100)
   useEffect(()=>{
    if(rect && element.current){
        const el = element.current.getBoundingClientRect();
         setW(Math.min((Math.max(rect-el.left,0)/(el.width-(el.width*0.04)))*100,100))
    }
     if(rect && btn.current){
        const bt = btn.current.getBoundingClientRect();
         setB(Math.min((Math.max(rect-bt.left,0)/bt.width)*100,100))
    }
   },[rect,active,trigger])
  return (
    <div className='flex select-none flex-col items-center gap-5'
    ref={element}
   
    >
       <Card className='relative p-2'>
       
            <div className='w-full select-none relative h-full '>
                <div 
                  style={{ clipPath: `inset(0 ${100 - w}% 0 0)` }}
                className="div absolute w-full h-full overflow-hidden">
                   <img 
                            src={imgObj.before} alt="" className='absolute left-0  right-0 w-full h-full object-cover rounded-2xl'/>
                </div>
              <img src={imgObj.after} alt="" className='rounded-2xl h-[200px] object-cover'/>
            </div>
       </Card>
   
       <div className=" relative  overflow-hidden rounded-xl   btn-container"
       >
        <div 
  style={{ clipPath: `inset(0 ${100 - b}% 0 0)` }}
  className="absolute left-0 top-1/2 flex items-center justify-center -translate-y-1/2 w-full h-full bg-zinc-900 text-zinc-50">
    before
  </div>
          <Button size={'lg'} variant={'secondary'}   ref={btn} className='select-none overflow-hidden'  >
       after
       </Button>
       </div>

    </div>
  )
}

export default Element
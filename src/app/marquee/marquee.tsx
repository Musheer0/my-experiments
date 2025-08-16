"use client"
import React, { useEffect, useRef, useState } from 'react'
import Element from './elements';
import { InfiniteSlider } from '@/components/motion-primitives/infinite-slider';

const Marquee = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [cords, setCords] = useState(window.innerWidth / 2);
  const [tirgger,setTring] = useState(0)
  useEffect(() => {
    setIsMouseDown(false);
  }, []);

  return (
    <div
      onMouseDown={(e) => {
        setIsMouseDown(true);
        setCords(e.clientX); // start drag from cursor pos
      }}
      onMouseMove={(e) => {
        if (isMouseDown) {
          setCords(e.clientX);
        }
      }}
      onMouseUp={() => setIsMouseDown(false)}
      onMouseLeave={() => setIsMouseDown(false)}
      className="w-full h-[400px] overflow-hidden flex items-center gap-4 relative"
    >

      {/* Draggable slider (independent of marquee movement) */}
      <div
        style={{
          cursor: isMouseDown ? 'grabbing' : 'grab',
          transform: `translateX(${cords}px) translateY(-50%)`, // keep isolated from marquee translate
        }}
        ref={sliderRef}
        className="slider absolute z-10 top-1/2 h-full w-5 bg-red-500 cursor-grab"
      />

      {/* Auto-scrolling marquee */}
      <InfiniteSlider
        onMove={(e) => {
         if(!isMouseDown){
             setTring(e)
       
        
         }
        }}
        speed={100}
        gap={24}
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <React.Fragment key={i}>
            <Element rect={cords} trigger={tirgger} active={isMouseDown} />
          </React.Fragment>
        ))}
      </InfiniteSlider>
    </div>
  );
};

export default Marquee;

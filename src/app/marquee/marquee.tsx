"use client"
import React, { useEffect, useRef, useState } from 'react'
import Element from './elements';
import { InfiniteSlider } from '@/components/motion-primitives/infinite-slider';
import { MenuIcon} from 'lucide-react'
const beforeAfterImages = [
  {
    id: 1,
    before: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
    after: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  },
  {
    id: 2,
    before: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
    after: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  },
  {
    id: 3,
    before: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    after: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
  },
  {
    id: 4,
    before: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    after: "https://images.unsplash.com/photo-1487412912498-0447578fcca8",
  },
  {
    id: 5,
    before: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    after: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
];

const Marquee = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [cords, setCords] = useState(0);
  const [tirgger,setTring] = useState(0)
  const [isMounted,setIsMounted] = useState(false)
  useEffect(()=>{
    setIsMounted(true)
    setCords(window.innerWidth/2)
        setIsMouseDown(false);
  },[])
    useEffect(() => {
    const handleResize = () => {
      setCords((window.innerWidth / 2)+8);
    };

    window.addEventListener("resize", handleResize);

    // cleanup when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

if(isMounted)
  return (
    <div
      onMouseDown={(e) => {
        setIsMouseDown(true);
        setCords(e.clientX); // start drag from cursor pos
      }}
      onMouseMove={(e) => {
        if (isMouseDown) {
          setCords(e.clientX+4);
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
        className="slider absolute flex items-center justify-center z-10 top-1/2 h-full w-2 rounded-full bg-zinc-100 shadow-2xl border  cursor-grab"
      >
        <div className='flex gap-2 items-center justify-center p-2 bg-zinc-100 border rounded-full'>
         <MenuIcon size={14}/>
        </div>
      </div>

      {/* Auto-scrolling marquee */}
      <InfiniteSlider
      reverse

        onMove={(e) => {
         if(!isMouseDown){
             setTring(e)
       
        
         }
        }}
        speed={100}
        gap={24}
      >
        {beforeAfterImages.map((e, i) => (
          <React.Fragment key={i}>
            <Element rect={cords} trigger={tirgger} imgObj={e} active={isMouseDown} />
          </React.Fragment>
        ))}
      </InfiniteSlider>
    </div>
  );
else 
  return (
    <>Loading...</>
  )
};

export default Marquee;

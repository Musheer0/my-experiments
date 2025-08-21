import { Button } from '@/components/ui/button'
import React from 'react'
import localFont from 'next/font/local'
import { cn } from '@/lib/utils';

const GradientText = ({ text ,className}: { text: string ,className:string}) => {
  // starting from bold (700) to light (300)
  const weights = [700, 600, 500, 400, 300];

  return (
    <h1 className={cn(
      "text-4xl",className
    )}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          style={{
            fontWeight: weights[Math.min(i, weights.length - 1)],
            opacity: 0.9-(i/100)
          }}
        >
          {char}
        </span>
      ))}
    </h1>
  );
};

const HeroTxt =()=>{
  return(
    <div className='flex flex-col w-full items-center justify-center py-10'>
      <h1 className='text-center leading-none bg-gradient-to-br from-[#AAAAAA] pb-4 to-[#787878]  bg-clip-text d3-shadow text-transparent  font-bold md:text-[77px] sm:text-7xl text-[62px] lg:text-[108px] '>The Smater Way to <br/> Manage Emails</h1>
      <p className='text-center text-zinc-300 pb-8 opacity-70 text-[20px] py-5'>Auto-segmentation,smart filtering, Ai auto-complete, and built-in CRM. <br/>Stop wasting time onrepetitive tasks/</p>
      <div className="btn">
        <Button className='py-6 rounded-full cta-btn relative bg-[#7AFD30] hover:bg-[#7AFD30] px-5! text-zinc-900'>Request Access

            <div className="absolute top-[100%] w-[50%] h-[130px] z-50 blur-3xl bg-[#7AFD30]"></div>
        </Button>
        <p className='text-xs text-muted-foreground pt-2'>Get 3 months free now</p>
      </div>
    </div>
  )
}
const HeroImgs=()=>{
  return (
    <div className='flex-1 w-full relative flex items-center gap-1 max-h-[600px]'>
     <div className='h-full mask-l flex-1 lg:block hidden  relative overflow-visible'>
          <Button 
    className='rounded-full absolute right-0  top-[3rem] scale-65 xl:scale-95 z-10 py-6.5 px-6  bg-zinc-800 hover:bg-zinc-800 nav-btn hero-img-btn'
    >Spam Protection</Button>
      <img src="/hero-left.png" alt="hero left" 
      className='rounded-r-lg translate-y-10 -rotate-6 -translate-x-10 scale-80' />
     </div>
     <div className='h-[518px] bg-zinc-800/70 border-t-2 border-l border-r border-zinc-700 p-2 rounded-xl   flex-3  relative'>
      <img src="hero.png" alt="hero main" className='p-0! mask-b object-cover rounded-xl relative z-[99]'  />
      <div className="absolute left-0 bottom-[20.5%] w-full h-full  z-100"></div>
       <Button 
    className='rounded-full absolute lg:right-10 sm:right-[80%]  scale-105 lg:translate-x-1/2 -top-6 sm:-top-4 lg:rotate-0 -rotate-6  lg:top-[20%]  z-100 py-6.5 px-6  bg-zinc-800 hover:bg-zinc-800 nav-btn hero-img-btn-middle'
    >Ai Summary</Button>

     </div>
     <div className='h-full mask-r flex-1 relative lg:block hidden  overflow-visible'>
         <Button 
    className='rounded-xl absolute left-8 -rotate-6 -top-2  xl:-top-1.5 scale-60 z-10 py-6.5 px-6  bg-zinc-800 hover:bg-zinc-800 nav-btn hero-img-btn'
    >Promotional</Button>
            <img src="/hero-right.png" alt="hero right" 
      className='rounded-l-lg -translate-y-3 rotate-6 translate-x-[50px] scale-85' />
     </div>
    </div>
  )
}

const page = () => {
  return (
<main className={`
  w-[97%]  h-[1000px] rounded-2xl border-3 mt-3 border-zinc-800 overflow-hidden  relative flex max-w-[1550px]  mx-auto flex-col items-center hero
  font-satoshi
  `}>
    <div className='w-[70%] h-[200vh] absolute top-0 -translate-y-[80%] blur-[158px]  opacity-30 left-1/2 -translate-x-1/2 bg-[#D9D9D9] rounded-full'></div>
    {/* <div className="glow absolute w-[120vh] h-[100vh] top-0 left-1/2 -translate-x-1/2 opacity-10 bg-zinc-300 blur-3xl rounded-full -translate-y-1/3 "></div> */}
  <nav className='w-full flex items-center justify-between px-4 py-5'>
         <GradientText className='text-3xl text-zinc-100' text="Sprrrint" />
    <Button 
    className='rounded-full py-6.5 px-6  bg-zinc-800 hover:bg-zinc-800 nav-btn hero-btn'
    >Request Access</Button>
  </nav>
  <section className='flex-1 w-full flex flex-col '>
    <HeroTxt/>
    <HeroImgs/>
  </section>
    </main>
  )
}

export default page
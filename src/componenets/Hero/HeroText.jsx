import React from 'react'
import { FlipWords } from '../ui/FlipWords'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
const words = ['Secure','Modern','Scalable'];
const HeroText = () => {

  useGSAP(()=>{
    gsap.fromTo('#myname',{
      x:100,
    },
    {
      opacity:1,
      x:0,
      delay:1,
      ease:'power2.inOut'
    }
    
  )
  gsap.fromTo('#descript',{

    x:100
  },{
    opacity:1,
    x:0,
    yoyo:1.2,
    delay:1,
    ease:'elastic.inOut',
    stagger:'0.25'


  })
  gsap.fromTo('#web-desc',{
    x:100
  },{
    opacity:1,
    x:0,
    delay:1.5,
    rotate:360,
    
  })
  },[])
  return (
    <div className='z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text'>
      <div className='flex-col hidden md:flex c-space '>
        <h1 id="myname" className='text-4xl font-medium opacity-0'>Hello I'am Charbel</h1>
        <div className='flex flex-col items-start'>
          <p id="descript"className='text-5xl font-medium text-neutral-300 opacity-0'>A Developer <br id="descript"/> Dedicated to Crafting.</p>
          <div>
            <FlipWords words={words} className='font-black text-white text-8xl'/>
          </div>
          <p id='web-desc' className='text-4xl font-medium text-neutral-300 opacity-0'>Web Solutions</p>
        </div>
      </div>
      {/* Mobile View */}

      <div className='flex flex-col space-y-6 md:hidden'>

        < p id="myname" className='text-4xl font-medium opacity-0'>Hello I'am Charbel</p>

        <div>
          <p className='text-5xl font-black text-neutral-300 '>
            Building
          </p>
          <div>
             <FlipWords words={words} className='font-bold text-white text-7xl'/>
          </div>
          <p id='web-desc' className='text-4xl font-black text-neutral-300 opacity-0'>Web Applications</p>
        </div>
      </div>

    </div>
  )
}

export default HeroText
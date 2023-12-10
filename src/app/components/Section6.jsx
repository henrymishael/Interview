"use client";
import Image from 'next/image'
import React from 'react'
import slide1 from '@/app/images/slide1.png'
import slide2 from '@/app/images/slide2.png'
import slide3 from '@/app/images/slide3.svg'
import logo from '@/app/images/logo.png'
import cycle from '@/app/images/cycling.png'
import flight from '@/app/images/flight.png'
import  { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


export const Section6 = () => {
  return (
    <>
    <Swiper
        slidesPerView={2.5}
        spaceBetween={30}
        autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper flex flex-row gap-12 items-center justify-center md:min-h-[25rem] xsm:min-h-[15rem]  lg:w-[100%] xsm:w-[150%]   xsm:mt-44 md:mt-12 "
      >
        
    <div className='flex flex-row gap-12 min-h-[32rem]  w-[100%] mt-12 '>
        <div className='w-[700px] lg:h-[500px] xsm:h-[300px]   rounded-xl  '>
            <SwiperSlide className='group'><Image src={slide1}/>
            <div className='absolute xsm:bottom-20 md:bottom-16 opacity-100  transition-all ease-in-out duration-300 flex flex-row items-end justify-between w-[100%] h-[100%] pl-6   rounded-xl '> 
            <div className='flex flex-row items-center gap-4 mb-4'> 
           <button className='px-3 py-2.5 rounded-md bg-white/60  border-[1px] text-black  '>Get Started</button>
           <span className='h-2 w-2 rounded-full bg-white ml-2'></span>
           <h2 className='text-white'>Activities</h2>
           <Image className='h-[24px] w-[24px]' src={cycle} />
           </div>
           <Image className='opacity-70 w-[100px] mb-4' src={logo}/>
           </div>
            </SwiperSlide>
        </div>
           
        <div className='w-[700px] lg:h-[500px] xsm:h-[300px]  rounded-xl group'>
           <SwiperSlide className='group'>
            <Image src={slide3}/>
           <div className='absolute bottom-12 opacity-0 group-hover:bottom-16 group-hover:opacity-100 transition-all ease-in-out duration-300 '>
           <button className='px-6 py-2.5 rounded-md bg-white/60 border-[1px] text-black left-6'>Get Started</button>
           </div>
           </SwiperSlide>
        </div>
        <div className='w-[700px] lg:h-[500px] xsm:h-[300px]  rounded-xl group relative'>
        <SwiperSlide className='group'>
          <Image className='' src={slide2}/>
          <div className='absolute xsm:bottom-20 md:bottom-16 opacity-100  transition-all ease-in-out duration-300 flex flex-row items-end justify-between w-[100%] h-[100%] pl-6   rounded-xl'> 
            <div className='flex flex-row items-center gap-4 pb-4'> 
           <button className='px-3 py-2.5 rounded-md bg-white/60  border-[1px] text-black '>Get Started</button>
           <span className='h-2 w-2 rounded-full bg-white ml-2'></span>
           <h2 className='text-white'>Flight</h2>
           <Image className='h-[24px] w-[24px]' src={flight} />
           </div>
           <Image className='opacity-70 w-[100px] pb-4' src={logo}/>
           </div>
          </SwiperSlide>
        </div>
        
        <div className='lg:h-[500px] xsm:h-[300px]  rounded-xl group'>
           <SwiperSlide className='group'>
            <Image src={slide3}/>
            <div className='absolute bottom-12 opacity-0 group-hover:bottom-16 group-hover:opacity-100 transition-all ease-in-out duration-300 '>
           <button className='px-6 py-2.5 rounded-md bg-white/60 border-[1px] text-black left-6 '>Get Started!</button>
           </div>
            </SwiperSlide>
        </div>
        <div className='lg:h-[500px] xsm:h-[300px]  rounded-xl group'>
            <SwiperSlide className='group'><Image src={slide1}/>
            <div className='absolute xsm:bottom-20 md:bottom-16 opacity-100  transition-all ease-in-out duration-300 flex flex-row items-center justify-between w-[100%] left-6 '> 
            <div className='flex xsm:flex-col md:flex-row items-center pb-4 gap-4'> 
           <button className='px-3 py-2.5 rounded-md bg-white/60  border-[1px] text-black '>Get Started</button>
           <span className='h-2 w-2 rounded-full bg-white ml-2'></span>
           <h2 className='text-white'>Activities</h2>
           <Image className='h-[24px] w-[24px]' src={cycle} />
           </div>
           <Image className='opacity-70 w-[100px] pb-4' src={logo}/>
           </div>
            </SwiperSlide>
        </div>
    </div>
    </Swiper>
    </>
  )
}

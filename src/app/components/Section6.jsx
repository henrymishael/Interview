"use client";
import Image from 'next/image'
import React from 'react'
import slide1 from '@/app/images/slide1.png'
import slide2 from '@/app/images/slide2.png'
import slide3 from '@/app/images/slide3.png'

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
            disableOnInteraction: false,
          }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper flex flex-row gap-12 items-center justify-center md:min-h-[400px] xsm:min-h-[250px]  md:w-[100%] xsm:w-[150%] md:mt-32 xsm:mt-44 "
      >
    <div className='flex flex-row gap-12 items-center justify-center min-h-[500px]  w-[100%] mt-12 '>
        <div className='relative w-[700px] h-[500px]  rounded-xl'>
            <SwiperSlide><Image src={slide1}/></SwiperSlide>
        </div>
           
        <div className='w-[700px] h-[500px]  rounded-xl'>
           <SwiperSlide><Image src={slide3}/></SwiperSlide>
        </div>
        <div className='w-[700px] h-[500px]  rounded-xl'>
        <SwiperSlide><Image src={slide2}/></SwiperSlide>
        </div>
        <div className='relative w-[700px] h-[500px]  rounded-xl'>
            <SwiperSlide><Image src={slide1}/></SwiperSlide>
        </div>
        <div className='w-[700px] h-[500px]  rounded-xl'>
           <SwiperSlide><Image src={slide3}/></SwiperSlide>
        </div>
    </div>
    </Swiper>
    </>
  )
}

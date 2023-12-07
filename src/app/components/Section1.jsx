import Image from 'next/image'
import React from 'react'
import avatar from '@/app/images/avatar.png'
import vec from '@/app/images/Vector.svg'
import banner from '@/app/images/bg.png'

export const Section1 = () => {
  return (
    <>
    <div className='flex lg:flex-row xsm:flex-col md:justify-center md:min-h-[500px] xsm:min-h-[700px]  xsm:px-12 xsm:mt-52  lg:mt-32 lg:px-0 xsm:gap-16 lg:gap-0  xsm:w-[150%] md:w-[100%] '>
        <div className='lg:w-[40%]  flex flex-col gap-6 justify-center'>
            <h1 className='lg:text-[60px] xsm:text-[40px] font-bold lg:leading-[70px] xsm:leading-[40px] xsm:text-center lg:text-left'>Travel Agent <br />For <span className='text-[#0D6EFD]'>What?</span> </h1>
            <p>Enjoy numerous travel benefits and exclusive membership with discounts. Beat the standard and set another with GoPaddi.</p>
            <span className='text-[#0D6EFD] flex flex-row items-center gap-2 xsm:justify-center lg:justify-normal'>
                <h4 className='underline underline-offset-4 font-bold' >Get Started</h4>
                <Image className='' src={vec} />
            </span>
            <span className='flex flex-row gap-2'>
                <div className='flex flex-row'>
                    <Image className='w-[20px] h-[20px]' src={avatar} />
                    <Image className='w-[20px] h-[20px]' src={avatar} />
                    <Image className='w-[20px] h-[20px]' src={avatar} />
                </div>
                <p className='text-[12px]'>Join over 1000 people who are already enjoying these benefits</p>
            </span>
        </div>
        <div>
            <Image className=' animate-bounce' src={banner} />
        </div>
    </div>
    </>
  )
}

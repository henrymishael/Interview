import Image from 'next/image'
import React from 'react'
import avatar from '@/app/images/avatar.png'
import vec from '@/app/images/Vector.svg'
import banner from '@/app/images/bg.png'

export const Section1 = () => {
  return (
    <div className='flex flex-row justify-center min-h-[500px]  w-[100%] mt-32'>
        <div className='w-[40%] flex flex-col gap-6'>
            <h1 className='text-[60px] font-bold leading-[70px]'>Travel Agent <br />For <span className='text-[#0D6EFD]'>What?</span> </h1>
            <p>Enjoy numerous travel benefits and exclusive membership with discounts. Beat the standard and set another with GoPaddi.</p>
            <span className='text-[#0D6EFD] flex flex-row items-center gap-2'>
                <h4 className='underline font-bold' >Get Started</h4>
                <Image className='' src={vec} />
            </span>
            <span className='flex flex-row gap-2'>
                <div className='flex flex-row'>
                    <Image className='w-[20px] h-[20px]' src={avatar} />
                    <Image className='w-[20px] h-[20px]' src={avatar} />
                    <Image className='w-[20px] h-[20px]' src={avatar} />
                </div>
                <p className='text-[12px]'>Join over 1000 people who ae already enjoying these benefits</p>
            </span>
        </div>
        <div>
            <Image src={banner} />
        </div>
    </div>
  )
}

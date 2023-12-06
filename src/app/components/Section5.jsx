import Image from 'next/image'
import React from 'react'
import cycle from '@/app/images/cycle.png'

export const Section5 = () => {
  return (
    <div className='flex md:flex-row xsm:flex-col items-center justify-center gap-16 min-h-[700px]  md:w-[100%] xsm:w-[150%] md:mt-12 xsm:mt-44 xsm:px-12 md:px-0'>
        <div className='md:w-[40%] flex flex-col gap-4 ml-8 xsm:text-center md:text-left'>
        <p className='text-[#0D6EFD] font-bold'>GoSchool</p>
        <h5 className='text-black/80 text-[40px] font-semibold leading-[56px]'>Explore Endless Global Academic Possibilities</h5>
        <div className='flex flex-row gap-6 mt-10 text-[#0d6efd] font-semibold xsm:justify-center md:justify-normal'>
            <button className='px-6 py-2.5 border-[1px] border-solid border-[#0d6efd] rounded-md hover:bg-[#0d6efd] hover:text-white '>Get Started</button>
            <button className='px-6 py-2.5 underline underline-offset-4'> Learn More</button>
        </div>
      </div>
      <div>
        <Image src={cycle}/>
      </div>
    </div>
  )
}

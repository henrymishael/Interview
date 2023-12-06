import Image from 'next/image'
import React from 'react'
import radial from '@/app/images/radial.png'

export const Section3 = () => {
  return (
    <div className='flex lg:flex-row xsm:flex-col items-center justify-center gap-16 min-h-[700px]  md:w-[100%] xsm:w-[150%] lg:mt-12 xsm:mt-44 xsm:px-12 lg:px-0'>
        <div className='lg:w-[40%] flex flex-col gap-4 ml-8 xsm:text-center lg:text-left'>
        <p className='text-[#0D6EFD] font-bold'>GoFamily</p>
        <h5 className='text-black/80 lg:text-[40px] xsm:text-[30px] font-semibold xsm:leading-[32px] lg:leading-[56px]'>Happy Families Plan Travel goals Together</h5>
        <div className='flex flex-row gap-6 mt-10 text-[#0d6efd] font-semibold xsm:justify-center lg:justify-normal'>
            <button className='px-6 py-2.5 border-[1px] border-solid border-[#0d6efd] rounded-md hover:bg-[#0d6efd] hover:text-white'>Get Started</button>
            <button className='px-6 py-2.5 underline underline-offset-4'> Learn More</button>
        </div>
      </div>
      <div>
        <Image src={radial}/>
      </div>
    </div>
  )
}

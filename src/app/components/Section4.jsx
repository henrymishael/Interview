import React from 'react'
import bg from '@/app/images/section4.png'
import Image from 'next/image'

export const Section4 = () => {
  return (
    <div className='section2 flex lg:flex-row xsm:flex-col items-center justify-center gap-16 xsm:min-h-[700px] lg:min-h-[400px]  md:w-[100%] xsm:w-[150%] lg:mt-16 xsm:mt-44 xsm:px-12 lg:px-0'> 
      <div>
        <Image src={bg} />
      </div>
      <div className='lg:w-[40%] flex flex-col gap-4 xsm:text-center lg:text-left '>
        <p className='text-[#0D6EFD] font-bold'>GoBusiness</p>
        <h5 className='text-black/80 text-[25px] font-semibold leading-[30px]'>Be the Best Among Equals With Our Cooperate Offers</h5>
        <div className='flex flex-row gap-6 mt-10 text-[#0d6efd] font-semibold xsm:justify-center lg:justify-normal'>
            <button className='px-6 py-2.5 border-[1px] border-solid border-[#0d6efd] rounded-md '>Get Started</button>
            <p className='px-6 py-2.5 underline-offset-4 underline'> Learn More</p>
        </div>
      </div>
    </div>
  )
}

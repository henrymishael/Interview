import React from 'react'
import bg from '@/app/images/section4.png'
import Image from 'next/image'

export const Section4 = () => {
  return (
    <div className='section2 flex flex-row items-center justify-center gap-16 min-h-[500px]  w-[100%] mt-12'> 
      <div>
        <Image src={bg} />
      </div>
      <div className='w-[40%] flex flex-col gap-4 '>
        <p className='text-[#0D6EFD] font-bold'>GoBusiness</p>
        <h5 className='text-black/80 text-[25px] font-semibold leading-[30px]'>Be the Best Among Equals With Our Cooperate Offers</h5>
        <div className='flex flex-row gap-6 mt-10 text-[#0d6efd] font-semibold'>
            <button className='px-6 py-2.5 border-[1px] border-solid border-[#0d6efd] rounded-md hover:bg-[#0d6efd] hover:text-white'>Get Started</button>
            <button className='px-6 py-2.5 underline-offset-4 underline'> Learn More</button>
        </div>
      </div>
    </div>
  )
}

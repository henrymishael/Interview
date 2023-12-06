import Image from 'next/image'
import React from 'react'
import cycle from '@/app/images/cycle.png'

export const Section5 = () => {
  return (
    <div className='flex flex-row items-center justify-center min-h-[500px]  w-[100%] mt-12 gap-6'>
        <div className='w-[40%] flex flex-col gap-4 ml-8'>
        <p className='text-[#0D6EFD] font-bold'>GoSchool</p>
        <h5 className='text-black/80 text-[40px] font-semibold leading-[56px]'>Explore Endless Global Academic Possibilities</h5>
        <div className='flex flex-row gap-6 mt-10 text-[#0d6efd] font-semibold'>
            <button className='px-6 py-2.5 border-[1px] border-solid border-[#0d6efd] rounded-md hover:bg-[#0d6efd] hover:text-white'>Get Started</button>
            <button className='px-6 py-2.5 underline underline-offset-4'> Learn More</button>
        </div>
      </div>
      <div>
        <Image src={cycle}/>
      </div>
    </div>
  )
}

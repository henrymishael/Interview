import Image from 'next/image'
import React from 'react'
import radial from '@/app/images/radial.png'

export const Section3 = () => {
  return (
    <div className='flex flex-row items-center justify-center min-h-[500px]  w-[100%] mt-12 gap-6'>
        <div className='w-[40%] flex flex-col gap-4 ml-8'>
        <p className='text-[#0D6EFD] font-bold'>GoFamily</p>
        <h5 className='text-black/80 text-[40px] font-semibold leading-[56px]'>Happy Families Plan Travel goals Together</h5>
        <div className='flex flex-row gap-6 mt-10 text-[#0d6efd] font-semibold'>
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

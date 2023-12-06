import Image from 'next/image'
import React from 'react'
import map from '@/app/images/map.png'

function Section2() {
  return (
    <div className='section2 flex flex-row items-center justify-center gap-16 min-h-[500px]  w-[100%] mt-12'> 
      <div>
        <Image src={map} />
      </div>
      <div className='w-[30%] flex flex-col gap-4 '>
        <p className='text-[#0D6EFD] font-bold'>Gopal</p>
        <h5 className='text-black/80 text-[40px] font-semibold leading-[56px]'>Connect your World <br />From Here!</h5>
        <div className='flex flex-row gap-6 mt-10 text-[#0d6efd] font-semibold'>
            <button className='px-6 py-2.5 border-[1px] border-solid border-[#0d6efd] rounded-md hover:bg-[#0d6efd] hover:text-white'>Get Started</button>
            <button className='px-6 py-2.5'> Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default Section2

import Image from 'next/image'
import React from 'react'
import map from '@/app/images/map.png'

function Section2() {
  return (
    <div className='section2 flex lg:flex-row xsm:flex-col items-center justify-center gap-16 min-h-[700px]  md:w-[100%] xsm:w-[150%] lg:mt-12 xsm:mt-44 xsm:px-12 lg:px-0'> 
      <div>
        <Image src={map} />
      </div>
      <div className='lg:w-[30%] xsm:w-[100%]  flex flex-col gap-4 xsm:text-center lg:text-left'>
        <p className='text-[#0D6EFD] font-bold'>Gopal</p>
        <h5 className='text-black/80 xsm:text-[32px] md:text-[40px] font-semibold md:leading-[56px] xsm:leading-[30px] '>Connect your World <br />From Here!</h5>
        <div className='flex flex-row gap-6 mt-10 text-[#0d6efd] font-semibold xsm:justify-center lg:justify-normal'>
            <button className='px-6 py-2.5 border-[1px] border-solid border-[#0d6efd] rounded-md hover:bg-[#0d6efd] hover:text-white'>Get Started</button>
            <button className='px-6 py-2.5'> Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default Section2

import React from 'react'
import { ArrowDown } from 'iconsax-react'
import chevron from '@/app/images/arrowch.svg'
import Image from 'next/image'
import avatar from '@/app/images/avatar.png'
import logo from '@/app/images/logo.png'

export const Header = () => {
  return (
    <header className='flex flex-row  justify-around  h-[80px] items-center  fixed left-0 right-0 top-0 shadow-md bg-white z-[999]'>
        {/* <Image src={logo} /> */}
        <nav className='flex flex-row gap-7 text-[14px] items-center pl-32 '> 
        <div className=' flex flex-col gap-1 pt-2 ' >
            <h7 className=' '>Home</h7>
            <span className='h-1.5 w-1.5 bg-[#4A84D6] rounded-full ml-5'></span>
        </div>
        <div className='flex flex-row justify-center gap-2'>
        <h7 className=' '>Solutions</h7>
        <Image src={chevron}/>
        </div>
        <div className='flex flex-row gap-2'>
        <h7 className=' '>Products</h7>
        <Image src={chevron}/>
        </div>
        <div className='flex flex-row gap-2'>
        <h7 className=' '>Company</h7>
        <Image src={chevron}/>
        </div>
        </nav>
        <div className='relative w-[180px]  flex flex-row items-center justify-between border-black/20 border-[0.5px] border-solid rounded-md px-2 py-1 '>
            <Image className='w-[40px] h-[40px]' src={avatar} alt="" />
            <span className='flex flex-row gap-2'>
                <p>Mishael</p>
                <Image src={chevron} />
            </span>
        </div>
    </header>
  )
}

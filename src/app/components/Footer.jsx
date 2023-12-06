import Image from 'next/image'
import React from 'react'
import logo from '@/app/images/logo.png'
import footer from '@/app/images/footer.png'

export const Footer = () => {
  return (
    <div className='flex flex-row items-center justify-between min-h-[400px]  md:w-[100%] xsm:w-[150%] mt-12 gap-10 bg-[#4A84D6] px-14 py-10'>
        <div className='flex flex-col gap-12 text-white w-[25%]'>
            <Image src={logo}/>
            <p className='text-[12px]'>Gopaddi is a travel network that connects and strengthens people’s relationships with a world of beautiful, happy people who are able to reach out for their dreams and be who they want to be.</p>
            <p className='text-[12px]'>This network is a community of individuals, families, and organisations who have chosen to take control of their travel desires and freely explore a world of limitless possibilities.</p>
        </div>
        <div className='list-none flex flex-row gap-8  text-[12px]'>
        <span className='flex flex-col gap-4 text-white'>
                <h4 className='font-semibold text-[14px] '>Quick Links</h4>
                <li><a href='#' />Home</li>
                <li><a href='#' />About Us</li>
                <li><a href='#' />Contact Us</li>
                <li><a href='#' />Terms and Conditions</li>
                <li><a href='#' />Become An Affiliate</li>
            </span>
            <span className='flex flex-col gap-4 text-white'>
                <h4 className='font-semibold text-[14px] '>Business Links</h4>
                <li><a href='#' />GoPal</li>
                <li><a href='#' />GoBusiness</li>
                <li><a href='#' />GoFamily</li>
                <li><a href='#' />GoAgent</li>
                <li><a href='#' />GoSchool</li>
            </span>
            <span className='flex flex-col gap-4 text-white'>
                <h4 className='font-semibold text-[14px] '>Business Links</h4>
                <li><a href='#' />Facebook</li>
                <li><a href='#' />Twitter</li>
                <li><a href='#' />Instagram</li>
                <li><a href='#' />Linkedin</li>
                
            </span>
        </div>
        <div className='flex flex-col gap-4 w-[30%]'>
            <p className='text-white font-semibold'>Subscribe to Our Newsletter</p>
            <input className='bg-[#82B4FF]  px-2 h-[2.5rem] placeholder:text-white placeholder:font-semibold border-none outline-none text-white' type="email" name="" id="" placeholder='Email' />
            <div className='flex flex-row gap-2 items-start  '>
                <input type="checkbox" name="" id="" />
                <p className='text-[12px] text-white'>By subscribing you are accepting to receive marketing information from Aero and agree to the terms of Aero’s Privacy Policy.</p>
            </div>
            <Image src={footer} />
        </div>
    </div>
  )
}

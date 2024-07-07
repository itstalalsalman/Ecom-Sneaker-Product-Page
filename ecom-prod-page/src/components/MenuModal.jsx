import React from 'react'
import { close } from '../assets'

const MenuModal = (props) => {
  return (
    <div className='fixed w-full h-[100vh] bg-[rgba(0,0,0,0.7)] flex justify-start items-start'>
        <div className='w-[50%] h-full bg-white flex flex-col justify-start items-start p-5 gap-8'>
          <img src={close} alt='close' className='cursor-pointer ' onClick={() => props.showMenu(false)}/> 
          <ul className='text-black  flex flex-col justify-start items-start gap-4 font-bold'>
            <li className='cursor-pointer'>Collections</li>
            <li className='cursor-pointer'>Men</li>
            <li className='cursor-pointer'>Women</li>
            <li className='cursor-pointer'>About</li>
            <li className='cursor-pointer'>Contact</li>
          </ul>
        </div>
    </div>
  )
}

export default MenuModal
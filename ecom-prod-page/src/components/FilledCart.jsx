import React from 'react'
import { img1Thmb, del } from '../assets';

const FilledCart = (props) => {
  return (
    <div className='w-full h-[200px] px-5 flex flex-col items-start justify-center gap-5'>
        <div className='w-full h-[70px] flex justify-evenly items-center'>
          <img src={img1Thmb} alt='cart-img' className='w-[50px] rounded-lg object-contain'/>
          <div className='w-[200px] h-[50px] text-[14px] flex flex-col justify-center items-start gap-2' style={{color: 'hsl(219, 9%, 45%)'}}>
            <p className=''>Fall Limited Edition Sneakers</p>
            <p className=''>$125.00 x {props.count} <span className='text-black font-semibold'>${props.total(props.count)}.00</span></p>
          </div>
          <img src={del} alt='trash' className='cursor-pointer' onClick={() => props.setCnt(0)}/>
        </div>
        <button className='w-full h-[50px] rounded-lg text-black text-[14px] font-semibold' style={{backgroundColor: 'hsl(26, 100%, 55%)'}}>Checkout</button>
    </div>
  )
}

export default FilledCart
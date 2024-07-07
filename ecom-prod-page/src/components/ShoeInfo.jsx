import React from 'react'
import { motion } from 'framer-motion';
import { plus, minus, cart } from '../assets/index.js';

const ShoeInfo = (props) => {
  return (
    <motion.div 
        initial={{ x: '50vw' }}  // Starts from the right
        animate={{ x: 0 }}  // Animates to its place
        transition={{ type: 'spring', stiffness: 80, duration: 0.4 }}
        className='md:w-[570px] sm:w-[100%] md:h-[100%] sm:h-[500px] flex flex-col items-start md:justify-center sm:justify-start md:px-0 sm:p-8'
    >
            <p className='font-semibold text-[14px] tracking-widest' style={{color: 'hsl(219, 9%, 45%)'}}>SNEAKER COMPANY</p>
            <h1 className='font-bold md:text-[40px] sm:text-[30px] w-[400px] md:leading-[50px] sm:leading-[35px] mt-2'>Fall Limited Edition Sneakers</h1>
            <p className='text-[14px] md:w-[400px] sm:w-[400px] md:mt-8 sm:mt-4' style={{color: 'hsl(219, 9%, 45%)'}}>
                These low-profile sneakers are your perfect casual wear companion. 
                Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
            </p>
            <div className='w-[400px] flex md:flex-col sm:flex-row md:justify-center sm:justify-between md:items-start sm:items-center gap-1 md:mt-4 sm:mt-6'>
                <div className='flex justify-center items-center gap-5'>
                    <h2 className='font-bold text-[22px]'>$125.00</h2>
                    <p className='w-[45px] bg-black text-white text-[14px] text-center rounded-md'>50%</p>
                </div>
                <p className='font-semibold line-through text-[14px] mt-1' style={{color: 'hsl(219, 9%, 45%)'}}>$250.00</p>
            </div>
            <div className='w-[400px] flex md:flex-row sm:flex-col md:items-center sm:items-start justify-start mt-7'>
                <div className='flex items-center justify-center'>
                    <button className='md:w-[35px] sm:w-[50px] h-[50px] rounded-s-lg flex justify-center items-center' style={{backgroundColor: 'hsl(223, 64%, 98%)'}} onClick={() => props.count > 0 ? props.quantity(props.count - 1) : null}>
                        <img src={minus} alt='cart-signs'/> 
                    </button>
                    <p className='md:w-[70px] sm:w-[300px] h-[50px] flex items-center justify-center' style={{backgroundColor: 'hsl(223, 64%, 98%)'}}>{props.count}</p>
                    <button className='md:w-[35px] sm:w-[50px] h-[50px] rounded-e-lg flex justify-center items-center' style={{backgroundColor: 'hsl(223, 64%, 98%)'}} onClick={() => props.quantity(props.count + 1)}>
                        <img 
                            src={plus} 
                            alt='cart-signs'
                        /> 
                    </button>
                </div>
                <button className='md:ml-3 sm:ml-0 md:w-[250px] sm:w-[400px] h-[50px] md:mt-0 sm:mt-4 flex items-center justify-center gap-3 font-semibold rounded-lg text-[14px]' style={{backgroundColor: 'hsl(26, 100%, 55%)'}} onClick={() => props.cartView(true)}><img src={cart} alt='cart' className='icon cart-icon'/> Add to cart</button>
            </div>
    </motion.div>
  )
}

export default ShoeInfo
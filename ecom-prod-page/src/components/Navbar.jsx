import React from 'react'
import { motion } from 'framer-motion';
import {logo, cart, avatar} from '../assets/index.js';

const Navbar = (props) => {
  const handleCartHover = () => {
    if(!props.cartHover){
      props.cartSt(false);
    }
    if(props.count === 0){
      props.cartSt(false);
    }
  }
  return (
    <div className='md:w-[80%] sm:w-[100%] h-[100px] flex justify-between items-center border-b border-b-[hsl(220, 14%, 75%)] relative'>
        <div className='w-[650px] h-[100%] flex items-center justify-between gap-2'>
            <div className='md:w-[180] h-[100%] flex justify-center items-center gap-3 md:pr-0 sm:pr-5'>
              <img 
                src='https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg' 
                alt='hmburger' 
                className='md:hidden sm:w-[40px] object-contain mt-1 ml-4 cursor-pointer' 
                onClick={() => props.menuState(true)} 
              />
              <img 
                src={logo} 
                alt='logo-sneaker' 
                className='w-[180px] h-[24px]'
              />
            </div>
            <motion.ul 
              initial={{ y: '-30vw' }}  // Starts from the right
              animate={{ y: 0 }}  // Animates to its place
              transition={{ type: 'spring', stiffness: 50, duration: 1 }}
              className=' w-[60%] h-[100%] md:flex justify-between gap-1 sm:hidden'
            >
                <li className='nav-item'>Collections</li>
                <li className='nav-item'>Men</li>
                <li className='nav-item'>Women</li>
                <li className='nav-item'>About</li>
                <li className='nav-item'>Contact</li>
            </motion.ul>
        </div>
        <div className='w-[150px] h-[100%] flex justify-between items-center gap-5 md:mr-0 sm:mr-8'>
            <img 
              src={cart} 
              alt='cart' 
              className='w-[22px] ml-[30px] cursor-pointer cart-nav' 
              onMouseEnter={()=> props.cartSt(true)} 
              onMouseLeave={handleCartHover}
            />
            <img 
              src={avatar} 
              alt='avatar' 
              className='md:w-[45px] sm:w-[30px] rounded-full hover:border-[2px] hover:border-orange-500 cursor-pointers'
            />
        </div>
    </div>
  )
}

export default Navbar
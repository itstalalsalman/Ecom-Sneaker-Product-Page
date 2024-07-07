import React from 'react'
import ImageContainer from './ImageContainer.jsx';
import ShoeInfo from './ShoeInfo.jsx';

const Hero = (props) => {

    return (
    <div className='md:w-[80%] sm:w-[100%] h-[90%] flex justify-between md:gap-10 sm:gap-0 md:flex-nowrap sm:flex-wrap'>
        <ImageContainer 
            imageModal={props.imageModal}
        />
        <ShoeInfo 
            cartView={props.cartView}
            quantity={props.quantity} 
            count={props.count} 
        />
    </div>
  )
}

export default Hero
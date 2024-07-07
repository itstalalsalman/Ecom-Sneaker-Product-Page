import React, { useState } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import ImageContainer from './ImageContainer';
import MenuModal from './MenuModal';
import FilledCart from './FilledCart';

const Home = () => {
  const [imageModal, setImageModal] = useState(false);
  const [count, setCount] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [menuModal, setMenuModal] = useState(false);
  const [addToCart, setAddToCart ] = useState(false);
  const [isCartHovered, setIsCartHovered] = useState(false);
  const cartTotal = (count) => 125.00 * count;

  const handleCartMouseEnter = () => {
    setIsCartHovered(true);
    setShowCart(true);
  };

  const handleCartMouseLeave = () => {
    setIsCartHovered(false);
    setShowCart(false);
  };

  return (
    <div className='w-full h-[100vh] flex flex-col justify-start items-center relative md:overflow-hidden sm:overflow-visible'>
        <Navbar 
          cartSt={setShowCart} 
          menuState={setMenuModal}
          cartHover={setIsCartHovered}
          count={count}
        /> 
        {/* CartSt refers to the state of cart on Hover and cartHover when cursor is inside the cart */}
        <Hero 
          imageModal={setImageModal}
          cartView={setAddToCart}
          quantity={setCount} 
          count={count} 
        />
        {/*quantity refers to the changing the quantity by changing count and imageModal is when the main image is clicked and modal is opened and cartView is basically Add to basket updating cart state*/}
        {imageModal && 
          <div className='sm:hidden absolute w-full h-[100vh] bg-[rgba(0,0,0,0.7)] md:flex justify-center items-center'>
            <ImageContainer 
              val={imageModal} 
              imageModal={setImageModal}
            />
          </div>
        }
        {showCart && (
          <div className='w-[350px] h-[250px] rounded-lg bg-white absolute top-20 right-20 cart-container'
            onMouseEnter={handleCartMouseEnter}
            onMouseLeave={handleCartMouseLeave}
          >
            <div className='w-full h-[50px] flex justify-start items-center cart-header'>
              <h4 className='text-black font-bold pl-5'>Cart</h4>
            </div>
            {addToCart && count > 0 ?
              <FilledCart 
                setCnt={setCount}
                count={count}
                total={cartTotal}
              />
              :
              <div className='w-full h-[200px] flex justify-center items-center text-[14px] font-semibold color-cart'>
                Your cart is empty.
              </div>
            }
          </div>
        )}
        {menuModal && (
          <MenuModal 
            showMenu={setMenuModal}
          />
        )}
    </div>
  )
}

export default Home
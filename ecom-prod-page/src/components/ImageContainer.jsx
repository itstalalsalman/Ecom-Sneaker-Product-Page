import React, { useState } from 'react'
import { img1, img1Thmb, img2, img2Thmb, img3, img3Thmb, img4, img4Thmb, close, next, previous } from '../assets/index.js';

const ImageContainer = (props) => {
    const [mainPic, setMainPic] = useState(img1);
    const [selectedThumbnail, setSelectedThumbnail] = useState(0);

    const thumbnailImg = [
        img1Thmb,
        img2Thmb,
        img3Thmb,
        img4Thmb
    ];
    const mainImages = [
        img1,
        img2,
        img3,
        img4
    ];

    const handleNext = () => {
        const newIndex = (selectedThumbnail + 1) % mainImages.length;
        setMainPic(mainImages[newIndex]);
        setSelectedThumbnail(newIndex);
    };

    const handlePrevious = () => {
        const newIndex = (selectedThumbnail - 1 + mainImages.length) % mainImages.length;
        setMainPic(mainImages[newIndex]);
        setSelectedThumbnail(newIndex);
    };

  return (
    <div className={`md:w-[550px] sm:w-[100%] md:h-[100%] sm:h-[350px] bg-none flex flex-col ${props.val ? 'justify-start' : 'justify-start'} items-center md:ml-5 sm:ml-0 relative`}>
            {props.val && <img src={close}  className='w-[20px] cursor-pointer ml-[420px] absolute top-[50px]' onClick={() => props.imageModal(false)}/>}
            <div className='md:w-[100%] md:h-[70%] sm:w-[100%] sm:h-[100%] md:rounded-2xl sm:rounded-none flex items-center justify-center md:mt-[40px] sm:mt-0'>
                <img src={mainPic} alt='shoe-main' className={`${props.val ? 'w-[450px] h-[420px] rounded-2xl' : 'md:w-[400px] sm:w-[100%] md:h-[400px] sm:h-[350px] sm:object-cover md:rounded-xl sm:rounded-none md:cursor-pointer sm:cursor-default'}`} onClick={() => props.imageModal(true)}/>
                {props.val && 
                    <div className='w-[485px] absolute flex justify-between align-center'>
                        <button className='bg-white w-[40px] h-[40px] rounded-full flex justify-center items-center' onClick={handlePrevious}><img  src={previous} className='w-[9px] mr-1'/></button>
                        <button className='bg-white w-[40px] h-[40px] rounded-full flex justify-center items-center' onClick={handleNext}><img  src={next} className='w-[9.5px] ml-1'/></button>
                    </div>
                }
                <div className='md:hidden w-[100%] absolute sm:flex justify-between align-center px-5'>
                        <button className='bg-white w-[40px] h-[40px] rounded-full flex justify-center items-center' onClick={handlePrevious}><img  src={previous} className='w-[9px] mr-1'/></button>
                        <button className='bg-white w-[40px] h-[40px] rounded-full flex justify-center items-center' onClick={handleNext}><img  src={next} className='w-[9.5px] ml-1'/></button>
                </div>
            </div>
            <div className='w-[400px] md:flex justify-between items-center sm:hidden '>    
                {thumbnailImg.map((thmb, index) => (
                    <div key={index} className={`rounded-2xl ${selectedThumbnail === index ? 'border-class' : 'normal'}`}>
                        <img 
                            key={index} 
                            src={thmb} 
                            alt={`thumbnail-${index}`} 
                            onClick={() => {
                                setMainPic(mainImages[index])
                                setSelectedThumbnail(index)
                            }} 
                            className={`w-[80px] cursor-pointer rounded-xl relative hover:opacity-80 ${selectedThumbnail === index ? 'opacity-80' : 'none'}`}
                        />
                    </div>
                ))}
            </div>
    </div>
  )
}

export default ImageContainer
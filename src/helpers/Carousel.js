// Carousel.js

import React, { useState } from 'react';
import { GrNext, GrPrevious } from "react-icons/gr";

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    return (
        <div className="relative bg-gray-800 rounded-xl py-6 px-14">
            <div className="overflow-hidden w-full">
                <div
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`flex-shrink-0 w-full bg-no-repeat bg-contain bg-center h-56`}
                            style={{ backgroundImage: `url(${image})` }}
                        />
                    ))}
                </div>
            </div>
            <button className="absolute left-2 top-1/2 transform -translate-y-1/2" onClick={prevSlide}>
                <GrPrevious size={32} className='bg-gray-200 border-2 border-white text-white rounded-full p-1' />
            </button>
            <button className="absolute right-2 top-1/2 transform z-50 -translate-y-1/2" onClick={nextSlide}>
                <GrNext size={32} className='bg-gray-200 border-2 border-white text-white rounded-full p-1' />
            </button>
        </div>
    );
};

export default Carousel;

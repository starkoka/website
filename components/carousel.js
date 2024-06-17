"use client";

import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';

const Carousel = ({ images }) => {
    const options = {
        type: 'loop',
        perPage: 3,
        perMove: 1,
        gap: '1rem',
        autoplay: true,
        pauseOnHover: true,
        resetProgress: false,
        arrows: true,
        pagination: true,
    };

    return (
        <div className="max-w-6xl mx-auto mt-10">
            <Splide options={options}>
                {images.map((image, index) => (
                    <SplideSlide key={index} className="flex items-center">
                        <img src={image} alt={`Slide ${index + 1}`} className="w-full h-auto object-cover rounded-lg my-auto" />
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
};

export default Carousel;

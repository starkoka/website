"use client";

import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';

const Carousel = ({ images }) => {
    const options = {
        type: 'slide',
        perPage: 1,
        perMove: 1,
        rewind: true,
        gap: '1rem',
        autoplay: false,
        arrows: true,
        pagination: true,
        keyboard: 'focused',
    };

    return (
        <div className="w-full mx-auto">
            <Splide options={options}>
                {images.map((image) => (
                    <SplideSlide key={image.id} className="flex items-center justify-center">
                        <img
                            src={image.src}
                            alt={image.alt || ''}
                            className="w-full h-full object-contain rounded"
                            loading="lazy"
                        />
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
};

export default Carousel;

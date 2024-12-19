import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/splide/dist/css/splide.min.css';
import React from 'react';
import { dummyImages } from '../../data/dummyImages';
import './MarqueeText.css';

const MarqueeText = ({ direction, speed, isReverse, isMobile }) => {
    // Reverse images if isReverse is true
    const images = isReverse ? [...dummyImages].reverse() : dummyImages;

    return (
        <div className="flex justify-center">
            <Splide
                id="splide"
                options={{
                    type: 'loop',
                    drag: 'free',
                    focus: 'center',
                    autoHeight: true,
                    perPage: 3,
                    gap: 0,
                    pagination: false,
                    arrows: false,
                    direction: direction,
                    height: isMobile ? '100px' : '600px',
                    autoScroll: {
                        speed: speed ? speed : 1,
                    },
                }}
                extensions={{ AutoScroll }}
            >
                {images.map((image, index) => (
                    <SplideSlide key={index} className={`${isMobile ? 'm-0 flex items-center gap-2' : 'm-[0.65rem]'}`}>
                        <img
                            key={index}
                            src={image}
                            alt={`Image ${index}`}
                            className={`object-cover ${isMobile ? 'w-32 mx-2' : ''}`}
                        />
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
};

export default MarqueeText;

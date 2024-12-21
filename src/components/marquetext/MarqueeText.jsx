import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/splide/dist/css/splide.min.css';
import React from 'react';

const MarqueeText = ({ direction, speed, isMobile, imageData, textData, className }) => {
    // Choose the data to render based on what is passed
    const data = imageData || textData || [];

    return (
        <div className="flex justify-center">
            <Splide
                id="splide"
                options={{
                    type: 'loop',
                    drag: 'free',
                    focus: 'center',

                    autoHeight: true,
                    pagination: false,
                    arrows: false,
                    direction: direction,
                    height: isMobile ? '40px' : '600px',
                    autoScroll: {
                        speed: speed || 1,
                    },
                }}
                extensions={{ AutoScroll }}
                className={className}
            >
                {data.map((item, index) => (
                    <SplideSlide
                        key={index}
                        className={`w-max ${isMobile ? 'm-0 flex items-center gap-2' : 'm-[0.65rem]'}`}
                    >
                        {imageData ? (
                            // Render image if imageData is passed
                            <img
                                src={item}
                                alt={`Image ${index}`}
                                className={`object-cover ${isMobile ? 'w-16 mx-2' : ''}`}
                            />
                        ) : (
                            // Render text if textData is passed
                            <span className="text-black text-xl sm:text-2xl font-bold mx-6">
                                {item}
                            </span>
                        )}
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
};

export default MarqueeText;

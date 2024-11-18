import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/splide/dist/css/splide.min.css';
import React from 'react';
import { dummyImages } from '../../data/dummyImages';
import './MarqueeText.css';

const MarqueeText = () => {
    return (
        <div className="marquee_wrapp">
            <div className="marquee">
                <Splide
                    id="splide"
                    options={{
                        type: 'loop',
                        drag: 'free',
                        focus: 'center',
                        autoWidth: true,
                        gap: 0,
                        pagination: false,
                        arrows: false,
                        autoScroll: {
                            speed: 0.8,

                        },
                    }}
                    extensions={{ AutoScroll }}
                >
                    {dummyImages.map((image, index) => (
                        <SplideSlide key={index}>
                            <img key={index} src={image} alt={`Image ${index}`} className="md:w-56 md:h-44 sm:w-36 sm:h-28 w-24 h-20 object-cover rounded-lg mx-2" />
                        </SplideSlide>
                    ))}
                    {/* <SplideSlide>
                        <span className="marquee_text">
                            Bring <span className='ml-2'>Life</span>
                            <img src={star} alt="" />
                        </span>
                    </SplideSlide>
                    <SplideSlide>
                        <span className="marquee_text">
                            To Your<span className='ml-2'>Idea</span>
                            <img src={star} alt="" />
                        </span>
                    </SplideSlide>
                    <SplideSlide>
                        <span className="marquee_text">
                            Contact<span className='ml-2'>Us</span>
                            <img src={star} alt="" />
                        </span>
                    </SplideSlide>
                    <SplideSlide>
                        <span className="marquee_text">
                            For More<span className='ml-2'>Information</span>
                            <img src={star} alt="" />
                        </span>
                    </SplideSlide> */}
                </Splide>
            </div>
        </div>
    );
}

export default MarqueeText;

import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import star from '../../assets/star.svg';
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
                        gap: 40,
                        pagination: false,
                        arrows: false,
                        autoScroll: {
                            speed: 3,

                        },
                    }}
                    extensions={{ AutoScroll }}
                >
                    <SplideSlide>
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
                    </SplideSlide>
                </Splide>
            </div>
        </div>
    );
}

export default MarqueeText;

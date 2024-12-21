import React, { useEffect, useRef, useState } from 'react';

const MarqueeText = ({ direction, speed, isMobile, textData, className }) => {
    const marqueeRef = useRef(null);
    const [scrolling, setScrolling] = useState(false);

    // Create a duplicate of the textData to make it "infinite"
    const duplicatedTextData = [...textData, ...textData, ...textData, ...textData]; // Duplicate the text for seamless scrolling

    useEffect(() => {
        const marqueeElement = marqueeRef.current;

        const scrollMarquee = () => {
            if (marqueeElement) {
                const contentWidth = marqueeElement.scrollWidth;
                let currentTransform = parseFloat(getComputedStyle(marqueeElement).transform.split(',')[4]) || 0;

                if (scrolling) {
                    if (direction === 'rtl') {
                        currentTransform -= speed;
                    } else {
                        currentTransform += speed;
                    }

                    // If we've reached the end of the first set, reset the position
                    if (currentTransform <= -contentWidth / 2) {
                        currentTransform = 0;
                    } else if (currentTransform >= 0) {
                        currentTransform = -contentWidth / 2;
                    }

                    // Apply the new position using transform: translateX
                    marqueeElement.style.transform = `translateX(${currentTransform}px)`;

                    // Request the next animation frame
                    requestAnimationFrame(scrollMarquee);
                }
            }
        };

        // Start the animation
        setScrolling(true);
        requestAnimationFrame(scrollMarquee);

        // Cleanup
        return () => setScrolling(false);
    }, [direction, speed]);

    return (
        <div
            className={`flex justify-center overflow-hidden ${className} whitespace-nowrap ${isMobile ? 'h-10' : 'h-16'}`}
        >
            <div
                ref={marqueeRef}
                className="flex items-center px-4 transform-[translateX(0)] transition-transform duration-0s linear"
                style={{
                    transform: 'translateX(0)',
                    transition: 'transform 0s linear',
                }}
            >
                {duplicatedTextData.map((text, index) => (
                    <span key={index} className="text-black text-xl sm:text-2xl font-bold mx-6">
                        {text}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default MarqueeText;

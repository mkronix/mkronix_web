import React, { useEffect, useState } from 'react';

const ZeroToHundredLoader = () => {
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPercentage((prev) => {
                if (prev < 100) {
                    return prev + 1;
                } else {
                    clearInterval(interval);
                    return prev;
                }
            });
        }, 30); // Adjust time interval for speed

        return () => clearInterval(interval);
    }, []);

    const strokeWidth = 1; // Thickness of the circle
    const normalizedRadius = 50 - strokeWidth / 2; // Normalize radius for stroke alignment
    const circumference = 2 * Math.PI * normalizedRadius; // Circumference of the circle
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
        <div className="flex items-center justify-center h-screen w-screen bg-black">
            <div className="relative">
                {/* SVG Circle Progress Bar */}
                <svg
                    viewBox="0 0 100 100"
                    className="transform -rotate-90 w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] lg:w-[300px] lg:h-[300px]"
                >
                    <circle
                        stroke="white"
                        fill="transparent"
                        strokeWidth={strokeWidth}
                        r={normalizedRadius}
                        cx="50"
                        cy="50"
                        opacity="0.2" // Background circle
                    />
                    <circle
                        stroke="white"
                        fill="transparent"
                        strokeWidth={strokeWidth}
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        r={normalizedRadius}
                        cx="50"
                        cy="50"
                        strokeLinecap="round" // Rounded ends
                        className="transition-stroke duration-300 ease-linear"
                    />
                </svg>

                {/* Percentage Text */}
                <div className="absolute inset-0 flex items-center justify-center text-white text-opacity-60 text-4xl md:text-6xl lg:text-8xl font-bold">
                    {percentage}%
                </div>
            </div>
        </div>
    );
};

export default ZeroToHundredLoader;

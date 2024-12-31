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
        }, 10); // Adjust time interval for speed

        return () => clearInterval(interval);
    }, []);
    return (
        <div className="flex items-center justify-center h-screen w-screen bg-black">
            <div className="relative">
                {/* Percentage Text */}
                <div className="absolute font-mono inset-0 flex items-center justify-center text-off-white lg:text-6xl text-5xl font-bold">
                    {percentage}%
                </div>
            </div>
        </div>
    );
};

export default ZeroToHundredLoader;

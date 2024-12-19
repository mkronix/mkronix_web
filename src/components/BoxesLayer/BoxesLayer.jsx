import React from 'react';

const BoxesLayer = ({ gridColor = '#242323cc', gridSize = '25px 24px' }) => {
    return (
        <div
            className={`absolute bottom-0 left-0 right-0 top-0`}
            style={{
                backgroundImage: `linear-gradient(to right, ${gridColor} 1px, transparent 1px), 
                                  linear-gradient(to bottom, ${gridColor} 1px, transparent 1px)`,
                backgroundSize: gridSize,
                maskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)',
            }}
        ></div>
    );
};

export default BoxesLayer;

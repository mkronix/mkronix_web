import React, { useRef, useState } from 'react';

const CardWithAnimationComponent = ({ children }) => {
    const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const containerRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setHoverPosition({ x, y });
    };

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    return (
        <div
            className="relative overflow-hidden rounded-lg shadow"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            ref={containerRef}
            style={{ cursor: 'grab' }}
        >
            {children}
            <div
                className="absolute aspect-square rounded-full blur-[80px] bg-[rgb(53,50,156)]"
                style={{
                    width: '250px', // Fixed light size (you can make it dynamic if needed)
                    height: '150px', // Matches width for a square
                    left: `${hoverPosition.x}px`,
                    top: `${hoverPosition.y}px`,
                    opacity: isHovering ? '1' : '0',
                    transition: 'opacity 100ms ease',
                    pointerEvents: 'none', // Ensures the light doesn't interfere with events
                    transform: 'translate(-50%, -50%)', // Centers the light at the cursor
                    zIndex: 0, // Adjust layering if needed
                }}
            />
        </div>
    );
};

export default CardWithAnimationComponent;

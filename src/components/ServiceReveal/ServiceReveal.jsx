'use client';

import React, { useState, useRef, useCallback, useEffect } from 'react';
import MenuMarquee, { MenuItem } from '../MenuMarquee/MenuMarquee';
const data = [
    {
        id: 1,
        src: 'https://images.unsplash.com/photo-1682806816936-c3ac11f65112?q=80&w=1274&auto=format&fit=crop',
        text: 'Web Design & Development',
        marqueeTexts: [
            "Innovative Design ✨",
            "Crafting Experiences 🎨",
            "Digital Brilliance 💡",
            "Elevate Your Brand 🚀",
        ],
    },
    {
        id: 2,
        src: 'https://images.unsplash.com/photo-1681063762354-d542c03bbfc5?q=80&w=1274&auto=format&fit=crop',
        text: 'App Design & Development',
        marqueeTexts: [
            "Creative UI/UX Design 🎨",
            "Web Design & Development 🌐",
            "App Design & Development 📱",
            "Custom Digital Solutions 🔧",
        ],
    },
    {
        id: 3,
        src: 'https://images.unsplash.com/photo-1679640034489-a6db1f096b70?q=80&w=1274&auto=format&fit=crop',
        text: 'Ui/Ux Design',
        marqueeTexts: [
            "Award-Winning Designs 🏆",
            "Cutting-Edge Applications 💻",
            "Scalable Web Platforms 📈",
            "User-Centered Innovations 🌟",
        ],
    },
    {
        id: 4,
        src: 'https://images.unsplash.com/photo-1679482451632-b2e126da7142?q=80&w=1274&auto=format&fit=crop',
        text: 'Graphic Design',
        marqueeTexts: [
            "Award-Winning Designs 🏆",
            "Cutting-Edge Applications 💻",
            "Scalable Web Platforms 📈",
            "User-Centered Innovations 🌟",
        ],
    },
];
const ServiceReveal = () => {
    const [activeImage, setActiveImage] = useState(null);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [scale, setScale] = useState(0.5);
    const timeoutRef = useRef(null);
    const requestRef = useRef(null);
    const prevCursorPosition = useRef({ x: 0, y: 0 });
    const handleMouseMove = useCallback((e) => {
        const { clientX, clientY } = e;
        const dx = clientX - prevCursorPosition.current.x;
        const dy = clientY - prevCursorPosition.current.y;
        const easeAmount = 0.2;
        const newX = prevCursorPosition.current.x + dx * easeAmount;
        const newY = prevCursorPosition.current.y + dy * easeAmount;
        setCursorPosition({ x: newX, y: newY });
        prevCursorPosition.current = { x: newX, y: newY };
    }, []);
    useEffect(() => {
        const updateCursorPosition = (e) => {
            if (requestRef.current) return;
            requestRef.current = requestAnimationFrame(() => {
                handleMouseMove(e);
                requestRef.current = null;
            });
        };
        window.addEventListener('mousemove', updateCursorPosition);
        return () => {
            window.removeEventListener('mousemove', updateCursorPosition);
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, [handleMouseMove]);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 640);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleImageHover = useCallback(
        (image) => {
            if (activeImage !== image) {
                setActiveImage(image);
                if (timeoutRef.current) clearTimeout(timeoutRef.current);
                timeoutRef.current = setTimeout(() => {
                    setOpacity(1);
                    setScale(1);
                }, 50);
            } else {
                setOpacity(1);
                setScale(1);
            }
        },
        [activeImage]
    );
    const handleMouseLeave = useCallback(() => {
        setOpacity(0);
        setScale(0.5);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            setActiveImage(null);
        }, 300);
    }, []);

    return (
        <div
            className="relative w-full min-h-fit mt-4 flex flex-col gap-4"
            onMouseLeave={handleMouseLeave}>
            {data.map((image) => (
                <div
                    key={image.id}
                    className={`md:p-4 cursor-pointer relative flex items-center justify-start gap-4`}
                    onMouseEnter={() => handleImageHover(image)}>

                    {isSmallScreen && (
                        <img
                            src={image?.src}
                            className="w-20 h-20 object-cover rounded-md"
                            alt={image?.text}
                        />
                    )}

                    <div
                        className={`h-[1px] bg-white/30 absolute top-0 left-0 transition-all duration-300 ease-linear ${activeImage?.id === image?.id ? 'w-full' : 'w-0'
                            }`}
                    />
                    <span className={`text-white/80 text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold `}>{image.id}</span>
                    <div className="flex items-center w-full">
                        <MenuItem linkText={image.text} marqueeTexts={image.marqueeTexts} />
                    </div>
                    <div
                        className={`h-[1px] bg-white/30 absolute bottom-0 left-0 transition-all duration-300 ease-linear ${activeImage?.id === image?.id ? 'w-full' : 'w-0'
                            }`}
                    />
                </div>
            ))}
            {!isSmallScreen && activeImage && (
                <img
                    src={activeImage.src}
                    alt={activeImage.alt}
                    className={`fixed bg-white object-cover pointer-events-none z-10 md:w-56 md:h-56  w-24 h-24 rounded-lg`}
                    style={{
                        left: isSmallScreen ? 0 : `${cursorPosition.x}px`,
                        top: `${cursorPosition.y}px`,
                        transform: `translate(-50%, -50%) scale(${scale})`,
                        opacity: opacity,
                    }}
                />
            )}
        </div>
    );
};
export default ServiceReveal;

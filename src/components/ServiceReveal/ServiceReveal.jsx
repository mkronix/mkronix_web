'use client';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { MenuItem } from '../MenuMarquee/MenuMarquee';
import web from '../../assets/img/web.jpg'
import app from '../../assets/img/app.jpg'
import uiux from '../../assets/img/uiux.jpg'
import grapic from '../../assets/img/grapic.jpg'
import GradientFillButton from '../GenerativeFillButton/GenerativeFillButton';
const data = [
    {
        id: 1,
        src: web,
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
        src: app,
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
        src: uiux,
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
        src: grapic,
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
                    className={`md:p-4 cursor-pointer relative flex items-center justify-center gap-4`}
                    onMouseEnter={() => handleImageHover(image)}>

                    {isSmallScreen && (
                        <img
                            src={image?.src}
                            className="w-20 h-20 object-cover rounded-md"
                            alt={image?.text}
                        />
                    )}
                    {/* <span className={`text-white/80 text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold `}>{image.id}</span> */}
                    <div className="flex items-center w-full">
                        <MenuItem linkText={image.text} marqueeTexts={image.marqueeTexts} />
                    </div>
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

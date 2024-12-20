import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./MenuItem.css";
// Utility functions
const closestEdge = (x, y, w, h) => {
    const topEdgeDist = distMetric(x, y, w / 2, 0);
    const bottomEdgeDist = distMetric(x, y, w / 2, h);
    return Math.min(topEdgeDist, bottomEdgeDist) === topEdgeDist
        ? "top"
        : "bottom";
};

const distMetric = (x, y, x2, y2) => {
    const xDiff = x - x2;
    const yDiff = y - y2;
    return xDiff * xDiff + yDiff * yDiff;
};

// Menu Item Component
export const MenuItem = ({ linkText, marqueeTexts }) => {
    const menuItemRef = useRef(null);
    const marqueeRef = useRef(null);
    const marqueeInnerRef = useRef(null);

    useEffect(() => {
        const menuItem = menuItemRef.current;
        const marquee = marqueeRef.current;
        const marqueeInner = marqueeInnerRef.current;

        const animationDefaults = { duration: 0.6, ease: "expo" };

        // Set the initial position to avoid animation on load
        gsap.set(marquee, { y: "101%" });
        gsap.set(marqueeInner, { y: "-101%" });

        const findClosestEdge = (ev) => {
            const x = ev.pageX - menuItem.offsetLeft;
            const y = ev.pageY - menuItem.offsetTop;
            return closestEdge(x, y, menuItem.clientWidth, menuItem.clientHeight);
        };

        const mouseEnter = (ev) => {
            const edge = findClosestEdge(ev);
            gsap
                .timeline({ defaults: animationDefaults })
                .set(marquee, { y: edge === "top" ? "-101%" : "101%" })
                .set(marqueeInner, { y: edge === "top" ? "101%" : "-101%" })
                .to([marquee, marqueeInner], { y: "0%" }, 0);
        };

        const mouseLeave = (ev) => {
            const edge = findClosestEdge(ev);
            gsap
                .timeline({ defaults: animationDefaults })
                .to(marquee, { y: edge === "top" ? "-101%" : "101%" }, 0)
                .to(marqueeInner, { y: edge === "top" ? "101%" : "-101%" }, 0);
        };

        menuItem.addEventListener("mouseenter", mouseEnter);
        menuItem.addEventListener("mouseleave", mouseLeave);

        return () => {
            menuItem.removeEventListener("mouseenter", mouseEnter);
            menuItem.removeEventListener("mouseleave", mouseLeave);
        };
    }, []);


    return (
        <div className="overflow-hidden cursor-pointer relative w-full" ref={menuItemRef}>
            <span className="whitespace-nowrap text-lg sm:text-xl md:text-2xl lg:text-3xl uppercase text-center text-white font-thin" href="#">
                {linkText}
            </span>
            <div className="absolute top-0 left-0 overflow-hidden w-full h-full bg-black transform-[translate3d(0,101%,0)]" ref={marqueeRef}>
                <div className="h-full w-full transform-[translate3d(0,-101%,0)]" ref={marqueeInnerRef}>
                    <div className="h-full w-[fit-content] items-center flex relative gap-4 menu_marquee__inner">
                        {marqueeTexts.map((text, index) => (
                            <React.Fragment key={index}>
                                <span className="whitespace-nowrap text-lg sm:text-xl md:text-2xl lg:text-3xl uppercase text-center text-white font-thin">
                                    {text}
                                </span>
                            </React.Fragment>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
};

// Main Menu Component
const MenuMarquee = ({ menuItems }) => {

    return (
        <div className="flex flex-col w-full relative justify-center h-full">
            <nav className="menu">
                {menuItems.map((item, index) => (
                    <MenuItem
                        key={index}
                        linkText={item.text}
                        marqueeTexts={item.marqueeTexts}
                    />
                ))}
            </nav>
        </div>
    );
};

export default MenuMarquee;

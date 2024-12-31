import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const AnimatedSideMenu = () => {
    const [open, setOpen] = useState(false);
    const [showHeader, setShowHeader] = useState(true);
    const [lastScroll, setLastScroll] = useState(0);
    const svgRef = useRef(null);
    useEffect(() => {
        let scrollTimeout;
        const handleScroll = () => {
            const currentScroll = window.scrollY;

            if (currentScroll > lastScroll) {
                setShowHeader(false);
            } else if (currentScroll < lastScroll || currentScroll === 0) {
                setShowHeader(true);
            }

            setLastScroll(currentScroll);

            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                setShowHeader(true);
            }, 300);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            clearTimeout(scrollTimeout);
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScroll]);

    const handleCloseMenu = () => {
        setOpen(false);
        if (svgRef.current) {
            const reverseAnimation = svgRef.current.querySelector("#reverse");
            if (reverseAnimation) {
                reverseAnimation.beginElement();
            }
        }
    };

    return (
        <>
            <header
                className={`fixed top-0 left-0 z-50 w-full p-1 flex justify-between items-center transition-transform duration-500 ${showHeader ? "translate-y-0 " : "-translate-y-full"
                    }`}
            >
                <div className="p-2 rounded-md flex font-bold uppercase text-2xl">
                    <h2 className=" text-off-white">M</h2>
                    <h2 className="text-off-white">K</h2>
                    <h2 className="text-off-white">ronix</h2>
                </div>
                <button
                    onClick={() => setOpen(!open)}
                    className="relative text-off-white bg-transparent border-none cursor-pointer flex justify-start focus:outline-none"
                >
                    <svg
                        ref={svgRef}
                        className="w-12"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 10 10"
                        stroke="currentColor"
                        strokeWidth=".2"
                        fill="rgba(0,0,0,0)"
                        strokeLinecap="round"
                    >
                        <path d="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7">
                            <animate
                                dur="0.2s"
                                attributeName="d"
                                values="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7;M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7"
                                fill="freeze"
                                begin="start.begin"
                            />
                            <animate
                                dur="0.2s"
                                attributeName="d"
                                values="M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7;M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7"
                                fill="freeze"
                                begin="reverse.begin"
                            />
                        </path>
                        <rect width="10" height="10" stroke="none">
                            <animate dur="2s" id="reverse" attributeName="width" begin="click" />
                        </rect>
                        <rect width="10" height="10" stroke="none">
                            <animate
                                dur="0.001s"
                                id="start"
                                attributeName="width"
                                values="10;0"
                                fill="freeze"
                                begin="click"
                            />
                            <animate
                                dur="0.001s"
                                attributeName="width"
                                values="0;10"
                                fill="freeze"
                                begin="reverse.begin"
                            />
                        </rect>
                    </svg>
                </button>
            </header>
            <div
                className={`fixed inset-0 text-black bg-black transition-transform duration-1000 ${open ? "translate-x-0" : "-translate-x-full"
                    } z-20 flex max-md:flex-col max-md:justify-around`}
            >
                {/* Left Menu */}
                <div className="md:w-[50%] max-md:h-1/2 md:p-8 p-3 md:bg-white bg-black max-md:text-off-white flex flex-col">
                    <div className="flex items-center h-full">
                        {/* Menu Links */}
                        <nav className="h-full font-raleway-extra-bold  place-content-center max-md:tracking-widest text-2xl grid grid-cols-1 md:gap-3 sm:text-4xl md:text-5xl lg:text-6xl md:font-semibold ">
                            <a to="/#home" className="block" onClick={handleCloseMenu}>
                                Home
                            </a>
                            <a to="/#service" className="block" onClick={handleCloseMenu}>
                                Service
                            </a>
                            <a to="/#project" className="block" onClick={handleCloseMenu}>
                                Projects
                            </a>
                            <a to="/#contact" className="block" onClick={handleCloseMenu}>
                                Contact Us
                            </a>
                        </nav>
                    </div>
                    {/* // Social Links
                    <div className="space-x-4 max-md:font-bold text-lg md:tracking-wider">
                        <a href="#" onClick={handleCloseMenu}>
                            LinkedIn
                        </a>
                        <a href="#" onClick={handleCloseMenu}>
                            Instagram
                        </a>
                        <a href="#" onClick={handleCloseMenu}>
                            Facebook
                        </a>
                    </div> */}
                </div>
                {/* Right Section */}
                <div className="md:w-[50%] md:bg-black bg-white md:text-off-white text-black flex flex-col justify-around max-md:h-2/3 md:justify-center md:p-8 p-3 relative">
                    <div>
                        <h2 className="text-3xl md:font-thin mb-4">Got an idea?</h2>
                        <p className="font-raleway-bold max-md:font-bold text-4xl md:text-5xl mb-6">
                            Let’s craft <br /> brilliant together!
                        </p>
                        <a
                            to="#"
                            className="border border-black md:border-white px-4 py-2 text-lg rounded-full transition w-max"
                            onClick={handleCloseMenu}
                        >
                            Get In touch
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AnimatedSideMenu;

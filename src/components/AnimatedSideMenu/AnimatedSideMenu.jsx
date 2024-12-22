import React, { useState, useEffect } from "react";

const AnimatedSideMenu = () => {
    const [open, setOpen] = useState(false);
    const [showHeader, setShowHeader] = useState(true);
    const [lastScroll, setLastScroll] = useState(0);

    useEffect(() => {
        let scrollTimeout;

        const handleScroll = () => {
            const currentScroll = window.scrollY;

            if (currentScroll > lastScroll) {
                // Scrolling down
                setShowHeader(false);
            } else if (currentScroll < lastScroll || currentScroll === 0) {
                // Scrolling up or at the top
                setShowHeader(true);
            }

            setLastScroll(currentScroll);

            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                // Ensure the header is visible if scrolling stops
                setShowHeader(true);
            }, 300); // Adjust delay to match desired responsiveness
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            clearTimeout(scrollTimeout);
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScroll]);

    useEffect(() => {
        if (open) {
            document.documentElement.classList.add("no-scroll");
            console.log('scrolling disabled')
        } else {
            document.documentElement.classList.remove("no-scroll");
            console.log('scrolling enabled')
        }
        return () => {
            // Cleanup to prevent leftover styles
            document.documentElement.classList.remove("no-scroll");
        };
    }, [open]);
    return (
        <>
            <header
                className={`fixed top-0 left-0 z-50 w-full p-1 flex justify-between items-center transition-transform duration-500 ${showHeader ? "translate-y-0 max-md:bg-black/20 backdrop-blur-2xl" : "-translate-y-full"
                    }`}
            >
                <div className="p-2 rounded-md flex font-bold uppercase text-2xl">
                    <h2 className="max-md:text-white/60">M</h2>
                    <h2 className="max-md:text-white">K</h2>
                    <h2 className="max-md:text-white/50">ronix</h2>
                </div>
                <button
                    onClick={() => setOpen(!open)}
                    className="relative text-white bg-transparent border-none cursor-pointer flex justify-start focus:outline-none"
                >
                    <svg
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
                className={`fixed inset-0 text-black transition-transform duration-1000 ${open ? "translate-x-0" : "-translate-x-full"
                    } z-20 flex max-md:flex-col max-md:justify-around`}
            >
                {/* Left Menu */}
                <div className="md:w-[55%] max-md:h-1/2 md:p-8 p-3 md:bg-white bg-black max-md:text-white flex flex-col">
                    <div className="flex justify-between items-center h-4/5">
                        {/* Menu Links */}
                        <nav className="text-3xl grid md:grid-cols-1 grid-cols-2 font-antic sm:text-4xl md:text-5xl lg:text-6xl md:font-semibold ">
                            <a href="#" className="block">Home</a>
                            <a href="#" className="block">Services</a>
                            <a href="#" className="block">Projects</a>
                            <a href="#" className="block">About Us</a>
                            <a href="#" className="block">Blog</a>
                            <a href="#" className="block">Contact</a>
                        </nav>
                    </div>
                    {/* Social Links */}
                    <div className="space-x-4 max-md:place-self-end font-antic md:font-bold text-sm max-md:my-6">
                        <a href="#">LinkedIn</a>
                        <a href="#">Instagram</a>
                        <a href="#">Facebook</a>
                    </div>
                </div>
                {/* Right Section */}
                <div className="md:w-[45%] md:bg-black bg-white md:text-white text-black flex flex-col justify-around max-md:h-2/3 md:justify-center md:p-8 p-3 relative">
                    <div>
                        <h2 className="text-3xl md:font-thin mb-4">Got an idea?</h2>
                        <p className="font-antic max-md:font-bold text-4xl md:text-5xl mb-6">Let’s craft <br /> brilliant together!</p>
                        <button className="border border-black md:border-white px-10 py-1 text-lg rounded-full transition w-max">
                            Get In touch
                        </button>
                    </div>
                    {/* Footer Links */}
                    <div className="md:absolute font-antic max-md:font-bold bottom-8 text-sm space-x-4">
                        <a href="#">Terms & Conditions</a>
                        <a href="#">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AnimatedSideMenu;

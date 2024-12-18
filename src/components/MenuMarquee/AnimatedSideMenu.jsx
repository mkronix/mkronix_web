import React, { useState } from "react";

const AnimatedSideMenu = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Menu Button */}
            <button
                onClick={() => setOpen(!open)}
                className="fixed z-50 right-4 top-4"
            >
                <div className="relative bg-transparent border-none cursor-pointer flex justify-start">
                    <svg
                        className="w-16"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 10 10"
                        stroke="#D5FF3F"
                        strokeWidth=".2"
                        fill="rgba(0,0,0,0)"
                        strokeLinecap="round"
                        style={{ cursor: "pointer" }}
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
                </div>
            </button>

            {/* Menu Content */}
            <div
                className={`fixed inset-0 text-black transition-transform duration-1000 ${open ? "translate-x-0" : "-translate-x-full"
                    } z-20 flex max-md:flex-col max-md:justify-around`}
            >
                {/* Left Menu */}
                <div className="md:w-[55%] max-md:h-1/2 md:p-8 p-3 md:bg-parrot bg-black max-md:text-parrot flex flex-col justify-around">
                    <div>
                        {/* Logo */}
                        <h1 className="text-2xl md:text-3xl lg:text-4xl md:font-bold  mb-4 md:mb-10">Mkronix</h1>

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
                    <div className="space-x-4 font-antic md:font-bold text-sm max-md:my-6">
                        <a href="#">LinkedIn</a>
                        <a href="#">Instagram</a>
                        <a href="#">Facebook</a>
                    </div>
                </div>

                {/* Right Section */}
                <div className="md:w-[45%] md:bg-black bg-parrot md:text-parrot text-black flex flex-col justify-around max-md:h-2/3 md:justify-center md:p-8 p-3 relative">
                    <div>
                        <h2 className="text-3xl md:font-thin mb-4">Got an idea?</h2>
                        <p className="font-antic max-md:font-bold text-4xl md:text-5xl mb-6">Let’s craft <br /> brilliant together!</p>
                        <button className="border border-black md:border-parrot px-10 py-1 text-lg  rounded-full transition w-max">
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

import React, { useState } from "react";
import MenuMarquee from "./MenuMarquee";

const AnimatedSideMenu = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Menu Button */}
            <button
                onClick={() => setOpen(!open)}
                className="fixed z-50 right-16 top-8">
                <div
                    onClick={() => setOpen(!open)}
                    className="relative bg-transparent border-none cursor-pointer flex justify-start"
                >
                    {/* Top Line */}
                    <span
                        onClick={() => setOpen(!open)}
                        className={`absolute w-12 h-[2px] bg-white transition-all duration-500 ease-in-out ${open ? "rotate-45 translate-y-0" : "-translate-y-[8px]"
                            }`}
                    />
                    {/* Middle Line */}
                    <span
                        onClick={() => setOpen(!open)}
                        className={`absolute w-10 h-[2px] bg-white transition-all duration-500 ease-in-out ${open ? "opacity-0" : "opacity-100"
                            }`}
                    />
                    {/* Bottom Line */}
                    <span
                        onClick={() => setOpen(!open)}
                        className={`absolute w-12 h-[2px] bg-white transition-all duration-500 ease-in-out ${open ? "-rotate-45 translate-y-0" : "translate-y-[8px]"
                            }`}
                    />
                </div>
            </button>

            {/* Menu Content */}
            <div
                className={`fixed inset-0 bg-black text-white transition-transform duration-1000 ${open ? "translate-x-0" : "-translate-x-full"
                    } z-20`}
            >
                <MenuMarquee />
            </div>
        </>
    );
};

export default AnimatedSideMenu;

import React, { useRef, useState } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import p1 from "../../assets/img/p3.png";
import p2 from "../../assets/img/p4.png";
import p3 from "../../assets/img/p5.png";
import p4 from "../../assets/img/p6.png";
import p5 from "../../assets/img/p7.png";


const FloatingTestimonals = () => {
    const plane = useRef(null);
    const Image1 = useRef(null);
    const Image2 = useRef(null);
    const Image3 = useRef(null);
    const Image4 = useRef(null);
    const Image5 = useRef(null);
    const Image6 = useRef(null);
    const Images = [Image1, Image2, Image3, Image4, Image5, Image6];

    const handleMouseMove = (e) => {
        const xMove = e.clientX;
        const yMove = e.clientY;

        gsap.to(Image1.current, {
            x: -xMove * 0.08,
            y: -yMove * 0.06,
            duration: 1,
            ease: "back.out(4)",
        });

        gsap.to(Image2.current, {
            x: -xMove * 0.08,
            y: -yMove * 0.08,
            duration: 1,
            ease: "back.out(4)",
        });

        gsap.to(Image3.current, {
            x: -xMove * 0.07,
            y: yMove * 0.03,
            duration: 1,
            ease: "back.out(4)",
        });
        gsap.to(Image4.current, {
            x: -xMove * 0.08,
            y: -yMove * 0.09,
            duration: 1,
            ease: "back.out(4)",
        });
        gsap.to(Image5.current, {
            x: -xMove * 0.07,
            y: yMove * 0.03,
            duration: 1,
            ease: "back.out(4)",
        });
        gsap.to(Image6.current, {
            x: -xMove * 0.07,
            y: -yMove * 0.06,
            duration: 1,
            ease: "back.out(4)",
        });
    };
    const handleMouseLeave = (e) => {
        gsap.to(Image1.current, {
            x: 0,
            y: 0,
            duration: 3.5,
            ease: "elastic.out(1.2,0.2)",
        });
        gsap.to(Image2.current, {
            x: 0,
            y: 0,
            duration: 3.5,
            ease: "elastic.out(1.2,0.2)",
        });
        gsap.to(Image3.current, {
            x: 0,
            y: 0,
            duration: 3.5,
            ease: "elastic.out(1.2,0.2)",
        });
        gsap.to(Image4.current, {
            x: 0,
            y: 0,
            duration: 3.5,
            ease: "elastic.out(1.2,0.2)",
        });
        gsap.to(Image5.current, {
            x: 0,
            y: 0,
            duration: 3.5,
            ease: "elastic.out(1.2,0.2)",
        });
        gsap.to(Image6.current, {
            x: 0,
            y: 0,
            duration: 3.5,
            ease: "elastic.out(1.2,0.2)",
        });
    };

    useGSAP(() => {
        const spreadImages = gsap.timeline({
            scrollTrigger: {
                trigger: plane.current,

                start: "top 10%",
            },
        });

        Images.forEach((image, index) => {
            const newPos = originalPos[index];
            spreadImages.fromTo(
                image.current,
                { scale: 0.8, opacity: 0, rotateZ: 180 },
                {
                    scale: 0.9,
                    opacity: 1,

                    rotate: newPos.rotate,
                    top: newPos.top,
                    left: newPos.left,
                    ease: "sine.in",
                    duration: 0.5,

                    stagger: 2,
                }
            );
        });
    });
    const handleImageEnter = (p) => {
        if (opened === false) {
            gsap.to(`.IMAGE-${p} `, {
                scale: 0.8,
                duration: 0.2,
                ease: "linear",
            });
        }
    };
    const handleImageLeave = (p) => {
        if (opened === false) {
            gsap.to(`.IMAGE-${p} `, {
                scale: 0.9,
                duration: 0.2,
                ease: "linear",
            });
        }
    };
    const showOverlay = gsap.timeline();
    const [opened, setOpened] = useState(false);
    const [imageText, setImageText] = useState("");
    const handleImageClick = (p) => {
        setImageText(p);
        const pos = originalPos[p - 1];
        if (!opened) {
            showOverlay.fromTo(
                ".OVERLAY",
                {
                    x: -2000,
                    display: "none",
                    opacity: 0,
                },
                {
                    x: 0,
                    opacity: 0.1,
                    display: "block",
                    duration: 0.1,
                    ease: "power4.in",
                }
            );
            // Get the current scroll position
            const scrollY = window.scrollY;

            // Expand image
            gsap.to(`.IMAGE-${p}`, {
                width: "75vw",
                height: "80vh",
                top: "10%",
                left: "50%",
                position: "fixed",
                scale: 1.1,

                rotate: 0,

                zIndex: "999",

                duration: 1,
                ease: "back.out",
            });

            document.body.style.position = "fixed";
            document.body.style.top = `-${scrollY}px`;

            setOpened(true);
        } else {
            //HIDE OVERLAY
            showOverlay.fromTo(
                ".OVERLAY",
                {
                    x: 0,
                    display: "block",
                    opacity: 0.1,
                },
                {
                    x: 2000,
                    opacity: 0,
                    display: "none",
                    duration: 0.1,
                    ease: "power4.out",
                }
            );
            // Restore image
            gsap.to(`.IMAGE-${p}`, {
                zIndex: "1",
                width: pos.width,
                height: pos.height,
                rotate: pos.rotate,

                top: pos.top,
                left: pos.left,
                duration: 0.5,
                ease: "linear",
                position: "absolute",
            });

            // Unlock scroll position
            const scrollY = Math.abs(parseInt(document.body.style.top || "0"));
            document.body.style.position = "";
            document.body.style.top = "";
            window.scrollTo(0, scrollY);

            setOpened(false);
        }
    };

    const originalPos = [
        { top: 0, left: 270, rotate: 3, width: "350px", height: "300px" },
        { top: 600, left: 1220, rotate: -6, width: "350px", height: "300px" },
        { top: 0, left: 1220, rotate: -2, width: "450px", height: "250px" },
        { top: 620, left: 300, rotate: 3, width: "400px", height: "300px" },
        { top: 240, left: 480, rotate: 0, width: "300px", height: "300px" },
        { top: 340, left: 900, rotate: 3, width: "250px", height: "350px" },
    ];

    return (
        <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            ref={plane}
            className="bg-black  overflow-hidden bg-center bg-cover relative w-[99.6vw] h-[150vh] flex items-center justify-center"
        >
            <div
                style={{ zIndex: 999, display: "none" }}
                className=" OVERLAY h-[100vh] w-[99.6vw]   bg-stone-500 fixed top-0 left-0 "
            ></div>

            <div className="GALLERY-CONTAINER    w-[100%] h-[80%] relative flex items-center justify-center ">
                <div
                    onMouseEnter={() => handleImageEnter(1)}
                    onMouseLeave={() => handleImageLeave(1)}
                    onClick={() => handleImageClick(1)}
                    ref={Image1}
                    style={{ zIndex: "1" }}
                    className="IMAGE-CONTAINER  opacity-0 IMAGE-1 absolute group cursor-pointer  flex flex-col items-center justify-center    translate-y-[50%] translate-x-[-50%] left-1/2 w-[350px] h-[300px]  overflow-hidden   rounded-3xl    border-white"
                >
                    <img
                        loading="lazy"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                        className={`cursor-pointer  transition-all duration-150 ease-in `}
                        src={p1}
                        alt=""
                    />
                    <div
                        className={`w-full py-2 px-5 space-y-3  text-white  ${opened && imageText == 1
                            ? "h-[120px] py-6 bg-black/90"
                            : "bg-black/60 h-[80px]"
                            } absolute bottom-0 flex flex-col  items-center justify-center`}
                    >
                        {opened && imageText === 1 && (
                            <h1 className="font-heading1  text-lg  z-50 ">
                                Provided critical data on lunar resources, enabling sustainable
                                energy solutions and supporting deep-space exploration
                            </h1>
                        )}
                        <h1 className="font-heading2 text text-sm tracking-widest z-50 ">
                            December 5, 2070
                        </h1>
                    </div>
                </div>
                <div
                    onMouseEnter={() => handleImageEnter(2)}
                    onMouseLeave={() => handleImageLeave(2)}
                    onClick={() => handleImageClick(2)}
                    ref={Image2}
                    style={{ zIndex: "1" }}
                    className="IMAGE-CONTAINER  opacity-0 IMAGE-2 absolute group cursor-pointer  flex flex-col items-center justify-center    translate-y-[50%] translate-x-[-50%] left-1/2 w-[350px] h-[300px]  overflow-hidden   rounded-3xl    border-white"
                >
                    <img
                        loading="lazy"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                        className={`cursor-pointer  transition-all duration-150 ease-in `}
                        src={p2}
                        alt=""
                    />
                    <div
                        className={`w-full py-2 px-5 space-y-3  text-white  ${opened && imageText == 2
                            ? "h-[120px] py-6 bg-black/90"
                            : "bg-black/60 h-[80px]"
                            } absolute bottom-0 flex flex-col  items-center justify-center`}
                    >
                        {opened && imageText === 2 && (
                            <h1 className="font-heading1  text-lg  z-50 ">
                                Created opportunities for interplanetary trade, scientific
                                research, and a new frontier for humanity’s survival.
                            </h1>
                        )}
                        <h1 className="font-heading2 text text-sm tracking-widest z-50 ">
                            February 28, 2045
                        </h1>
                    </div>
                </div>
                <div
                    onMouseEnter={() => handleImageEnter(3)}
                    onMouseLeave={() => handleImageLeave(3)}
                    onClick={() => handleImageClick(3)}
                    ref={Image3}
                    style={{ zIndex: "1" }}
                    className="IMAGE-CONTAINER  opacity-0 IMAGE-3 group cursor-pointer  absolute flex flex-col items-center justify-center     translate-y-[50%] translate-x-[-50%] left-1/2 w-[450px] h-[250px]  overflow-hidden   rounded-3xl    border-white"
                >
                    <img
                        loading="lazy"
                        style={{
                            width: "100%",
                            height: "100%",
                        }}
                        className={`cursor-pointer  transition-all duration-150 ease-in `}
                        src={p3}
                        alt=""
                    />
                    <div
                        className={`w-full py-2 px-5 space-y-3  text-white  ${opened && imageText == 3
                            ? "h-[120px] py-6 bg-black/90"
                            : "bg-black/60 h-[80px]"
                            } absolute bottom-0 flex flex-col  items-center justify-center`}
                    >
                        {opened && imageText === 3 && (
                            <h1 className="font-heading1  text-lg  z-50 ">
                                Provided unparalleled cosmic protection and reliable
                                early-warning systems for interplanetary settlers
                            </h1>
                        )}
                        <h1 className="font-heading2 text text-sm tracking-widest z-50 ">
                            December 5, 2070
                        </h1>
                    </div>
                </div>{" "}
                <div
                    onMouseEnter={() => handleImageEnter(4)}
                    onMouseLeave={() => handleImageLeave(4)}
                    onClick={() => handleImageClick(4)}
                    ref={Image4}
                    style={{ zIndex: "1" }}
                    className="IMAGE-CONTAINER  opacity-0 IMAGE-4 group cursor-pointer  absolute flex flex-col items-center justify-center     translate-y-[50%] translate-x-[-50%] left-1/2 w-[400px] h-[300px]  overflow-hidden   rounded-3xl    border-white"
                >
                    <img
                        loading="lazy"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                        className={`cursor-pointer  transition-all duration-150 ease-in `}
                        src={p4}
                        alt=""
                    />
                    <div
                        className={`w-full py-2 px-5 space-y-3  text-white  ${opened && imageText == 4
                            ? "h-[120px] py-6 bg-black/90"
                            : "bg-black/60 h-[80px]"
                            } absolute bottom-0 flex flex-col  items-center justify-center`}
                    >
                        {opened && imageText === 4 && (
                            <h1 className="font-heading1  text-lg  z-50 ">
                                Delivered a century’s worth of rare minerals and demonstrated a
                                reliable method for averting asteroid collisions
                            </h1>
                        )}
                        <h1 className="font-heading2 text text-sm tracking-widest z-50 ">
                            December 5, 2070
                        </h1>
                    </div>
                </div>
                <div
                    onMouseEnter={() => handleImageEnter(5)}
                    onMouseLeave={() => handleImageLeave(5)}
                    onClick={() => handleImageClick(5)}
                    ref={Image5}
                    style={{ zIndex: "1" }}
                    className="IMAGE-CONTAINER  opacity-0 IMAGE-5 group cursor-pointer absolute flex flex-col items-center justify-center   translate-y-[50%] translate-x-[-50%] left-1/2 w-[300px] h-[300px]  overflow-hidden   rounded-3xl    border-white"
                >
                    <img
                        loading="lazy"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                        className={`cursor-pointer  transition-all duration-150 ease-in `}
                        src={p5}
                        alt=""
                    />
                    <div
                        className={`w-full py-2 px-5 space-y-3  text-white  ${opened && imageText == 5
                            ? "h-[120px] py-6 bg-black/90"
                            : "bg-black/60 h-[80px]"
                            } absolute bottom-0 flex flex-col  items-center justify-center`}
                    >
                        {opened && imageText === 5 && (
                            <h1 className="font-heading1  text-lg  z-50 ">
                                Advanced the search for alien ecosystems and unlocked new
                                possibilities for energy extraction from methane lakes
                            </h1>
                        )}
                        <h1 className="font-heading2 text text-sm tracking-widest z-50 ">
                            August 16, 2050
                        </h1>
                    </div>
                </div>{" "}
                <div
                    onMouseEnter={() => handleImageEnter(6)}
                    onMouseLeave={() => handleImageLeave(6)}
                    onClick={() => handleImageClick(6)}
                    ref={Image6}
                    style={{ zIndex: "1" }}
                    className="IMAGE-CONTAINER  opacity-0 IMAGE-6 group cursor-pointer absolute flex flex-col items-center justify-center     translate-y-[50%] translate-x-[-50%] left-1/2 w-[250px] h-[350px]  overflow-hidden   rounded-3xl    border-white"
                >
                    <img
                        loading="lazy"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                        className={`cursor-pointer  transition-all duration-150 ease-in `}
                        src={p3}
                        alt=""
                    />
                    <div
                        className={`w-full py-2 px-5 space-y-3  text-white  ${opened && imageText == 6
                            ? "h-[120px] py-6 bg-black/90"
                            : "bg-black/60 h-[80px]"
                            } absolute bottom-0 flex flex-col  items-center justify-center`}
                    >
                        {opened && imageText === 6 && (
                            <h1 className="font-heading1  text-lg  z-50 ">
                                Opened pathways to new star systems, initiating the exploration
                                of exoplanets with Earth-like conditions
                            </h1>
                        )}
                        <h1 className="font-heading2 text text-sm tracking-widest z-50 ">
                            July 23, 2060
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FloatingTestimonals;

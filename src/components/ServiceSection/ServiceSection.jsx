import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";
import mainImage from "../../assets/img/grapicDesign.png";
gsap.registerPlugin(ScrollTrigger);
import services from "../../data/servicesection";
import app from '../../assets/img/appDev.png';
import graphic from "../../assets/img/grapicDesign.png";
import uiux from "../../assets/img/ui-ux.png";
import web from '../../assets/img/webDesign.png';
import { useGSAP } from "@gsap/react";
const Services = () => {
    return (
        <section id='service' className='relative z-10'>
            <ServiceSection />
        </section>
    );
};

export default Services;

const ServiceSection = () => {

    const stickyImageAnimation = gsap.timeline();
    useGSAP(() => {
        const imageConatiners = document.querySelectorAll(
            ".STICKY-IMAGE-CONTAINER"
        );
        imageConatiners.forEach((item, index) => {
            item.style.zIndex = imageConatiners.length - index;
        });
        stickyImageAnimation.set(".STICKY-IMAGE-CONTAINER", {
            clipPath: () => {
                return "inset(0px 0px 0px 0px)";
            },
        });
        stickyImageAnimation.to(
            ".STICKY-IMAGE-CONTAINER:not(:last-child)",

            {
                clipPath: () => {
                    return "inset(0% 0px 100% 0px)";
                },
                scale: 1,
                stagger: 0.5,
                ease: "none",
                scrollTrigger: {
                    trigger: spaceVehicles.current,
                    start: "top 5%",
                    end: "+=3150",

                    scrub: true,
                },
            }
        );
    });

    const spaceVehicles = useRef(null);
    return (
        <div
            ref={spaceVehicles}
            className="bg-white w-[99.6vw] h-fit flex  justify-center items-center"
        >
            <div className="PAGE-2 w-full   flex relative justify-center bg-black p-2  space-x-2">
                <div className="LEFT w-[50vw]  flex flex-col space-y-5  p-5  h-fit text-white">
                    {services.map((item, index) => (
                        <div
                            key={index}
                            id={`S-${index + 1}`}
                            style={{ wordSpacing: "0.1vw" }}
                            className="SPACECRAFT-1 h-[100vh]  w-full flex flex-col space-y-5 border-b-[1px] border-white/10 "
                        >
                            <div className="flex flex-col">
                                <h1
                                    className={`font-heading2   sm:mt-[5vh] text-center sm:tracking-wider sm:text-5xl`}
                                >
                                    {item.name}
                                </h1>
                                <h1 className="font-heading1 text-xl text-center sm:mb-[5vh] tracking-tight ">
                                    {item.purpose}
                                </h1>
                            </div>
                            <div
                                style={{ lineHeight: "1.5vw" }}
                                className="sm:flex sm:flex-col  items-start justify-center font-heading1 sm:space-y-5"
                            >
                                <h1 className="tracking-wider  text-xl font-semibold">
                                    Overview
                                </h1>
                                <p className="ml-5 sm:font-normal sm:text-md sm:tracking-wider">
                                    {item.overview}
                                </p>
                                <h1 className="sm:tracking-wider  sm:text-xl sm:font-semibold">
                                    Tools
                                </h1>
                                <p className="ml-5 sm:font-normal sm:text-md sm:tracking-wider">
                                    {item.tools}
                                </p>
                                <h1 className="sm:tracking-wider  sm:text-xl sm:font-semibold">
                                    Notable Projects
                                </h1>
                                <ul className="list-disc pl-4">
                                    {item.notableWorks.map((item, index) => (
                                        <li
                                            key={index}
                                            className="ml-5  sm:font-normal sm:text-md sm:tracking-wider"
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="BOTTOM-STATS pt-10 border-b-[1px] border-white/10 self-center p-5 rounded-xl text-white/70 sm:flex items-center justify-center space-x-5  ">
                                    <div className="sm:flex group cursor-pointer hover:text-white sm:flex-col items-center justify-center w-fit h-fit transition-transform duration-300 hover:scale-110">
                                        <h1 className="font-heading2 sm:text-2xl">
                                            {item.ongoingProjects}
                                        </h1>
                                        <h1 className="font-heading1 tracking-wider sm:text-sm">
                                            Ongoing Projects
                                        </h1>
                                    </div>
                                    <div className="sm:flex group cursor-pointer hover:text-white sm:flex-col items-center justify-center w-fit h-fit transition-transform duration-300 hover:scale-110">
                                        <h1 className="font-heading2 sm:text-2xl">
                                            {item.projectsCompleted}
                                        </h1>
                                        <h1 className="font-heading1 tracking-wider sm:text-sm">
                                            Projects Completed
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="RIGHT w-[40vw]  relative ">
                    <div className="RIGHT-STICKY sticky top-0 w-full h-[100vh]    flex items-center justify-center">
                        {[web, uiux, app, graphic].map((src, index) => (
                            <div
                                key={index}
                                className="STICKY-IMAGE-CONTAINER sm:flex sm:flex-col items-center  justify-center  absolute h-[100vh] bg-black rounded-full overflow-hidden  "
                                style={{
                                    width: "650px", // Set the desired square size
                                }}
                            >
                                <img
                                    src={src}
                                    loading="lazy"
                                    alt=""
                                    style={{
                                        width: "80%",
                                        height: "80%",
                                        objectFit: "contain",
                                        zIndex: 1, // Maintains aspect ratio within the container
                                    }}
                                />

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};


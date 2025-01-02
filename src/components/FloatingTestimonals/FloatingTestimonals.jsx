import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

import testimonal1 from "../../assets/img/tesitmonal1.png";
import testimonal2 from "../../assets/img/tesitmonal2.png";
import testimonal3 from "../../assets/img/tesitmonal3.png";
import testimonal4 from "../../assets/img/tesitmonal4.png";

const FloatingTestimonials = () => {
    const plane = useRef(null);
    const Image1 = useRef(null);
    const Image2 = useRef(null);
    const Image3 = useRef(null);
    const Image4 = useRef(null);
    const Images = [Image1, Image2, Image3, Image4];

    const originalPos = [
        { top: "0%", left: "10%", rotate: 3, width: "400px", height: "400px" },
        { top: "10%", left: "40%", rotate: -6, width: "400px", height: "400px" },
        { top: "40%", left: "22%", rotate: -2, width: "400px", height: "400px" },
        { top: "40%", left: "60%", rotate: 3, width: "400px", height: "400px" },
    ];

    useEffect(() => {
        if (!plane.current) return;

        ScrollTrigger.create({
            trigger: plane.current,
            start: "top top",
            end: "+=250%",
            pin: true,
            pinSpacing: true,
        });

        const spreadImages = gsap.timeline({
            scrollTrigger: {
                trigger: plane.current,
                start: "top top",
                end: "+=250%",
                scrub: true,
            },
        });

        Images.forEach((image, index) => {
            const newPos = originalPos[index];
            spreadImages.fromTo(
                image.current,
                { scale: 0.5, opacity: 0, rotateZ: 180 },
                {
                    scale: 0.9,
                    opacity: 1,
                    rotate: newPos.rotate,
                    top: newPos.top,
                    left: newPos.left,
                    ease: "power1.out",
                    duration: 1,
                    stagger: 0.3,
                }
            );
        });
    }, []);


    return (
        <div
            ref={plane}
            className="relative z-10 h-screen flex items-center justify-center overflow-hidden"
        >
            {originalPos.map((_, index) => (
                <div
                    key={index}
                    ref={Images[index]}
                    className={`absolute overflow-hidden
                    md:w-[400px] md:h-[400px] w-52 h-52
                        `}
                >
                    <img
                        src={
                            index === 0
                                ? testimonal1
                                : index === 1
                                    ? testimonal2
                                    : index === 2
                                        ? testimonal3
                                        : testimonal4
                        }
                        alt={`Testimonial ${index + 1}`}
                        className="w-full h-full object-cover cursor-pointer"
                    />
                </div>
            ))}
        </div>
    );
};

export default FloatingTestimonials;

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
        { top: "15%", left: "20%" },
        { top: "30%", left: "70%" },
        { top: "60%", left: "25%" },
        { top: "50%", left: "45%" },
    ];

    useEffect(() => {
        if (!plane.current) return;

        ScrollTrigger.create({
            trigger: plane.current,
            start: "top top",
            end: "+=200%",
            pin: true,
            pinSpacing: true,
        });

        const spreadImages = gsap.timeline({
            scrollTrigger: {
                trigger: plane.current,
                start: "top top",
                end: "+=200%",
                scrub: true,
            },
        });

        Images.forEach((image, index) => {
            const newPos = originalPos[index];
            spreadImages.fromTo(
                image.current,
                { scale: 0.5, opacity: 0, rotateZ: 180 },
                {
                    scale: 1,
                    opacity: 1,
                    rotate: 0,
                    top: newPos.top,
                    left: newPos.left,
                    ease: "power1.out",
                    duration: 1,
                }
            );
        });
    }, []);

    return (
        <div
            ref={plane}
            className="relative z-10 h-screen w-full overflow-hidden pointer-events-none"
        >
            {originalPos.map((_, index) => (
                <div
                    key={index}
                    ref={Images[index]}
                    className="absolute transform transition-transform duration-300 hover:scale-110 md:w-[250px] md:h-[250px] w-40 h-40 rounded-lg shadow-lg overflow-hidden"
                    style={{
                        pointerEvents: "all",
                    }}
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
                        className="w-full h-full object-cover"
                    />
                </div>
            ))}
        </div>
    );
};

export default FloatingTestimonials;

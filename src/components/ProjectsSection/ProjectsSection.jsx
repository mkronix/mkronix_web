import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import p1 from "../../assets/img/p6.png";
import p2 from "../../assets/img/p11.png";
import p3 from "../../assets/img/p10.png";
import CommonHeaderText from "../CommonHeaderText/CommonHeaderText";
gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
    return (
        <div className="relative z-10">
            <CommonHeaderText text={"Our Projects"} />
            <Projects />
        </div>
    );
};

export default ProjectsSection;

const Projects = () => {
    const containerRef = useRef(null);
    const projectsRef = useRef(null);
    const projectsAnimation = gsap.timeline();
    const ImageDetailsAnimation = gsap.timeline();
    const imagesRef = useRef(null);

    useEffect(() => {
        projectsAnimation.fromTo(
            projectsRef.current,
            { skewY: 10 },
            {
                width: "80vw",
                perspective: 0,
                skewY: 3,
                x: 70,
                ease: "linear",
                scrollTrigger: {
                    trigger: containerRef.current,
                    scrub: 0.2,
                    start: "top 30%",
                    end: "+=220",
                },
            }
        );

        gsap.to(imagesRef.current, {
            x: "-200vw",
            ease: "none",

            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 0%",
                end: "+=2800", // Duration is proportional to container width
                scrub: 1,
                pin: true,
            },
            onStart: () => {
                ImageDetailsAnimation.play();
            },
        });
        ImageDetailsAnimation.to(".IMAGE-DETAILS", {
            opacity: 1,
            duration: 2,
            ease: "back.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 10%",
                end: "+=10",
                scrub: 1,
            },
        });
        ImageDetailsAnimation.pause();
    }, []);
    return (
        <div
            ref={containerRef}
            className="relative z-10 pointer-events-none  w-[99.6vw] flex justify-center h-screen"
        >
            <div className="relative overflow-x-hidden flex items-center  h-[100vh] w-[99.6vw] space-x-0">
                <div
                    ref={imagesRef}
                    className="IMAGES w-[300vw] backdrop-blur-xl h-screen flex flex-row"
                >
                    <div
                        className="w-screen"
                    >
                        <img
                            loading="lazy"
                            ref={projectsRef}
                            className="IMAGE-DETAILS w-[80vw] md:w-[65vw] md:h-[75vh] h-[50vh] mt-[100px] rounded-3xl object-cover"
                            src={p1}
                            alt="mkronix projects"
                        />
                    </div>
                    <div className="w-screen">
                        <img
                            loading="lazy"
                            className="skew-y-3 IMAGE-DETAILS w-[80vw] md:w-[65vw] md:h-[75vh] h-[50vh] mt-[100px] rounded-3xl object-cover"
                            src={p2}
                            alt="mkronix projects"
                        />
                    </div>
                    <div className="w-screen">
                        <img
                            loading="lazy"
                            className="skew-y-3 IMAGE-DETAILS w-[80vw] md:w-[65vw] md:h-[75vh] h-[50vh] mt-[100px] rounded-3xl object-cover "
                            src={p3}
                            alt="mkronix projects"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import p1 from "../../assets/img/p3.png";
import p2 from "../../assets/img/p4.png";
import p3 from "../../assets/img/p5.png";
import CommonHeaderText from "../CommonHeaderText/CommonHeaderText";
gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
    return (
        <div className="relative z-10">
            <CommonHeaderText text={"Our Exciting Projects"} />
            <Projects />
        </div>
    );
};

export default ProjectsSection;

const Projects = () => {
    const containerRef = useRef(null);
    const projectsContainerRef = useRef(null);
    const projectsRef = useRef(null);
    const projectsAnimation = gsap.timeline();
    const ImageDetailsAnimation = gsap.timeline();
    const imagesRef = useRef(null);

    useEffect(() => {
        projectsAnimation.fromTo(
            projectsRef.current,
            { skewY: 10 },
            {
                width: "65vw",
                perspective: 0,
                skewY: 3,
                x: 70,
                ease: "linear",

                height: "75vh",
                scrollTrigger: {
                    trigger: containerRef.current,
                    scrub: 0.2,
                    start: "top 30%",
                    end: "+=220",
                },
            }
        );

        gsap.to(imagesRef.current, {
            x: "-200vw", // Moves the container by 200vw (2 images worth)
            ease: "none",

            scrollTrigger: {
                trigger: containerRef.current, // Pin the main container
                start: "top 0%",
                end: "+=2800", // Duration is proportional to container width
                scrub: 1, // Smooth linking of scroll with animation
                pin: true, // Pin the container during scroll
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
                trigger: containerRef.current, // Pin the main container
                start: "top 10%",
                end: "+=10", // Duration is proportional to container width
                scrub: 1,
                // Smooth linking of scroll with animation
                // Pin the container during scroll
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
                    className="IMAGES  w-[300vw] backdrop-blur-xl h-screen flex flex-row"
                >
                    <div
                        ref={projectsContainerRef}
                        className=" w-[99.6vw]  h-[100vh]   relative  flex items-start justify-center "
                    >
                        {/* ----------------IMAGE1--------------------------------------------- */}
                        <div className="h-fit w-fit relative ">
                            <div
                                style={{ opacity: "0" }}
                                className="IMAGE-DETAILS z-50 w-[500px] h-[150px]  -rotate-12 p-5  rounded-xl absolute left-[0px] top-[80px]  "
                            >
                                <h1 className="font-heading2 font-bold tracking-wide text-center text-5xl text-off-white">
                                    Lunar Nexus Initiative
                                </h1>
                                <h1 className="font-heading1 text-center text-lg text-off-white">
                                    July 2035
                                </h1>
                            </div>
                            <div
                                style={{ opacity: "0" }}
                                className="IMAGE-DETAILS z-50 w-48 h-48 flex items-center justify-center flex-col space-y-1 px-3  rounded-full absolute -right-[270px] top-10 -rotate-3 border-[3px]  border-white backdrop-blur-xl text-off-white  border-dashed font-bold "
                            >
                                <h1 className="font-heading1 tracking-wide  font-bold  text-2xl ">
                                    Benefits
                                </h1>
                                <h1
                                    style={{ lineHeight: "1.2vw" }}
                                    className="font-heading1 text-center tracking-wider "
                                >
                                    Sustainable energy solutions, deep-space exploration support
                                </h1>
                            </div>
                            <div
                                style={{ opacity: "0" }}
                                className="IMAGE-DETAILS w-[330px]  flex items-center justify-center h-[330px] py-5  px-10 bg-gradient-to-r to-transparent from-white/40 text-off-white rounded-l-full absolute  border-l-[0px]  -left-[230px] top-[300px] font-bold  "
                            >
                                <h1
                                    style={{ lineHeight: "1.4vw" }}
                                    className="font-heading1 tracking-wider text-lg  "
                                >
                                    Revolutionized humanity's energy systems by identifying
                                    critical lunar resources, setting the foundation for
                                    interstellar self-sufficiency.
                                </h1>
                            </div>
                            <img
                                loading="lazy"
                                ref={projectsRef}
                                className="FOCAL-IMAGE w-[20vw] h-[20vw] mt-[100px] rounded-3xl object-cover "
                                src={p1}
                                alt=""
                            />
                        </div>
                    </div>
                    {/* ------------------------------------------------------IMAGE2 */}
                    <div className=" w-[99.6vw]  h-[100vh]   relative  flex items-start justify-center ">
                        <div className="h-fit w-fit  relative ">
                            <div className="z-50 w-[500px] h-[150px] -rotate-12 p-5  rounded-xl absolute left-[0px] top-[100px] text-black">
                                <h1 className="font-heading2 font-bold tracking-wide text-center text-5xl ">
                                    Stellar Pathfinders
                                </h1>
                                <h1 className="font-heading1 text-center font-bold text-lg ">
                                    December 2055
                                </h1>
                            </div>
                            <div className="IMAGE-DETAILS z-50 w-48 h-48 flex items-center justify-center flex-col space-y-1 px-3  rounded-full absolute -right-52 top-10 -rotate-3 border-[3px] border-white backdrop-blur-xl text-off-white  border-dashed font-bold">
                                <h1 className="font-heading1 tracking-wide  font-bold  text-2xl ">
                                    Benefits
                                </h1>
                                <h1
                                    style={{ lineHeight: "1.2vw" }}
                                    className="font-heading1 text-center font-bold tracking-wider "
                                >
                                    Pathways to exoplanets, Earth-like conditions exploration.
                                </h1>
                            </div>
                            <div className=" w-[330px]  flex items-center justify-center h-[330px] py-5  px-10 bg-gradient-to-r to-transparent  from-white/40 text-off-white rounded-l-full absolute  border-l-[0px]  -left-[130px] top-[300px]  ">
                                <h1 className="font-heading1  font-bold text-center text-xl "></h1>
                                <h1
                                    style={{ lineHeight: "1.4vw" }}
                                    className="font-heading1 tracking-wider text-lg font-bold  "
                                >
                                    Unlocked interstellar travel, paving humanity's way to
                                    colonize exoplanets and create new Earths.
                                </h1>
                            </div>
                            <img
                                loading="lazy"
                                className="FOCAL-IMAGE skew-y-3 w-[65vw] ml-[150px] h-[75vh]  mt-[100px]  rounded-3xl object-cover "
                                src={p2}
                                alt=""
                            />
                        </div>
                    </div>

                    {/* ------------------IMAGE3------------------------------- */}

                    <div className=" w-[99.6vw]   h-[100vh]   relative  flex items-start justify-center ">
                        <div className="h-fit w-fit   relative ">
                            <div className="z-50 w-[550px] h-[150px]  -rotate-12 p-5  rounded-xl absolute  text-off-white left-[0px] top-[100px]  ">
                                <h1 className="font-heading2 font-bold tracking-wide text-center text-5xl ">
                                    Cosmic Shield Program
                                </h1>
                                <h1 className="font-heading1 text-center font-bold text-lg ">
                                    March 2042
                                </h1>
                            </div>
                            <div className="IMAGE-DETAILS z-50 w-48 h-48 flex items-center justify-center flex-col space-y-1 px-3  rounded-full absolute -right-52 top-10 -rotate-3 border-[3px] border-white backdrop-blur-xl text-off-white  border-dashed font-bold">
                                <h1 className="font-heading1 tracking-wide  font-bold  text-2xl ">
                                    Benefits
                                </h1>
                                <h1
                                    style={{ lineHeight: "1.2vw" }}
                                    className="font-heading1 text-center font-bold tracking-wider "
                                >
                                    Early warning systems, protection for space settlers
                                </h1>
                            </div>
                            <div className=" w-[330px]  flex items-center justify-center h-[330px] py-5  px-10 bg-gradient-to-r to-transparent from-white/40 text-off-white rounded-l-full absolute  border-l-[0px]  -left-[130px] top-[300px]  ">
                                <h1 className="font-heading1  font-bold text-center text-xl "></h1>
                                <h1
                                    style={{ lineHeight: "1.4vw" }}
                                    className="font-heading1 tracking-wider text-lg font-bold  "
                                >
                                    Enhanced cosmic security with unparalleled systems, ensuring
                                    safe havens across the solar frontier.
                                </h1>
                            </div>
                            <img
                                loading="lazy"
                                className="FOCAL-IMAGE skew-y-3 w-[65vw] ml-[150px] h-[75vh] mt-[100px]  rounded-3xl  "
                                src={p3}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

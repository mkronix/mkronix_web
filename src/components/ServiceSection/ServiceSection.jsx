import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";
import { default as app } from '../../assets/img/app.png';
import graphic from "../../assets/img/grapic.png";
import mainImage from "../../assets/img/grapic.png";
import uiux from "../../assets/img/uiux.png";
import { default as branding, default as web } from "../../assets/img/web.jpg";
gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        name: "Web Design & Development",
        purpose: "Creating responsive and visually appealing websites",
        tools: "HTML, CSS, JavaScript, React, Tailwind CSS",
        projectsCompleted: 56,
        ongoingProjects: 12,
        notableWorks: [
            "E-commerce Platform",
            "Portfolio Websites",
        ],
        overview:
            "We specialize in crafting user-friendly and dynamic websites tailored to your business needs. Our focus on responsive design and seamless functionality ensures a great user experience across all devices.",
    },
    {
        name: "UI/UX Design",
        purpose: "Designing intuitive and engaging user experiences",
        tools: "Figma, Adobe XD, Sketch",
        projectsCompleted: 82,
        ongoingProjects: 15,
        notableWorks: [
            "Mobile App Wireframes",
            "User-Centric Dashboard Design",
        ],
        overview:
            "Our UI/UX design services are geared towards delivering designs that resonate with users. We focus on creating interfaces that are not only visually appealing but also ensure effortless navigation and interaction.",
    },
    {
        name: "App Design & Development",
        purpose: "Building robust and scalable mobile applications",
        tools: "React Native, Flutter, Swift, Kotlin",
        projectsCompleted: 45,
        ongoingProjects: 10,
        notableWorks: [
            "Fitness Tracking App",
            "On-Demand Delivery App",
        ],
        overview:
            "From concept to deployment, we design and develop mobile apps that drive engagement and deliver value. Our expertise ensures seamless integration, smooth performance, and user satisfaction.",
    },
    {
        name: "Branding & Identity Design",
        purpose: "Creating memorable brand identities",
        tools: "Adobe Illustrator, Photoshop, Canva",
        projectsCompleted: 37,
        ongoingProjects: 8,
        notableWorks: [
            "Brand Logo Creation",
            "Comprehensive Brand Guidelines",
        ],
        overview:
            "We help businesses establish a strong brand identity by crafting unique logos, visual elements, and brand guidelines. Our designs ensure your brand stands out in the competitive market.",
    },
    {
        name: "Graphic Design",
        purpose: "Delivering impactful visual content",
        tools: "Adobe Photoshop, Illustrator, Canva",
        projectsCompleted: 94,
        ongoingProjects: 22,
        notableWorks: [
            "Social Media Campaigns",
            "Marketing Collateral",
        ],
        overview:
            "Our graphic design services include creating stunning visuals for various platforms. Whether it’s social media posts, brochures, or promotional banners, we bring your ideas to life with creative excellence.",
    },
];

const Services = () => {
    return (
        <section id='service'>
            <MainService />
            <ServiceSection />
        </section>
    );
};

export default Services;


const MainService = () => {
    const [showCursor, setShowCursor] = useState(false);
    const handleCursorEnter = () => {
        setShowCursor(true);
    };

    const handleCursorLeave = () => {
        setShowCursor(false);
    };

    const mainImageAnimation = gsap.timeline();

    useEffect(() => {
        const canvas = document.getElementById("CANVAS");
        const cursor = document.querySelector(".CURSOR");

        const handleMouseMove = (e) => {
            const canvasRect = canvas.getBoundingClientRect();
            const offsetX = canvasRect.left;
            const offsetY = canvasRect.top;

            gsap.to(cursor, {
                x: e.clientX - offsetX - 70,
                y: e.clientY - offsetY + 20,
                duration: 1,
                ease: "back.out",
            });
        };

        if (showCursor) {
            canvas.addEventListener("mousemove", handleMouseMove);
        } else {
            canvas.removeEventListener("mousemove", handleMouseMove);
        }
        return () => {
            canvas.removeEventListener("mousemove", handleMouseMove);
        };
    }, [showCursor]);

    useGSAP(() => {
        mainImageAnimation.fromTo(
            ".mainImage",
            { scale: 0.7 },
            {
                y: -1800,
                scale: 2,
                ease: "linear",

                scrollTrigger: {
                    trigger: ".PAGE-1", // or you can use document.body
                    start: "top 50%", // start animation when bottom of the viewport reaches bottom of the page
                    end: "bottom+=400",
                    scrub: true,

                    // optional, adds a little more scroll range
                    // optional, shows visual markers to debug
                    onEnter: () => {
                        mainImageAnimation.restart(true, false);
                    },
                },
                onComplete: () => {
                    gsap.set(".mainImage", { y: 0, opacity: 0 });
                    gsap.to(".mainImage", { opacity: 1, duration: 2 });
                },
            }
        );

        gsap.to(".Blob", {
            scale: 1.3,
            repeat: -1,
            ease: "linear",
            delay: "0.3",
            yoyo: "true",
            stagger: "0.3",
            duration: 0.5,
            backgroundColor: "red",
        });
    });
    useGSAP(() => {
        const introText1 = gsap.timeline({
            scrollTrigger: {
                trigger: ".HEADING-TEXT-S", // Ensure the first span comes into view
                start: "top 50%",
                end: "+=300",
            },
        });
        introText1.from(".HEADING-CHAR-S", {
            y: 200,

            opacity: 0.5, // Move each character 200px to the right initially
            duration: 1.5,
            ease: "elastic.out(1,0.6)",

            stagger: 0.04,
            // Stagger effect for smoother animation
        });
    });
    const handlePageNavigation = (componentId) => {
        const page = document.getElementById(componentId);
        if (page) {
            page.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <>
            <div
                id="CANVAS"
                className="relative px-[50px] w-[99.5vw] h-fit bg-black text-off-white"
            >
                <div
                    style={{
                        display: showCursor ? "inline-flex" : "none",
                        zIndex: "1",
                    }}
                    className="CURSOR sm:w-[5vw] absolute sm:h-[4vh] rounded-lg bg-white/20 sm:flex items-center justify-center space-x-2"
                >
                    <div className="DOT w-[0.4vw] h-[0.4vw] bg-white"></div>
                    <div className="w-fit h-full flex p-1">
                        <h1 className="font-heading1 text-xs tracking-wider text-center">
                            View
                        </h1>
                    </div>
                </div>
                <div className="PAGE-1  h-[150vh] py-20 px-10 ">
                    <div className="flex flex-col items-center justify-center ">
                        <div className=" py-5 overflow-hidden flex items-center justify-center">
                            <h1 className="HEADING-TEXT-S text-8xl font-heading2 tracking-wider">
                                {"What We Do".split("").map((char, index) => (
                                    <span className="HEADING-CHAR-S inline-block" key={index}>
                                        {char}
                                    </span>
                                ))}
                            </h1>
                        </div>

                        <h2 className="font-heading1 text-xl  text-off-white ">
                            Crafted for the Cosmos, Engineered for Every Mission
                        </h2>
                    </div>
                    <div className="BOTTOM-DEATILS w-full  h-full sm:flex justify-between">
                        <div className="LEFT h-full  text-off-white sm:w-[350px] sm:flex flex-col items-center justify-items-start pt-[27vh] space-y-[15vh]">

                            <div className="flex justify-start items-center space-x-7">
                                <div className="Blob h-[1vw] w-[1.5vw] blur-sm bg-green-600  rounded-full"></div>
                                <h1
                                    style={{ lineHeight: "1.5vw", wordSpacing: "2px" }}
                                    className="font-heading1 sm:text-xl sm:tracking-widest"
                                >
                                    Explore a new generation of adaptable spacecraft
                                </h1>
                            </div>
                            <div className="flex justify-start  items-center space-x-7">
                                <div className="Blob h-[1vw] w-[1.5vw] blur-sm bg-green-600  rounded-full"></div>
                                <h1
                                    style={{ lineHeight: "1.5vw", wordSpacing: "2px" }}
                                    className="font-heading1 sm:text-xl sm:tracking-widest"
                                >
                                    Designed for versatility and resilience.
                                </h1>
                            </div>
                            <div className="flex justify-start  items-center space-x-7">
                                <div className="Blob h-[1vw] w-[1.5vw] blur-sm bg-green-600  rounded-full"></div>
                                <h1
                                    style={{ lineHeight: "1.5vw", wordSpacing: "2px" }}
                                    className="font-heading1 sm:text-xl sm:tracking-widest"
                                >
                                    Crafted for missions beyond cosmos.
                                </h1>
                            </div>
                        </div>
                        <div className="mainImage-CONTAINER mt-[300px] h-full sm:w-[500px] sm:flex items-end justify-center ">
                            <div className="mainImage sm:flex relative items-end justify-center">
                                <img
                                    src={mainImage}
                                    loading="lazy"
                                    alt=""
                                    style={{
                                        width: "55%",
                                        height: "55%",
                                        objectFit: "cover",
                                        zIndex: "1",
                                    }}
                                />
                            </div>
                        </div>

                        <div
                            style={{ zIndex: "5" }}
                            className="RIGHT h-[80%]  relative sm:w-[350px] sm:flex flex-col items-center justify-start p-5 space-y-[9vh] pt-[120px]  border-white/20"
                        >
                            <h1 className="font-heading2 text-3xl text-center mb-[3vh] tracking-widest">
                                Services
                            </h1>

                            <h1
                                onMouseEnter={handleCursorEnter}
                                onMouseLeave={handleCursorLeave}
                                onClick={() => handlePageNavigation("S-1")}
                                className="font-heading1 text-xl cursor-pointer hover:text-off-white hover:scale-110 transition-transform duration-75 tracking-wider  text-off-white/40"
                            >
                                Web Design & Development {" "}
                            </h1>
                            <h1
                                onMouseEnter={handleCursorEnter}
                                onMouseLeave={handleCursorLeave}
                                onClick={() => handlePageNavigation("S-2")}
                                className="font-heading1 text-xl cursor-pointer hover:text-off-white hover:scale-110 transition-transform duration-75 tracking-wider text-off-white/40"
                            >
                                Ui/Ux Design{" "}
                            </h1>
                            <h1
                                onMouseEnter={handleCursorEnter}
                                onMouseLeave={handleCursorLeave}
                                onClick={() => handlePageNavigation("S-3")}
                                className="font-heading1 text-xl cursor-pointer hover:text-off-white hover:scale-110 transition-transform duration-75 tracking-wider text-off-white/40"
                            >
                                App Design & Development{" "}
                            </h1>
                            <h1
                                onMouseEnter={handleCursorEnter}
                                onMouseLeave={handleCursorLeave}
                                onClick={() => handlePageNavigation("S-4")}
                                className="font-heading1 text-xl cursor-pointer hover:text-off-white hover:scale-110 transition-transform duration-75 tracking-wider text-off-white/40"
                            >
                                Branding{" "}
                            </h1>
                            <h1
                                onMouseEnter={handleCursorEnter}
                                onMouseLeave={handleCursorLeave}
                                onClick={() => handlePageNavigation("S-5")}
                                className="font-heading1 text-xl cursor-pointer hover:text-off-white hover:scale-110 transition-transform duration-75 tracking-wider  text-off-white/40"
                            >
                                Graphic Design{" "}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

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
                <div className="LEFT w-[50vw] flex flex-col space-y-5 p-5 h-fit text-off-white">
                    {services.map((item, index) => (
                        <div
                            key={index}
                            id={`S-${index + 1}`}
                            style={{ wordSpacing: "0.1vw" }}
                            className="SERVICE h-[100vh] w-full flex flex-col space-y-5 border-b-[1px] border-white/10"
                        >
                            <div className="flex flex-col">
                                <h1
                                    className={`font-heading2 sm:mt-[5vh] text-center sm:tracking-wider sm:text-5xl`}
                                >
                                    {item.name}
                                </h1>
                                <h1 className="font-heading1 text-xl text-center sm:mb-[5vh] tracking-tight">
                                    {item.purpose}
                                </h1>
                            </div>
                            <div
                                style={{ lineHeight: "1.5vw" }}
                                className="sm:flex sm:flex-col items-start justify-center font-heading1 sm:space-y-5"
                            >
                                <h1 className="tracking-wider text-xl font-semibold">Overview</h1>
                                <p className="ml-5 sm:font-normal sm:text-md sm:tracking-wider">
                                    {item.overview}
                                </p>
                                <h1 className="sm:tracking-wider sm:text-xl sm:font-semibold">Tools</h1>
                                <p className="ml-5 sm:font-normal sm:text-md sm:tracking-wider">
                                    {item.tools}
                                </p>
                                <h1 className="sm:tracking-wider sm:text-xl sm:font-semibold">
                                    Notable Works
                                </h1>
                                <ul className="list-disc pl-4">
                                    {item.notableWorks.map((work, workIndex) => (
                                        <li
                                            key={workIndex}
                                            className="ml-5 sm:font-normal sm:text-md sm:tracking-wider"
                                        >
                                            {work}
                                        </li>
                                    ))}
                                </ul>
                                <div className="BOTTOM-STATS pt-10 border-b-[1px] border-white/10 self-center p-5 rounded-xl text-off-white sm:flex items-center justify-center space-x-5">
                                    <div className="sm:flex group cursor-pointer hover:text-off-white sm:flex-col items-center justify-center w-fit h-fit transition-transform duration-300 hover:scale-110">
                                        <h1 className="font-heading2 sm:text-2xl">
                                            {item.projectsCompleted}
                                        </h1>
                                        <h1 className="font-heading1 tracking-wider sm:text-sm">
                                            Projects Completed
                                        </h1>
                                    </div>
                                    <div className="sm:flex group cursor-pointer hover:text-off-white sm:flex-col items-center justify-center w-fit h-fit transition-transform duration-300 hover:scale-110">
                                        <h1 className="font-heading2 sm:text-2xl">
                                            {item.ongoingProjects}
                                        </h1>
                                        <h1 className="font-heading1 tracking-wider sm:text-sm">
                                            Ongoing Projects
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="RIGHT w-[40vw]  relative ">
                    <div className="RIGHT-STICKY sticky top-0 w-full h-[100vh]    flex items-center justify-center">
                        {[web, uiux, app, branding, graphic].map((src, index) => (
                            <div
                                key={index}
                                className="STICKY-IMAGE-CONTAINER sm:flex sm:flex-col items-center  justify-center  absolute h-[100vh] bg-black rounded-full overflow-hidden  "
                                style={{
                                    width: "650px",
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
                                        zIndex: 1,
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

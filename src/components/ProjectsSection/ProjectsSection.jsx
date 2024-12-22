import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react';
import p8 from '../../assets/img/p8.png';
import p4 from '../../assets/img/p4.png';
import p5 from '../../assets/img/p5.png';
import p6 from '../../assets/img/p6.png';
import p7 from '../../assets/img/p7.png';
import p9 from '../../assets/img/p9.jpg';
import p10 from '../../assets/img/p10.png';
import p11 from '../../assets/img/p11.png';
import CommonHeaderText from '../CommonHeaderText/CommonHeaderText';
import WorkFlowCard from '../WorkFlowCard/WorkFlowCard';

const projects = [
    {
        src: p4,
        title: "Modern Apartment Design",
    },
    {
        src: p5,
        title: "Creative Workspace Interiors",
    },
    {
        src: p6,
        title: "Luxury Villa Project",
    },
    {
        src: p7,
        title: "Urban Office Space",
    },
    {
        src: p8,
        title: "Elegant Kitchen Design",
    },
    {
        src: p9,
        title: "Contemporary Living Room",
    },
    {
        src: p10,
        title: "Minimalist Bedroom Decor",
    },
    {
        src: p11,
        title: "Artistic Workspace Layout",
    },
    {
        noSrc: true,
        title: "More Projects",
    },
];

const ProjectsSection = () => {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const pin = gsap.fromTo(
            sectionRef.current,
            {
                translateX: 0,
            },
            {
                translateX: `-${Math.ceil(projects.length / 2 - 1) * 100}vw`,
                ease: "none",
                duration: 1,
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top",
                    end: `+=${Math.ceil(projects.length / 2) * 100}vw`,
                    scrub: 1.2,
                    pin: true,
                },
            }
        );

        return () => {
            pin.kill();
        };
    }, []);

    return (
        <section className="relative overflow-hidden">
            <CommonHeaderText text="Our Best Projects" />
            <div ref={triggerRef} className="h-screen">
                <div
                    ref={sectionRef}
                    style={{ width: `calc(100vw * ${Math.ceil(projects.length / 2)})` }}
                    className="flex h-full"
                >
                    {projects.map((project, i) => (
                        <div
                            key={i}
                            className="w-1/2 flex items-center justify-center h-full"
                        >

                            <div className="grid grid-cols-1 p-6 place-content-center">
                                {project.noSrc ? (
                                    <WorkFlowCard title={project.title} />
                                ) : (
                                    <img
                                        src={project.src}
                                        className="w-full h-auto object-cover rounded-lg"
                                        alt={project.title}
                                    />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;

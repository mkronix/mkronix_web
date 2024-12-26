import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react';
import CommonHeaderText from '../CommonHeaderText/CommonHeaderText';
import projects from '../../data/projects';

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
        <section id='project' className="relative overflow-hidden">
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
                                <img
                                    src={project.src}
                                    className="md:w-[700px] md:h-[400px] w-full h-auto object-cover rounded-lg"
                                    alt={project.title}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
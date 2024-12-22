import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react';
import p1 from '../../assets/img/p3.jpg';
import p2 from '../../assets/img/p4.jpg';
import p3 from '../../assets/img/p5.png';
const projects = [
    {
        title: 'Matthias Leidinger',
        src: p1,
    },
    {
        title: 'Clément Chapillon',
        src: p2,
    },
    {
        title: 'Zissou',
        src: p3,
    },
    {
        title: 'Mathias Svold and Ulrik Hasemann',
        src: p1,
    },
];


const HorizontalScrollSection = () => {
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
                translateX: "-300vw",
                ease: "none",
                duration: 1,
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top",
                    end: "3000 top",
                    scrub: 0.6,
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
            <div ref={triggerRef}>
                <div
                    ref={sectionRef}
                    className="flex h-screen w-[400vw] relative"
                >
                    {projects.map((project, i) => (
                        <div key={i} className='w-screen flex items-center justify-center h-full p-10'>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 place-content-center'>
                                <img src={project.src} className='w-full object-fill rounded-lg' alt="" />
                                <div className='flex flex-col gap-4 justify-center'>
                                    <p className='text-4xl text-white'>{project.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HorizontalScrollSection;

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react';
import p1 from '../../assets/img/p3.jpg';
import p2 from '../../assets/img/p4.jpg';
import p3 from '../../assets/img/p5.png';
const projects = [
    {
        title: 'Matthias Leidinger',
        description:
            'Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.',
        src: p1,
        link: 'https://images.unsplash.com/photo-1605106702842-01a887a31122?q=80&w=500&auto=format&fit=crop',
        color: 'bg-transparent',
    },
    {
        title: 'Clément Chapillon',
        description:
            'This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes”—so French photographer Clément.',
        src: p2,
        link: 'https://images.unsplash.com/photo-1605106250963-ffda6d2a4b32?w=500&auto=format&fit=crop&q=60',
        color: 'bg-transparent',
    },
    {
        title: 'Zissou',
        description:
            'Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal.',
        src: p3,
        link: 'https://images.unsplash.com/photo-1605106901227-991bd663255c?w=500&auto=format&fit=crop',
        color: 'bg-transparent',
    },
    {
        title: 'Mathias Svold and Ulrik Hasemann',
        description:
            'The coastlines of Denmark are documented in tonal colors in a pensive new series by Danish photographers Ulrik Hasemann and Mathias Svold; an ongoing project investigating how humans interact with and disrupt the Danish coast.',
        src: p1,
        link: 'https://images.unsplash.com/photo-1605106715994-18d3fecffb98?w=500&auto=format&fit=crop&q=60',
        color: 'bg-transparent',
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
                    end: "3000 top", // Ensure enough space for scroll
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
            {/* Trigger Wrapper */}
            <div ref={triggerRef}>
                <div
                    ref={sectionRef}
                    className="flex h-screen w-[400vw] relative"
                >
                    {projects.map((project, i) => (
                        <div className='w-screen flex items-center justify-center h-full p-10'>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 place-content-center'>
                                <img src={project.src} className='w-full object-fill rounded-lg' alt="" />
                                <div className='flex flex-col gap-4 justify-center'>
                                    <p className='text-4xl text-white'>{project.title}</p>
                                    <p className='text-white text-2xl'>{project.description}</p>
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

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import React, { useEffect, useRef } from 'react';
import { services } from '../../data/services';
import ButtonBestia from '../ButtonBestia/ButtonBestia';
gsap.registerPlugin(ScrollTrigger);

const StickyCard = () => {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    useEffect(() => {
        // Initialize Lenis for smooth scrolling
        const lenis = new Lenis({
            lerp: 0.1, // Reduce the lerp for more gradual scrolling
            smoothWheel: true,
            smoothTouch: true, // Ensure touch interactions are smooth
        });

        const scrollFn = (time) => {
            lenis.raf(time);
            requestAnimationFrame(scrollFn);
        };
        requestAnimationFrame(scrollFn);

        lenis.on('scroll', ScrollTrigger.update);

        const pin = gsap.fromTo(
            sectionRef.current,
            { translateX: 0 },
            {
                translateX: `-${services.length - 1}00vw`, // Dynamically calculate based on the number of services
                ease: "power1.inOut",
                duration: 1,
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top",
                    end: `+=${services.length * window.innerWidth}`, // Ensure the scroll duration matches the total width
                    scrub: 1.5,
                    pin: true,
                },
            }
        );


        // Scroll-triggered animations
        const sticky_contentElements = document.querySelectorAll('.sticky_content--sticky');
        sticky_contentElements.forEach((el, index) => {

            gsap.timeline({
                scrollTrigger: {
                    trigger: el,
                    start: 'top top',
                    end: '+=100%',
                    scrub: true,

                },
            })
        });

        // Cleanup function
        return () => {
            lenis.destroy();
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
            pin.kill();
        };
    }, []);

    return (
        <div ref={triggerRef}>
            <div ref={sectionRef} className="overflow-hidden flex w-[400vw] relative">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className="flex gap-10 p-10 w-screen items-center justify-center"
                    >
                        <ButtonBestia width="w-full" height="h-full">
                            <div className="sticky_content--sticky grid md:grid-cols-2 grid-cols-1 gap-10 items-center justify-center px-4 md:px-10 py-6">
                                <div className="flex flex-col items-center text-center md:text-left">
                                    <img
                                        className="my-4 w-96 h-56 rounded-lg"
                                        src={service.image}
                                        alt={service.title}
                                    />
                                    <h2 className="lg:text-4xl md:text-3xl text-2xl font-semibold mt-2">
                                        {service.title}
                                    </h2>
                                </div>
                                <p className="lg:text-xl md:text-lg text-base  text-justify md:text-left px-4 md:px-6">
                                    {service.description}
                                </p>
                            </div>
                        </ButtonBestia>
                    </div>
                ))}
            </div>
        </div>
    );

};

export default StickyCard;

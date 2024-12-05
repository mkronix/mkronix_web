import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import React, { useEffect, useRef } from 'react';
import { services } from '../../data/services';
import './StickyCard.css';
import ScrollRevealText from '../ScrollRevealText/ScrollRevealText';
gsap.registerPlugin(ScrollTrigger);

const StickyCard = () => {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    useEffect(() => {
        // Initialize Lenis for smooth scrolling
        const lenis = new Lenis({
            lerp: 0.2,
            smoothWheel: true,
            duration: 1.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),

        });
        const scrollFn = (time) => {
            lenis.raf(time);
            requestAnimationFrame(scrollFn);
        };
        requestAnimationFrame(scrollFn);

        lenis.on('scroll', ScrollTrigger.update);

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

        <section className="relative overflow-hidden">
            {/* Trigger Wrapper */}
            <div ref={triggerRef}>
                <div
                    ref={sectionRef}
                    className="flex h-screen w-[400vw] relative"
                >
                    {services.map((service) => (
                        <div className="flex h-screen gap-10 px-4 w-screen items-center justify-center">
                            <div
                                key={service.id}
                                className={`sticky_content sticky_content--sticky lg:w-96 w-[90%] bg-${service.id}`}
                            >
                                <img className="sticky_content__img text-black my-4" src={service.image} />
                                <h2 className="sticky_content__title">
                                    {service.title}
                                </h2>
                                <p className={"sticky_content__text"}>
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
        // <section className='flex flex-col items-center px-5 md:my-14 my-8 gap-4'>
        //     {services.map((service) => (
        //         <div
        //             key={service.id}
        //             style={{
        //                 '--offset': `${service.id === 1 ? '0px' : `${Number(service.id)}rem`}`
        //             }}
        //             className={`sticky_content sticky_content--sticky lg:w-96 sm:w-full bg-${service.id}`}
        //         >
        //             <img className="sticky_content__img text-black my-4" src={service.image} />
        //             <h2 className="sticky_content__title">
        //                 {service.title}
        //             </h2>
        //             <ScrollRevealText className={"sticky_content__text"}>
        //                 {service.description}
        //             </ScrollRevealText>
        //         </div>
        //     ))}
        // </section>
    );
};

export default StickyCard;

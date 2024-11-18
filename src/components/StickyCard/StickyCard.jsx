import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './StickyCard.css';
import v1 from '../../assets/video/v1.mp4';
import v2 from '../../assets/video/v2.mp4';
import v3 from '../../assets/video/v3.mp4';
import v4 from '../../assets/video/v4.mp4';
import v5 from '../../assets/video/v5.mp4';
import v6 from '../../assets/video/v6.mp4';
import { services } from '../../data/services';
gsap.registerPlugin(ScrollTrigger);

const StickyCard = () => {
    useEffect(() => {
        // Initialize Lenis for smooth scrolling
        const lenis = new Lenis({
            lerp: 0.2,
            smoothWheel: true,
        });

        const scrollFn = (time) => {
            lenis.raf(time);
            requestAnimationFrame(scrollFn);
        };
        requestAnimationFrame(scrollFn);

        lenis.on('scroll', ScrollTrigger.update);

        // Scroll-triggered animations
        const sticky_contentElements = document.querySelectorAll('.sticky_content--sticky');
        sticky_contentElements.forEach((el, index) => {
            const isLast = index === sticky_contentElements.length - 1;

            gsap.timeline({
                scrollTrigger: {
                    trigger: el,
                    start: 'top top',
                    end: isLast ? 'max' : '+=100%',
                    scrub: true,
                },
            })
        });

        // Cleanup function
        return () => {
            lenis.destroy();
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <section className='flex flex-col items-center px-5 my-10 gap-4'>
            {services.map((service) => (
                <div
                    key={service.id}
                    style={{
                        '--offset': `${service.id === 1 ? '0px' : `${Number(service.id) * 2}rem`}`
                    }}
                    className={`sticky_content sticky_content--sticky lg:w-96 sm:w-full sticky_content--grid bg-${service.id}`}
                >
                    <img className="sticky_content__img text-black my-4" src={service.image} />
                    <h2 className="sticky_content__title spotlight-text">
                        {service.title}
                    </h2>
                    <p className="sticky_content__text sticky_content__text--left text-meta">
                        {service.description}
                    </p>
                </div>
            ))}
        </section>
    );
};

export default StickyCard;

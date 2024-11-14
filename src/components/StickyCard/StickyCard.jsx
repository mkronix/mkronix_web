import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import './StickyCard.css';
import { cardData } from '../../data/CardData';

gsap.registerPlugin(ScrollTrigger);

const StickyCard = () => {
    useEffect(() => {
        const contentElements = document.querySelectorAll('.content--sticky');
        const lenis = new Lenis({
            lerp: 0.2,
            smoothWheel: true,
        });

        lenis.on('scroll', () => ScrollTrigger.update());

        const scrollFn = (time) => {
            lenis.raf(time);
            requestAnimationFrame(scrollFn);
        };
        requestAnimationFrame(scrollFn);

        contentElements.forEach((el) => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: el,
                    start: 'center center',
                    end: '+=100%',
                    scrub: true,
                },
            })
                .to(el, {
                    ease: 'none',
                    filter: 'blur(3px)',
                    startAt: { filter: 'blur(0px)' },
                }, 0)
                .to(el, {
                    ease: 'none',
                    scale: 0.4,
                    yPercent: -50,
                }, 0);
        });

        // Clean up
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Clean up all ScrollTriggers
            lenis.destroy();
        };
    }, []);

    return (
        <div className="wrap">
            {cardData.map((card, index) => (
                <div key={card.number} className={`content content--sticky content--card bg-${index + 1}`}>
                    <img className="content__img" src={card.backgroundImage} alt={card.title} />
                    <h2 className="content__title">{card.title}</h2>
                    <p className="content__text text-meta">{card.description}</p>
                </div>
            ))}
        </div>
    );
};

export default StickyCard;

import { motion } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import React, { useEffect } from 'react';
import pattern2 from '../assets/arrow-patter.svg';
import Card from '../components/Card/Card.jsx';
import Header from '../components/Header';
import MarqueeText from '../components/marquetext/MarqueeText.jsx';
import { cardData } from '../data/CardData.js';
import { splitText, wordVariants } from '../utils/splitextAnime.jsx';

gsap.registerPlugin(ScrollTrigger);
const Home = () => {
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
        <main className='p-2 max-w-[100vw]' >
            <Header />
            <div className='w-full flex flex-col justify-center items-center mt-5 overflow-hidden max-md:h-[73vh]'>
                <div className='flex w-full max-md:flex-wrap max-md:gap-1 max-md:justify-center max-md:mt-12'>
                    <motion.div
                        variants={wordVariants}
                        initial="initial"
                        animate="animate"
                        className='text-[7rem] max-md:text-[8rem] max-sm:text-[5rem] font-mono font-extrabold text-white uppercase hero-text-shadow'
                    >
                        {splitText("Creative")}
                    </motion.div>
                    <motion.div
                        variants={wordVariants}
                        initial="initial"
                        animate="animate"
                        className='text-[6rem] max-md:text-[8rem] max-sm:text-[5rem] font-oswald font-extrabold text-primary uppercase hero-text-shadow'
                    >
                        {splitText("Solution")}
                    </motion.div>
                </div>
                <motion.div
                    variants={wordVariants}
                    initial="initial"
                    animate="animate"
                    className='text-[5rem] max-lg:text-[4rem] max-md:text-[3rem] max-sm:text-[2rem] mt-4 font-monu-bold text-center w-full font-bold text-white uppercase hero-text-shadow'
                >
                    Inspire Your {splitText("Mind")}
                </motion.div>
            </div>
            <div className="bg-black text-white p-8 mt-12 max-md:mt-4">
                <img src={pattern2} alt="pattern" className="absolute right-10 w-96 h-96 bg-transparent max-md:hidden" />
                <div className="flex items-center pl-10 max-md:flex-col max-md:pl-0">
                    <h1 className="text-9xl font-bold max-lg:text-5xl max-md:text-3xl max-md:flex max-md:gap-2">
                        <span className="block font-mono">WHAT</span>
                        <span className="block font-sora">CAN</span>
                        <span className="block font-oswald">WE</span>
                    </h1>
                    <h2 className="text-6xl font-bold text-primary max-lg:text-4xl max-md:text-2xl max-md:-ml-0 max-md:flex max-md:gap-2">
                        <span className="block font-sans">DO FOR</span>
                        <span className="block font-serif">YOU?</span>
                    </h2>
                </div>
            </div>
            <div className='mt-40'>
                {cardData.map((cardData, index) => (
                    <React.Fragment key={index}>
                        <Card
                            backgroundImage={cardData.backgroundImage}
                            title={cardData.title}
                            description={cardData.description}
                            number={cardData.number}
                        />
                    </React.Fragment>
                ))}
            </div>
            <MarqueeText />
        </main>
    )
}

export default Home
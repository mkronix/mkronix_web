import { useEffect } from 'react';
import Lenis from 'lenis';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const useSmoothScroll = (loading) => {
    useEffect(() => {
        if (!loading) {
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

            return () => {
                lenis.destroy();
            };
        }
    }, [loading]);
};

export default useSmoothScroll;

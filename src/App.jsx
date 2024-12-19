import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import React, { useEffect, useState } from 'react';
import ZeroToHundredLoader from './components/BestLoader/ZeroToHunderedLoader';
import Cursor from './components/Cursor/Cursor';
import MarqueeText from './components/marquetext/MarqueeText';
import AnimatedSideMenu from './components/MenuMarquee/AnimatedSideMenu';
import scaleGraph from './assets/img/scale-graph.png';
gsap.registerPlugin(ScrollTrigger);
const App = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate preloader delay
    const timeout = setTimeout(() => {
      setLoading(false); // Hide loader when done
    }, 4000); // Adjust time as needed (matches loader animation)

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!loading) {
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

      return () => {
        lenis.destroy();
      };
    }
  }, [loading]);

  if (loading) {
    return <ZeroToHundredLoader />; // Show loader during the loading phase
  }

  return (
    <main className='bg-black relative'>
      <AnimatedSideMenu />
      <section className="relative md:pt-12 pt-6 max-md:px-2 grid grid-cols-12 h-screen">
        <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:35px_34px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>
        <div className="md:h-[100px] lg:h-[500px] md:col-span-1 col-span-12 flex flex-col justify-center md:justify-around items-center text-white/40">
          <p className="md:rotate-90 tracking-wide text-xl font-bold">DESIGNING</p>
          <p className="md:rotate-90 tracking-wide text-xl font-bold">&</p>
          <p className="md:rotate-90 tracking-wide text-xl font-bold">DEVELOPMENT</p>
        </div>
        <div className={`md:h-[500px] lg:h-[700px] flex flex-col max-md:justify-center max-md:items-center md:col-span-8 col-span-12 relative`}>
          <img src={scaleGraph} alt="" className="absolute p-4 top-0 left-0 object-fill w-full h-full" />
          <h2 className="font-bold font-antic text-white/60 leading-[1.2] text-dynamic-h2">
            Success-Driven Design for Ambitious Leaders
          </h2>
          <p className="font-light font-sans text-white/50 leading-dynamic-p text-dynamic-p">
            We design <span className="text-black px-2 rounded-md bg-parrot font-sans">brands</span>{" "}
            that transform visions into thriving businesses.
          </p>

        </div>
        <div className="md:col-span-3 col-span-12 flex justify-center md:h-[400px] lg:h-[600px] overflow-hidden">
          <div className='md:block hidden'>
            <MarqueeText direction={'ttb'} speed={10} />
          </div>
          <div className='md:hidden block'>
            <MarqueeText direction={'rtl'} speed={0.5} isMobile={true} />
          </div>
        </div>
      </section>
      <section className='relative h-screen'>
        <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:35px_34px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>
      </section>
      <Cursor />
    </main>
  );
};

export default App;

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import React, { useEffect, useState } from 'react';
import crown from './assets/icon/crown.svg';
import globe from './assets/icon/globe.svg';
import ellipse from './assets/icon/three-ellipse.svg';
import scaleGraph from './assets/img/scale-graph.png';
import ZeroToHundredLoader from './components/BestLoader/ZeroToHunderedLoader';
import Cursor from './components/Cursor/Cursor';
import MarqueeText from './components/marquetext/MarqueeText';
import AnimatedSideMenu from './components/MenuMarquee/AnimatedSideMenu';
import { dummyImages } from './data/dummyImages';
import StatsSection from './components/StatsSection/StatsSection';
import BoxesLayer from './components/BoxesLayer/BoxesLayer';
import WorkFlowCard from './components/WorkFlowCard/WorkFlowCard';
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

  const textMarqueData = [
    "WEB DESIGN",
    "●",
    "UI/UX DESIGN",
    "●",
    "APPLICATIONS",
    "●",
    "GRAPHICS",
    "●",
    "BRANDING",
    "●",
    "LOGO",
    "●",
    "MARKETING",
    "●"
  ]

  return (
    <main className='bg-black relative font-antic'>
      <div className='fixed top-2 left-2 flex font-bold uppercase text-2xl md:text-4xl'>
        <h2 className='text-white/80'>M</h2><h2 className='text-parrot'>K</h2><h2 className='text-white/70'>ronix</h2>
      </div>
      <AnimatedSideMenu />
      <section className="relative md:pt-20 pt-12 max-md:px-2 grid grid-cols-1 md:grid-cols-12 h-screen">
        <BoxesLayer />
        <div className="h-[40px] md:h-[400px] lg:h-[500px] md:col-span-1 flex md:flex-col justify-around md:items-center text-white/80 italic font-irish">
          <p className="md:rotate-90  md:tracking-[0.4em] tracking-[0.1em] text-xl md:font-bold">DESIGNING</p>
          <p className="md:rotate-90  md:tracking-[0.4em] tracking-[0.1em] text-xl md:font-bold">&</p>
          <p className="md:rotate-90  md:tracking-[0.4em] tracking-[0.1em] text-xl md:font-bold">DEVELOPMENT</p>
        </div>
        <div className={`h-[480px] md:h-[600px] lg:h-[700px] max-md:px-3 flex max-md:gap-5 flex-col max-md:justify-start max-md:items-center md:col-span-8 relative`}>
          <img src={scaleGraph} alt="" className="absolute p-4 top-0 left-0 object-fill w-full h-full" />
          <h2 className="font-bold font-antic text-white/80 leading-[1.2] text-dynamic-h2">
            Success-Driven Design for Ambitious Leaders
          </h2>
          <p className="font-light font-sans text-white/70 leading-dynamic-p text-dynamic-p">
            We design <span className="text-black px-2 rounded-md bg-parrot font-sans">brands</span>{" "}
            that transform visions into thriving businesses.
          </p>

        </div>
        <div className="md:col-span-3 flex justify-center h-[100px] md:h-[500px] lg:h-[600px] overflow-hidden">
          <div className='md:block hidden'>
            <MarqueeText direction={'ttb'} className={'bg-transparent'} speed={10} imageData={dummyImages} key={'desktop-marquee'} />
          </div>
          <div className='md:hidden block'>
            <MarqueeText direction={'rtl'} className={'bg-transparent'} speed={0.5} isMobile={true} imageData={dummyImages} key={'mobile-marquee'} />
          </div>
        </div>
      </section>
      <section className='relative h-[50px] md:h-[100px] overflow-hidden'>
        <MarqueeText textData={textMarqueData} className={'bg-parrot'} direction={'rtl'} speed={0.5} key={'mobile--text-marquee'} isMobile={true} />
      </section>
      <section className='relative h-[275px] md:h-[200px] w-full flex flex-col px-4 my-6'>
        <BoxesLayer />

        <div className='grid md:grid-cols-12 grid-cols-12 gap-4 items-center'>
          {/* World Class Agency Button */}
          <div className='md:col-span-4 col-span-9 flex justify-center items-center'>
            <button className='max-md:pl-3 px-4 border border-white/80 text-white/80 text-xs md:text-xl w-max h-12 rounded-full flex items-center justify-center md:gap-3'>
              <img src={globe} alt="globe icon" className='w-5 h-5 md:w-6 md:h-6' />
              <span className='font-thin'>World Class Agency</span>
            </button>
            <button className='max-md:pl-3 px-4 border border-white/80 text-white/80 text-xs md:text-xl w-max h-12 rounded-full flex items-center justify-center md:gap-3'>
              <img src={crown} alt="crown icon" className='w-5 h-5 md:w-6 md:h-6' />
              <span className='font-thin'>2024 Best Agency</span>
            </button>
          </div>
          {/* Horizontal Line */}
          <div className='md:col-span-6 col-span-12 flex max-md:order-4 justify-center items-center relative'>
            <span className='absolute top-[-2px] left-0 h-[5px] w-[5px] rounded-full bg-white/80'></span>
            <div className='h-[1px] bg-white/60 w-full'></div>
            <span className='absolute top-[-2px] right-0 h-[5px] w-[5px] rounded-full bg-white/80'></span>
          </div>

          {/* Ellipse Image */}
          <div className='md:col-span-2 col-span-3 flex justify-center items-center'>
            <img src={ellipse} alt="ellipse icon" className='md:w-40 md:h-14' />
          </div>
        </div>
        <StatsSection />
      </section>

      <section className='realative h-[950px] md:h-[400px] w-full grid md:grid-cols-3 grid-cols-1 gap-4 md:p-10 p-4'>
        <WorkFlowCard number={'01'} description={'We conduct research to understand your brand’s values and market position. By blending creativity with strategy, we define a clear direction that ensures a cohesive and effective brand presence across all touchpoints.'} title={'Research & Strategy'} onClick={() => { }} />
        <WorkFlowCard number={'02'}
          title={'Design Process'}
          description={'In this phase, we bring the strategy to life through creative design. We focus on crafting visually appealing elements that reflect your brand’s identity, ensuring each design is functional and aligned with your business goals.'} onClick={() => { }} />
        <WorkFlowCard number={'03'} description={'Once the design is approved, we deliver all necessary assets and ensure smooth implementation across platforms. Payment is processed, and we guarantee a seamless transition, ensuring complete satisfaction with the final product.'} title={'Deliver & Payment'} onClick={() => { }} />
      </section>

      <section className='h-screen'></section>
      <Cursor />
    </main>
  );
};

export default App;

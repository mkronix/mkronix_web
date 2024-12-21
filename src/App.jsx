import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import React, { useEffect, useState } from 'react';
import AnimatedSideMenu from './components/AnimatedSideMenu/AnimatedSideMenu';
import BoxesLayer from './components/BoxesLayer/BoxesLayer';
import Cursor from './components/Cursor/Cursor';
import { FlipWords } from './components/FlipWords/FlipWords';
import Footer from './components/Footer/Footer';
import HowItWorks from './components/HowItWorks/HowItWorks';
import { Testimonals } from './components/InfiniteMovingCards/InfiniteMovingCards';
import LampContainer from './components/LampContainer/LampContainer';
import MarqueeText from './components/marquetext/MarqueeText';
import ServiceReveal from './components/ServiceReveal/ServiceReveal';
import StatsSection from './components/StatsSection/StatsSection';
import { TypewriterEffectSmooth } from './components/TypewriterEffect/TypewriterEffect';
import WorkFlowCard from './components/WorkFlowCard/WorkFlowCard';
import ZeroToHundredLoader from './components/BestLoader/ZeroToHunderedLoader';
import ProjectSection from './components/ProjectSection/ProjectSection';
gsap.registerPlugin(ScrollTrigger);
const App = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

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

  if (loading) {
    return <ZeroToHundredLoader />;
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

  const words = [
    "brand",
    "business",
    "products",
    "services",
  ]

  const typeText = [
    {
      text: "Lost",
    },
    {
      text: "in",
    },
    {
      text: "the",
    },
    {
      text: "noise?",
    },
    {
      text: "It’s",
    },
    {
      text: "Time",
    },
    {
      text: "to",
    },
    {
      text: "Stand Out."
    },
  ];
  return (
    <main className='bg-black relative font-antic'>
      <div className='fixed top-2 z-50 left-2 flex font-bold uppercase text-2xl'>
        <h2 className='text-white/80'>M</h2><h2 className='text-white'>K</h2><h2 className='text-white/70'>ronix</h2>
      </div>
      <AnimatedSideMenu />
      <section className="relative md:pt-20 pt-12 max-md:px-2 px-5 flex flex-col overflow-hidden h-screen">
        <BoxesLayer />
        <div className={`max-md:px-3 flex flex-col relative`}>
          <TypewriterEffectSmooth words={typeText} className='text-white' />
          <p className="relative z-10 font-light font-sans flex gap-2 text-white/70 leading-dynamic-p text-dynamic-p items-center">
            Your <FlipWords words={words} className={'text-white'} /> deserves better.
          </p>
          <p className="relative z-10 font-light font-sans flex text-white/70 leading-dynamic-p text-dynamic-p">
            Stand out with a digital presence they’ll always remember
          </p>
        </div>
        <div className="flex my-28 flex-col items-center gap-0 md:gap-4">
          <div
            className="transform md:rotate-[-9deg] rotate-[-20deg] will-change-transform"
            style={{
              transformStyle: 'preserve-3d',
              backfaceVisibility: 'hidden',
            }}
          >
            <MarqueeText
              textData={textMarqueData}
              className="bg-white"
              direction="rtl"
              speed={0.3}
              key="mobile--text-marquee-1"
              isMobile={true}
            />
          </div>

          <div
            className="transform md:rotate-[9deg] rotate-[20deg] will-change-transform"
            style={{
              transformStyle: 'preserve-3d',
              backfaceVisibility: 'hidden',
            }}
          >
            <MarqueeText
              textData={textMarqueData}
              className="bg-white"
              direction="ltr"
              speed={0.7}
              key="mobile--text-marquee-2"
              isMobile={true}
            />
          </div>

        </div>
      </section>
      <section className='relative md:h-[50vh] w-full flex flex-col px-4 my-6'>
        <LampContainer>
          <StatsSection />
        </LampContainer>
      </section>
      <section>
        <Testimonals />
      </section>
      <section className='realative md:h-[400px] w-full place-items-center grid md:grid-cols-3 grid-cols-1 gap-4 md:p-10 p-4'>
        <WorkFlowCard
          number={'01'}
          title={'Research & Strategy'}
          description={'We explore your brand’s values and market position, blending creativity and strategy to establish a cohesive, impactful presence across all touchpoints.'}
          onClick={() => { }}
          animationSpeed={3}
        />

        <WorkFlowCard
          number={'02'}
          title={'Design Process'}
          description={'Transforming strategy into creative designs, we craft visually appealing elements reflecting your brand’s identity while ensuring functionality and alignment with business goals.'}
          onClick={() => { }}
          animationSpeed={3}
        />

        <WorkFlowCard
          number={'03'}
          title={'Deliver & Payment'}
          description={'Approved designs are delivered with assets, ensuring smooth implementation and a seamless transition, guaranteeing satisfaction with the final product upon payment.'}
          onClick={() => { }}
          animationSpeed={3}
        />
      </section>
      <section className='relative max-md:pb-8 px-4 my-6'>
        <div className='flex justify-between md:items-center max-md:flex-col'>
          <div className='flex flex-col justify-center md:w-2/3'>
            <h2 className='font-bold font-antic text-dynamic-h2 text-white/80'>OUR SERVICES</h2>
          </div>
        </div>
        <ServiceReveal />
      </section>
      <section className='relative'>
        <HowItWorks />
      </section>
      <section>
        <ProjectSection />
      </section>
      <Footer />
      <Cursor />
    </main>
  );
};

export default App;

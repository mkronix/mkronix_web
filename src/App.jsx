import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import React, { useEffect, useState } from 'react';
import crown from './assets/icon/crown.svg';
import design from './assets/icon/design.svg';
import globe from './assets/icon/globe.svg';
import scaleGraph from './assets/icon/graph.svg';
import seo from './assets/icon/seo.svg';
import speaker from './assets/icon/speaker.svg';
import ellipse from './assets/icon/three-ellipse.svg';
import ZeroToHundredLoader from './components/BestLoader/ZeroToHunderedLoader';
import BoxesLayer from './components/BoxesLayer/BoxesLayer';
import Cursor from './components/Cursor/Cursor';
import Footer from './components/Footer/Footer';
import HowItWorks from './components/HowItWorks/HowItWorks';
import IconWithButton from './components/IconWithButton/IconWithButton';
import MarqueeText from './components/marquetext/MarqueeText';
import AnimatedSideMenu from './components/MenuMarquee/AnimatedSideMenu';
import ServiceReveal from './components/ServiceReveal/ServiceReveal';
import StatsSection from './components/StatsSection/StatsSection';
import WorkFlowCard from './components/WorkFlowCard/WorkFlowCard';
import { dummyImages } from './data/dummyImages';
import ButtonBestia from './components/ButtonBestia/ButtonBestia';
gsap.registerPlugin(ScrollTrigger);
const App = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 4000);

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

  const colors = ['color1', 'color2', 'color3'];

  return (
    <main className='bg-black relative font-antic'>
      <div className='fixed top-2 z-50 left-2 md:left-1/2 flex font-bold uppercase text-2xl'>
        <h2 className='text-white/80'>M</h2><h2 className='text-white'>K</h2><h2 className='text-white/70'>ronix</h2>
      </div>
      <AnimatedSideMenu />
      <section className="relative md:pt-20 pt-12 max-md:px-2 px-5 flex justify-center h-screen">
        <BoxesLayer />
        <div className={`max-md:px-3 flex max-md:gap-5 flex-col max-md:justify-start max-md:items-center md:col-span-8 relative`}>
          {/* <img src={scaleGraph} alt="" className="absolute top-0 left-0 h-[90%]" /> */}
          <h2 className="font-bold font-antic text-white/80 leading-[1.2] text-dynamic-h2">
            Success-Driven Design for Ambitious Leaders
          </h2>
          <p className="font-light font-sans flex text-white/70 leading-dynamic-p text-dynamic-p ">
            We design
            that transform visions into thriving businesses.
          </p>
        </div>
        <div className="flex justify-center overflow-hidden">
          <div className='md:block hidden'>
            <MarqueeText direction={'ttb'} className={'bg-transparent'} speed={10} imageData={dummyImages} key={'desktop-marquee'} />
          </div>
          <div className='md:hidden block'>
            <MarqueeText direction={'rtl'} className={'bg-transparent'} speed={0.5} isMobile={true} imageData={dummyImages} key={'mobile-marquee'} />
          </div>
        </div>
      </section>
      <section className='relative h-[50px] md:h-[100px] overflow-hidden'>
        <ButtonBestia>
          <MarqueeText textData={textMarqueData} className={'bg-white'} direction={'rtl'} speed={0.5} key={'mobile--text-marquee'} isMobile={true} />
        </ButtonBestia>
      </section>
      <section className='relative h-[275px] md:h-[200px] w-full flex flex-col px-4 my-6'>
        <StatsSection />
        <BoxesLayer />
      </section>
      <section className='realative md:h-[400px] w-full grid md:grid-cols-3 grid-cols-1 gap-4 md:p-10 p-4'>
        <WorkFlowCard number={'01'} description={'We conduct research to understand your brand’s values and market position. By blending creativity with strategy, we define a clear direction that ensures a cohesive and effective brand presence across all touchpoints.'} title={'Research & Strategy'} onClick={() => { }} />
        <WorkFlowCard number={'02'}
          title={'Design Process'}
          description={'In this phase, we bring the strategy to life through creative design. We focus on crafting visually appealing elements that reflect your brand’s identity, ensuring each design is functional and aligned with your business goals.'} onClick={() => { }} />
        <WorkFlowCard number={'03'} description={'Once the design is approved, we deliver all necessary assets and ensure smooth implementation across platforms. Payment is processed, and we guarantee a seamless transition, ensuring complete satisfaction with the final product.'} title={'Deliver & Payment'} onClick={() => { }} />
      </section>
      <section className='relative max-md:pb-8 px-4 my-6'>

        <BoxesLayer />
        <div className='flex justify-between md:items-center max-md:flex-col'>
          <div className='flex flex-col justify-center md:w-2/3'>
            <h2 className='font-bold font-antic text-dynamic-h2 text-white/80'>OUR SERVICES</h2>
          </div>
        </div>
        <ServiceReveal />
      </section>
      <section className='relative'>

        <BoxesLayer />
        <HowItWorks />
      </section>
      <Footer />
      <Cursor />
    </main>
  );
};

export default App;

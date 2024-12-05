import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useEffect, useState } from 'react';
import creative from './assets/icon/creative.svg';
import Cursor from './components/Cursor/Cursor';
import LabelCard from './components/LabelCard/LabelCard';
import MarqueeText from './components/marquetext/MarqueeText';
import ProjectCard from './components/ProjectCard/ProjectCard';
import ScrollRevealText from './components/ScrollRevealText/ScrollRevealText';
import StickyCard from './components/StickyCard/StickyCard';
import Lenis from 'lenis';
import { projectCards } from './data/project';
import AnimatedSideMenu from './components/MenuMarquee/AnimatedSideMenu';
import ZeroToHundredLoader from './components/BestLoader/ZeroToHunderedLoader';

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
    <>
      <AnimatedSideMenu />
      <div className='bg-black'>
        <section className="px-10 pt-12 pb-0">
          <h2 className="lg:text-[96px] md:text-[60px] sm:text-[48px] text-[36px] lg:leading-[100px]
          md:leading-[80px] sm:leading-[60px] leading-[40px] font-bold font-antic text-white md:mb-8 mb-4">
            Success-Driven Design for Ambitious Leaders
          </h2>
          <p className="lg:text-[42px] md:text-[32px] sm:text-[24px] text-[20px] font-light font-sans text-white lg:leading-[100px] md:leading-[80px] sm:leading-[60px] leading-[40px]">
            We design <span className="text-black px-2 rounded-md bg-white font-sans">brands</span>{" "}
            that transform visions into thriving businesses.
          </p>
          <div className="overflow-hidden w-full h-44 relative my-5">
            <MarqueeText />
          </div>
        </section>
        <StickyCard />
        <section className="md:px-10 flex justify-center pb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 px-8">
            <div className="max-w-[660px] wfull bg-card-bg p-6 rounded-lg shadow-lg flex flex-col justify-around">
              <h3 className="text-text-primary font-antic lg:text-4xl md:text-3xl text-2xl leading-[40px]">Blending Creativity with Functionality</h3>
              <img src={creative} className="w-24 h-24 self-center" alt="creative logo" />
              <ScrollRevealText className="text-text-primary font-sans font-light lg:text-lg text-sm">
                We are a passionate and dedicated designer and developer, specializing in creating
                unique and effective design solutions. With extensive experience in web, apps,
                and as well as UX/UI design, we have collaborated with companies of all types,
                both nationally and internationally, ensuring efficiency and flexibility in every project.
              </ScrollRevealText>

            </div>

            <div className="grid grid-cols-2 gap-3">
              <LabelCard title="+3" description="Years of Experience" />
              <LabelCard title="+20" description="Successful Projects" />
              <LabelCard title="+15" description="Happiest Customers" />
              <LabelCard title="100%" description="Quality" />
            </div>
          </div>
        </section>
        <section className="md:px-10 flex justify-center pb-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 px-8">
            {projectCards.map((card,) => (
              <ProjectCard buttonText={card.buttonText} title={card.title} description={card.description} image={card.image} key={card.id} />
            ))}
          </div>
        </section>
      </div>
      <Cursor />
    </>
  );
};

export default App;

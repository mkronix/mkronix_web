import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import Cursor from './components/Cursor/Cursor';
import { services } from './data/services';
import responsiveImage from './assets/img/responsive.png';
import simpleCode from './assets/img/simpleCode 2.jpg';
import creative from './assets/icon/creative.svg';
import { projectCards } from './data/project';
import LabelCard from './components/LabelCard/LabelCard';
import ServiceCard from './components/ServiceCard/ServiceCard';
import ProjectCard from './components/ProjectCard/ProjectCard';

gsap.registerPlugin(ScrollTrigger);
const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1, // Smoother scrolling with gradual motion
      smoothWheel: true,
      smoothTouch: true,
    });

    lenis.on('scroll', () => ScrollTrigger.update());

    const scrollFn = (time) => {
      lenis.raf(time);
      requestAnimationFrame(scrollFn);
    };
    requestAnimationFrame(scrollFn);

    const cards = document.querySelectorAll('.fadeOutAnimation');
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          scale: 0.5,
          y: 50, // Slightly increase the Y-axis offset for smoother entry
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.2, // Slower animation duration
          ease: 'power2.out', // Gradual easing
          scrollTrigger: {
            trigger: card,
            start: 'top 100%',
            end: 'top 10%',
            scrub: 1, // Smoother transition during scroll
            toggleActions: 'play none none reverse',
          },
          delay: index * 0.8, // Increased delay for stagger effect
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      lenis.destroy();
    };
  }, []);


  return (
    <>
      <div className='bg-black'>
        <section className="px-10 py-12 mt-10">
          <h2 className="lg:text-[96px] md:text-[60px] sm:text-[48px] text-[36px] lg:leading-[100px]
          md:leading-[80px] sm:leading-[60px] leading-[40px] font-bold font-antic text-white md:mb-8 mb-4">
            Success-Driven Design for Ambitious Leaders
          </h2>
          <p className="lg:text-[42px] md:text-[32px] sm:text-[24px] text-[20px] font-light font-sans text-white lg:leading-[100px] md:leading-[80px] sm:leading-[60px] leading-[40px]">
            We design <span className="text-black px-2 rounded-md bg-white font-sans">brands</span>{" "}
            that transform visions into thriving businesses.
          </p>
        </section>
        <section className="md:px-10 flex justify-center py-4">
          <div className="fadeOutAnimation grid grid-cols-2 max-sm:grid-cols-1 gap-3 px-8">
            {services.map((service) => (
              <ServiceCard key={service.id} title={service.title} description={service.description} img={service.image} />
            ))}
          </div>
        </section>
        <section className="md:px-10 flex justify-center py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 px-8">
            <div className="fadeOutAnimation max-w-[660px] wfull bg-card-bg p-6 rounded-lg shadow-lg flex flex-col justify-around">
              <h3 className="text-text-primary font-antic lg:text-4xl md:text-3xl text-2xl leading-[40px]">Blending Creativity with Functionality</h3>
              <img src={creative} className="w-24 h-24 self-center" alt="creative logo" />
              <p className=" text-text-primary font-sans font-light lg:text-lg text-sm">
                We are a passionate and dedicated designer and developer, specializing in creating unique and effective design solutions. With extensive experience in web, apps, and as well as UX/UI design, we have collaborated with companies of all types, both nationally and internationally, ensuring efficiency and flexibility in every project.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <LabelCard title="+5" description="Years of Experience" />
              <LabelCard title="+25" description="Successful Projects" />
              <LabelCard title="+30" description="Happiest Customers" />
              <LabelCard title="100%" description="Quality" />
            </div>

            <div className="fadeOutAnimation bg-card-bg px-6 pt-3 rounded-lg shadow-lg flex flex-col justify-between ">
              <h3 className="text-text-primary font-antic lg:text-4xl md:text-3xl text-2xl leading-[40px]">Responsive Web</h3>
              <img src={responsiveImage} alt="Responsive Web" className="w-[500px] h-[300px] mt-4 rounded-md object-cover" />
            </div>

            <div className="fadeOutAnimation bg-card-bg px-6 pt-3 rounded-lg shadow-lg flex flex-col justify-between">
              <h3 className="text-text-primary font-antic lg:text-4xl md:text-3xl text-2xl leading-[40px]">Quality Code</h3>
              <img src={simpleCode} alt="Simple and Efficient Code" className="w-[500px] h-[300px] rounded-md mt-4 object-cover" />
            </div>
          </div>
        </section>
        <section className="md:px-10 flex justify-center py-4">
          <div className="fadeOutAnimation grid grid-cols-1 md:grid-cols-3 gap-3 px-8">
            {projectCards.map((card,) => (
              <ProjectCard buttonText={card.buttonText} title={card.title} description={card.description} image={card.image} key={card.id} />
            ))}
          </div>
        </section>
        <div className='md:p-10 px-10'>
          <h4 className='md:w-2/3 w-full md:px-16 px-0 text-text-primary font-antic lg:text-4xl md:text-3xl text-2xl leading-[40px]'>Why exceptional design and user
            experience are crucial for your business in today’s competitive market:</h4>
        </div>
      </div>
      <Cursor />
    </>
  );
};

export default App;

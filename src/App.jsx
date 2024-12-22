import React from 'react';
import AboutUs from './components/AboutUs/AboutUs';
import AnimatedSideMenu from './components/AnimatedSideMenu/AnimatedSideMenu';
import ZeroToHundredLoader from './components/BestLoader/ZeroToHunderedLoader';
import Cursor from './components/Cursor/Cursor';
import Footer from './components/Footer/Footer';
import HeroSection from './components/HeroSection/HeroSection';
import HorizontalScrollSection from './components/HorizontalScrollSection/HorizontalScrollSection';
import HowItWorks from './components/HowItWorks/HowItWorks';
import MorphingText from './components/MorphingText/MorphingText';
import Services from './components/ServiceSection/ServiceSection';
import StatsSection from './components/StatsSection/StatsSection';
import Testimonals from './components/Testimonals/Testimonals';
import useLoading from './hooks/useLoading';
import useSmoothScroll from './hooks/useSmoothScroll';
const App = () => {
  const loading = useLoading(2000);
  useSmoothScroll(loading)

  if (loading) {
    return <ZeroToHundredLoader />;
  }

  return (
    <main className='bg-black relative font-antic'>
      <AnimatedSideMenu />
      <HeroSection />
      <StatsSection />
      <Testimonals />
      <AboutUs />
      <Services />
      <HowItWorks />
      <section className='h-screen flex'>
        <MorphingText texts={['Our Best Project']} className={'text-white text-4xl md:text-5xl'} />
      </section>
      <HorizontalScrollSection />
      <Footer />
      <Cursor />
    </main>
  );
};

export default App;

import React from 'react';
import AboutUs from './components/AboutUs/AboutUs';
import AnimatedSideMenu from './components/AnimatedSideMenu/AnimatedSideMenu';
import ZeroToHundredLoader from './components/BestLoader/ZeroToHunderedLoader';
import Cursor from './components/Cursor/Cursor';
import Footer from './components/Footer/Footer';
import HeroSection from './components/HeroSection/HeroSection';
import HorizontalScrollSection from './components/HorizontalScrollSection/HorizontalScrollSection';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Services from './components/ServiceSection/ServiceSection';
import StatsSection from './components/StatsSection/StatsSection';
import Testimonals from './components/Testimonals/Testimonals';
import TextRevealByWord from './components/TextRevealByWord/TextRevealByWord';
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
      <div className='fixed top-2 z-50 left-2 flex font-bold uppercase text-2xl'>
        <h2 className='text-white/80'>M</h2><h2 className='text-white'>K</h2><h2 className='text-white/70'>ronix</h2>
      </div>
      <AnimatedSideMenu />
      <HeroSection />
      <StatsSection />
      <Testimonals />
      <AboutUs />
      <Services />
      <HowItWorks />
      <TextRevealByWord text=" Our Best Project" />
      <HorizontalScrollSection />
      <Footer />
      <Cursor />
    </main>
  );
};

export default App;

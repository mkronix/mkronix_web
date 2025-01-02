import React from "react";
import AnimatedSideMenu from "./components/AnimatedSideMenu/AnimatedSideMenu";
import ZeroToHundredLoader from "./components/BestLoader/ZeroToHunderedLoader";
import useLoading from "./hooks/useLoading";
import useSmoothScroll from "./hooks/useSmoothScroll";
import AboutUs from './components/AboutUs/AboutUs'
import Cursor from './components/Cursor/Cursor'
import FloatingTestimonals from './components/FloatingTestimonals/FloatingTestimonals'
import Footer from './components/Footer/Footer'
import HeroSection from './components/HeroSection/HeroSection'
import HowItWorks from './components/HowItWorks/HowItWorks'
import Missions from './components/Mission/Mission'
import Services from './components/ServiceSection/ServiceSection'
import StatsSection from './components/StatsSection/StatsSection'
import Testimonals from './components/Testimonals/Testimonals'
import RainBowCursor from "./components/RainbowCursor/RainbowCursor";
const App = () => {
  const loading = useLoading(2000);
  useSmoothScroll(false);
  if (loading) {
    return <ZeroToHundredLoader />;
  }

  return (
    <>

      {/* Main Content */}
      <main className={`bg-black font-raleway-regular relative overflow-x-hidden `}>
        <RainBowCursor />
        <AnimatedSideMenu />
        <HeroSection />
        <Testimonals />
        <StatsSection />
        <AboutUs />
        <Services />
        <HowItWorks />
        <Missions />
        <Footer />
      </main>
    </>
  );
};

export default App;


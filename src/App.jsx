import React from "react";
import AboutUs from './components/AboutUs/AboutUs';
import AnimatedSideMenu from "./components/AnimatedSideMenu/AnimatedSideMenu";
import ZeroToHundredLoader from "./components/BestLoader/ZeroToHunderedLoader";
import CardStack from "./components/CardStack/CardStack";
import Footer from './components/Footer/Footer';
import HeroSection from './components/HeroSection/HeroSection';
import HowItWorks from './components/HowItWorks/HowItWorks';
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import RainBowCursor from "./components/RainbowCursor/RainbowCursor";
import StatsSection from './components/StatsSection/StatsSection';
import Testimonals from './components/Testimonals/Testimonals';
import useLoading from "./hooks/useLoading";
import useSmoothScroll from "./hooks/useSmoothScroll";
const App = () => {
  const loading = useLoading(2000);
  useSmoothScroll(false);
  if (loading) {
    return <ZeroToHundredLoader />;
  }

  return (
    <>

      {/* Main Content */}
      <main className={`bg-black font-raleway-regular relative overflow-x-hidden`}>
        <RainBowCursor />
        <AnimatedSideMenu />
        <HeroSection />
        <Testimonals />
        <StatsSection />
        <CardStack />
        <AboutUs />
        <HowItWorks />
        <ProjectsSection />
        <Footer />
      </main>
    </>
  );
};

export default App;


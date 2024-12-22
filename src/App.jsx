import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import CloudTransition from "./components/CloudTransition/CloudTransition";
import useSmoothScroll from "./hooks/useSmoothScroll";
import Projects from "./pages/Project";
import Home from "./pages/home";
import Service from "./pages/service";
import Contact from "./pages/contact";
import AnimatedSideMenu from "./components/AnimatedSideMenu/AnimatedSideMenu";
import Footer from "./components/Footer/Footer";
import Cursor from "./components/Cursor/Cursor";
import ZeroToHundredLoader from "./components/BestLoader/ZeroToHunderedLoader";
import useLoading from "./hooks/useLoading";

const App = () => {
  const loading = useLoading(2000);
  useSmoothScroll(false);
  const location = useLocation();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const animationTimeout = setTimeout(() => setIsAnimating(false), 2000);
    return () => clearTimeout(animationTimeout);
  }, [location]);

  // Conditional rendering logic for loading
  if (loading) {
    return <ZeroToHundredLoader />;
  }

  return (
    <>
      {/* Cloud Transition Layer */}
      {isAnimating && <CloudTransition isActive={isAnimating} />}

      {/* Main Content */}
      <main className={`bg-black font-antic relative min-h-screen ${isAnimating ? "pointer-events-none" : ""}`}>
        <AnimatedSideMenu />
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <Cursor />
      </main>
    </>
  );
};

export default App;


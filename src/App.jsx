import React from "react";
import { Route, Routes } from "react-router-dom";
import AnimatedSideMenu from "./components/AnimatedSideMenu/AnimatedSideMenu";
import ZeroToHundredLoader from "./components/BestLoader/ZeroToHunderedLoader";
import Cursor from "./components/Cursor/Cursor";
import Footer from "./components/Footer/Footer";
import useLoading from "./hooks/useLoading";
import useSmoothScroll from "./hooks/useSmoothScroll";
import Projects from "./pages/Project";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Service from "./pages/service";

const App = () => {
  const loading = useLoading(2000);
  useSmoothScroll(false);
  if (loading) {
    return <ZeroToHundredLoader />;
  }

  return (
    <>

      {/* Main Content */}
      <main className={`bg-black font-antic relative min-h-screen`}>
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


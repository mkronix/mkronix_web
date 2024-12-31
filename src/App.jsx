import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import AnimatedSideMenu from "./components/AnimatedSideMenu/AnimatedSideMenu";
import ZeroToHundredLoader from "./components/BestLoader/ZeroToHunderedLoader";
import useLoading from "./hooks/useLoading";
import useSmoothScroll from "./hooks/useSmoothScroll";
import Home from "./pages/Home";
const Contact = lazy(() => import("./pages/contact"));
const Service = lazy(() => import("./pages/service"));
const Projects = lazy(() => import("./pages/Project"));
const App = () => {
  const loading = useLoading(2000);
  useSmoothScroll(false);
  if (loading) {
    return <ZeroToHundredLoader />;
  }

  return (
    <>

      {/* Main Content */}
      <main className={`bg-black font-raleway-regular relative min-h-screen`}>
        <AnimatedSideMenu />
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </main>
    </>
  );
};

export default App;


import React from "react";
import AnimatedSideMenu from "./components/AnimatedSideMenu/AnimatedSideMenu";
import ZeroToHundredLoader from "./components/BestLoader/ZeroToHunderedLoader";
import useLoading from "./hooks/useLoading";
import useSmoothScroll from "./hooks/useSmoothScroll";
import Home from "./pages/Home.jsx";
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
        <Home />
      </main>
    </>
  );
};

export default App;


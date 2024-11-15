import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import doubleright from "../assets/double-right.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const bottomHeaderVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.5 },
    },
  };

  const menuVariants = {
    hidden: { opacity: 0, y: 200 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 1 + index * 0.2, duration: 0.3 },
    }),
    exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.1, duration: 0.3 },
    }),
    exit: { opacity: 0, y: 50, transition: { duration: 0.3 } },
  };

  const renderMenuButtons = (isMobile = false) =>
    ["ABOUT US", "SERVICES", "PROJECTS"].map((item, index) => (
      <motion.button
        key={item}
        className={`text-white ${isMobile ? "text-4xl" : "text-xl"} font-oswald font-extrabold hover:text-primary transition duration-300`}
        custom={index}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={isMobile ? mobileMenuVariants : menuVariants}
      >
        {item}
      </motion.button>
    ));

  return (
    <>
      {/* Desktop Header */}
      <motion.header
        className="fixed top-2 w-full z-50 bg-transparent flex justify-between px-10 py-2 max-md:hidden"
        initial="hidden"
        animate="visible"
        variants={headerVariants}
      >
        <h2 className="font-oswald text-4xl text-white font-bold flex" style={{ zIndex: "1000" }}>
          M<span className="font-extralight text-primary">Kronix</span>
        </h2>
        <button className="contactBtn bg-primary text-black text-xl flex items-center justify-center gap-2 font-oswald font-bold rounded-3xl px-10 py-1">
          CONTACT
          <img src={doubleright} alt="double right arrow" className="w-6 pt-[8px]" />
        </button>
      </motion.header>

      {/* Desktop Bottom Menu */}
      <div className="flex z-50 w-full justify-center fixed bottom-8 max-md:hidden">
        <motion.div
          className="z-50 flex gap-12 bg-gray-dark px-10 py-3 rounded-full border-l-4 border-r-4 border-primary"
          initial="hidden"
          animate="visible"
          variants={bottomHeaderVariants}
        >
          {renderMenuButtons()}
        </motion.div>
      </div>

      {/* Mobile Header */}
      <header className="relative top-2 z-50 w-full bg-transparent flex justify-between px-4 py-2 md:hidden">
        <h2 className="font-oswald text-3xl text-white font-bold flex">
          M<span className="font-extralight text-primary">Kronix</span>
        </h2>
        <button onClick={toggleMenu} className="relative z-50 p-2">
          <div className={`menu-icon ${isOpen ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="hidden max-md:block w-full h-screen absolute z-10 inset-0 bg-slate-900"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%", transition: { duration: 0.3 } }}
          >
            <div className="flex flex-col justify-center items-center h-full">
              <nav className="flex flex-col items-center gap-14">
                {renderMenuButtons(true)}
              </nav>
              <button className="absolute bottom-8 contactBtn bg-primary text-black text-xl flex items-center justify-center gap-2 font-oswald font-bold rounded-3xl px-10 py-1">
                CONTACT
                <img src={doubleright} alt="double right arrow" className="w-6 pt-[8px]" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

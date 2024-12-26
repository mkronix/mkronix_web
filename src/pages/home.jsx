import React, { useEffect } from 'react'
import AboutUs from '../components/AboutUs/AboutUs'
import HeroSection from '../components/HeroSection/HeroSection'
import HowItWorks from '../components/HowItWorks/HowItWorks'
import SEO from '../components/SEO/SEO'
import ProjectsSection from '../components/ProjectsSection/ProjectsSection'
import Services from '../components/ServiceSection/ServiceSection'
import StatsSection from '../components/StatsSection/StatsSection'
import Testimonals from '../components/Testimonals/Testimonals'
import { useLocation } from 'react-router-dom'
import Cursor from '../components/Cursor/Cursor'
import Footer from '../components/Footer/Footer'

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);
    return (
        <>
            <SEO
                title="MkRonix | Futuristic Digital Solutions - Home"
            />
            <HeroSection />
            <StatsSection />
            <Testimonals />
            <AboutUs />
            <Services />
            <HowItWorks />
            <ProjectsSection />
            <Footer />
            <Cursor />
        </>
    )
}

export default Home
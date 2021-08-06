import React, { useState } from 'react'
import AboutSection from '../components/AboutSection';
import { aboutObj } from '../components/AboutSection/Data';
import Contact from '../components/ContactSection';
import Footer from '../components/FooterSection';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import SideBar from "../components/SideBar";


const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
          <SideBar isOpen={isOpen} toggle={toggle} />
          <Navbar toggle={toggle} /> 
          <HeroSection />
          <AboutSection {...aboutObj} />
          <Projects />
          <Contact />
          <Footer />
        </>
    )
}

export default Home

import React from 'react';
import Topline from "./Topline";
import Topbar from "./Topbar";
import AboutHeroSection from "./about-hero-section";
import WhyAcme from "./why-acme";
import MeetOwners from "./meet-owners";
import Footer from "./Footer";
import Team from "./team";
import ContactHero from "./contact-hero";


const About = () => {
    return ( 
        <>
        <Topline/>
        <Topbar/>
        <AboutHeroSection/>
        <WhyAcme/>
        <MeetOwners/>
        <Team/>
        <ContactHero/>
        <Footer/>
        </>
     );
}
 
export default About;
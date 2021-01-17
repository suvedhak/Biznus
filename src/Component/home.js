import React from 'react';
import Topline from "./Topline";
import Topbar from "./Topbar";
import HeroSection from "./hero-section";
import SupportSection from "./support-section";
import SafeSection from "./safe-section";
import ProductSection from "./product-section";
import ShopLocalSection from "./shop-local-section";
import Footer from "./Footer";

const Home = () => {
    return (   <>
        <Topline/>
        <Topbar/>
        <HeroSection/>
        <SupportSection/>
        <SafeSection/>
        <ProductSection/>
        <ShopLocalSection/>
        <Footer/>
        </> );
}
 
export default Home;
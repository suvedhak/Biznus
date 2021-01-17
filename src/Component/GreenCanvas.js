import React from 'react';
import Topbar from './Topbar';
import Topline from './Topline';
import GreenPackTitle from './GreenPackTitle';
import GreenPackDetails from './GreenPackDetails';
import Footer from './Footer';



const GreenCanvas = () => {
    return ( 
        <>
        <Topbar/>
        <Topline/>
        <GreenPackTitle/>
        <GreenPackDetails/>
        <Footer/>
        </>
     );
}
 
export default GreenCanvas;
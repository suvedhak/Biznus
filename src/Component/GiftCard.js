import React from 'react';
import Topbar from './Topbar';
import Topline from './Topline';
import GiftTitle from './GiftTitle';
import PurchaseCards from './PurchaseCards';
import Footer from './Footer';

const GiftCard = () => {
    return ( 
        <>
        <Topbar/>
        <Topline/>
        <GiftTitle/>
        <PurchaseCards/>
        <Footer/>
        </>
     );
}
 
export default GiftCard;
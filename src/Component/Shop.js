import React from 'react';
import Topline from './Topline';
import Topbar from './Topbar';
import ShopPageTitle from './ShopPageTitle';
import TentSection  from './TentSection';
import ShopByCategory from './ShopByCategory';
import Footer from './Footer';




const Shop = () => {
    return (  
        <>
        <Topline/>
        <Topbar/>
        <ShopPageTitle/>
        <TentSection/>
        <ShopByCategory/>
        <Footer/>
        </>
    );
}
 
export default Shop;
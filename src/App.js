import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Home from './Component/home';
import About from './Component/about';
import Shop  from './Component/Shop';
import Donate  from './Component/Donate';
import Contact  from './Component/Contact';
import GiftCard  from './Component/GiftCard';
import Tin from './Component/Tin';
import HeroSection from './Component/hero-section';
import DonateLinks from './Component/DonateLinks';
import DonateLinks2 from './Component/DonateLinks2';
import DonateLinks3 from './Component/DonateLinks3';
import DonateLinks4 from './Component/DonateLinks4';
import DonateLinks5 from './Component/DonateLinks5';
import Announcement from './Component/Announcement';
import BlueCanvas from './Component/BlueCanvas';
import GreenCanvas from './Component/GreenCanvas';
// import TinTumbler from './Component/Tin';
// import BlueCanvas from './Component/BlueCanvas';
// import GreenCanvas from './Component/GreenCanvas';
// import YourCart from './Component/YourCart';
  

function App() {
  return (
    <>
    {/* <Home/> 
    <About/>
    <Shop/> 
    <Donate/>
    <DonateLinks/>
    <DonateLinks2/>
    <DonateLinks3/>
    <DonateLinks4/>
    <DonateLinks5/>
    <Contact/> 
    <GiftCard/>
    <TinTumbler/>
    <BlueCanvas/>
    <GreenCanvas/> 
    <YourCart/> */}

      <Router>
        <Switch>
            <Route exact path='/'                                  component={Home}/>
            <Route exact path='/about'                             component={About}/>
            <Route exact path='/Shop'                              component={Shop}/>
            <Route exact path='/Donate'                            component={Donate}/>
            <Route exact path='/Contact'                           component={Contact}/>
            <Route exact path='/shop/gift-card'                    component={GiftCard}/>
            <Route exact path='/shop/tin-coffee-tumbler'           component={Tin}/>
            <Route exact path='/shop/blue-canvas-pack'             component={BlueCanvas}/>
            <Route exact path='/shop/green-canvas-pack'            component={GreenCanvas}/>
            <Route exact path='/donate/donate-100'                 component={DonateLinks}/>
            <Route exact path='/donate/donate-50'                  component={DonateLinks2}/>
            <Route exact path='/donate/donate-25'                  component={DonateLinks3}/>
            <Route exact path='/donate/donate-15'                  component={DonateLinks4}/>
            <Route exact path='/donate/donate-5'                   component={DonateLinks5}/>
            <Route exact path='/how-were-responding-to-covid-19'   component={Announcement}/>
            <Route exact path='/Shop'                              component={HeroSection}/>
        </Switch>
      </Router>
    </>

  );
}

export default App;

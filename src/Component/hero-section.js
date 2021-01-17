import React from 'react';
import {Link} from 'react-router-dom';

const HeroSection = () => {
    return ( 
        <>
        <div className="hero-section">
            <div className="container">
                <div className="hero-wrapper">
                    <h1 className="hero-heading">
                        Serving you <br/> since 1989.
                    </h1>
                    <p className="hero-paragraph">
                        Acme Outdoors is an outdoor and adventure shop located in the Boathouse District in Oklahoma City.
                    </p>
                    <div className="hero-btn-wrapper">
                        <Link to="/Shop" className="hero-btn"> Shop Merch</Link>
                    </div>
                </div>
            </div>
        </div>

        </>
     );
}
 
export default HeroSection;
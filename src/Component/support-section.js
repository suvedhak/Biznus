import React from 'react';


const SupportSection = () => {
    return ( 
        <>
        <div className="support-section">
            <div className="container">
            <div className="support-top-wrapper">
                <div className="support-top-left">
                    <div className="support-top-details-text">Ways to support</div>
                    <h2 className="support-top-heading">Support Acme Outdoors.</h2>
                </div>
                <div className="support-top-right">
                    <p>COVID-19 has forced us to close our retail space, but we need support from patrons like yourself now more than ever. Below, we’ve listed the best ways to help us through this season.</p>
                </div>
            </div>
            <div className="support-wrapper">
                <div className="support-column">
                    <div className="support-square">
                        <div className="support-square-number">01</div>
                        <div className="support-square-text">SHOP<br/>PRODUCTS</div>
                        <img src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57a5836db2a07bab0e3_Circle.svg" alt="Circle Decoration in Shop Products Block" className="support-square-image"/>
                    </div>
                    <p>Our full product line is still available online here on our site! Getting outside and hiking is still something you can do. Get your gear now!</p>
                </div>
                <div className="support-column">
                    <div className="support-square">
                        <div className="support-square-number">02</div>
                        <div className="support-square-text">Donate</div>
                        <img src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57adc54453434efb9ee_Triangle.svg" alt="Triangle Decoration in Donate Block" className="support-square-image triangle"/>
                    </div>
                    <p>Since we've changed the way we operate to online only, and to ensure your safety, not all our staff is working. Donate to keep them afloat.</p>
                </div>
                <div className="support-column">
                    <div className="support-square">
                        <div className="support-square-number">03</div>
                        <div className="support-square-text">Buy <br/>GIFT CARDS</div>
                            <img src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57afea9a31a44d66db0_Rectangle.svg" alt="Rectangle Decoration in Buy Gift Cards Block" className="support-square-image rectangle"/>
                        </div>
                    <p>Have all the outdoor gear you need for now?&nbsp;Buy a gift card and use it later or share it with friends and family. </p>
                    </div>
                </div>
            </div>
        </div>

        </>
     );
}
 
export default SupportSection;
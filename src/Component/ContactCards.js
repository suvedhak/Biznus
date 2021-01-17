import React from 'react';



const ContactCards = () => {
    return ( 
         <>
    <div class="contact-hero-section">
        <div class="contact-hero-bg-wrapper">
            <div class="container contact">
                 <h1 class="heading">Contact Acme Outdoors</h1>
                <div class="contact-block-wrapper">
                    <div class="contact-block">
                            <img src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e84ba313e8232516a7da902_chat-alt.svg" alt="" class="contact-icon"/>
                                    <h2>Contact Us</h2>
                                        <p>Just want to say hi?&nbsp;We'd love to hear from you. We love our customers and community!&nbsp;</p>
                                        <a href="#contact" class="btn w-button">Send Us A Message</a>
                                </div>
                    <div class="contact-block">
                            <img src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e850414db1f6ebfba8bc42d_chat-warning.svg" alt="" class="contact-icon"/>
                                    <h2>Get Support</h2>
                                        <p>Have an issue with an order or with a product you purchased from us?&nbsp;Fill out our support form.</p>
                                        <a href="https://university.webflow.com/support"  class="btn w-button">Contact Support</a>
                                    </div>
                                </div>
                    </div>
                        <div class="contact-image-div">
                        </div>
                    </div>
                </div>
         </>
     );
}
 
export default ContactCards;
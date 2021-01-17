import React from 'react';



const ContactUsForm  = () => {
    return ( 
        <>
    <div id="contact" class="content-section">
        <div class="container">
            <div class="contact-wrapper">
                <div class="contact-left">
                    <h2>Contact Us</h2>
                    <div class="w-richtext">
                            <p>Acme Outdoors<br/>123 Rainy Street<br/>Oklahoma City, OK 73129</p>
                            <p>&zwj;<br/><strong>General Inquiries:</strong>&nbsp;(405) 555-5555<br/><strong>Customer Support:</strong>&nbsp;(405) 555-5556</p>
                    </div>
                </div>
                <div class="contact-right">
                    <h2>Contact Form</h2>
                    <p>Send us a message and we'll get back to you as soon as we can! </p>
                    <div class="w-form">
                        <form id="email-form" name="email-form" data-name="Email Form">
                            <label for="name">Name</label>
                            <input type="text" class="input w-input" maxlength="256" name="name" data-name="Name" placeholder="Enter your name" id="name"/>
                            <label for="email">Email Address</label>
                            <input type="email" class="input w-input" maxlength="256" name="email" data-name="Email" placeholder="Enter your email address" id="email" required=""/>
                            <label for="Message">Your Message</label>
                            <textarea placeholder="Enter your message" maxlength="5000" id="Message" name="Message" data-name="Message" class="input w-input"></textarea>
                            <input type="submit" value="Submit" data-wait="Please wait..." class="btn w-button"/>
                        </form>
                            <div class="success w-form-done">
                                <div>Thank you! Your submission has been received! We'll be in touch soon!</div>
                            </div>
                            <div class="error w-form-fail">
                                <div>Oops! Something went wrong while submitting the form.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         </>
     );
}
 
export default ContactUsForm ;
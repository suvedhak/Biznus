import React from 'react';
import Topbar from './Topbar';
import Topline from './Topline';
import ContactCards from './ContactCards';
import ContactUsForm  from './ContactUs form';
import Footer from './Footer';

const ContactUs = () => {
    return ( 
        <>
        <Topbar/>
        <Topline/>
        <ContactCards/>
        <ContactUsForm/>
        <Footer/>
        </>
     );
}
 
export default ContactUs;
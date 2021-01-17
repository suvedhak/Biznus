import React from 'react';
import Topbar from './Topbar';
import Topline from './Topline';
import AnnouncementTitle from './AnnouncementTitle';
import AnnouncementDetails from './AnnouncementDetails';
import Footer from './Footer';

const Announcement = () => {
    return ( 
        <>
        <Topline/>
        <Topbar/>
        <AnnouncementTitle/>
        <AnnouncementDetails/>
        <Footer/>
        </>
     );
}
 
export default Announcement;
import React from 'react';
import {Link} from 'react-router-dom';

const Topline = () => {
    return ( 

        <Link to="/how-were-responding-to-covid-19"  className="topline">
                <div className="anouncement-btn"> Announcement </div>
                <div className="annoucnement-txt">How we're responding to COVID-19</div>
        </Link>
        
     );
}
 
export default Topline;
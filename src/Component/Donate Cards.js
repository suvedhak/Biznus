import React from 'react';
import {Link} from 'react-router-dom';


const DonateCards = () => {
    return ( 
        <>
    <div className="content-section">
        <div className="container">
            <div className="donate-wrapper">
                <div className="donate-collection w-dyn-list">
                    <div role="list" className="w-dyn-items">

                                <div role="listitem" className="w-dyn-item">
                                    <Link  to="/donate/donate-100" className="donate-link-block w-inline-block text-block">Donate $100</Link>
                                    {/* <div className="text-block">Donate $100</div> */}
                                </div>
                                <div role="listitem" className="w-dyn-item">
                                    <Link  to="/donate/donate-50" className="donate-link-block w-inline-block text-block">Donate $50</Link>
                                </div>
                                <div role="listitem" className="w-dyn-item">
                                    <Link  to="/donate/donate-25" className="donate-link-block w-inline-block text-block">Donate $25</Link>
                                </div>
                                <div role="listitem" className="w-dyn-item">
                                    <Link  to="/donate/donate-15" className="donate-link-block w-inline-block text-block">Donate $15</Link>
                                </div>

                                <div role="listitem" className="w-dyn-item">
                                    <Link  to="/donate/donate-5" className="donate-link-block w-inline-block text-block">Donate $5</Link>
                                </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </>
     );
}
 
export default DonateCards;
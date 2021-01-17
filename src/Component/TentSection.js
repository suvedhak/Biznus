import React from 'react';

const TentSection = () => {
    return ( 
        <>
    <div className="content-section featured-section">
        <div className="container">
            <div className="w-dyn-list">
                <div role="list" className="w-dyn-items">
                    <div role="listitem" className="w-dyn-item">
                        <a href="/product/white-tent" className="Back-image">
                            <div className="pill-2 badge primary featured">Featured Item</div>
                            <div className="feature-text-wrapper">
                                <h3 className="featured-item-name">White Tent</h3>
                                <div className="featured-price">$&nbsp;200.00&nbsp;USD</div>
                            </div>
                            <div className="featured-gradient-overlay"></div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
     );
}
 
export default TentSection;
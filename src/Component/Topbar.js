import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';


const Topbar = ({count}) => {
    return ( 
        <nav>
            <div className="container-nav">
                <a className="logo" href="www.smartoreach.com">
                    <img src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57adad44d1f072965b6_logo.svg" alt="logo"/>
                </a>
                <div className="nav-items-wrapper" style={{transform: "translateX(0px) translateY(0px)"}}>
                    <Link to="/" className="nav-items">Home</Link>
                    <Link to="/about" className="nav-items">About</Link>
                    <Link to="/shop" className="nav-items">Shop</Link>
                    <Link to="/donate" className="nav-items">Donate</Link>
                    <Link to="/contact" className="nav-items">Contact</Link>
                    <div className="cart-wrapper">
                        <img src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e86146bb854797d12a30a13_cart.svg" alt="cart" width="20px"/>
                        <span>{count}</span> 
                    </div>
                </div>
            </div>    
        </nav>
     );
}
 
// export default Topbar;

const mapStateToProps=(store)=>({
    count:store?.cartProduct?.length,
    cartProduct:store?.cartProduct
})
export default connect(mapStateToProps)(Topbar);
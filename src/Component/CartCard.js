import React from 'react';




const CartCard = () => {
    return ( 
        <>
<div data-node-type="commerce-cart-container-wrapper" style={{opacity: "1", transition: "opacity 300ms ease 0s"}} className="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-rightSidebar">
    <div data-node-type="commerce-cart-container" className="w-commerce-commercecartcontainer" style={{transform: "translateX(0px)", transition: "transform 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s"}}>
        <div className="w-commerce-commercecartheader">
            <h4 className="w-commerce-commercecartheading">Your Cart</h4>
            <a href="/home" data-node-type="commerce-cart-close-link" className="w-commerce-commercecartcloselink w-inline-block">
                <svg width="16px" height="16px" viewBox="0 0 16 16">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g fill-rule="nonzero" fill="#333333">
                            <polygon points="6.23223305 8 0.616116524 13.6161165 2.38388348 15.3838835 8 9.76776695 13.6161165 15.3838835 15.3838835 13.6161165 9.76776695 8 15.3838835 2.38388348 13.6161165 0.616116524 8 6.23223305 2.38388348 0.616116524 0.616116524 2.38388348 6.23223305 8"></polygon>
                        </g>
                    </g>
                </svg>
            </a>
        </div>
        <div className="w-commerce-commercecartformwrapper">
            <form data-node-type="commerce-cart-form" className="w-commerce-commercecartform">
                <div className="w-commerce-commercecartlist" data-wf-collection="database.commerceOrder.userItems" data-wf-template-id="wf-template-d0872620-da83-2e6a-1190-a6df4dad026e">
                    <div className="w-commerce-commercecartitem cart-item">
                        <div className="cart-image-wrapper">
                            <img data-wf-bindings="%5B%7B%22src%22%3A%7B%22type%22%3A%22ImageRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems.0.sku.f_main_image_4dr%22%7D%7D%5D" src="https://uploads-ssl.webflow.com/5e853c3383474026e43f2c78/5e856e41c718420c18dd6751_patrick-hendry-eDgUyGu93Yw-unsplash.jpg" alt="" className="w-commerce-commercecartitemimage product-image-cart"/>
                        </div>
                        <div className="w-commerce-commercecartiteminfo">
                            <div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems.0.product.f_name_%22%7D%7D%5D" className="w-commerce-commercecartproductname">White Tent</div>
                            <div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems.0.sku.f_price_%22%7D%7D%5D">$&nbsp;200.00&nbsp;USD</div>
                            <ul data-wf-bindings="%5B%7B%22optionSets%22%3A%7B%22type%22%3A%22CommercePropTable%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems.0.product.f_sku_properties_3dr[]%22%7D%7D%2C%7B%22optionValues%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems.0.sku.f_sku_values_3dr%22%7D%7D%5D" className="w-commerce-commercecartoptionlist" data-wf-collection="database.commerceOrder.userItems.0.product.f_sku_properties_3dr" data-wf-template-id="wf-template-d0872620-da83-2e6a-1190-a6df4dad0274"></ul>
                            <a href="/" data-wf-bindings="%5B%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems.0.sku.id%22%7D%7D%5D" className="w-inline-block" data-wf-cart-action="remove-item" data-commerce-sku-id="5e856e69d83133dc75ed8681">
                                <div>Remove</div>
                            </a>
                        </div>
                        <input type="text" required="" pattern="^[0-9]+$" inputmode="numeric" data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems.0.count%22%7D%7D%2C%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems.0.sku.id%22%7D%7D%5D" className="w-commerce-commercecartquantity input cart-quantity" name="quantity" data-wf-cart-action="update-item-quantity" data-commerce-sku-id="5e856e69d83133dc75ed8681" value="1"/>
                    </div>
                </div>
                <div className="w-commerce-commercecartfooter">
                    <div className="w-commerce-commercecartlineitem">
                        <div>Subtotal</div>
                        <div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.subtotal%22%7D%7D%5D" className="w-commerce-commercecartordervalue">$&nbsp;200.00&nbsp;USD</div>
                    </div>
                    <div>
                        <div data-node-type="commerce-cart-quick-checkout-actions" style={{display:"none"}}>
                            <a href="/" data-node-type="commerce-cart-apple-pay-button" className="w-commerce-commercecartapplepaybutton">
                                <div></div>
                            </a>
                            <a href="/" data-node-type="commerce-cart-quick-checkout-button" style={{display: "none"}} className="w-commerce-commercecartquickcheckoutbutton">
                                <div>Pay with browser.</div>
                            </a>
                        </div>
                        <a href="/checkout" value="Continue to Checkout" data-node-type="cart-checkout-button" className="w-commerce-commercecartcheckoutbutton btn" data-loading-text="Hang Tight...">Continue to Checkout</a>
                    </div>
                </div>
            </form>
            <div className="w-commerce-commercecartemptystate" style={{display: "none"}}>
                <div>No items found.</div>
            </div>
            <div style={{display:"none"}} data-node-type="commerce-cart-error" className="w-commerce-commercecarterrorstate alert-wrapper danger">
                <div className="w-cart-error-msg" data-w-cart-quantity-error="Product is not available in this quantity." data-w-cart-checkout-error="Checkout is disabled on this site." data-w-cart-general-error="Something went wrong when adding this item to the cart." data-w-cart-cart_order_min-error="The order minimum was not met. Add more items to your cart to continue.">Product is not available in this quantity.</div>
            </div>
        </div>
    </div>
</div>

        </>
     );
}
 
export default CartCard;
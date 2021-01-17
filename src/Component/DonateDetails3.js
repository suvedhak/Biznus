import React from 'react';


const DonateDetails3 = () => {
    return ( 
        <>
                <div className="content-section">
                    <div className="container">
                        <div className="shopping-page-wrapper">
                            <div className="shopping-page-left">
                                <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr.url%22%2C%22to%22%3A%22style.background-image%22%7D%5D" style={{backgroundImage: "url('https://assets.website-files.com/5e853c3383474026e43f2c78/5e85763d28ae07cffd40f416_%2425%20Donation%20Image.png')"}} className="shopping-page-image">
                                </div>
                            </div>
                            <div className="shipping-page-right">
                                    <h2 className="page-product-headin">Donate $25</h2>
                                    <div className="page-price-wrapping">
                                        <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D" className="shop-item-price-page">$&nbsp;25.00&nbsp;USD</div>
                                    </div>
                                <div>
                                        <form data-node-type="commerce-add-to-cart-form" data-commerce-sku-id="5e861d45022dd3619ea90064" data-loading-text="Adding to cart..." data-commerce-product-id="5e861d4511e8ae22e0f08ccb" className="w-commerce-commerceaddtocartform">
                                                <label for="quantity-8342fe54ad998bceba4bd86dd02b8e79">Quantity</label>
                                            <div className="add-to-cart-page-wrapper">
                                                <input type="number" pattern="^[0-9]+$" inputmode="numeric" id="quantity-8342fe54ad998bceba4bd86dd02b8e79" name="commerce-add-to-cart-quantity-input" min="1" className="w-commerce-commerceaddtocartquantityinput input cart-quantity" value="1"/>
                                                <input type="submit" value="Add To Cart" data-node-type="commerce-add-to-cart-button" data-loading-text="Adding to cart..." className="w-commerce-commerceaddtocartbutton btn outline"/>
                                            </div>
                                        </form>
                                        <div style={{display:"none"}} className="w-commerce-commerceaddtocartoutofstock"><div>This product is out of stock.</div>
                                        </div>
                                    <div data-node-type="commerce-add-to-cart-error" style={{display:"none"}} className="w-commerce-commerceaddtocarterror">
                                        <div data-node-type="commerce-add-to-cart-error" data-w-add-to-cart-quantity-error="Product is not available in this quantity." data-w-add-to-cart-general-error="Something went wrong when adding this item to the cart." data-w-add-to-cart-mixed-cart-error="You can’t purchase another product with a subscription." data-w-add-to-cart-buy-now-error="Something went wrong when trying to purchase this item." data-w-add-to-cart-checkout-disabled-error="Checkout is disabled on this site." data-w-add-to-cart-select-all-options-error="Please select an option in each set.">Product is not available in this quantity.</div>
                                    </div>
                                </div>
                                <div>
                                <h3 className="page-product-headin">Tweet about #AcmeOutdoors products</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default DonateDetails3;
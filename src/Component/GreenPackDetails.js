import React from 'react';



const GreenPackDetails = () => {
    return ( 
        <>
         <div className="content-section">
                    <div className="container">
                        <div className="shopping-page-wrapper">
                            <div className="shopping-page-left">
                            <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr.url%22%2C%22to%22%3A%22style.background-image%22%7D%5D" style={{backgroundImage: "url('https://assets.website-files.com/5e853c3383474026e43f2c78/5e8542198347409e463f436b_jakob-owens-O_bhy3TnSYU-unsplash.jpg')"}} class="shopping-page-image">
                            <div data-wf-sku-conditions="%7B%22condition%22%3A%7B%22fields%22%3A%7B%22default-sku%3Acompare-at-price%22%3A%7B%22exists%22%3A%22yes%22%2C%22type%22%3A%22CommercePrice%22%7D%7D%7D%2C%22timezone%22%3A%22America%2FChicago%22%7D" class="pill-2 badge primary sale w-condition-invisible">Sale</div></div>                           
                         </div>

                            <div className="shipping-page-right">
                                    <h2 className="page-product-headin">Green Canvas Pack</h2>
                                    <div className="page-price-wrapping">
                                        <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D" className="shop-item-price-page">$&nbsp;125.00&nbsp;USD</div>
                                        <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_compare_at_price_7dr10dr%22%2C%22to%22%3A%22innerHTML%22%7D%5D" data-wf-sku-conditions="%7B%22condition%22%3A%7B%22fields%22%3A%7B%22default-sku%3Acompare-at-price%22%3A%7B%22exists%22%3A%22yes%22%2C%22type%22%3A%22CommercePrice%22%7D%7D%7D%2C%22timezone%22%3A%22America%2FChicago%22%7D" className="shop-item-price-page compare-at w-condition-invisible w-dyn-bind-empty"></div>
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
                            <div className="w-richtext">
                                    <h2>What’s a Rich Text element?</h2>
                                    <p>The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content.</p>
                                    <h4>Static and dynamic content editing</h4>
                                    <p>A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!</p>
                                    <h4>How to customize formatting for each rich text</h4>
                                    <p>Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a className is added to the rich text element using the "When inside of" nested selector system.</p>
                                    <p>&zwj;</p>
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
 
export default GreenPackDetails;
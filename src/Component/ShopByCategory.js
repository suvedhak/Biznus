import React from 'react';
import { Link } from 'react-router-dom';

const ShopByCategory = () => {
    return (
     <>
        <div className="content-section">
          <div className="container">
            <div className="shop-page-wrapper">
              <div className="shop-category-menu">
                <h2 className="category-menu-heading">Shop by Category</h2>
                <div className="w-dyn-list">
                  <div role="list" className="w-dyn-items">
                    <div role="listitem" className="category-menu-item w-dyn-item">
                        <a href="/category/gift-cards" className="catgeory-btn">Gift Cards</a>
                      </div>
                        <div role="listitem" className="category-menu-item w-dyn-item">
                            <a href="/category/tents" className="catgeory-btn">Tents</a>
                        </div>
                        <div role="listitem" className="category-menu-item w-dyn-item">
                            <a href="/category/accessories" className="catgeory-btn">Accessories</a>
                          </div>
                          <div role="listitem" className="category-menu-item w-dyn-item">
                              <a href="/category/packs" className="catgeory-btn">Packs</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="shop-list">
                        <div className="products-list-wrapper w-dyn-list">
                          <div role="list" className="products-list w-dyn-items">
                            <div role="listitem" className="w-dyn-item">
                              <div className="shop-item-wrapper">
                                  <Link to="/shop/gift-card" className="shop-item-link-wrapper w-inline-block">
                                    <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr.url%22%2C%22to%22%3A%22style.background-image%22%7D%5D" style={{backgroundImage: "url('https://assets.website-files.com/5e853c3383474026e43f2c78/5e861d123df4d175e80e8beb_acme-gift-card.jpg')"}} className="shop-image tumbler-1 narrow-list">
                                      <div data-wf-sku-conditions="%7B%22condition%22%3A%7B%22fields%22%3A%7B%22default-sku%3Acompare-at-price%22%3A%7B%22exists%22%3A%22yes%22%2C%22type%22%3A%22CommercePrice%22%7D%7D%7D%2C%22timezone%22%3A%22America%2FChicago%22%7D" className="pill-2 badge primary sale w-condition-invisible">Sale</div>
                                    </div>
                                    <div className="shop-details-wrapper">
                                      <div className="shop-details-left">
                                        <div className="shop-item-name">Gift Card</div>
                                        <div className="price-wrapper">
                                          <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D" className="shop-item-price">$&nbsp;25.00&nbsp;USD</div>
                                          <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_compare_at_price_7dr10dr%22%2C%22to%22%3A%22innerHTML%22%7D%5D" data-wf-sku-conditions="%7B%22condition%22%3A%7B%22fields%22%3A%7B%22default-sku%3Acompare-at-price%22%3A%7B%22exists%22%3A%22yes%22%2C%22type%22%3A%22CommercePrice%22%7D%7D%7D%2C%22timezone%22%3A%22America%2FChicago%22%7D" className="shop-item-price compare w-condition-invisible w-dyn-bind-empty"></div>
                                        </div>
                                      </div>
                                    </div>
                                  </Link>
                                  <div className="shop-button-wrapper">
                                    <Link to="/shop/gift-card" className="details-btn">Details</Link>
                                  </div>
                                </div>
                              </div>
                              <div role="listitem" className="w-dyn-item">
                                <div className="shop-item-wrapper">
                                    <Link to="/shop/tin-coffee-tumbler" className="shop-item-link-wrapper w-inline-block">
                                      <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr.url%22%2C%22to%22%3A%22style.background-image%22%7D%5D" style={{backgroundImage: "url('https://assets.website-files.com/5e853c3383474026e43f2c78/5e8542c1248e59128e08e3e9_ryan-holloway-JyDmUaXMib4-unsplash.jpg')"}} className="shop-image tumbler-1 narrow-list">
                                        <div data-wf-sku-conditions="%7B%22condition%22%3A%7B%22fields%22%3A%7B%22default-sku%3Acompare-at-price%22%3A%7B%22exists%22%3A%22yes%22%2C%22type%22%3A%22CommercePrice%22%7D%7D%7D%2C%22timezone%22%3A%22America%2FChicago%22%7D" className="pill-2 badge primary sale w-condition-invisible">Sale</div>
                                      </div>
                                      <div className="shop-details-wrapper">
                                        <div className="shop-details-left">
                                          <div className="shop-item-name">Tin Coffee Tumbler</div>
                                          <div className="price-wrapper">
                                            <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D" className="shop-item-price">$&nbsp;35.00&nbsp;USD</div>
                                            <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_compare_at_price_7dr10dr%22%2C%22to%22%3A%22innerHTML%22%7D%5D" data-wf-sku-conditions="%7B%22condition%22%3A%7B%22fields%22%3A%7B%22default-sku%3Acompare-at-price%22%3A%7B%22exists%22%3A%22yes%22%2C%22type%22%3A%22CommercePrice%22%7D%7D%7D%2C%22timezone%22%3A%22America%2FChicago%22%7D" className="shop-item-price compare w-condition-invisible w-dyn-bind-empty"></div>
                                          </div>
                                        </div>
                                      </div>
                                    </Link>
                                    <div className="shop-button-wrapper">
                                        <Link to="/shop/tin-coffee-tumbler" className="details-btn">Details</Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div role="listitem" className="w-dyn-item">
                                    <div className="shop-item-wrapper">
                                        <Link to="/shop/blue-canvas-pack" className="shop-item-link-wrapper w-inline-block">
                                          <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr.url%22%2C%22to%22%3A%22style.background-image%22%7D%5D" style={{backgroundImage: "url('https://assets.website-files.com/5e853c3383474026e43f2c78/5e85425605cae11f20d46181_denisse-leon-J7CjWufjmg4-unsplash.jpg')"}} className="shop-image tumbler-1 narrow-list">
                                            <div data-wf-sku-conditions="%7B%22condition%22%3A%7B%22fields%22%3A%7B%22default-sku%3Acompare-at-price%22%3A%7B%22exists%22%3A%22yes%22%2C%22type%22%3A%22CommercePrice%22%7D%7D%7D%2C%22timezone%22%3A%22America%2FChicago%22%7D" className="sale-btn">Sale</div>
                                          </div>
                                          <div className="shop-details-wrapper">
                                            <div className="shop-details-left">
                                              <div className="shop-item-name">Blue Canvas Pack</div>
                                              <div className="price-wrapper">
                                                <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D" className="shop-item-price">$&nbsp;95.00&nbsp;USD</div>
                                                <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_compare_at_price_7dr10dr%22%2C%22to%22%3A%22innerHTML%22%7D%5D" data-wf-sku-conditions="%7B%22condition%22%3A%7B%22fields%22%3A%7B%22default-sku%3Acompare-at-price%22%3A%7B%22exists%22%3A%22yes%22%2C%22type%22%3A%22CommercePrice%22%7D%7D%7D%2C%22timezone%22%3A%22America%2FChicago%22%7D" className="shop-item-price compare">$&nbsp;145.00&nbsp;USD</div>
                                              </div>
                                            </div>
                                          </div>
                                        </Link>
                                        <div className="shop-button-wrapper">
                                            <Link to="/shop/blue-canvas-pack" className="details-btn">Details</Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div role="listitem" className="w-dyn-item">
                                        <div className="shop-item-wrapper">
                                            <Link to="/shop/green-canvas-pack" className="shop-item-link-wrapper w-inline-block">
                                              <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr.url%22%2C%22to%22%3A%22style.background-image%22%7D%5D" style={{backgroundImage: "url('https://assets.website-files.com/5e853c3383474026e43f2c78/5e8542198347409e463f436b_jakob-owens-O_bhy3TnSYU-unsplash.jpg')"}} className="shop-image tumbler-1 narrow-list">
                                                <div data-wf-sku-conditions="%7B%22condition%22%3A%7B%22fields%22%3A%7B%22default-sku%3Acompare-at-price%22%3A%7B%22exists%22%3A%22yes%22%2C%22type%22%3A%22CommercePrice%22%7D%7D%7D%2C%22timezone%22%3A%22America%2FChicago%22%7D" className="pill-2 badge primary sale w-condition-invisible">Sale</div>
                                              </div>
                                              <div className="shop-details-wrapper">
                                                <div className="shop-details-left">
                                                  <div className="shop-item-name">Green Canvas Pack</div>
                                                  <div className="price-wrapper">
                                                    <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D" className="shop-item-price">$&nbsp;125.00&nbsp;USD</div>
                                                    <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_compare_at_price_7dr10dr%22%2C%22to%22%3A%22innerHTML%22%7D%5D" data-wf-sku-conditions="%7B%22condition%22%3A%7B%22fields%22%3A%7B%22default-sku%3Acompare-at-price%22%3A%7B%22exists%22%3A%22yes%22%2C%22type%22%3A%22CommercePrice%22%7D%7D%7D%2C%22timezone%22%3A%22America%2FChicago%22%7D" className="shop-item-price compare w-condition-invisible w-dyn-bind-empty"></div>
                                                  </div>
                                                </div>
                                              </div>
                                            </Link>
                                            <div className="shop-button-wrapper">
                                                <Link to="/shop/green-canvas-pack" className="details-btn">Details</Link>
                                            </div>
                                            </div>
                                          </div>
                                      </div>
                                    </div>
                                  </div>
                              </div>
                          </div>
                    </div>
      </>
      );
  }
 export default ShopByCategory;
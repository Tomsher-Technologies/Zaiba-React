import React, { FC } from 'react';

const OrderReview: FC = () => {
    
    return (
        <div className="col-md-4">
            <h5>Order Review</h5>
            <div className="zb-checkout-summary">
                <div className="zb-order-review-warpper">
                    <div className="zb-order-review-list">
                        <div className="zb-order-review-img">
                            <img src="/images/image 13.png" className="img-fluid" alt="" />
                        </div>
                        <div className="zb-order-review-info">
                            <h3>Dome Majesty Malachite Diamond Ring</h3>
                            <ul>
                                <li>Size: 19</li>
                                <li>Price Breakup:1172</li>
                            </ul>
                            <div className="zb-order-review-price">
                                <h4>AED180,00</h4>
                            </div>
                        </div>
                    </div>
                    <div className="zb-order-review-list">
                        <div className="zb-order-review-img">
                            <img src="/images/image 13.png" className="img-fluid" alt="" />
                        </div>
                        <div className="zb-order-review-info">
                            <h3>Dome Majesty Malachite Diamond Ring</h3>
                            <ul>
                                <li>Size: 19</li>
                                <li>Price Breakup:1172</li>
                            </ul>
                            <div className="zb-order-review-price">
                                <h4>AED180,00</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="zb-order-review-subtotal">
                    <div className="zb-cart-summary-content">
                        <div className="zb-product-amount-list">
                            <ul>
                                <li>
                                    <span>Subtotal(2 item)</span>
                                    <span>AED 540.00</span>
                                </li>
                                <li>
                                    <span>Discount</span>
                                    <span>AED 00.00</span>
                                </li>
                                <li>
                                    <span>Shipping</span>
                                    <span>AED 10.00</span>
                                </li>
                            </ul>
                        </div>
                        <hr />
                        <div className="zb-product-cart-total">
                            <h4>
                                Total <small>(Inclusive of VAT)</small>
                            </h4>
                            <h4>AED 550.00</h4>
                        </div>
                        <a href="#" className="btn btn-login w-100">
                            {" "}
                            Place Order
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default OrderReview;
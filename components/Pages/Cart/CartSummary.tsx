import React, { FC } from 'react';

const CartSummary: FC = () => {
    return (
        <div className="col-md-4">
            <div className="zb-cart-summary">
                <div className="zb-cart-list-title">
                    <h5>Cart Summary</h5>
                </div>
                <div className="zb-cart-summary-content">
                    <div className="zb-product-cart-coupon ">
                        <form>
                            <div className="mb-0">
                                <label htmlFor="exampleInputEmail1" className="form-label">
                                    Coupon Code
                                </label>
                                <a href="#" className="offers-label float-end">
                                    Available Offers
                                </a>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    placeholder="Enter Coupon Code"
                                />
                            </div>
                            <button type="submit" className="btn btn-link">
                                Apply
                            </button>
                        </form>
                    </div>
                    <div className="zb-product-amount-list">
                        <ul>
                            <li>
                                <span>Subtotal(3 item)</span>
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
                    <a href="/checkout" className="btn btn-login w-100">
                        {" "}
                        Proceed to Checkout
                    </a>
                </div>
            </div>
        </div>

    )
}

export default CartSummary;
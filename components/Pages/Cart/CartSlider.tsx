import React, { FC, useEffect, useState } from 'react'
import Box from '@mui/material/Box';

import { CartProps } from '@/types/CartProps';

const Cart: FC<CartProps> = ({ toggleDrawer }) => {
    const [screenWidth, setScreenWidth] = useState<number>(1024)

    useEffect(() => {
        if (typeof window === "object") {
            setScreenWidth(window.innerWidth);
        }
    }, []);

    return (
        <Box
            sx={{ width: screenWidth > 1024 ? 390 : (screenWidth > 480 ? 380 : '100%') }}
            role="presentation"
        >
            <div
                className="p-3 offcanvas-end zb-slide-cart"
                tabIndex={-1}
                id="offcanvasRight"
                aria-labelledby="offcanvasRightLabel"
            >
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasRightLabel">
                        Shopping Cart
                    </h5>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                        onClick={toggleDrawer(false)}
                        onKeyDown={toggleDrawer(false)}
                    />
                </div>
                <div className="offcanvas-body">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="zb-checkout-summary">
                                <div className="zb-order-review-warpper">
                                    <div className="zb-order-review-list">
                                        <div className="zb-order-review-img">
                                            <img
                                                src="/images/image 13.png"
                                                className="img-fluid"
                                                alt=""
                                            />
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
                                            <img
                                                src="/images/image 13.png"
                                                className="img-fluid"
                                                alt=""
                                            />
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
                                    <div className="zb-cart-summary-content px-0">
                                        <div className="zb-product-amount-list">
                                            <ul>
                                                <li>
                                                    <span>Subtotal(2 item)</span>
                                                    <span>AED 540.00</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <a href="/cart" className="btn btn-login w-100">
                                            {" "}
                                            View Cart
                                        </a>
                                        <a href="/checkout" className="btn btn-checkout w-100 mt-3">
                                            {" "}
                                            Checkout
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Box>

    )
}

export default Cart
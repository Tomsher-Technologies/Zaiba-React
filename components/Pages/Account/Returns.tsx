import React, { FC } from 'react';

import { ReturnsProps } from '@/types/AccountProps';

const Returns: FC<ReturnsProps> = ({ user }) => {
    return (
        <div
            className="tab-pane fade show active"
            id="v-pills-returns"
            role="tabpanel"
            aria-labelledby="v-pills-returns-tab"
            tabIndex={0}
        >
            <h3 className="mb-2">Returns</h3>
            <div className="zb-profile-order-warpper">
                <div className="zb-profile-order-items">
                    <div className="zb-profile-order-items-top">
                        <ul>
                            <li>
                                <small>Order Number</small>
                                <span>2710816747</span>
                            </li>
                            <li>
                                <small>Order Placed</small>
                                <span>Jul 10, 2023</span>
                            </li>
                            <li>
                                <small>Total</small>
                                <span>AED 260</span>
                            </li>
                        </ul>
                        <div className="zb-profile-order-items-top-end">
                            <a href="#" className="me-5">
                                View Invoice
                            </a>
                            <a href="#">Get Help</a>
                        </div>
                    </div>
                    <div className="zb-profile-order-items-bottom">
                        <div className="zb-profile-order-items-info">
                            <div className="zb-profile-order-items-list">
                                <div className="zb-profile-order-items-list-img">
                                    <img
                                        src="/images/image 13.png"
                                        className="img-fluid"
                                        alt=""
                                    />
                                </div>
                                <div className="zb-profile-order-items-list-info">
                                    <h3>Dome Majesty Malachite Diamond Ring</h3>
                                    <ul>
                                        <li>Size: 19</li>
                                        <li>Price Breakup:1172</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="zb-profile-order-items-status">
                                <span>Order Status:</span>
                                <h5>Delivered</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="zb-profile-order-items">
                    <div className="zb-profile-order-items-top">
                        <ul>
                            <li>
                                <small>Order Number</small>
                                <span>2710816747</span>
                            </li>
                            <li>
                                <small>Order Placed</small>
                                <span>Jul 10, 2023</span>
                            </li>
                            <li>
                                <small>Total</small>
                                <span>AED 260</span>
                            </li>
                        </ul>
                        <div className="zb-profile-order-items-top-end">
                            <a href="#" className="me-5">
                                View Invoice
                            </a>
                            <a href="#">Get Help</a>
                        </div>
                    </div>
                    <div className="zb-profile-order-items-bottom">
                        <div className="zb-profile-order-items-info">
                            <div className="zb-profile-order-items-list">
                                <div className="zb-profile-order-items-list-img">
                                    <img
                                        src="/images/image 13.png"
                                        className="img-fluid"
                                        alt=""
                                    />
                                </div>
                                <div className="zb-profile-order-items-list-info">
                                    <h3>Dome Majesty Malachite Diamond Ring</h3>
                                    <ul>
                                        <li>Size: 19</li>
                                        <li>Price Breakup:1172</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="zb-profile-order-items-status">
                                <span>Order Status:</span>
                                <h5>Delivered</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="zb-profile-order-items">
                    <div className="zb-profile-order-items-top">
                        <ul>
                            <li>
                                <small>Order Number</small>
                                <span>2710816747</span>
                            </li>
                            <li>
                                <small>Order Placed</small>
                                <span>Jul 10, 2023</span>
                            </li>
                            <li>
                                <small>Total</small>
                                <span>AED 260</span>
                            </li>
                        </ul>
                        <div className="zb-profile-order-items-top-end">
                            <a href="#" className="me-5">
                                View Invoice
                            </a>
                            <a href="#">Get Help</a>
                        </div>
                    </div>
                    <div className="zb-profile-order-items-bottom">
                        <div className="zb-profile-order-items-info">
                            <div className="zb-profile-order-items-list">
                                <div className="zb-profile-order-items-list-img">
                                    <img
                                        src="/images/image 13.png"
                                        className="img-fluid"
                                        alt=""
                                    />
                                </div>
                                <div className="zb-profile-order-items-list-info">
                                    <h3>Dome Majesty Malachite Diamond Ring</h3>
                                    <ul>
                                        <li>Size: 19</li>
                                        <li>Price Breakup:1172</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="zb-profile-order-items-status">
                                <span>Order Status:</span>
                                <h5>Delivered</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Returns
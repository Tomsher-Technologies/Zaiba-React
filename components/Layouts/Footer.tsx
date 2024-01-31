import Link from 'next/link'
import React, { FC } from 'react'

const Footer: FC = () => {
    return (
        <footer className="footer">
            <div className="social-inner">
                <div className="container-fluid px-7">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-md-3">
                            <h3 className="sub-title">Social</h3>
                            <p>Stay current with updates from our social channels.</p>
                        </div>
                        <div className="col-md-7">
                            <div className="social-liks">
                                <ul>
                                    <li>
                                        <a href="#">
                                            <img src="/images/facebook.svg" alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="/images/instagram.svg" alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="/images/tiktok.svg" alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="/images/twitter.svg" alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="/images/youtube.svg" alt="" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-inner">
                <div className="footer-start">
                    <div className="container-fluid px-7">
                        <div className="row">
                            <div className="col-6 col-md-3">
                                <div className="footer-links">
                                    <h4>THE SHOP</h4>
                                    <ul>
                                        <li>
                                            <a href="#">Rings</a>
                                        </li>
                                        <li>
                                            <a href="#">Pendants</a>
                                        </li>
                                        <li>
                                            <a href="#">Bracelets</a>
                                        </li>
                                        <li>
                                            <a href="#">Earrings</a>
                                        </li>
                                        <li>
                                            <a href="#">Watches</a>
                                        </li>
                                        <li>
                                            <a href="#">Bangles</a>
                                        </li>
                                        <li>
                                            <a href="#">Necklaces</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-6 col-md-3">
                                <div className="footer-links">
                                    <h4>MY ACCOUNT</h4>
                                    <ul>
                                        <li>
                                            <a href="#">My account</a>
                                        </li>
                                        <li>
                                            <a href="#">Wishlist</a>
                                        </li>
                                        <li>
                                            <a href="#">Cart</a>
                                        </li>
                                        <li>
                                            <a href="#">Checkout</a>
                                        </li>
                                        <li>
                                            <a href="#">Register Now</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-6 col-md-3">
                                <div className="footer-links">
                                    <h4>INFORMATION</h4>
                                    <ul>
                                        <li>
                                            <Link href="/about">About Us</Link>
                                        </li>
                                        <li>
                                            <Link href="/blogs">Our Blog</Link>
                                        </li>
                                        <li>
                                            <Link href="/faq">FAQ</Link>
                                        </li>
                                        <li>
                                            <Link href="/contact-us">Contacts</Link>
                                        </li>
                                        <li>
                                            <Link href="/terms-conditions">Terms &amp; Conditions</Link>
                                        </li>
                                        <li>
                                            <Link href="/refund-returns-policy">Refund and Returns Policy</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-6 col-md-3">
                                <div className="footer-links">
                                    <h4>OUR CONTACTS</h4>
                                    <ul>
                                        <li>
                                            <a href="#">
                                                {" "}
                                                <i className="bi bi-geo-alt me-2" />
                                                Deira &amp; Al Qouz , Dubai, United Arab Emirates
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                {" "}
                                                <i className="bi bi-telephone me-2" /> +971 4 226 4212
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="bi bi-envelope me-2" /> info@zaiba-jew.com
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="bi bi-clock me-2" /> Mon - Fri: 10:00 - 18:00
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-end">
                    <div className="container-fluid px-7">
                        <div className="row justify-content-between">
                            <div className="col-md-4">
                                <p>Terms &amp; Conditions | Privacy Policy | Cookie Policy</p>
                            </div>
                            <div className="col-md-4 text-center">
                                <p>Copyright © 2023 Zaiba Jewels. All rights reserved.</p>
                            </div>
                            <div className="col-md-4 text-end">
                                <img
                                    src="/images/payment-option.svg"
                                    className="img-fluid"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer
import React, { FC } from 'react';
import Link from 'next/link';

import withMainLayout from '@/hocs/withMainLayout';

const ContactUs: FC = () => {
    return (
        <>
            <section className="zb-inner-strip">
                <div className="container-fluid px-7">
                    <div className="row">
                        <h4>Contact Us</h4>
                        <ul>
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <a href="product-listing.html">Jewellery</a>
                            </li>
                            <li>
                                <a href="product-listing.html">Rings</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="contact-us-page">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <h5 className="mb-4">Write Us</h5>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Name"
                                        aria-label="First name"
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Email"
                                        aria-label="Last name"
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Phone"
                                        aria-label="Last name"
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Subject"
                                        aria-label="Last name"
                                    />
                                </div>
                                <div className="col-md-12 mb-3">
                                    <textarea
                                        className="form-control"
                                        placeholder="Message"
                                        id="exampleFormControlTextarea1"
                                        rows={3}
                                        defaultValue={""}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h5 className="mb-4">Contact Details</h5>
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
            </section>
        </>

    )
}

export default withMainLayout(ContactUs);
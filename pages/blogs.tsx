import React, { FC } from 'react';

import withMainLayout from '@/hocs/withMainLayout';

const Blogs: FC = () => {
    return (
        <>
            <section className="zb-inner-strip">
                <div className="container-fluid px-7">
                    <div className="row">
                        <div className="col-md-6">
                            <h4>Blogs</h4>
                        </div>
                        <div className="col-md-6">
                            <ul>
                                <li>
                                    <a href="index.html">Home</a>
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
                </div>
            </section>
            <section className="blog-page">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <img
                                    src="/images/inspired-img1.png"
                                    className="card-img-top"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Modular Fine Jewelry</h5>
                                    <p className="card-text">
                                        Some quick example text to build on the card title and make up
                                        the bulk of the card&apos;s content.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <img
                                    src="/images/inspired-img2.png"
                                    className="card-img-top"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Modular Fine Jewelry</h5>
                                    <p className="card-text">
                                        Some quick example text to build on the card title and make up
                                        the bulk of the card&apos;s content.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <img
                                    src="/images/inspired-img3.png"
                                    className="card-img-top"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Modular Fine Jewelry</h5>
                                    <p className="card-text">
                                        Some quick example text to build on the card title and make up
                                        the bulk of the card&apos;s content.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <img
                                    src="/images/inspired-img3.png"
                                    className="card-img-top"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Modular Fine Jewelry</h5>
                                    <p className="card-text">
                                        Some quick example text to build on the card title and make up
                                        the bulk of the card&apos;s content.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <img
                                    src="/images/inspired-img1.png"
                                    className="card-img-top"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Modular Fine Jewelry</h5>
                                    <p className="card-text">
                                        Some quick example text to build on the card title and make up
                                        the bulk of the card&apos;s content.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <img
                                    src="/images/inspired-img2.png"
                                    className="card-img-top"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Modular Fine Jewelry</h5>
                                    <p className="card-text">
                                        Some quick example text to build on the card title and make up
                                        the bulk of the card&apos;s content.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default withMainLayout(Blogs);
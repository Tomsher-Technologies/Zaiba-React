import React, { FC, Fragment } from 'react';
import dynamic from 'next/dynamic';

import withMainLayout from '@/hocs/withMainLayout';
const InnerStrip = dynamic(() => import('@/components/Pages/Products/InnerStrip'));

const Wishlist: FC = () => {
    return (
        <Fragment>
            <InnerStrip
                title={"Wishlist"}
            />
            <section className="Wishlist-list-area">
                <div className="container">
                    <div className="row g-3">
                        <div className="col-md-3">
                            <div className="product-card">
                                <img
                                    src="/images/collection_img1.png"
                                    className="img-fluid"
                                    alt=""
                                />
                                <a className="product-title" href="#">
                                    ANGEL HOOPS GOLDEN EARRINGS
                                </a>
                                <h4 className="product-price">AED 1259.00 AED 819.00</h4>
                                <a href="#" className="btn btn-add-cart w-100 mt-3">
                                    Add to Cart
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="product-card">
                                <img
                                    src="/images/collection_img1.png"
                                    className="img-fluid"
                                    alt=""
                                />
                                <a className="product-title" href="#">
                                    ANGEL HOOPS GOLDEN EARRINGS
                                </a>
                                <h4 className="product-price">AED 1259.00 AED 819.00</h4>
                                <a href="#" className="btn btn-add-cart w-100 mt-3">
                                    Add to Cart
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="product-card">
                                <img
                                    src="/images/collection_img1.png"
                                    className="img-fluid"
                                    alt=""
                                />
                                <a className="product-title" href="#">
                                    ANGEL HOOPS GOLDEN EARRINGS
                                </a>
                                <h4 className="product-price">AED 1259.00 AED 819.00</h4>
                                <a href="#" className="btn btn-add-cart w-100 mt-3">
                                    Add to Cart
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="product-card">
                                <img
                                    src="/images/collection_img1.png"
                                    className="img-fluid"
                                    alt=""
                                />
                                <a className="product-title" href="#">
                                    ANGEL HOOPS GOLDEN EARRINGS
                                </a>
                                <h4 className="product-price">AED 1259.00 AED 819.00</h4>
                                <a href="#" className="btn btn-add-cart w-100 mt-3">
                                    Add to Cart
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="product-card">
                                <img
                                    src="/images/collection_img1.png"
                                    className="img-fluid"
                                    alt=""
                                />
                                <a className="product-title" href="#">
                                    ANGEL HOOPS GOLDEN EARRINGS
                                </a>
                                <h4 className="product-price">AED 1259.00 AED 819.00</h4>
                                <a href="#" className="btn btn-add-cart w-100 mt-3">
                                    Add to Cart
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="product-card">
                                <img
                                    src="/images/collection_img1.png"
                                    className="img-fluid"
                                    alt=""
                                />
                                <a className="product-title" href="#">
                                    ANGEL HOOPS GOLDEN EARRINGS
                                </a>
                                <h4 className="product-price">AED 1259.00 AED 819.00</h4>
                                <a href="#" className="btn btn-add-cart w-100 mt-3">
                                    Add to Cart
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </Fragment>
    )
}

export default withMainLayout(Wishlist)
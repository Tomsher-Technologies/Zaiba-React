import React, { FC } from 'react';

import { WishlistProps } from '@/types/AccountProps';

const Wishlist: FC<WishlistProps> = ({ user }) => {
    return (
        <div
            className="tab-pane fade show active"
            id="v-pills-wishlist"
            role="tabpanel"
            aria-labelledby="v-pills-wishlist-tab"
            tabIndex={0}
        >
            <h3 className="mb-2">Wishlist</h3>
            <div className="row">
                <div className="col-md-4">
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
                <div className="col-md-4">
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
                <div className="col-md-4">
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
                <div className="col-md-4 g-3">
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
                <div className="col-md-4 g-3">
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
                <div className="col-md-4 g-3">
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
    )
}

export default Wishlist
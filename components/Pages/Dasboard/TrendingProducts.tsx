import React, { FC, useRef } from 'react';
import { East, West } from '@mui/icons-material';

import AliceCarousel from 'react-alice-carousel';
// const AliceCarousel = dynamic(() => import('react-alice-carousel'), { ssr: false });
import "react-alice-carousel/lib/alice-carousel.css";

const TrendingProducts: FC = () => {
    const carouselRef = useRef<null>(null);

    return (
        <section className="trending-products">
            <div className="trending-inner">
                <div className="container-fluid px-7">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="title-block text-center mb-4">
                                <h3 className="sub-title">BE IN</h3>
                                <h4 className="main-title">Shop By Trending Products</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="trending-slider relative filter-coontent">
                                <button
                                    data-carousel="important-notes"
                                    data-target="prev"
                                    className="absolute top-[35%] md:top-[30%] lg:top-[35%] 2xl:top-[50%] left-4  sm:-left-14 transform -translate-y-1/2 z-[99] btn px-2 "
                                    onClick={() => (carouselRef as any).current.slidePrev()}>
                                    <img
                                        src="/svg/arrowleftblack.svg"

                                    />
                                </button>
                                <div className="relative tab-content" id="pills-tabContent">
                                    <div
                                        className="tab-pane fade show active"
                                        id="pills-allthejewellery"
                                        role="tabpanel"
                                        aria-labelledby="pills-allthejewellery-tab"
                                        tabIndex={0}

                                    >
                                        <AliceCarousel
                                            autoPlay
                                            autoPlayInterval={70000}
                                            ref={carouselRef}
                                            disableButtonsControls
                                            disableDotsControls
                                            // renderDotsItem={renderDots as any}
                                            responsive={{
                                                0: { items: 1 },
                                                568: { items: 2 },
                                                1024: { items: 5 },
                                            }}

                                        >
                                            <div
                                                className="collection-item mr-2"
                                                id="BRACELETS ALLJEWELLERY"
                                            >
                                                <a href="product-detail.html"></a>
                                                <div className="product-card">
                                                    <a href="product-detail.html">
                                                        <img
                                                            src="/images/collection_img1.png"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <a className="product-title" href="#">
                                                        ANGEL HOOPS GOLDEN EARRINGS
                                                    </a>
                                                    <h4 className="product-price">
                                                        AED 1259.00 AED 819.00
                                                    </h4>
                                                    <div className="product-add-cart-btn-wrapper">
                                                        <a href="#" className="btn btn-cart">
                                                            Add to Cart
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="collection-item mr-2" id="NECKLACES">
                                                <a href="product-detail.html" />
                                                <div className="product-card">
                                                    <img
                                                        src="/images/collection_img2.png"
                                                        className="img-fluid"
                                                        alt=""
                                                    />
                                                    <a className="product-title" href="#">
                                                        ANGEL HOOPS GOLDEN EARRINGS
                                                    </a>
                                                    <h4 className="product-price">
                                                        AED 1259.00 AED 819.00
                                                    </h4>
                                                    <div className="product-add-cart-btn-wrapper">
                                                        <a href="#" className="btn btn-cart">
                                                            Add to Cart
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="collection-item mr-2" id="RINGS">
                                                <a href="product-detail.html"></a>
                                                <div className="product-card">
                                                    <a href="product-detail.html">
                                                        <img
                                                            src="/images/collection_img3.png"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <a className="product-title" href="#">
                                                        ANGEL HOOPS GOLDEN EARRINGS
                                                    </a>
                                                    <h4 className="product-price">
                                                        AED 1259.00 AED 819.00
                                                    </h4>
                                                    <div className="product-add-cart-btn-wrapper">
                                                        <a href="#" className="btn btn-cart">
                                                            Add to Cart
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="collection-item mr-2" id="EARRINGS">
                                                <a href="product-detail.html"></a>
                                                <div className="product-card">
                                                    <a href="product-detail.html">
                                                        <img
                                                            src="/images/collection_img4.png"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <a className="product-title" href="#">
                                                        ANGEL HOOPS GOLDEN EARRINGS
                                                    </a>
                                                    <h4 className="product-price">
                                                        AED 1259.00 AED 819.00
                                                    </h4>
                                                    <div className="product-add-cart-btn-wrapper">
                                                        <a href="#" className="btn btn-cart">
                                                            Add to Cart
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="collection-item mr-2" id="BRACELETS">
                                                <a href="product-detail.html"></a>
                                                <div className="product-card">
                                                    <a href="product-detail.html">
                                                        <img
                                                            src="/images/collection_img5.png"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <a className="product-title" href="#">
                                                        ANGEL HOOPS GOLDEN EARRINGS
                                                    </a>
                                                    <h4 className="product-price">
                                                        AED 1259.00 AED 819.00
                                                    </h4>
                                                    <div className="product-add-cart-btn-wrapper">
                                                        <a href="#" className="btn btn-cart">
                                                            Add to Cart
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="collection-item mr-2" id="RINGS">
                                                <a href="product-detail.html"></a>
                                                <div className="product-card">
                                                    <a href="product-detail.html">
                                                        <img
                                                            src="/images/collection_img1.png"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <a className="product-title" href="#">
                                                        ANGEL HOOPS GOLDEN EARRINGS
                                                    </a>
                                                    <h4 className="product-price">
                                                        AED 1259.00 AED 819.00
                                                    </h4>
                                                    <div className="product-add-cart-btn-wrapper">
                                                        <a href="#" className="btn btn-cart">
                                                            Add to Cart
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="collection-item mr-2" id="NECKLACES">
                                                <a href="product-detail.html" />
                                                <div className="product-card">
                                                    <img
                                                        src="/images/collection_img2.png"
                                                        className="img-fluid"
                                                        alt=""
                                                    />
                                                    <a className="product-title" href="#">
                                                        ANGEL HOOPS GOLDEN EARRINGS
                                                    </a>
                                                    <h4 className="product-price">
                                                        AED 1259.00 AED 819.00
                                                    </h4>
                                                    <div className="product-add-cart-btn-wrapper">
                                                        <a href="#" className="btn btn-cart">
                                                            Add to Cart
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="collection-item mr-2" id="RINGS">
                                                <a href="product-detail.html"></a>
                                                <div className="product-card">
                                                    <a href="product-detail.html">
                                                        <img
                                                            src="/images/collection_img3.png"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <a className="product-title" href="#">
                                                        ANGEL HOOPS GOLDEN EARRINGS
                                                    </a>
                                                    <h4 className="product-price">
                                                        AED 1259.00 AED 819.00
                                                    </h4>
                                                    <div className="product-add-cart-btn-wrapper">
                                                        <a href="#" className="btn btn-cart">
                                                            Add to Cart
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="collection-item mr-2" id="EARRINGS">
                                                <a href="product-detail.html"></a>
                                                <div className="product-card">
                                                    <a href="product-detail.html">
                                                        <img
                                                            src="/images/collection_img4.png"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <a className="product-title" href="#">
                                                        ANGEL HOOPS GOLDEN EARRINGS
                                                    </a>
                                                    <h4 className="product-price">
                                                        AED 1259.00 AED 819.00
                                                    </h4>
                                                    <div className="product-add-cart-btn-wrapper">
                                                        <a href="#" className="btn btn-cart">
                                                            Add to Cart
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="collection-item mr-2" id="BRACELETS">
                                                <a href="product-detail.html"></a>
                                                <div className="product-card">
                                                    <a href="product-detail.html">
                                                        <img
                                                            src="/images/collection_img5.png"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <a className="product-title" href="#">
                                                        ANGEL HOOPS GOLDEN EARRINGS
                                                    </a>
                                                    <h4 className="product-price">
                                                        AED 1259.00 AED 819.00
                                                    </h4>
                                                    <div className="product-add-cart-btn-wrapper">
                                                        <a href="#" className="btn btn-cart">
                                                            Add to Cart
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="collection-item mr-2" id="RINGS">
                                                <a href="product-detail.html"></a>
                                                <div className="product-card">
                                                    <a href="product-detail.html">
                                                        <img
                                                            src="/images/collection_img1.png"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <a className="product-title" href="#">
                                                        ANGEL HOOPS GOLDEN EARRINGS
                                                    </a>
                                                    <h4 className="product-price">
                                                        AED 1259.00 AED 819.00
                                                    </h4>
                                                    <div className="product-add-cart-btn-wrapper">
                                                        <a href="#" className="btn btn-cart">
                                                            Add to Cart
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="collection-item mr-2" id="NECKLACES">
                                                <a href="product-detail.html" />
                                                <div className="product-card">
                                                    <img
                                                        src="/images/collection_img2.png"
                                                        className="img-fluid"
                                                        alt=""
                                                    />
                                                    <a className="product-title" href="#">
                                                        ANGEL HOOPS GOLDEN EARRINGS
                                                    </a>
                                                    <h4 className="product-price">
                                                        AED 1259.00 AED 819.00
                                                    </h4>
                                                    <div className="product-add-cart-btn-wrapper">
                                                        <a href="#" className="btn btn-cart">
                                                            Add to Cart
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="collection-item mr-2" id="RINGS">
                                                <a href="product-detail.html"></a>
                                                <div className="product-card">
                                                    <a href="product-detail.html">
                                                        <img
                                                            src="/images/collection_img3.png"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <a className="product-title" href="#">
                                                        ANGEL HOOPS GOLDEN EARRINGS
                                                    </a>
                                                    <h4 className="product-price">
                                                        AED 1259.00 AED 819.00
                                                    </h4>
                                                    <div className="product-add-cart-btn-wrapper">
                                                        <a href="#" className="btn btn-cart">
                                                            Add to Cart
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="collection-item mr-2" id="EARRINGS">
                                                <a href="product-detail.html"></a>
                                                <div className="product-card">
                                                    <a href="product-detail.html">
                                                        <img
                                                            src="/images/collection_img4.png"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <a className="product-title" href="#">
                                                        ANGEL HOOPS GOLDEN EARRINGS
                                                    </a>
                                                    <h4 className="product-price">
                                                        AED 1259.00 AED 819.00
                                                    </h4>
                                                    <div className="product-add-cart-btn-wrapper">
                                                        <a href="#" className="btn btn-cart">
                                                            Add to Cart
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="collection-item mr-2" id="BRACELETS">
                                                <a href="product-detail.html"></a>
                                                <div className="product-card">
                                                    <a href="product-detail.html">
                                                        <img
                                                            src="/images/collection_img5.png"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <a className="product-title" href="#">
                                                        ANGEL HOOPS GOLDEN EARRINGS
                                                    </a>
                                                    <h4 className="product-price">
                                                        AED 1259.00 AED 819.00
                                                    </h4>
                                                    <div className="product-add-cart-btn-wrapper">
                                                        <a href="#" className="btn btn-cart">
                                                            Add to Cart
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="collection-item mr-2" id="RINGS">
                                                <a href="product-detail.html"></a>
                                                <div className="product-card">
                                                    <a href="product-detail.html">
                                                        <img
                                                            src="/images/collection_img1.png"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <a className="product-title" href="#">
                                                        ANGEL HOOPS GOLDEN EARRINGS
                                                    </a>
                                                    <h4 className="product-price">
                                                        AED 1259.00 AED 819.00
                                                    </h4>
                                                    <div className="product-add-cart-btn-wrapper">
                                                        <a href="#" className="btn btn-cart">
                                                            Add to Cart
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </AliceCarousel>
                                    </div>
                                </div>
                                <button
                                    data-carousel="important-notes"
                                    data-target="next"
                                    className="absolute  top-[35%] md:top-[30%] lg:top-[35%] 2xl:top-[50%] right-4  sm:-right-14  transform -translate-y-1/2  z-[99] btn px-2 "
                                    onClick={() => (carouselRef as any).current.slideNext()}>
                                    <img
                                        src="/svg/arrowrightblack.svg"

                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default TrendingProducts
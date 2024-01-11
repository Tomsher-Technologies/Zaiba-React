import React, { FC, Fragment, useRef } from 'react';
import dynamic from 'next/dynamic';
import AliceCarousel from 'react-alice-carousel';
// const AliceCarousel = dynamic(() => import('react-alice-carousel'), { ssr: false });
import "react-alice-carousel/lib/alice-carousel.css";

import withMainLayout from '@/hocs/withMainLayout';
import { East, West } from '@mui/icons-material';
const InnerStrip = dynamic(() => import('@/components/Pages/Products/InnerStrip'));
const ThumbImages = dynamic(() => import('@/components/Pages/Products/ThumbImages'));
const ProductInfo = dynamic(() => import('@/components/Pages/Products/ProductInfo'));
const ProductMoreWarpper = dynamic(() => import('@/components/Pages/Products/ProductMoreWarpper'));
const ProductDescription = dynamic(() => import('@/components/Pages/Products/ProductDescription'));

const ProductDetail: FC = () => {
    return (
        <Fragment>
            <InnerStrip
                title={"DOME MAJESTY MALACHITE DIAMOND RING"}
            />
            <section className="zb-product-detail-area">
                <div className="zb-product-detail-inner">
                    <div className="container-fluid px-7">
                        <div className="row align-items-start">
                            <ThumbImages />
                            <ProductInfo />
                            <ProductMoreWarpper />

                        </div>

                        <ProductDescription />
                        <TrendingProducts />
                    </div>
                </div>
            </section>

        </Fragment>

    )
}

export default withMainLayout(ProductDetail);

const TrendingProducts = () => {
    const carouselRef = useRef<null>(null);

    return (
        <section className="trending-products relative">
            <div className="trending-inner">
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="title-block text-center mb-4">
                                <h4 className="main-title">You May Like This</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="trending-slider relative ">
                                <button
                                    data-carousel="important-notes"
                                    data-target="prev"
                                    className="absolute top-[35%] md:top-[30%] lg:top-[35%] 2xl:top-[40%] left-4  sm:-left-14 transform -translate-y-1/2 z-[99] btn px-2 border-slate-100 text-slate-600 dark:text-slate-300 ml-2 rounded-full bg-gary-400 border border-slate-700/[.3] shadow-lg"
                                    onClick={() => (carouselRef as any).current.slidePrev()}>
                                    <West />
                                </button>
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
                                    <div className="trending-item mr-2">
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
                                        </div>
                                    </div>
                                    <div className="trending-item mr-2">
                                        <div className="product-card">
                                            <img
                                                src="/images/collection_img2.png"
                                                className="img-fluid"
                                                alt=""
                                            />
                                            <a className="product-title" href="#">
                                                ANGEL HOOPS GOLDEN EARRINGS
                                            </a>
                                            <h4 className="product-price">AED 1259.00 AED 819.00</h4>
                                        </div>
                                    </div>
                                    <div className="trending-item mr-2">
                                        <div className="product-card">
                                            <img
                                                src="/images/collection_img3.png"
                                                className="img-fluid"
                                                alt=""
                                            />
                                            <a className="product-title" href="#">
                                                ANGEL HOOPS GOLDEN EARRINGS
                                            </a>
                                            <h4 className="product-price">AED 1259.00 AED 819.00</h4>
                                        </div>
                                    </div>
                                    <div className="trending-item mr-2">
                                        <div className="product-card">
                                            <img
                                                src="/images/collection_img4.png"
                                                className="img-fluid"
                                                alt=""
                                            />
                                            <a className="product-title" href="#">
                                                ANGEL HOOPS GOLDEN EARRINGS
                                            </a>
                                            <h4 className="product-price">AED 1259.00 AED 819.00</h4>
                                        </div>
                                    </div>
                                    <div className="trending-item mr-2">
                                        <div className="product-card">
                                            <img
                                                src="/images/collection_img5.png"
                                                className="img-fluid"
                                                alt=""
                                            />
                                            <a className="product-title" href="#">
                                                ANGEL HOOPS GOLDEN EARRINGS
                                            </a>
                                            <h4 className="product-price">AED 1259.00 AED 819.00</h4>
                                        </div>
                                    </div>
                                    <div className="trending-item mr-2">
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
                                        </div>
                                    </div>
                                </AliceCarousel>
                                <button
                                    data-carousel="important-notes"
                                    data-target="next"
                                    className="absolute  top-[35%] md:top-[30%] lg:top-[35%] 2xl:top-[40%] right-4  sm:-right-14  transform -translate-y-1/2  z-[99] btn px-2 border-slate-100 text-slate-600 dark:text-slate-300 mr-2 rounded-full bg-gary-400 border border-slate-700/[.3] shadow-lg"
                                    onClick={() => (carouselRef as any).current.slideNext()}>
                                    <East />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
import React, { FC, useRef } from 'react';
import dynamic from 'next/dynamic';

import AliceCarousel from 'react-alice-carousel';
// const AliceCarousel = dynamic(() => import('react-alice-carousel'), { ssr: false });
import "react-alice-carousel/lib/alice-carousel.css";

const ProductItem = dynamic(() => import('@/components/Pages/Products/ProductItem'));

import { APIFetch } from '@/server_api/utils/APIFetch';

const TrendingProducts: FC<{ trendingProducts: any }> = ({ trendingProducts }) => {
    const carouselRef = useRef<null>(null);

    return (
        <section className="trending-products">
            <div className="trending-inner">
                <div className="container-fluid px-7">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="title-block text-center mb-4">
                                <h3 className="sub-title">{trendingProducts.sub_title}</h3>
                                <h4 className="main-title">{trendingProducts.title}</h4>
                            </div>
                        </div>
                    </div>
                    <APIFetch lengthCheckObject={(trendingProducts as any)?.products} >
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
                                            mouseTracking
                                            touchTracking
                                            infinite
                                            responsive={{
                                                0: { items: 1 },
                                                568: { items: 2 },
                                                1024: { items: 5 },
                                            }}
                                        >
                                            {trendingProducts.products?.map?.((product: any, index: number) => (
                                                <div key={index} className='pr-3'>
                                                    <ProductItem
                                                        product={product}
                                                    />
                                                </div>
                                            ))}

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
                    </APIFetch>
                </div>
            </div>
        </section>

    )
}

export default TrendingProducts
import React, { FC, useRef } from 'react';
import Link from 'next/link';
import AliceCarousel from 'react-alice-carousel';
// const AliceCarousel = dynamic(() => import('react-alice-carousel'), { ssr: false });
import "react-alice-carousel/lib/alice-carousel.css";

import { APIFetch } from '@/server_api/utils/APIFetch';


const ShopCategory: FC<{ trendingCategories: any }> = ({ trendingCategories }) => {
    const carouselRef = useRef<null>(null);

    return (
        <section className="shop-category">
            <div className="shop-category-inner">
                <div className="container-fluid px-7">
                    <div className="flex justify-between">
                        <div className="col-md-12">
                            <div className="title-block m-4">
                                <h3 className="sub-title">Zaiba SHOP</h3>
                                <h4 className="main-title">Shop By Category</h4>
                            </div>
                        </div>
                        <div className="relative">
                            <button
                                data-carousel="important-notes"
                                data-target="prev"
                                className="absolute top-[35%] md:top-[30%] lg:top-[35%] 2xl:top-[40%] left-4  sm:-left-14 transform -translate-y-1/2 z-[99] btn px-2 "
                                onClick={() => (carouselRef as any).current.slidePrev()}>
                                <img
                                    src="/svg/arrowleftblack.svg"

                                />
                            </button>
                            <button
                                data-carousel="important-notes"
                                data-target="next"
                                className="absolute  top-[35%] md:top-[30%] lg:top-[35%] 2xl:top-[40%] right-4  sm:-right-14  transform -translate-y-1/2  z-[99] btn px-2"
                                onClick={() => (carouselRef as any).current.slideNext()}>
                                <img
                                    src="/svg/arrowrightblack.svg"

                                />
                            </button>
                        </div>
                    </div>
                    <APIFetch lengthCheckObject={trendingCategories?.categories} >
                        <div className="row">
                            <div className="col-md-12">
                                <div className="category-slider ">
                                    <AliceCarousel
                                        autoPlay
                                        autoPlayInterval={70000}
                                        ref={carouselRef}
                                        disableButtonsControls
                                        disableDotsControls
                                        infinite
                                        mouseTracking
                                        responsive={{
                                            0: { items: 1 },
                                            568: { items: 2 },
                                            1024: { items: 5 },
                                        } as any}
                                    >
                                        {trendingCategories?.categories?.map((category: any, index: number) => (
                                            <div className="category-item" key={index}>
                                                <img
                                                    src={(category as any)?.icon?.file_name}
                                                    className="img-fluid rounded-full max-h-[250px]"
                                                    alt=""
                                                />
                                                <Link className="category-title" href={`product-lists?category=${category.slug}`}>
                                                    {category.name}
                                                </Link>
                                            </div>
                                        ))}
                                    </AliceCarousel>
                                </div>
                            </div>
                        </div>
                    </APIFetch>
                </div>
            </div>
        </section >
    )
}

export default ShopCategory
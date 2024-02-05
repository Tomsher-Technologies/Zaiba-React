import React, { FC, useRef } from 'react';
import dynamic from 'next/dynamic';
import { useQuery } from '@tanstack/react-query';
import AliceCarousel from 'react-alice-carousel';
// const AliceCarousel = dynamic(() => import('react-alice-carousel'), { ssr: false });
import "react-alice-carousel/lib/alice-carousel.css";
import { East, West } from '@mui/icons-material';

const ProductItem = dynamic(() => import('@/components/Pages/Products/ProductItem'));

import { RelatedProductsProps } from '@/types/ProductsProps';

import { apiEndpoints } from '@/server_api/config/api.endpoints';
import FetchAPIData from '@/server_api/apifunctions/apifetch';
import { APIFetch } from '@/server_api/utils/APIFetch';

const RelatedProducts: FC<RelatedProductsProps> = ({ productSlug, categorySlug }) => {
    const carouselRef = useRef<null>(null);

    const { data: relatedProducts, isLoading: relatedProducts_loading } = useQuery({
        queryKey: [apiEndpoints.relatedProducts + productSlug + categorySlug],
        queryFn: () => FetchAPIData.fetchAPIData({ apiEndpoint: apiEndpoints.relatedProducts, product_slug: productSlug, category_slug: categorySlug }),
    });

    return (
        <section className="trending-products relative">
            <APIFetch lengthCheckObject={(relatedProducts as any)?.data} isLoading={relatedProducts_loading}>
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
                                        className="absolute top-[50%]   sm:-left-14 transform -translate-y-1/2 z-[99] btn px-2 border-slate-100 text-slate-600 dark:text-slate-300 ml-2 rounded-full bg-gary-400 border border-slate-700/[.3] shadow-lg"
                                        onClick={() => (carouselRef as any).current.slidePrev()}>
                                        <West />
                                    </button>
                                    <AliceCarousel
                                        autoPlay
                                        autoPlayInterval={70000}
                                        ref={carouselRef}
                                        disableButtonsControls
                                        disableDotsControls
                                        responsive={{
                                            0: { items: 1 },
                                            568: { items: 2 },
                                            80: { items: 3 },
                                            1024: { items: 5 },
                                        }}
                                        mouseTracking
                                        touchTracking
                                    >
                                        {(relatedProducts as any)?.data.map((product: any, index: number) => (
                                            <div className="mr-2 "  key={index}>
                                                <ProductItem
                                                    product={product} />
                                            </div>
                                        ))}
                                    </AliceCarousel>
                                    <button
                                        data-carousel="important-notes"
                                        data-target="next"
                                        className="absolute  top-[50%] right-4  sm:-right-14  transform -translate-y-1/2  z-[99] btn px-2 border-slate-100 text-slate-600 dark:text-slate-300 mr-2 rounded-full bg-gary-400 border border-slate-700/[.3] shadow-lg"
                                        onClick={() => (carouselRef as any).current.slideNext()}>
                                        <East />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </APIFetch>
        </section>
    )
}

export default RelatedProducts;
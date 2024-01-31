import React, { FC, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import AliceCarousel from 'react-alice-carousel';
// const AliceCarousel = dynamic(() => import('react-alice-carousel'), { ssr: false });
import "react-alice-carousel/lib/alice-carousel.css";
import { Adjust, Category, East, FiberManualRecord, West } from '@mui/icons-material';

import { APIFetch } from '@/server_api/utils/APIFetch';
import ProductItem from '../Products/ProductItem';

const NewCollections: FC<{ newCollection: any[] }> = ({ newCollection }) => {
    const carouselRef = useRef<null>(null);

    const [slectedCategory, setSelectedCategory] = useState<string>('');

    useEffect(() => {
        if (((newCollection as any)?.categories?.length > 0) && (slectedCategory == '')) {
            setSelectedCategory((newCollection as any)?.categories[0]?.slug);
        }
    }), [];

    const renderDots = (currentIndex: number) => {
        const items = [];

        for (let i = 0; i < 1; i++) {
            // console.log('abcd',(currentIndex as any),i );
            items.push(
                <button
                    key={i}
                    onClick={() => (carouselRef as any).current.slideTo(i)}
                    className={`dot } relative top-10 mr-1`}
                >
                    {(currentIndex as any).isActive &&
                        <Adjust className='text-[22px]' />
                        ||
                        <FiberManualRecord className="text-gray-500 text-[14px]" />
                    }
                </button>
            );
        }

        return <div className="custom-dots flex">{items}</div>;
    };

    return (
        <section className="new-collection">
            <div className="new-collection-inner">
                <div className="container-fluid px-7">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="title-block text-center">
                                <h3 className="sub-title">{(newCollection as any)?.sub_title}</h3>
                                <h4 className="main-title">{(newCollection as any)?.title}</h4>
                            </div>
                        </div>
                    </div>
                    <APIFetch lengthCheckObject={(newCollection as any)?.categories} >
                        <div className="row">
                            <div className="col-md-12">
                                <div className="collection-filter">
                                    <div className="filter-nav">
                                        <ul>
                                            {(newCollection as any)?.categories?.map((category: any, index: number) => (
                                                <li key={index}>
                                                    <a className={`filter-cat ${category.slug === slectedCategory ? 'active' : ''} cursor-pointer `} onClick={() => setSelectedCategory(category.slug)}>
                                                        {category.name}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                        <Link href="/product-lists" className="btn btn-all">
                                            VIEW ALL
                                        </Link>
                                    </div>
                                    {(newCollection as any)?.categories?.find((category: any) => category.slug === slectedCategory)?.products?.length > 0 &&
                                        <div className="relative filter-coontent">
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
                                                        // disableDotsControls
                                                        mouseTracking
                                                        touchTracking
                                                        infinite
                                                        renderDotsItem={renderDots as any}
                                                        responsive={{
                                                            0: { items: 1 },
                                                            568: { items: 2 },
                                                            1024: { items: 5 },
                                                        }}

                                                    >
                                                        {(newCollection as any)?.categories?.find((category: any) => category.slug === slectedCategory)?.products?.map((product: any, index: number) => (
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
                                        ||
                                        <div className="p-5 text-error text-[18px]">
                                            No products found this category!.
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </APIFetch >
                </div >
            </div >
        </section >
    )
}

export default NewCollections
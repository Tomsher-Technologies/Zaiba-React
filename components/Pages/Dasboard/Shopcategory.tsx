import { East, West } from '@mui/icons-material';
import React, { FC, useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
// const AliceCarousel = dynamic(() => import('react-alice-carousel'), { ssr: false });
import "react-alice-carousel/lib/alice-carousel.css";

const Shopcategory: FC = () => {
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
                                className="absolute top-[35%] md:top-[30%] lg:top-[35%] 2xl:top-[40%] left-4  sm:-left-14 transform -translate-y-1/2 z-[99] btn px-2 border-slate-100 text-slate-600 dark:text-slate-300 ml-2 rounded-full bg-gary-400 border border-slate-700/[.3] shadow-lg"
                                onClick={() => (carouselRef as any).current.slidePrev()}>
                                <West />
                            </button>
                            <button
                                data-carousel="important-notes"
                                data-target="next"
                                className="absolute  top-[35%] md:top-[30%] lg:top-[35%] 2xl:top-[40%] right-4  sm:-right-14  transform -translate-y-1/2  z-[99] btn px-2 border-slate-100 text-slate-600 dark:text-slate-300 mr-2 rounded-full bg-gary-400 border border-slate-700/[.3] shadow-lg"
                                onClick={() => (carouselRef as any).current.slideNext()}>
                                <East />
                            </button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="category-slider ">
                                <AliceCarousel
                                    autoPlay
                                    autoPlayInterval={7000}
                                    ref={carouselRef}
                                    disableButtonsControls
                                    disableDotsControls
                                    responsive={{
                                        0: { items: 1 },
                                        568: { items: 2 },
                                        1024: { items: 5 },
                                    }}

                                >
                                    <div className="category-item">
                                        <img
                                            src="/images/category_img1.png"
                                            className="img-fluid"
                                            alt=""
                                        />
                                        <a className="category-title" href="#">
                                            Bracelets
                                        </a>
                                    </div>
                                    <div className="category-item">
                                        <img
                                            src="/images/category_img2.png"
                                            className="img-fluid"
                                            alt=""
                                        />
                                        <a className="category-title" href="#">
                                            Earrings
                                        </a>
                                    </div>
                                    <div className="category-item">
                                        <img
                                            src="/images/category_img2.png"
                                            className="img-fluid"
                                            alt=""
                                        />
                                        <a className="category-title" href="#">
                                            Earrings
                                        </a>
                                    </div>
                                    <div className="category-item">
                                        <img
                                            src="/images/category_img1.png"
                                            className="img-fluid"
                                            alt=""
                                        />
                                        <a className="category-title" href="#">
                                            Bracelets
                                        </a>
                                    </div>
                                    <div className="category-item">
                                        <img
                                            src="/images/category_img2.png"
                                            className="img-fluid"
                                            alt=""
                                        />
                                        <a className="category-title" href="#">
                                            Earrings
                                        </a>
                                    </div>
                                    <div className="category-item">
                                        <img
                                            src="/images/category_img2.png"
                                            className="img-fluid"
                                            alt=""
                                        />
                                        <a className="category-title" href="#">
                                            Earrings
                                        </a>
                                    </div>
                                    <div className="category-item">
                                        <img
                                            src="/images/category_img1.png"
                                            className="img-fluid"
                                            alt=""
                                        />
                                        <a className="category-title" href="#">
                                            Bracelets
                                        </a>
                                    </div>
                                    <div className="category-item">
                                        <img
                                            src="/images/category_img2.png"
                                            className="img-fluid"
                                            alt=""
                                        />
                                        <a className="category-title" href="#">
                                            Earrings
                                        </a>
                                    </div>
                                    <div className="category-item">
                                        <img
                                            src="/images/category_img2.png"
                                            className="img-fluid"
                                            alt=""
                                        />
                                        <a className="category-title" href="#">
                                            Earrings
                                        </a>
                                    </div>
                                </AliceCarousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >

    )
}

export default Shopcategory
import React, { FC, useRef } from 'react';
import dynamic from 'next/dynamic';
import AliceCarousel from 'react-alice-carousel';
// const AliceCarousel = dynamic(() => import('react-alice-carousel'), { ssr: false });
import "react-alice-carousel/lib/alice-carousel.css";
import { Adjust, East, FiberManualRecord, West } from '@mui/icons-material';
import Link from 'next/link';

const NewCollections: FC = () => {
    const carouselRef = useRef<null>(null);

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
                                <h3 className="sub-title">EXPLORE PRODUCTS</h3>
                                <h4 className="main-title">NEW collection</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="collection-filter">
                                <div className="filter-nav">
                                    <ul>
                                        <li>
                                            <a className="filter-cat active" href="#" id="ALLJEWELLERY">
                                                ALL THE JEWELLERY
                                            </a>
                                        </li>
                                        <li>
                                            <a className="filter-cat" href="#" id="BRACELETS">
                                                BRACELETS
                                            </a>
                                        </li>
                                        <li>
                                            <a className="filter-cat" href="#" id="NECKLACES">
                                                NECKLACES
                                            </a>
                                        </li>
                                        <li>
                                            <a className="filter-cat" href="#" id="RINGS">
                                                RINGS{" "}
                                            </a>
                                        </li>
                                        <li>
                                            <a className="filter-cat" href="#" id="EARRINGS">
                                                EARRINGS
                                            </a>
                                        </li>
                                    </ul>
                                    <Link href="/products-listing" className="btn btn-all">
                                        VIEW ALL
                                    </Link>
                                </div>
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
                                                renderDotsItem={renderDots as any}
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
            </div>
        </section>
    )
}

export default NewCollections
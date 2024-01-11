import React, { FC, useRef } from 'react'
import dynamic from 'next/dynamic';
import AliceCarousel from 'react-alice-carousel';
// const AliceCarousel = dynamic(() => import('react-alice-carousel'), { ssr: false });
import "react-alice-carousel/lib/alice-carousel.css";

import { Adjust, East, FiberManualRecord, West } from '@mui/icons-material';
import Image from 'next/image';

const Banner: FC = () => {
    const carouselRef = useRef<null>(null);

    const renderDots = (currentIndex: number) => {
        const items = []; // Create an array to hold the dots


        // Assuming a total of 5 slides in the carousel
        for (let i = 0; i < 1; i++) {
            // console.log('abcd',(currentIndex as any),i );
            items.push(
                <button
                    key={i}
                    onClick={() => (carouselRef as any).current.slideTo(i)}
                    className={`dot } relative mr-1`}
                >
                    {(currentIndex as any).isActive &&
                        <Adjust className='text-[22px] text-white' />
                        ||
                        <FiberManualRecord className="text-gray-400 text-[14px]" />
                    }
                </button>
            );
        }

        return <div className="custom-dots flex">{items}</div>;
    };

    return (
        <section className="banner-section relative">
            <button
                className="absolute top-[35%] md:top-[30%] lg:top-[35%] 2xl:top-[50%]  left-5 transform -translate-y-1/2 z-[99] p-2 rounded-md"
                onClick={() => (carouselRef as any).current.slidePrev()}>
                <Image className='w-24 h-24'
                    src="/svg/arrowleftwhite.svg"
                    width="50"
                    height="50"
                    alt='left'
                />
            </button>
            <div className="relative main-banner ">
                <AliceCarousel
                    autoPlay
                    renderDotsItem={renderDots as any}
                    autoPlayInterval={70000}
                    ref={carouselRef}
                    disableButtonsControls
                    // disableDotsControls
                    responsive={{
                        0: { items: 1 },
                        1024: { items: 1 },
                    }}

                >
                    <div className="banner-item">
                        <img
                            src="/images/banner-img1.jpg"
                            className="img-fluid"
                            alt="Banner Image"
                            width={200}
                            height={160}
                            sizes="(max-width: 768px) 100vw,
                                (max-width: 1200px) 50vw,
                                33vw"
                            style={{ height: '100%', width: '100%' }}
                        />
                        <div className="banner-caption">
                            <h1>
                                Discover <br /> Our new Collections
                            </h1>
                            <p>Discover our new gold earrings creoli designed with septem paris</p>
                            <a href="#" className="btn btn-primary">
                                VIEW COLLECTION
                            </a>
                        </div>
                    </div>
                    <div className="banner-item">
                        <img
                            src="/images/banner-img2.jpg"
                            className="img-fluid"
                            alt="Banner Image"
                            width={200}
                            height={160}
                            sizes="(max-width: 768px) 100vw,
                                (max-width: 1200px) 50vw,
                                33vw"
                            style={{ height: '100%', width: '100%' }}
                        />
                        <div className="banner-caption">
                            <h1>
                                Discover <br /> Our new Collections
                            </h1>
                            <p>Discover our new gold earrings creoli designed with septem paris</p>
                            <a href="#" className="btn btn-primary">
                                VIEW COLLECTION
                            </a>
                        </div>
                    </div>
                    <div className="banner-item">
                        <img
                            src="/images/banner-img1.jpg"
                            className="img-fluid"
                            alt="Banner Image"
                            width={200}
                            height={160}
                            sizes="(max-width: 768px) 100vw,
                                (max-width: 1200px) 50vw,
                                33vw"
                            style={{ height: '100%', width: '100%' }}
                        />
                        <div className="banner-caption">
                            <h1>
                                Discover <br /> Our new Collections
                            </h1>
                            <p>Discover our new gold earrings creoli designed with septem paris</p>
                            <a href="#" className="btn btn-primary">
                                VIEW COLLECTION
                            </a>
                        </div>
                    </div>
                </AliceCarousel>
            </div>
            <button
                data-carousel="important-notes"
                data-target="next"
                className="absolute  top-[35%] md:top-[30%] lg:top-[35%] 2xl:top-[50%] right-4 transform -translate-y-1/2 z-[99] "
                onClick={() => (carouselRef as any).current.slideNext()}>
                <Image className='w-24 h-24'
                    src="/svg/arrowrightwhite.svg"
                    width="50"
                    height="50"
                    alt='right'
                />
            </button>
        </section>
    )
}

export default Banner
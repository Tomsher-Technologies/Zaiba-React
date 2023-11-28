import React, { FC, createRef } from 'react';
import ImageGallery from "react-image-gallery";
import 'react-image-gallery/styles/css/image-gallery.css'; // Import the CSS file


const ThumbImages: FC = () => {
    const myImageRef = createRef();

    const images = [
        {
            original: "/images/product.jpg",
            thumbnail: "/images/product.jpg",
        },
        {
            original: "/images/product.jpg",
            thumbnail: "/images/product.jpg",
        },
        {
            original: "/images/product.jpg",
            thumbnail: "/images/product.jpg",
        },
    ];

    const onEventTriggerSlide = (e: any) => {
        console.log('onEventTriggerSlide', myImageRef)
    }

    return (
        <div className="col-md-4">
            <div className="zb-product-thumb-warpper">
                <div id="sync1" className="">
                    <ImageGallery
                        items={images}
                        showBullets={false}
                        showIndex={false}
                        showThumbnails
                        thumbnailPosition="bottom"
                        // thumbnailPosition={width > 1300 ? "left" : "bottom"}
                        lazyLoad={true}
                        showPlayButton={false}
                        showFullscreenButton={false}
                        showNav={false}
                        ref={myImageRef as any}
                        onSlide={() => onEventTriggerSlide('onSlide')}
                        additionalClass="custom-gallery" 
                    // items={gallaryImages.map(image => ({ original: imagePath + image.imageUrl, thumbnail: imagePath + image.imageUrl }))}
                    />

                </div>
                {/* <div id="sync2" className="owl-carousel owl-theme">
                    <div className="item">
                        <img src="/images/product.jpg" className="img-fluid" alt="" />
                    </div>
                    <div className="item">
                        <img src="/images/product.jpg" className="img-fluid" alt="" />
                    </div>
                    <div className="item">
                        <img src="/images/product.jpg" className="img-fluid" alt="" />
                    </div>
                    <div className="item">
                        <img src="/images/product.jpg" className="img-fluid" alt="" />
                    </div>
                </div> */}
            </div>
        </div>

    )
}

export default ThumbImages
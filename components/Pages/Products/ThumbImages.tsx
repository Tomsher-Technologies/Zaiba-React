import React, { FC, useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { FilterCenterFocus, YouTube } from '@mui/icons-material';

const ImagePreviewModal = dynamic(() => import('@/components/Modals/ImagePreviewModal'));

import { MagnifiedImageComponentProps, ThumbImagesProps } from '@/types/ProductsProps';
import { useMouseOverZoom } from '@/server_api/hooks/useMouseOverZoom';

const ThumbImages: FC<ThumbImagesProps> = ({ galleryImages, slug, setImageTarget, setIsImageHovered }) => {
    const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
    const [imagePath, setImagePath] = useState<string>('');
    const [youTubeCode, setYouTubeCode] = useState<string>('');

    useEffect(() => {
        galleryImages?.length > 0 && setImagePath(galleryImages[0].path)
    }, [slug])


    const handleFullScreenToggle = (image: string) => {
        setImagePath(image);
        setIsFullScreen(!isFullScreen);
    };

    return (
        <div className="col-md-4 zb-product-thumb-warpper ">
            <div id="sync1" className="relative">
                <div className="absolute right-0 p-[25px] z-30 ">
                    {imagePath !== '' &&
                        <FilterCenterFocus
                            className='text-textPrimary hover:text-black w-[35px] h-[35px] cursor-pointer'
                            onClick={() => handleFullScreenToggle(imagePath)}
                        />
                    }
                </div>

                <MagnifiedImageComponent
                    imagePath={imagePath}
                    isFullScreen={isFullScreen}
                    setImageTarget={setImageTarget}
                    setIsImageHovered={setIsImageHovered}
                    youTubeCode={youTubeCode}
                />
                <div className='flex justify-center gap-2 mt-[30px] mb-[10px]'>
                    {galleryImages?.map((image: any, index: number) => (
                        <div className={`border ${(imagePath || youTubeCode) === image.path ? 'border-primary' : 'border-gray-200'} rounded-md overflow-hidden`} key={index} onClick={() => {
                            if (image.youTube) {
                                setYouTubeCode(image.path)
                                setImagePath('')
                            } else {
                                setImagePath(image.path);
                                setYouTubeCode('');
                            }
                        }} >
                            {image.youTube &&
                                <div className='p-3'>
                                    <YouTube className='text-[50px] text-red-500' />
                                </div>
                                ||
                                <img src={image.path} className="w-[90px] h-[90px] bg-gray-100 cursor-pointer object-cover" />
                            }
                        </div>
                    ))}
                </div>

                {isFullScreen &&
                    <ImagePreviewModal
                        imagePath={imagePath}
                        isFullScreen={isFullScreen}
                        setIsFullScreen={setIsFullScreen}
                    />
                }

            </div>
        </div>
    )
}

export default ThumbImages


const MagnifiedImageComponent: FC<MagnifiedImageComponentProps> = ({ imagePath, youTubeCode, isFullScreen, setImageTarget, setIsImageHovered }) => {
    const source = useRef<HTMLImageElement>(null); // new
    const target = useRef<HTMLCanvasElement>(null); // new
    const cursor = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    useMouseOverZoom(source, target, cursor);

    useEffect(() => {
        if (isHovered) {
            setIsImageHovered(true);
            setImageTarget(target)
        } else {
            setIsImageHovered(false);
            setImageTarget(null)
        }
    }, [isHovered])
    // const youTubeCode = "PvcXMVIiJL8"

    return (
        <div className={` zoom-image ${isFullScreen ? 'full-screen' : ''}`}>
            <div className="  relative z-10">
                <div
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {youTubeCode !== '' && (
                        <div className="h-[500px] inset-0">
                            <iframe
                                title="YouTube Video"
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${youTubeCode}`}
                                frameBorder="0"
                                allowFullScreen
                            />
                        </div>
                    ) ||
                        <img ref={source} src={imagePath} className="w-full h-[90%] bg-gray-100 cursor-crosshair object-cover" />
                    }
                </div>
                <div ref={cursor} className=" absolute pointer-events-none " />
                {/* <div ref={cursor} className="border border-sky-500 absolute pointer-events-none " /> */}
                {/* {isHovered && (
                    <canvas
                        ref={target}
                        className="absolute pointer-events-none h-[300px] w-[300px] md:bottom-16 md:right-16  z-10 bg-gray-200"
                    />
                )} */}
            </div>
        </div >
    );

}


// < div className = "col-md-4" >
//     <div className="zb-product-thumb-warpper">
//         <div id="sync1" className="">
//             <ImageGallery
//                 items={images}
//                 showBullets={false}
//                 showIndex={false}
//                 showThumbnails
//                 thumbnailPosition="bottom"
//                 // thumbnailPosition={width > 1300 ? "left" : "bottom"}
//                 lazyLoad={true}
//                 showPlayButton={false}
//                 showFullscreenButton={false}
//                 showNav={false}
//                 ref={myImageRef as any}
//                 onSlide={() => onEventTriggerSlide('onSlide')}
//                 additionalClass="custom-gallery"
//             // items={gallaryImages.map(image => ({ original: imagePath + image.imageUrl, thumbnail: imagePath + image.imageUrl }))}
//             />

//         </div>
//         {/* <div id="sync2" className="owl-carousel owl-theme">
//                 <div className="item">
//                     <img src="/images/product.jpg" className="img-fluid" alt="" />
//                 </div>
//                 <div className="item">
//                     <img src="/images/product.jpg" className="img-fluid" alt="" />
//                 </div>
//                 <div className="item">
//                     <img src="/images/product.jpg" className="img-fluid" alt="" />
//                 </div>
//                 <div className="item">
//                     <img src="/images/product.jpg" className="img-fluid" alt="" />
//                 </div>
//             </div> */}
//     </div>
// </ >
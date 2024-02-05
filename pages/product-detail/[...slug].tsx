import React, { FC, Fragment, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { NextPageContext } from 'next';

const MainLayout = dynamic(() => import('@/components/Layouts/MainLayout'));
const InnerStrip = dynamic(() => import('@/components/Pages/Products/InnerStrip'));
const ThumbImages = dynamic(() => import('@/components/Pages/Products/ThumbImages'));
const ProductInfo = dynamic(() => import('@/components/Pages/Products/ProductInfo'));
const ProductMoreWarpper = dynamic(() => import('@/components/Pages/Products/ProductMoreWarpper'));
const ProductTabs = dynamic(() => import('@/components/Pages/Products/ProductTabs'));
const RelatedProducts = dynamic(() => import('@/components/Pages/Products/RelatedProducts'));

import { ProductDetailsProps } from '@/types/ProductsProps';

import { apiEndpoints, appURL } from '@/server_api/config/api.endpoints';
import FetchAPIData from '@/server_api/apifunctions/apifetch';
import { APIFetch } from '@/server_api/utils/APIFetch';
import useWishlist from '@/server_api/hooks/useWishlist';
import useCart from '@/server_api/hooks/useCart';
import Head from 'next/head';

const ProductDetail: FC<ProductDetailsProps> = ({ requestedData, slug, sku, host, ssrLoading }) => {

    const [imageTarget, setImageTarget] = useState<any>(null);
    const [isImageHovered, setIsImageHovered] = useState(false);

    // console.log('requestedData', sku);

    return (
        <Fragment>
            <Head>
                <title>{requestedData.meta_title}</title>
                <meta name='description' content={requestedData.meta_description} />
                <meta property="og:type" content="website" />
                <meta name="og_site_name" property="og:site_name" content={appURL} />
                <meta name="og_title" property="og:title" content={requestedData?.og_title} />
                <meta property="og:url" content={`${appURL}/product-details/${slug}`} />
                <meta property="og:description" content={`${requestedData.og_description} on Zaiba`} />
                <meta name="og_image" property="og:image" itemProp="image" content={requestedData.thumbnail_image} />
                <meta property="og:image:type" content="image/jpeg" />
                <meta property="og:image:width" content="300" />
                <meta property="og:image:height" content="300" />

                <meta name="twitter:site" content={`${appURL}/product-details/${slug}`} />
                <meta name="twitter:title" content={requestedData.twitter_title} />
                <meta name="twitter:description" content={`${requestedData.twitter_description} on Zaiba`} />
                <meta name="twitter:image" content={requestedData.thumbnail_image} />
                <meta name="twitter:domain" content={`${appURL}`} />

                {/* <Link href="/images/favicon.png" rel="shortcut icon" type="image/png" /> */}
            </Head>
            <MainLayout>
                <InnerStrip
                    title={requestedData.name}
                    items={[
                        { label: 'Home', link: '/' },
                        { label: requestedData?.category?.name, link: `/product-lists?category=${requestedData?.category?.slug}` },
                        { label: requestedData.name },
                    ]}
                />
                <section className="zb-product-detail-area">
                    <div className="zb-product-detail-inner">
                        <div className="container-fluid px-7">
                            <div className="row align-items-start">
                                <ThumbImages
                                    setImageTarget={setImageTarget}
                                    setIsImageHovered={setIsImageHovered}
                                    slug={slug}
                                    galleryImages={[
                                        { path: requestedData.thumbnail_image, youTube: false },
                                        ...requestedData.photos.map((photo: string) => ({ path: photo, youTube: false })),
                                        { path: requestedData.video_link, youTube: true },
                                    ]}
                                />
                                <ProductInfo
                                    sku={sku}
                                    productDetails={requestedData}
                                    isImageHovered={isImageHovered}
                                    imageTarget={imageTarget}
                                    ssrLoading={ssrLoading}
                                />
                                <ProductMoreWarpper />
                            </div>
                            {requestedData?.tabs?.length > 0 &&
                                <ProductTabs
                                    tabs={requestedData?.tabs}
                                />
                            }
                            {requestedData?.category &&
                                <RelatedProducts
                                    productSlug={slug}
                                    categorySlug={requestedData?.category?.slug}
                                />
                            }
                        </div>
                    </div>
                </section>
            </MainLayout>
        </Fragment>

    )
}

export default ProductDetail;


export async function getServerSideProps(context: NextPageContext) {
    const isServerSide = !!context.req;
    let ssrLoading = true;
    // console.log('Is server-side rendering:', isServerSide);
    // console.log('context.query', context.req);
    if ((!!context.req) && ((context as any)?.query?.slug?.length > 1)) {
        try {
            const retVal = await FetchAPIData.fetchAPIData({
                apiEndpoint: apiEndpoints.productDetails,
                slug: (context as any).query?.slug[0],
                sku: (context as any).query?.slug[1]
            });
            console.log('retValretVal', retVal);

            if (retVal && (retVal as any).status === false) {
                return {
                    redirect: {
                        destination: '/no-data-found',
                        permanent: false,
                    }
                };
            } else if (retVal && retVal.data) {
                ssrLoading = false;
                return {
                    props: {
                        requestedData: retVal.data,
                        slug: (context as any).query?.slug[0],
                        sku: (context as any).query?.slug[1],
                        host: (context as any).req.headers.host,
                        ssrLoading: false,
                    }
                };
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            return {
                redirect: {
                    destination: '/error-page',
                    permanent: false,
                }
            };
        }
        return {
            redirect: {
                destination: '/default-page',
                permanent: false,
            }
        };
    } else {
        return {
            redirect: {
                destination: '/default-page',
                permanent: false,
            }
        };
    }
}
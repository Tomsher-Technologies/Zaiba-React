import React, { FC, Fragment, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { NextPageContext } from 'next';
import Head from 'next/head';

const MainLayout = dynamic(() => import('@/components/Layouts/MainLayout'));
const InnerStrip = dynamic(() => import('@/components/Pages/Products/InnerStrip'));
const Filters = dynamic(() => import('@/components/Pages/Products/Filters/Filters'));
const ProductSort = dynamic(() => import('@/components/Pages/Products/ProductSort'));
const ProductItem = dynamic(() => import('@/components/Pages/Products/ProductItem'));

import { ProductListProps } from '@/types/ProductsProps';

import { apiEndpoints, appURL } from '@/server_api/config/api.endpoints';
import FetchAPIData from '@/server_api/apifunctions/apifetch';
import { APIFetch } from '@/server_api/utils/APIFetch';
import useReport from '@/server_api/hooks/useReport';

const ProductsListing: FC<ProductListProps> = ({ requestedData, host }) => {

    const uRS = useReport({ fetchFunction: () => fetch_ProductLists(), pagePath: "/product-lists", next_offset: requestedData.next_offset, limit: 15 });

    const [productLists, setProductLists] = useState<any[]>([]);
    const [isClient, setIsClient] = useState<boolean>(false);


    useEffect(() => {
        setIsClient(true);
        fetch_ProductLists();
    }, [requestedData]);

    const fetch_ProductLists = async () => {
        setProductLists(requestedData.ProductLists);
        uRS.setRowsCount((requestedData as any)?.total_count || 0);
    };

    return (
        <Fragment>
            <Head>
                <title>{requestedData?.meta?.meta_title}</title>
                <meta name='description' content={requestedData?.meta?.meta_description} />
                <meta property="og:type" content="website" />
                <meta name="og_site_name" property="og:site_name" content={appURL} />
                <meta name="og_title" property="og:title" content={requestedData?.meta?.og_title} />
                <meta property="og:url" content={`${host}/faq`} />
                <meta property="og:description" content={`${requestedData?.meta?.og_description} on Zaiba`} />
                <meta name="og_image" property="og:image" itemProp="image" content={requestedData?.meta?.meta_image} />
                <meta property="og:image:type" content="image/jpeg" />
                <meta property="og:image:width" content="300" />
                <meta property="og:image:height" content="300" />

                <meta name="twitter:site" content={`${host}/faq`} />
                <meta name="twitter:title" content={requestedData?.meta?.twitter_title} />
                <meta name="twitter:description" content={`${requestedData?.meta?.twitter_description} on Zaiba`} />
                <meta name="twitter:image" content={requestedData?.meta?.thumbnail_image} />
                <meta name="twitter:domain" content={`${appURL}`} />
            </Head>
            <MainLayout>
                <InnerStrip
                    title={"Collections"}
                    items={[
                        { label: 'Home', link: '/' },
                        { label: 'Products' },
                    ]}
                />
                <section className="zb-product-listing-area">
                    <div className="container-fluid px-7">
                        <div className="row">
                            <Filters
                                uRS={uRS}
                            />
                            <div className="col-md-9">
                                <div className="zb-product-sort-warpper">
                                    <ProductSort
                                        uRS={uRS}
                                    />

                                    <APIFetch lengthCheckObject={(requestedData as any)?.data} isLoading={!isClient}>
                                        <div className="product-listing">
                                            {/* <div className="row gx-3 gy-3"> */}
                                            <div className=" flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 ">
                                                {(requestedData as any)?.data.map((product: any, index: number) => (
                                                    <ProductItem
                                                        key={index}
                                                        product={product} />
                                                ))}
                                            </div>
                                            <div className='flex justify-center mt-5'><uRS.MyPagination /></div>
                                        </div>
                                    </APIFetch>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </MainLayout>

        </Fragment>
    )
}

export default ProductsListing;

export async function getServerSideProps(context: NextPageContext) {
    try {
        const retVal = await FetchAPIData.fetchAPIData({
            apiEndpoint: apiEndpoints.productLists,
            search: context.query?.search,
            category_slug: context.query?.category,
            brand_slug: context.query?.brand,
            offer_slug: context.query?.offer,
            min_price: context.query?.min_price,
            max_price: context.query?.max_price,
            limit: context.query?.limit,
            offset: context.query?.next_offset,
            order_by: context.query?.order_by
        });

        if (retVal && (retVal as any).status === false) {
            return {
                redirect: {
                    destination: '/no-data-found',
                    permanent: false,
                }
            };
        } else if (retVal) {
            return {
                props: {
                    requestedData: retVal,
                    host: (context as any).req.headers.host
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
            destination: '/error-page',
            permanent: false,
        }
    };
}
import React, { FC, Fragment, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

import withMainLayout from '@/hocs/withMainLayout';

const InnerStrip = dynamic(() => import('@/components/Pages/Products/InnerStrip'));
const Filters = dynamic(() => import('@/components/Pages/Products/Filters/Filters'));
const ProductSort = dynamic(() => import('@/components/Pages/Products/ProductSort'));
const ProductItem = dynamic(() => import('@/components/Pages/Products/ProductItem'));

import { ProductListProps } from '@/types/ProductsProps';

import { apiEndpoints } from '@/server_api/config/api.endpoints';
import FetchAPIData from '@/server_api/apifunctions/apifetch';
import { APIFetch } from '@/server_api/utils/APIFetch';
import useReport from '@/server_api/hooks/useReport';

const ProductsListing: FC<ProductListProps> = ({ requestedData }) => {

    const uRS = useReport({ fetchFunction: () => fetch_ProductLists(), pagePath: "/product-lists", next_offset: requestedData.next_offset, limit: 15  });

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

    // console.log('requestedData', requestedData);

    return (
        <Fragment>
            <InnerStrip
                title={"Rings"}
            />
            <span className='hidden bg-secondary'/>
            <section className="zb-product-listing-area">
                <div className="container-fluid px-7">
                    <div className="row">
                        <Filters
                            uRS={uRS}
                        />
                        <div className="col-md-9">
                            <div className="zb-product-sort-warpper">
                                <ProductSort />
                                <APIFetch lengthCheckObject={(requestedData as any)?.data} isLoading={!isClient}>
                                    <div className="product-listing">
                                        {/* <div className="row gx-3 gy-3"> */}
                                            <div className=" flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 ">
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
        </Fragment>
    )
}

export default withMainLayout(ProductsListing as any);

export async function getServerSideProps(context: any) {
    const retVal = await FetchAPIData.fetchAPIData({
        apiEndpoint: apiEndpoints.productLists,
        search: context.query?.search,
        category_slug: context.query?.category,
        brand_slug: context.query?.brand,
        offer_slug: context.query?.offer,
        min_price: context.query?.min_price,
        max_price: context.query?.max_price,
        limit: context.query?.limit,
        offset: context.query?.page_size,
        order_by: context.query?.order_by
    });
    if (retVal) {
        return {
            props: {
                requestedData: retVal
            },
        };
    } else {
        return {
            props: {
                requestedData: {}
            }
        }
    }
}
import React, { FC } from 'react';
import dynamic from 'next/dynamic';

import withMainLayout from '@/hocs/withMainLayout';

const InnerStrip = dynamic(() => import('@/components/Pages/ProductListing/InnerStrip'));
const Filters = dynamic(() => import('@/components/Pages/ProductListing/Filters'));
const ProductSort = dynamic(() => import('@/components/Pages/ProductListing/ProductSort'));
const ProductListing = dynamic(() => import('@/components/Pages/ProductListing/ProductListing'));

const ProductsListing: FC = () => {
    return (
        <>
            <InnerStrip />
            <section className="zb-product-listing-area">
                <div className="container-fluid px-7">
                    <div className="row">
                        <Filters />
                        <div className="col-md-9">
                            <div className="zb-product-sort-warpper">
                                <ProductSort />
                                <ProductListing />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default withMainLayout(ProductsListing)
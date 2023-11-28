import React, { FC, Fragment } from 'react';
import dynamic from 'next/dynamic';

import withMainLayout from '@/hocs/withMainLayout';

const InnerStrip = dynamic(() => import('@/components/Pages/Products/InnerStrip'));
const Filters = dynamic(() => import('@/components/Pages/Products/Filters'));
const ProductSort = dynamic(() => import('@/components/Pages/Products/ProductSort'));
const ProductListing = dynamic(() => import('@/components/Pages/Products/ProductListing'));

const ProductsListing: FC = () => {
    return (
        <Fragment>
            <InnerStrip
                title={"Rings"}
            />
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
        </Fragment>
    )
}

export default withMainLayout(ProductsListing)
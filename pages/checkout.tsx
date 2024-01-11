import React, { FC, Fragment } from 'react';
import dynamic from 'next/dynamic';

import withMainLayout from '@/hocs/withMainLayout';
const InnerStrip = dynamic(() => import('@/components/Pages/Products/InnerStrip'));
const ShippingDetails = dynamic(() => import('@/components/Pages/Checkout/ShippingDetails'));
const OrderReview = dynamic(() => import('@/components/Pages/Checkout/OrderReview'));


const Checkout: FC = () => {
    return (
        <Fragment>
            <InnerStrip
                title='CHECKOUT'
            />
            <section className="zb-checkout-area">
                <div className="container">
                    <div className="row">
                        <ShippingDetails />
                        <OrderReview />
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default withMainLayout(Checkout);
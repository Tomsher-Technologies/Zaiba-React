import React, { FC, Fragment } from 'react';
import dynamic from 'next/dynamic';

import withMainLayout from '@/hocs/withMainLayout';
const InnerStrip = dynamic(() => import('@/components/Pages/Products/InnerStrip'));
const CartList = dynamic(() => import('@/components/Pages/Cart/CartList'));
const CartSummary = dynamic(() => import('@/components/Pages/Cart/CartSummary'));

const Cart: FC = () => {
    return (
        <Fragment>
            <InnerStrip
                title='SHOPPING CART'
            />
            <section className="zb-shopping-cart">
                <div className="container">
                    <div className="row">
                        <CartList />
                        <CartSummary />
                    </div>
                </div>
            </section>

        </Fragment>
    )
}

export default withMainLayout(Cart);
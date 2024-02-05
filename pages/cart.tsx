import React, { FC, Fragment, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';
import { useSelector } from 'react-redux';

import withMainLayout from '@/hocs/withMainLayout';
const InnerStrip = dynamic(() => import('@/components/Pages/Products/InnerStrip'));
const CartList = dynamic(() => import('@/components/Pages/Cart/CartList'));
const CartSummary = dynamic(() => import('@/components/Pages/Cart/CartSummary'));

import { RootState } from '@/redux/store';

import useCart from '@/server_api/hooks/useCart';
import { APIFetch } from '@/server_api/utils/APIFetch';

const Cart: FC = () => {
    const user = useSelector((state: RootState) => state.user);
    const { getCartList, cart, isLoading_cartList } = useCart();


    useEffect(() => {
        cart.products?.length < 0 && getCartList();
    }), [];

    return (
        <Fragment>
            <InnerStrip
                title='SHOPPING CART'
                items={[
                    { label: 'Home', link: '/' },
                    { label: 'Cart' },
                ]}
            />
            <section className="zb-shopping-cart">
                <div className="container">
                    <div className="row">
                        <APIFetch
                            lengthCheckObject={cart?.products}
                            animatedLoading="cartlist"
                            isLoading={isLoading_cartList}
                            messageContent={
                                <div className='flex flex-col justify-between mb-[20px]'>
                                    <div className='flex justify-center py-[50px]'>
                                        <Image className='w-[300px] h-[290px]' src="/images/emptycart.png" alt="nodatafound"
                                            width={200}
                                            height={200}
                                        />
                                    </div>
                                    <Link href="/product-lists" className="text-[22px] font-semibold text-center hover:underline text-primary">Continue Shopping</Link>
                                </div>
                            }>
                            <CartList
                                cartProducts={cart?.products}
                            />
                            <CartSummary
                                cartSummary={{ ...cart.summary, productCount: cart?.products?.length }}
                            />
                        </APIFetch>
                    </div>
                </div>
            </section>

        </Fragment>
    )
}

export default withMainLayout(Cart);
import React, { FC, useEffect, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Box from '@mui/material/Box';

import { CartListDrawerRowProps, CartProps } from '@/types/CartProps';
import { amountFormat } from '@/utiles/functions';
import { screenWidth } from '@/utiles/constArraysAndVariables';

import { APIFetch } from '@/server_api/utils/APIFetch';

const Cart: FC<CartProps> = ({ cart, cartToggleDrawer }) => {

    return (
        <Box
            sx={{ width: screenWidth > 1024 ? 390 : (screenWidth > 480 ? 380 : '100%') }}
            role="presentation"
            className="h-full overflow-hidden"
        >
            <div className="p-3 offcanvas-end zb-slide-cart relative">
                <APIFetch
                    lengthCheckObject={cart?.products}
                >
                    <div className="offcanvas-header sticky top-3 bg-white overflow-hidden">
                        <h5 className="offcanvas-title" >
                            Shopping Cart
                        </h5>
                        <button
                            className="btn-close"
                            onClick={cartToggleDrawer(false)}
                            onKeyDown={cartToggleDrawer(false)}
                        />
                    </div>
                    <div className="offcanvas-body">
                        <div className="zb-checkout-summary">
                            <div className="zb-order-review-warpper">
                                {cart?.products?.length > 0 && cart?.products.map((product: any, index: number) => (
                                    <CartListDrawerRow
                                        product={product}
                                        key={index}
                                    />
                                ))
                                    ||
                                    <div className='flex justify-center items-center relative mt-[100px]'>
                                        <Image className='w-[300px] h-[290px]' src="/images/emptycart.png" alt="nodatafound"
                                            width={200}
                                            height={200}
                                        />
                                    </div>
                                }
                            </div>
                        </div>
                    </div>

                    {cart.products?.length > 0 &&
                        <div className={`zb-order-review-subtotal  bottom-0 p-3 sticky bg-white `}>
                            <div className="zb-cart-summary-content px-0 w-full ">
                                <div className="zb-product-amount-list mb-2">
                                    <div className='flex items-center'>
                                        <div>Subtotal(<span className='font-semibold text-[18px]'>{cart.cartCount}</span> item)</div>
                                        <div className='font-semibold text-[19px]'>&nbsp;{amountFormat(cart.summary.total)}</div>
                                    </div>
                                </div>
                                <Link href="/cart" className="btn btn-login  w-100">
                                    View Cart
                                </Link>
                                <Link href="/checkout" className="btn btn-checkout w-100 mt-3">
                                    Checkout
                                </Link>
                            </div>
                        </div>
                        ||
                        <div className="">
                            <Link href="/product-lists" className="btn btn-login  w-100">
                                Continue Shopping
                            </Link>
                        </div>
                    }
                </APIFetch>
            </div>
        </Box>

    )
}

export default Cart;

const CartListDrawerRow: FC<CartListDrawerRowProps> = ({ product }) => {

    return (
        <div className="zb-order-review-list" >
            <div className="zb-order-review-img !mr-1">
                <Link href={`/product-detail/${product.product.slug}/${product.product.sku}`}>
                    <img
                        src={product.product.image}
                        className="img-fluid "
                        alt=""
                    />
                </Link>
            </div>
            <div className="zb-order-review-info">
                <Link href={`/product-detail/${product.product.slug}/${product.product.sku}`}>
                    <h3>{product.product.name}</h3>
                </Link>
                <ul>
                    {product.product?.attributes?.length > 0 && product.product?.attributes.map((attribute: any, index: number) => (
                        <li key={index}>{attribute.name}:&nbsp;{attribute.value}</li>
                    ))}
                </ul>
                <div className="zb-order-review-price">
                    <h4>{amountFormat(product.total)}</h4>
                </div>
            </div>
        </div>
    )
}
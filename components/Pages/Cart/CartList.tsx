import React, { FC, useEffect } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { AddOutlined, RemoveOutlined } from '@mui/icons-material';

import AddToWishlistAndRemoveCart from '@/components/Pages/Cart/AddToWishlistAndRemoveCart';
import Button from '@/components/CustomComponents/Button';

import { CartListProps, CartListRowProps } from '@/types/CartProps';
import { RootState } from '@/redux/store';
import { apiEndpoints } from '@/server_api/config/api.endpoints';
import { amountFormat } from '@/utiles/functions';

import useCart from '@/server_api/hooks/useCart';

const CartList: FC<CartListProps> = ({ cartProducts }) => {
    const user = useSelector((state: RootState) => state.user);
    const { quanitityUpdate, quanitityUpdateLoading, removeCart, removeCart_cartList, clearCarts } = useCart();


    return (
        <div className="col-md-8">
            <div className="zb-cart-list">
                <div className="flex justify-between zb-cart-list-title ">
                    <span className="pull-right">
                        Cart(<b>{cartProducts?.length}</b>)
                    </span>
                    <Button className={` hover:underline cursor-pointer ${removeCart_cartList ? '!text-gray-500' : '!text-gray-600'} text-[15px]`}
                        onClick={() => clearCarts()}
                        isLoading={removeCart_cartList}
                        isLoadingColor="text-black"
                    >
                        Clear Cart</Button>
                </div>
                {cartProducts.length > 0 && cartProducts.map((product: any, index: number) => (
                    <CartListRow
                        product={product}
                        user={user}
                        quanitityUpdateLoading={quanitityUpdateLoading}
                        quanitityUpdate={quanitityUpdate}
                        removeCart={removeCart}
                        removeCart_cartList={removeCart_cartList}
                        key={index}
                    />
                ))}

            </div>
            <div className="zb-product-cart-bottom">
                <Link className="shopping-btn" href="/product-lists">
                    <i className="bi bi-arrow-left" /> Continue shopping
                </Link>
                <Link href="/checkout" className="btn btn-login">
                    Checkout
                </Link>
            </div>
        </div >

    )
}

export default CartList;

const CartListRow: FC<CartListRowProps> = ({ product, user, quanitityUpdateLoading, quanitityUpdate, removeCart, removeCart_cartList }) => {

    return (
        <div className="flex flex-col lg:flex-row bg-white shadow-sm p-2 w-full border-b border-gray-200 mb-[1px]">
            <div className="w-full lg:w-[50%] flex gap-2">
                <div className="w-[25%] lg:w-[20%]">
                    <img
                        src={product.product.image}
                        className="img-fluid"
                        alt=""
                    />
                </div>
                <div className="w-[70%] lg:w-[80%] space-y-1">
                    <div className='font-semibold text-[17px] break-words'>{product.product.name}</div>
                    <div className='font-semibold text-[15px] break-words !text-secondary'>{product.offer_tag}</div>
                    {product.product?.attributes?.length > 0 && product.product?.attributes.map((attribute: any, index: number) => (
                        <div className='text-text-gray-500' key={index}>{attribute.name}:&nbsp;{attribute.value}</div>
                    ))}
                    <div className="hidden lg:block">
                        <AddToWishlistAndRemoveCart
                            product={product}
                            user={user}
                            removeCart={removeCart}
                            removeCart_cartList={removeCart_cartList}
                        />
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-[50%] flex justify-between lg:px-[20px]">
                <div className="lg:pl-[20px] overflow-hidden">
                    <div className="zb-product-quantity-input">
                        <Button
                            className="zb-product-quantity-count zb-product-quantity-minus"
                            disabled={quanitityUpdateLoading}
                            onClick={() => {
                                quanitityUpdate({
                                    apiEndpoint: apiEndpoints.changeQuantity,
                                    cart_id: product.id,
                                    quantity: product.quantity >= 0 ? parseInt(product.quantity) - 1 : parseInt(product.quantity),
                                    action: 'minus'
                                })
                            }}
                        >
                            <RemoveOutlined className="" />
                        </Button>
                        <input
                            className="zb-product-quantity bg-white"
                            type="number"
                            name="zb-product-quantity"
                            min={1}
                            disabled
                            value={product.quantity}
                        />
                        <Button
                            className="zb-product-quantity-count zb-product-quantity-add"
                            onClick={() => {
                                quanitityUpdate({
                                    apiEndpoint: apiEndpoints.changeQuantity,
                                    cart_id: product.id,
                                    quantity: (parseInt(product.quantity, 10) + 1).toString(),
                                    action: 'plus'
                                })
                            }}
                            disabled={quanitityUpdateLoading}
                        >
                            <AddOutlined className="" />
                        </Button>
                    </div>
                </div>
                <div className="">
                    <div className='font-semibold text-[20px]'>{amountFormat(product.main_price)}</div>
                    <del className="text-muted">{amountFormat(product.stroked_price)}</del>
                </div>
            </div>
            <div className="lg:hidden px-2">
                <AddToWishlistAndRemoveCart
                    product={product}
                    user={user}
                    removeCart={removeCart}
                    removeCart_cartList={removeCart_cartList}
                />
            </div>
        </div>
    )
}
import React, { FC } from 'react';
import { useRouter } from 'next/router';

import Button from '@/components/CustomComponents/Button';

import { AddToWishlistAndRemoveCartProps } from '@/types/CartProps';

import { apiEndpoints } from '@/server_api/config/api.endpoints';
import useWishlist from '@/server_api/hooks/useWishlist';

const AddToWishlistAndRemoveCart: FC<AddToWishlistAndRemoveCartProps> = ({ product, removeCart, user, removeCart_cartList }) => {
    const { addToWishlist, addToWishlist_Loading } = useWishlist();
    const router = useRouter();

    const handle_moveToWishlist = async () => {
        if ((user && user?.user_id)) {
            await addToWishlist({
                apiEndpoint: apiEndpoints.addWishlists,
                product_slug: product.product.slug,
                sku: product.product.sku,
            });
            removeCart({
                apiEndpoint: apiEndpoints.removeCart,
                cart_ids: product.id
            })
        } else {
            router.push('/login');
        }
    };

    return (
        <div className="zb-cart-action !mt-3">
            <Button className="zb-cart-action"
                disabled={removeCart_cartList || addToWishlist_Loading}
                onClick={handle_moveToWishlist}
            >
                {!removeCart_cartList && <i className="bi bi-heart" />} <span>Move to Wishlist</span>
            </Button>
            <Button className="zb-cart-action"
                disabled={removeCart_cartList}
                isLoadingColor='text-black text-[12px]'
                onClick={() =>
                    removeCart({
                        apiEndpoint: apiEndpoints.removeCart,
                        cart_ids: product.id
                    })
                }
            >
                {!removeCart_cartList && <i className="bi bi-trash3" />} <span className='text-left ml-1'>Remove</span>
            </Button>
        </div>
    )
}

export default AddToWishlistAndRemoveCart;

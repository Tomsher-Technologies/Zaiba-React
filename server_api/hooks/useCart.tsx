import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMutation, useQuery } from "@tanstack/react-query";

import { setCart, clearCart } from "@/redux/cartSlice";
import { setMessages } from "@/redux/messagesSlice";
import { RootState } from "@/redux/store";

import { storeData, } from "@/server_api/storage";
import { apiEndpoints } from "@/server_api/config/api.endpoints";
import PostAPI from '@/server_api/apifunctions/apipost';
import FetchAPIData from '@/server_api/apifunctions/apifetch';

const useCart = () => {
    const cart = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();

    const { data: addToCartResponse, mutate: addToCart, isLoading: addToCart_Loading, data, error } = useMutation(PostAPI.postAPI, {
        onSuccess: (response: any) => {
            if (response.success) {
                getCartList();
                dispatch(setMessages({
                    messages: 'Successfully added to cart',
                    type: 'success',
                    from: 'cart'
                }));
            } else {
                dispatch(setMessages({
                    messages: response.message,
                    type: 'error'
                }));
            }
        },
        onError: (error: any) => {
            getCartList();
            dispatch(setMessages({
                messages: error || error?.message || 'Something went wrong!',
                type: 'error',
                from: 'cart'
            }));
        },
    });

    const { mutate: quanitityUpdate, isLoading: quanitityUpdateLoading, } = useMutation(PostAPI.postAPI, {
        onSuccess: (response: any) => {
            if (response.status) {
                getCartList();
                dispatch(setMessages({
                    messages: 'Successfully updated cart',
                    type: 'success',
                    from: 'cart'
                }));
            } else {
                dispatch(setMessages({
                    messages: response.message,
                    type: 'error',
                    from: 'cart'
                }));
            }
        },
        onError: (error: any) => {
            getCartList();
            dispatch(setMessages({
                messages: error || error?.message || 'Something went wrong!',
                type: 'error',
                from: 'cart'
            }));
        },
    });

    const { data: removeCartResponse, mutate: removeCart, isLoading: removeCart_cartList } = useMutation(PostAPI.postAPI, {
        onSuccess: (response: any) => {
            if (response.status) {
                getCartList();
                dispatch(setMessages({
                    messages: 'Successfully updated cart',
                    type: 'success',
                    from: 'cart'
                }));
            } else {
                dispatch(setMessages({
                    messages: response.message,
                    type: 'error',
                    from: 'cart'
                }));
            }
        },
        onError: (error: any) => {
            getCartList();
            dispatch(setMessages({
                messages: error || error?.message || 'Something went wrong!',
                type: 'error',
                from: 'cart'
            }));
        },
    });

    const clearCarts = async () => {
        const idsString = cart.products?.map(cart => cart.id).join(',');
        if (idsString) {
            await removeCart({
                apiEndpoint: apiEndpoints.removeCart,
                cart_ids: idsString
            });
            console.log('removeCartResponse', removeCartResponse);

            if (removeCartResponse?.status) {
                getCartList();
                dispatch(setMessages({
                    messages: removeCartResponse?.message,
                    type: 'success',
                    from: 'cart'
                }));
            } else {
                dispatch(setMessages({
                    messages: removeCartResponse?.message,
                    type: 'error',
                    from: 'cart'
                }));
            }
            console.log(idsString);
        }
    }


    const { refetch: getCartList, isLoading: isLoading_cartList } = useQuery({
        queryKey: [apiEndpoints.cartList],
        queryFn: () => FetchAPIData.fetchAPIData({ apiEndpoint: apiEndpoints.cartList }),
        onSuccess: (response) => {
            if (response.data) {
                dispatch(setCart({ ...response.data, cartCount: response.data?.products?.length }));
                storeData('zaiba_cart', response.data);
            }
        },
        // enabled: false
    });

    return { cart, setCart, getCartList, isLoading_cartList, addToCart, addToCartResponse, addToCart_Loading, quanitityUpdate, quanitityUpdateLoading, removeCart, removeCart_cartList, clearCarts };
};

export default useCart;
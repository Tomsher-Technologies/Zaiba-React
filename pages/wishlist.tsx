import React, { FC, Fragment, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AddShoppingCartOutlined, Close } from '@mui/icons-material';
import { Checkbox } from '@mui/material';

import Button from '@/components/CustomComponents/Button';
import AlertDialogSlide from '@/components/CustomComponents/AlertDialogSlide';
import Error from '@/components/alerts/Error';
const InnerStrip = dynamic(() => import('@/components/Pages/Products/InnerStrip'));

import withMainLayout from '@/hocs/withMainLayout';
import { RootState } from '@/redux/store';
import withAuthLayout from '@/hocs/withAuthLayout';
import { WishlistRowProps } from '@/types/WishlistProps';
import { setMessages } from '@/redux/messagesSlice';

import { apiEndpoints } from '@/server_api/config/api.endpoints';
import FetchAPIData from '@/server_api/apifunctions/apifetch';
import { APIFetch } from '@/server_api/utils/APIFetch';
import useWishlist from '@/server_api/hooks/useWishlist';
import PostAPI from '@/server_api/apifunctions/apipost';
import useCart from '@/server_api/hooks/useCart';
import { amountFormat } from '@/utiles/functions';


const Wishlist: FC = () => {

    const user = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();

    const { addToWishlist, addToWishlist_Loading } = useWishlist();
    const { addToCart_Loading, addToCart, addToCartResponse } = useCart();
    const router = useRouter();

    const [movingToCartSlug, setMovingToCartSlug] = useState<string>('');
    const [movingToCartSku, setMovingToCartSku] = useState<string>('');

    const { data: wishlistList, refetch: getWishlistList, isLoading: isLoading_WishlistList } = useQuery({
        queryKey: [apiEndpoints.addWishlists],
        queryFn: () => FetchAPIData.fetchAPIData({ apiEndpoint: apiEndpoints.addWishlists }),
        onSuccess: (response) => {
        },
        enabled: Boolean(user.id)
    });

    const { mutate: removeWishlist, isLoading: removewishlist_wishlistList } = useMutation(PostAPI.postAPI, {
        onSuccess: (response: any) => {
            if (response.status) {
                getWishlistList();
                dispatch(setMessages({
                    messages: 'Successfully clear all the wishlist',
                    type: 'success',
                    from: 'wishlist'
                }));
            } else {
                dispatch(setMessages({
                    messages: response.message,
                    type: 'error',
                    from: 'wishlist'
                }));
            }
        },
        onError: (error: any) => {
            getWishlistList();
            dispatch(setMessages({
                messages: error || error?.message || 'Something went wrong!',
                type: 'error',
                from: 'wishlist'
            }));
        },
    });

    useEffect(() => {
        updateWishlistData();
    }, [addToCartResponse]);

    const handle_addToWishlist = async (slug: string, sku: string) => {
        if ((user && user?.user_id)) {
            await addToWishlist({
                apiEndpoint: apiEndpoints.addWishlists,
                product_slug: slug,
                sku: sku,
            });
            setMovingToCartSlug('');
            setMovingToCartSku('');
        } else {
            router.push('/signin');
        }
    }

    const handle_removeWishlist = async () => {
        if ((wishlistList?.data.length > 0) && (user && user?.user_id)) {
            const idsString = wishlistList?.data?.map((wishlist: any) => wishlist.id).join(',');
            if (idsString) {
                await removeWishlist({
                    apiEndpoint: apiEndpoints.wishlistRemove,
                    list_ids: idsString
                });
            }
        }
    }

    const updateWishlistData = async () => {
        if (addToCartResponse?.success) {
            handle_addToWishlist(movingToCartSlug, movingToCartSku);
        }
    }

    return (
        <Fragment>
            <InnerStrip
                title={"Wishlist"}
                items={[
                    { label: 'Home', link: '/' },
                    { label: 'Wishlist' },
                ]}
            />
            <section className="Wishlist-list-area mt-3">
                <div className="container">

                    <APIFetch
                        lengthCheckObject={wishlistList?.data}
                        isLoading={isLoading_WishlistList}
                        animatedLoading="cartlist"
                        messageContent={
                            <div className='flex flex-col justify-between mb-[20px]'>
                                <div className='flex justify-center py-[50px]'>
                                    <Image className='w-[300px] h-[290px]' src="/images/wishlist_.png" alt="nodatafound"
                                        width={200}
                                        height={200}
                                    />
                                </div>
                                <Link href="/product-lists" className="text-[22px] font-semibold text-center hover:underline text-primary">Continue Shopping</Link>
                            </div>
                        }>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 gap-2">
                            {wishlistList?.data.map((product: any, index: number) => (
                                <WishlistRow
                                    product={product.product}
                                    addToWishlist_Loading={addToWishlist_Loading}
                                    handle_addToWishlist={handle_addToWishlist}
                                    addToCart_Loading={addToCart_Loading}
                                    addToCart={addToCart}
                                    setMovingToCartSlug={setMovingToCartSlug}
                                    setMovingToCartSku={setMovingToCartSku}
                                    key={index}
                                />

                            ))}
                        </div>
                        <div className="flex justify-end">
                            <div>
                                <Button className="!bg-secondary w-full text-black px-4 py-2 text-[18px]  mt-3"
                                    onClick={handle_removeWishlist}
                                    isLoading={removewishlist_wishlistList}
                                >
                                    Clear All
                                </Button>
                            </div>
                        </div>
                    </APIFetch>
                </div>
            </section>

        </Fragment>
    )
}

export default withAuthLayout(Wishlist);

const WishlistRow: FC<WishlistRowProps> = ({ product, addToWishlist_Loading, handle_addToWishlist, setMovingToCartSlug, setMovingToCartSku, addToCart_Loading, addToCart }) => {


    const handle_movingToAddToCart = (slug: string) => {
        setMovingToCartSlug(slug);
        setMovingToCartSku(product.sku);
        addToCart({
            apiEndpoint: apiEndpoints.cartList,
            product_slug: slug,
            sku: product.sku,
            quantity: 1
        });
    };

    return (
        <div className="product-card">
            <Link className='relative' href={`/product-detail/${product.slug}/${product.sku}`}>
                <Image
                    className="img-fluid max-h-[250px] min-h-[250px] "
                    src={(product as any).thumbnail_image}
                    alt={product.name}
                    width={700}
                    height={100}
                />
            </Link>
            <Link className="product-title" href={`/product-detail/${product.slug}/${product.sku}`}>
                {product.name}
            </Link>
            <div className="font-semibold text-[18px]">
                {amountFormat(product.main_price)}&nbsp;&nbsp;
                {product.stroked_price && product.stroked_price > product.main_price && (
                    <del className='text-[16px]'>{amountFormat(product.stroked_price)}</del>
                )}
            </div>
            <div className='flex  flex-col md:flex-row w-full gap-1'>
                <div className='md:w-1/2'>
                    <Button className="!bg-primary w-full text-white py-2 text-[18px]  mt-3"
                        onClick={() => handle_movingToAddToCart(product.slug)}
                        isLoading={addToCart_Loading}>
                        Move to Cart
                    </Button>
                </div>
                <div className='md:w-1/2'>
                    <Button className="!bg-gray-400 w-full text-black py-2 text-[18px]  mt-3"
                        onClick={() => handle_addToWishlist(product.slug, product.sku)}
                        isLoading={addToWishlist_Loading}
                    >
                        Remove
                    </Button>
                </div>
            </div>
        </div>
    )
}
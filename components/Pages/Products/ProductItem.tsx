import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useQueryClient } from '@tanstack/react-query';
import { Favorite, FavoriteBorder } from '@mui/icons-material';

import Button from '@/components/CustomComponents/Button';

import { ProductItemProps } from '@/types/ProductsProps';
import { RootState } from '@/redux/store';
import { amountFormat } from '@/utiles/functions';

import { apiEndpoints } from '@/server_api/config/api.endpoints';
import useWishlist from '@/server_api/hooks/useWishlist';

const ProductItem: FC<ProductItemProps> = ({ product }) => {
    const router = useRouter();
    const user = useSelector((state: RootState) => state.user);

    const { addToWishlist, addToWishlist_Loading } = useWishlist();

    const queryClient = useQueryClient();

    const wishlistList = queryClient.getQueryData([apiEndpoints.addWishlists]);

    const handle_addToWishlist = () => {
        if ((user && user?.user_id)) {
            addToWishlist({
                apiEndpoint: apiEndpoints.addWishlists,
                product_slug: product.slug,
                sku: product.sku,
            });
        } else {
            router.push('/login');
        }
    };

    return (

        <div className=" overflow-hidden">
            <div className="product-card !min-h-[370px] !max-h-[370px] relative">
                <div className=' absolute z-30 right-5' onClick={() => !addToWishlist_Loading && handle_addToWishlist()}>
                    {wishlistList && (wishlistList as any)?.data?.some((wishlist: any) => (wishlist.product.slug === product.slug && wishlist.product.sku === product.sku)) &&
                        <Favorite className={`${addToWishlist_Loading ? 'text-[#aabfb6]' : 'text-primaryhover hover:text-primary'} h-9 w-9 cursor-pointer`} />
                        ||
                        <FavoriteBorder className={`${addToWishlist_Loading ? 'text-[#aabfb6]' : 'text-primaryhover hover:text-primary'} h-9 w-9 cursor-pointer`} />
                    }
                </div>
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
                        <del>{amountFormat(product.stroked_price)}</del>
                    )}
                </div>
                <div className="product-add-cart-btn-wrapper">
                    <Button className="btn btn-cart !px-10 w-full">
                        Add to Cart
                    </Button>
                </div>
                {/* <Button href="#" className="btn btn-add-cart w-100 mt-3 rounded-md">
                    Add to Cart
                </Button> */}
            </div>
        </div>

    )
}

export default ProductItem;
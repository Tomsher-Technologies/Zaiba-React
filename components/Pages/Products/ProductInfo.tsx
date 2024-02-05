import React, { FC, Fragment, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { useQueryClient } from '@tanstack/react-query';
import { AddOutlined, Favorite, FavoriteBorder, RemoveOutlined } from '@mui/icons-material';

import Button from '@/components/CustomComponents/Button';

import { ProductInfoProps } from '@/types/ProductsProps';
import { amountFormat, capitalizeWordsFirstLetter } from '@/utiles/functions';
import { RootState } from '@/redux/store';

import useCart from '@/server_api/hooks/useCart';
import useWishlist from '@/server_api/hooks/useWishlist';
import { apiEndpoints } from '@/server_api/config/api.endpoints';

const ProductInfo: FC<ProductInfoProps> = ({ sku, productDetails, isImageHovered, imageTarget, ssrLoading }) => {
    const router = useRouter();
    const user = useSelector((state: RootState) => state.user);
    const wishlist = useSelector((state: RootState) => state.wishlist);
    const queryClient = useQueryClient();

    const { addToCart_Loading, addToCart } = useCart();
    const { addToWishlist, addToWishlist_Loading } = useWishlist();

    const [disableCartAndWishlist, setDisableCartAndWishlist] = useState<boolean>(false);
    const [selectedAttribute, setSelectedAttribute] = useState<Array<string | undefined>>(Object.values(productDetails?.current_attribute).map(String).reverse());
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [quantity, setQuantity] = useState<number>(1);

    const wishlistList = queryClient.getQueryData([apiEndpoints.addWishlists]);

    useEffect(() => {
        setIsLoading(ssrLoading)
    }), [ssrLoading];

    useEffect(() => {
        selectedAttribute && findProductSKU();
    }, [selectedAttribute]);

    const findProductSKU = async () => {
        if ((productDetails?.product_attributes?.length > 0) && (productDetails?.varient_products?.length > 0)) {
            if (selectedAttribute.length === productDetails.product_attributes.length) {

                const matchingVariant = productDetails.varient_products.find((variant: any) => {
                    const values: any = Object.values(variant)[0];
                    return selectedAttribute.every((attr) => values.includes(attr));
                });
                if (matchingVariant) {
                    const key = Object.keys(matchingVariant)[0];
                    if (key !== '') {
                        setDisableCartAndWishlist(false);
                        if (sku !== key) {
                            setIsLoading(true);
                        }
                        router.push(`/product-detail/${productDetails.slug}/${key}`);
                    } else {
                        setDisableCartAndWishlist(true);
                    }
                } else {
                    if (!selectedAttribute.includes(undefined)) {
                        setDisableCartAndWishlist(true);
                    }
                }
                // console.log('selectedAttribute', matchingVariant);
            } else {
                // console.log('select all the attributes');
            }
        }
    }

    const handleQuantityDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleQuantityIncrease = () => {
        setQuantity(quantity + 1);
    };

    const handle_addToCart = () => {
        addToCart({
            apiEndpoint: apiEndpoints.cartList,
            product_slug: productDetails.slug,
            sku: sku,
            quantity: quantity
        });
    };

    const handle_addToWishlist = () => {
        if ((user && user?.user_id)) {
            addToWishlist({
                apiEndpoint: apiEndpoints.addWishlists,
                product_slug: productDetails.slug,
                sku: sku,
            });
        } else {
            router.push('/login');
        }
    };


    return (
        <div className="col-md-5">
            {isImageHovered &&
                <canvas
                    ref={imageTarget}
                    className="absolute pointer-events-none h-[500px] w-[500px]  z-10"
                />
            }
            <div className="zb-product-info-warpper">
                <div className="zb-product-info">
                    <h3>{productDetails.name}</h3>
                    <h5>
                        {amountFormat(productDetails.main_price)} {parseInt(productDetails.stroked_price) > parseInt(productDetails.main_price) && <span className="zb-actual-price">{amountFormat(productDetails.stroked_price)}</span>}
                        {productDetails.offer_tag !== null && <span className="zb-price-offer">( {productDetails.offer_tag})</span>}
                    </h5>
                    <div dangerouslySetInnerHTML={{ __html: productDetails.description }} />
                </div>
                <div className="zb-product-size-prize-warpper">
                    {productDetails?.product_attributes?.length > 0 && productDetails.product_attributes.map((attribute: any, index: number) => (
                        <div className="zb-product-size" key={index}>
                            <label htmlFor="#">{attribute.name}:</label>
                            <select
                                className="form-select"
                                onChange={(event: any) =>
                                    setSelectedAttribute((prevSelectedAttribute) => {
                                        const updatedAttribute = [...prevSelectedAttribute];
                                        updatedAttribute[index] = event.target.value;
                                        return updatedAttribute;
                                        // return updatedAttribute.filter((value) => value !== '');
                                    })
                                }
                                disabled={isLoading}
                            // value={selectedAttribute[index] !== undefined ? selectedAttribute[index] : ''}
                            >

                                {attribute.values?.length > 0 && attribute.values.map((attributeValue: any, attributeValueIndex: number) => (
                                    <option
                                        key={attributeValueIndex}
                                        value={attributeValue.id}
                                        selected={selectedAttribute.some((value: any) => Number(value) === Number(attributeValue.id))}
                                    >
                                        {attributeValue.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    ))}

                </div>
                <div className="zb-product-size-prize-warpper !flex !flex-col !justify-start !items-start">
                    <h4>Price Breakup:</h4>
                    <div className='flex -mt-4 gap-2'>
                        {Object.keys(productDetails.price_breakup).map((key, index) => (
                            <div className="zb-product-size" key={index}>
                                <div className="zb-price-count-warpper">
                                    <span className="gold-title w-full text-center">{capitalizeWordsFirstLetter(key)}</span>
                                    <span className="gold-count w-full text-center">{productDetails.price_breakup[key]}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {!disableCartAndWishlist &&
                    <Fragment>
                        {productDetails?.quantity > 0 &&
                            <Fragment>
                                <div className="zb-product-quantity-warpper">
                                    <div className="zb-product-quantity-input">
                                        <Button
                                            className="zb-product-quantity-count zb-product-quantity-minus"
                                            isLoading={isLoading}
                                            onClick={handleQuantityDecrease}
                                        >
                                            <RemoveOutlined className="" />
                                        </Button>
                                        <input
                                            className="zb-product-quantity"
                                            type="number"
                                            name="zb-product-quantity"
                                            min={1}
                                            disabled
                                            value={quantity}
                                        />
                                        <Button
                                            className="zb-product-quantity-count zb-product-quantity-add"
                                            onClick={handleQuantityIncrease}
                                        >
                                            <AddOutlined className="" />
                                        </Button>
                                    </div>
                                    <Button className="btn btn-cart"
                                        isLoading={isLoading || addToCart_Loading}
                                        onClick={handle_addToCart}
                                    >
                                        Add to Cart
                                    </Button>
                                </div>
                                <div className="zb-product-wish-warpper">
                                    <a onClick={() => handle_addToWishlist()}>
                                        <span className='cursor-pointer'>{wishlistList && (wishlistList as any)?.data?.some((wishlist: any) => (wishlist.product.slug === productDetails.slug && wishlist.product.sku === productDetails.sku)) &&
                                            <>
                                                <Favorite className="text-primaryhover hover:text-primary h-9 w-9" />   Remove from wishlist
                                            </>
                                            ||
                                            <>
                                                <FavoriteBorder className="text-primaryhover hover:text-primary h-9 w-9" />   Add to wishlist
                                            </>
                                        }  </span>
                                    </a>
                                </div>
                            </Fragment>
                            ||
                            <div className="text-red-500 font-semibold text-[18px] my-5 cursor-default">Out of stock! </div>
                        }
                    </Fragment>
                    ||
                    <div className="text-red-500 font-semibold text-[18px] my-5 cursor-default">The selected option not available now! Please choose another one </div>
                }


                <div className="product-short-details">
                    <h4>DETAILS</h4>
                    <div className="short-details-inner">
                        <ul>
                            {Object.entries({
                                metal_weight: productDetails?.metal_weight,
                                purity: productDetails?.purity + 'K',
                                metal_type: productDetails?.metal_type,
                                stone_type: productDetails?.stone_type,
                                stone_count: productDetails?.stone_count,
                                stone_weight: productDetails?.stone_weight,
                                stone_price: amountFormat(productDetails?.stone_price),
                                design: productDetails?.design,
                                design_category: productDetails?.design_category,
                            }).map(([key, value], index) => (
                                value && (
                                    <li key={index}>
                                        {capitalizeWordsFirstLetter(key)}: <b>{value}</b>
                                    </li>
                                )
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default ProductInfo
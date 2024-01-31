import React, { FC } from 'react';
import Link from 'next/link';

import Button from '@/components/CustomComponents/Button';

import { ProductItemProps } from '@/types/ProductsProps';
import { amountFormat } from '@/utiles/functions';
import Image from 'next/image';

const ProductItem: FC<ProductItemProps> = ({ product }) => {

    return (

        <div className=" overflow-hidden">
            <div className="product-card !min-h-[370px] !max-h-[370px]">
                <Link className='relative' href={`/product-detail/${product.slug}/${product.sku}`}>
                    <Image
                        className="img-fluid max-h-[250px] min-h-[250px] "
                        src={(product as any).thumbnail_image}
                        alt={product.name}
                        width={700}
                        height={100}
                    />
                </Link>
                <Link href={"/product-detail/" + product.slug}>
                    {product.name}
                </Link>
                <h4 className="product-price">{amountFormat(product.main_price)}&nbsp;&nbsp;
                    {product.main_price > product.stroked_price && <del>{amountFormat(product.stroked_price)}</del>}
                </h4>
                <div className="product-add-cart-btn-wrapper">
                    <Button href="#" className="btn btn-cart !px-10">
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
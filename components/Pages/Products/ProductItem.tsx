import React, { FC } from 'react';
import Link from 'next/link';

import Button from '@/components/CustomComponents/Button';

import { ProductItemProps } from '@/types/ProductsProps';
import { amountFormat } from '@/utiles/functions';
import Image from 'next/image';

const ProductItem: FC<ProductItemProps> = ({ product }) => {

    return (

        <div className="col-md-3   max-h-[500px] overflow-hidden">
            <div className="product-card">
                <Link className='relative' href={"/product-detail/" + product.slug}>
                    <Image
                        className="img-fluid min-h-[310px]"
                        src={process.env.NEXT_PUBLIC_IMAGE_URL + (product as any).thumbnail_img}
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
                <Button href="#" className="btn btn-add-cart w-100 mt-3 rounded-md">
                    Add to Cart
                </Button>
            </div>
        </div>

    )
}

export default ProductItem;
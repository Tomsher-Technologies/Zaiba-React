import React, { FC } from 'react';
import Link from 'next/link';

import { ProductItemProps } from '@/types/ProductsProps';
import { amountFormat } from '@/utiles/functions';

const ProductItem: FC<ProductItemProps> = ({ product }) => {
    return (

        <div className="col-md-3 cursor-pointer">
            <div className="product-card">
                <Link href={"/product-detail/" + product.slug}>
                    <img
                        className="img-fluid"
                        src={'http://127.0.0.1:8000/' + (product as any).thumbnail_image}
                        alt={product.name}
                    />
                </Link>
                <Link href={"/product-detail/" + product.slug}>
                    {product.name}
                </Link>
                <h4 className="product-price">{amountFormat(product.main_price)}&nbsp;&nbsp;<del>{amountFormat(product.stroked_price)}</del></h4>
            </div>
        </div>

    )
}

export default ProductItem;
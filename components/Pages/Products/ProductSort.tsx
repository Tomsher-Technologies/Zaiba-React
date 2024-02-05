import React, { FC } from 'react';

import { orderBy } from '@/utiles/constArraysAndVariables';
import { ProductSortProps } from '@/types/ProductsProps';

const ProductSort: FC<ProductSortProps> = ({ uRS }) => {
    return (
        <div className="zb-filter-label-group">
            <form action="#">
                <div className="row gap-0 align-items-center justify-content-end">
                    <div className="col-auto">
                        <label htmlFor="inputPassword6" className="col-form-label">
                            Sort By :
                        </label>
                    </div>
                    <div className="col-auto">
                        <select className="form-select" aria-label="Default select example"
                            onChange={(value: any) =>
                                uRS.filterChanged({
                                    ...uRS.filterValues,
                                    order_by: value.target.value,
                                })}
                        >
                            {orderBy.map((order: any, index: number) => (
                                <option
                                    key={index}
                                    selected={order.value === (uRS.filterValues.order_by || 'latest')}
                                    value={order.value}

                                >{order.title}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ProductSort
import React, { FC } from 'react';

import { priceRange } from '@/utiles/constArraysAndVariables';

const PriceFilter: FC<{ uRS: any }> = ({ uRS }) => {

   
    return (
        <div className="zb-product-list-option-items">
            <h3>Price</h3>
            <ul>
                {priceRange.map((price: any, index: number) => {

                    return (
                        <li key={index}>
                            <input
                                className="form-check-input"
                                type="radio"
                                id={`min_price-max_price-${index}`}
                                checked={parseInt(price.min_price) === parseInt(uRS.filterValues.min_price) && parseInt(price.max_price) === parseInt(uRS.filterValues.max_price)}
                                onChange={() => {
                                    uRS.filterChanged({
                                        ...uRS.filterValues,
                                        min_price: price.min_price,
                                        max_price: price.max_price,
                                    });
                                }}
                            />
                            <label className="form-check-label" htmlFor="Upto5">
                                {price.title}
                            </label>
                            <span className="zb-filyter-count">(4)</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default PriceFilter;
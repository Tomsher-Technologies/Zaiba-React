import React, { FC, useEffect, useState } from 'react';

import { CategoriesFilterProps } from '@/types/ProductsProps';
import { useRouter } from 'next/router';

const CategoriesFilter: FC<CategoriesFilterProps> = ({ categoryLists, uRS }) => {
    
    return (
        <div className="zb-product-list-option-items">
            <h3>Categories</h3>
            <div className="zb-filter-category-search">
                <form action="#">
                    <input
                        type="search"
                        className="form-control"
                        placeholder="Search Categories"
                        aria-label="Category Search"
                    />
                    <span className="zb-filter-search-icon">
                        <i className="bi bi-search" />
                    </span>
                </form>
            </div> 

            <ul>
                {categoryLists.map((category: any, index: number) => (
                    <li key={index}>
                        <input
                            className="form-check-input"
                            type="radio"
                            id={`category-${index}`} 
                            name="category" 
                            checked={category.slug === uRS.filterValues.category} 
                            onChange={() => {
                                uRS.filterChanged({
                                    ...uRS.filterValues,
                                    category: category.slug,
                                });
                            }} 
                        />
                        <label className="form-check-label" htmlFor={`category-${index}`}>
                            {category.name}
                        </label>
                        <span className="zb-filyter-count">(4)</span>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default CategoriesFilter;
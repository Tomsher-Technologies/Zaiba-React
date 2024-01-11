import React, { FC } from 'react';

import { CategoriesFilterProps } from '@/types/ProductsProps';

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
                            type="checkbox"
                            defaultValue=""
                            id="Pendants"
                        />
                        <label className="form-check-label" htmlFor={category.name}>
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
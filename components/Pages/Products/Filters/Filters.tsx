import React, { FC } from 'react';
import dynamic from 'next/dynamic';
import { useQuery } from '@tanstack/react-query';

const BrandsFilter = dynamic(() => import('@/components/Pages/Products/Filters/BrandsFilter'));
const DiscountFilter = dynamic(() => import('@/components/Pages/Products/Filters/DiscountFilter'));
const CategoriesFilter = dynamic(() => import('@/components/Pages/Products/Filters/CategoriesFilter'));

import { FilterBlockProps } from '@/types/ProductsProps';

import { apiEndpoints } from '@/server_api/config/api.endpoints';
import FetchAPIData from '@/server_api/apifunctions/apifetch';
import { APIFetch } from '@/server_api/utils/APIFetch';

const Filters: FC<FilterBlockProps> = ({ uRS, }) => {

    const { data: brandLists, isLoading: brandLists_loading } = useQuery({
        queryKey: [apiEndpoints.brandLists + 'brands'],
        queryFn: () => FetchAPIData.fetchAPIData({ apiEndpoint: apiEndpoints.brandLists }),
    });

    const { data: categoryLists, isLoading: categoryLists_loading } = useQuery({
        queryKey: [apiEndpoints.categoryLists + 'categories'],
        queryFn: () => FetchAPIData.fetchAPIData({ apiEndpoint: apiEndpoints.categoryLists }),
    });


    return (
        <div className="col-md-3">
            <div className="zb-product-filter-warpper">
                <div className="zb-filter-list-label">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={21}
                        height={20}
                        viewBox="0 0 21 20"
                        fill="none"
                    >
                        <g clipPath="url(#clip0_665_1295)">
                            <path
                                d="M12.7951 12L20.7439 4V0H0.87207V4L8.82079 12V20L12.7951 16V12Z"
                                fill="#777777"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_665_1295">
                                <rect
                                    width="19.8718"
                                    height={20}
                                    fill="white"
                                    transform="translate(0.87207)"
                                />
                            </clipPath>
                        </defs>
                    </svg>
                    <h4>Filters</h4>
                </div>
                <div className="zb-filter-list-options">
                    <APIFetch lengthCheckObject={brandLists?.data} isLoading={brandLists_loading}>
                        <BrandsFilter
                            uRS={uRS}
                            brandLists={brandLists?.data}
                        />
                    </APIFetch>
                    <DiscountFilter />
                    <APIFetch lengthCheckObject={categoryLists?.data} isLoading={categoryLists_loading}>
                        <CategoriesFilter
                            uRS={uRS}
                            categoryLists={categoryLists?.data}
                        />
                    </APIFetch>
                    <div className="zb-product-list-option-items">
                        <h3>Price</h3>
                        ...
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Filters
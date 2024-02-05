import React, { FC, useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import { useMediaQuery } from '@mui/material';

const BrandsFilter = dynamic(() => import('@/components/Pages/Products/Filters/BrandsFilter'));
const PriceFilter = dynamic(() => import('@/components/Pages/Products/Filters/PriceFilter'));
const CategoriesFilter = dynamic(() => import('@/components/Pages/Products/Filters/CategoriesFilter'));

import { FilterBlockProps } from '@/types/ProductsProps';

import { apiEndpoints } from '@/server_api/config/api.endpoints';
import FetchAPIData from '@/server_api/apifunctions/apifetch';
import { APIFetch } from '@/server_api/utils/APIFetch';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';

const Filters: FC<FilterBlockProps> = ({ uRS }) => {
    const router = useRouter();
    const isSmallScreen = useMediaQuery('(max-width:764px)');
    // const isMediumScreen = useMediaQuery('(min-width:601px) and (max-width:960px)');
    // const isLargeScreen = useMediaQuery('(min-width:961px)');

    const [filterBlockEnable, setFilterBlockEnable] = useState<boolean>(true)

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
                <div className="!w-full flex justify-between items-center zb-filter-list-label sm:cursor-pointer md:cursor-default" onClick={() => isSmallScreen && setFilterBlockEnable(!filterBlockEnable)} >
                    <div className='!w-full flex justify-between items-center'>
                        <div className='flex items-center gap-3'>
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
                        <div className="cursor-pointer hover:underline hover:text-black" onClick={() => {
                            router.push(`/product-lists`)
                        }} >
                            Clear Filter
                        </div>
                    </div>
                    <div className="md:hidden">
                        {filterBlockEnable &&
                            <KeyboardArrowUp className='text-[22px]' />
                            ||
                            <KeyboardArrowDown className='text-[22px]' />}
                    </div>
                </div>
                {filterBlockEnable &&
                    <div className="zb-filter-list-options">
                        <APIFetch lengthCheckObject={brandLists?.data} isLoading={brandLists_loading}>
                            <BrandsFilter
                                uRS={uRS}
                                brandLists={brandLists?.data}
                            />
                        </APIFetch>
                        <PriceFilter
                            uRS={uRS}
                        />
                        <APIFetch lengthCheckObject={categoryLists?.data} isLoading={categoryLists_loading}>
                            <CategoriesFilter
                                uRS={uRS}
                                categoryLists={categoryLists?.data}
                            />
                        </APIFetch>
                    </div>
                }
            </div>
        </div>

    )
}

export default Filters
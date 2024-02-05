import { useState, useEffect, SetStateAction } from 'react';
import { useRouter } from 'next/router';

import { MyPagination as MyPaginationComponent } from '@/utiles/pagination';
import { generatePaginationConfig } from '@/utiles/functions';

interface UseReportParams {
    defaultfilterValues?: any; // Adjust the type as needed
    page_size?: string;
    sb?: string;
    limit?: number;
    next_offset?: number;
    fetchFunction?: () => void;
    combinedFilters?: Record<string, string>;
    pagePath?: string;
}

const useReport = (params: UseReportParams = {}) => {
    const router = useRouter();

    const defaultfilterValue = {
        ...(params.defaultfilterValues || {}),
        ...(router.query ? { ...router.query } : {}),
        page_size: params.page_size || router?.query?.page_size || '1',
        // sb: params.sb || router?.query?.sb || '',
        limit: params.limit || router?.query?.limit || 10,
        // next_offset: params.next_offset || router?.query?.next_offset,
    };

    const [filterValues, setFilterValues] = useState<any>(defaultfilterValue);
    const [recordCount, setRecordCount] = useState<number | null>(null);
    const [filterBlockShow, setFilterBlockShow] = useState<boolean>(false);

    const combinedFilters = params.combinedFilters || {};

    useEffect(() => {
        if (router.isReady && router.query) {
            setFilterValues({
                ...defaultfilterValue,
                ...router.query,
            });
        }
    }, [router]);

    useEffect(() => {
        if (router.isReady) {
            params.fetchFunction && params.fetchFunction();
        }
    }, [filterValues]);

    const sortClick = (column: string) => {
        let thisColumn = null;
        let thisDirection = null;
        if (column.endsWith('asc')) {
            thisColumn = column.substring(0, column.length - 3);
            thisDirection = 'asc';
        } else if (column.endsWith('desc')) {
            thisColumn = column.substring(0, column.length - 4);
            thisDirection = 'desc';
        } else if (column == 'Sort') {
            thisColumn = '';
            thisDirection = '';
        } else {
            thisColumn = column;
            thisDirection = null;
        }

        if (thisDirection != null) {
            filterChanged({
                ...filterValues,
                sb: (thisColumn + ' ' + thisDirection).trim(),
                page_size: 1,
            }, true);
        } else {
            filterChanged({
                ...filterValues,
                sb: (filterValues.sb == thisColumn + ' asc'
                    ? thisColumn + ' desc'
                    : thisColumn + ' asc'
                ).trim(),
                page_size: 1,
            }, true);
        }
    };
    // console.log('context.query?.next_offset', params.next_offset);

    const getCombinedParams = () => {
        return {
            ...filterValues,
            ...checkFilterValuesAvailability(),
            cnt: filterValues.page_size == '1' || !recordCount ? '1' : null,
        };
    };

    const checkFilterValuesAvailability = () => {
        let retVal: Record<string, any> = {};
        for (const combinedFilter in combinedFilters) {
            if (!filterValues[combinedFilter]) {
                retVal[combinedFilters[combinedFilter]] = null;
            }
            retVal[combinedFilter] = null;
        }
        return retVal;
    };

    const setRowsCount = (totalCount: SetStateAction<number | null>) => {
        if (totalCount) {
            setRecordCount(totalCount);
        }
    };

    const handleFilterClick = (fetchFunction: () => void) => {
        (filterValues.page_size == 1 && fetchFunction()) ||
            filterChanged({ ...filterValues, page_size: '1' }, true);
    };

    const filterChanged = (newParam: any = {}, replace = false) => {
        if (replace) {
            router.push(
                `/${params.pagePath || 'nopage'}?${Object.keys(newParam)
                    .map((key) => key + '=' + newParam[key])
                    .join('&')}`
            );
        } else {
            router.push(
                `/${params.pagePath || 'nopage'}?${Object.keys({
                    ...filterValues,
                    page_size: '1',
                    ...newParam,
                })
                    .map((key) =>
                        key + '=' + { ...filterValues, ...newParam }[key]
                    )
                    .join('&')}`
            );
        }
    };

    const buildQueryString = (extraParams: Record<string, any>) => {
        let allParams = { ...filterValues, ...extraParams };
        return Object.keys(allParams).map(key => key + '=' + allParams[key]).join('&');
    };

    const MyPagination = () => {
        return (
            (Math.ceil(recordCount! / filterValues.limit) > 1 && (
                <MyPaginationComponent
                    pageNumber={parseInt(filterValues.page_size)}
                    pageCount={Math.ceil(recordCount! / filterValues.limit)}
                    handleChangePage={(page_size) => {
                        if (parseInt(filterValues.page_size) !== Number(page_size)) {
                            filterChanged({
                                ...filterValues,
                                page_size: page_size,
                                next_offset: (generatePaginationConfig(50, filterValues?.limit || params.limit) as any).find((pagination: any) => pagination.page_size === page_size).limit
                            }, true)
                        }
                    }}
                />
            )) || <></>
        );
    };

    return {
        filterValues,
        setRecordCount,
        getCombinedParams,
        recordCount,
        setRowsCount,
        filterChanged,
        MyPagination,
        filterBlockShow,
        setFilterBlockShow,
        sortClick
    };
};

export default useReport;
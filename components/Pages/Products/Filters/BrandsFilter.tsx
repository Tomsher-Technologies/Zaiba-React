import React, { FC, useEffect, useState } from 'react';

import { BrandsFilterProps } from '@/types/ProductsProps';
import { useRouter } from 'next/router';

const BrandsFilter: FC<BrandsFilterProps> = ({ brandLists, uRS }) => {
    const router = useRouter();
    const [checkedItems, setCheckedItems] = useState<{ id: number; brand: string }[]>([]);

    useEffect(() => {
        srtQueryString();
    }, [checkedItems]);

    console.log('checkedItems', checkedItems);
    useEffect(() => {
        if (router.isReady && router.query) {
            const brandSlug = uRS.filterValues.brand;
            if ((brandLists?.length > 0) && (brandSlug)) {
                brandFilterChecked(brandSlug)
            }
        }
    }, [brandLists]);

    const srtQueryString = () => {
        const queryString = checkedItems.map(item => `${encodeURIComponent(item.brand)}`).join(',');
        if (queryString.length > 0) {
            uRS.filterChanged({
                ...uRS.filterValues,
                brand: queryString,
            });
        } else {
            uRS.filterChanged({
                ...uRS.filterValues,
                brand: queryString,
            });
        }
    }

    const brandFilterChecked = (brandSlug: string | any[]) => {
        const brandSlugArray = brandSlug.includes(',') ? (brandSlug as string | any).split(',') : [brandSlug];

        if (typeof brandSlugArray === 'string') {
            const selectedBrand = brandLists.find(({ slug }: any) => slug = brandSlugArray)
            if (selectedBrand) {
                const { id, slug } = selectedBrand;
                const exists = checkedItems.some(item => item.id === id && item.brand === slug);
                if (!exists) {
                    setCheckedItems(prevCheckedItems => [...prevCheckedItems, { id, brand: slug }]);
                }
            }
        } else if (Array.isArray(brandSlugArray)) {
            const isSlugExist = brandLists.filter((brand: any) => brandSlugArray.includes(brand.slug) && {
                id: brand.id,
                slug: brand.slug
            });
            if (isSlugExist?.length > 0) {
                const updatedCheckedItems = isSlugExist.map((brand: any) => ({
                    id: brand.id,
                    brand: brand.slug
                }));
                setCheckedItems(prevCheckedItems => [...prevCheckedItems, ...updatedCheckedItems]);
            }
        }
    }

    const handleCheck = (event: React.ChangeEvent<HTMLInputElement>, id: number, brand: string) => {
        if (event.target.checked) {
            setCheckedItems(prevChecked => [...prevChecked, { id, brand }]);
        } else {
            setCheckedItems(prevChecked => prevChecked.filter(brand => brand.id !== id));
        }
    };

    return (
        <div className="zb-product-list-option-items" key={uRS.filterValues.brand}>
            <h3>Brands</h3>
            <ul>
                {brandLists?.map((brand: any, index: number) => (
                    <li key={index}>
                        <input
                            className="form-check-input"
                            type="checkbox"
                            checked={checkedItems.some(item => item.id === brand.id)}
                            onChange={(e) => handleCheck(e, brand.id, brand.slug)}
                        />
                        <label className="form-check-label" htmlFor="Zaiba">
                            {brand.name}
                        </label>
                        <span className="zb-filyter-count">(10)</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BrandsFilter;
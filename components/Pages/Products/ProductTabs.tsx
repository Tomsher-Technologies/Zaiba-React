import React, { FC, useEffect } from 'react';

import { ProductTabsProps } from '@/types/ProductsProps';

const ProductTabs: FC<ProductTabsProps> = ({ tabs }) => {

    const [tabValue, setTabValue] = React.useState(1);

    useEffect(() => {
        setTabValue(tabs[0].id);
    }, []);

    const handleTabChange = (newValue: number) => {
        setTabValue(newValue);
    };

    return (
        <div className="row">
            <div className="col-md-12">
                <div className="zb-product-description">
                    <ul className="nav nav-tabs !flex" >
                        {tabs.map((tab: any, index) => (
                            <li className="nav-item" role="presentation" key={index}>
                                <button className={`nav-link ${tabValue === tab.id ? 'active' : ''} !text-[12px] sm:!text-[14px] md:!text-[18px] !p-2 sm:!p-3 md:sm:!p-5`}
                                    onClick={() => handleTabChange(tab.id)}
                                >
                                    {tab.heading}
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active">
                            <div dangerouslySetInnerHTML={{ __html: tabs.find(tab => tab.id == tabValue)?.content }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductTabs
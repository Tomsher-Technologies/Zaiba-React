import React, { FC } from 'react';
import { tabs } from '@/utiles/constArrays';

const ProductDescription: FC = () => {

    const [tabValue, setTabValue] = React.useState(1);

    const handleTabChange = (newValue: number) => {
        setTabValue(newValue);
    };

    return (
        <div className="row">

            <div className="col-md-12">
                <div className="zb-product-description">
                    <ul className="nav nav-tabs" id="product-descriptionTab" role="tablist">
                        {tabs.map((tab: any, index) => (
                            <li className="nav-item" role="presentation" key={index}>
                                <button
                                    className={`nav-link ${tabValue === tab.value ? 'active' : ''}`}
                                    id="description-tab"
                                    data-bs-toggle="tab"
                                    type="button"
                                    role="tab"
                                    aria-controls="description-tab-pane"
                                    onClick={() => handleTabChange(tab.value)}
                                >
                                    {tab.title}
                                </button>
                            </li>
                        ))}

                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div
                            className="tab-pane fade show active"
                            id="description-tab-pane"
                            role="tabpanel"
                            aria-labelledby="description-tab"
                            tabIndex={0}
                        >
                            <p>
                                The Dome collection draws inspiration from the rich heritage of the
                                region’s architecture, specifically the diverse and intricately
                                designed ‘domes’ of the mosques and royal palaces in the Middle East
                                and their majestic beauty. The collection is the essence of regal
                                elegance and transforms the beauty of architectural domes into
                                designs which make a bold statement of confidence and self-love, a
                                reflection of the beauty and strength inside every woman. The
                                necklaces, rings, earrings and bracelets in Dome collection can all
                                be paired together for a captivating look and are made around
                                beautiful delicate Malachite, Lapis Lazuli or Tiger Eye dome all are
                                carefully set in 18k yellow and rose gold. Adding to the elegance of
                                the collection, diamond embellishments decorate the vibrant gemstone
                                domes for a regal finishing touch.
                            </p>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="details-tab-pane"
                            role="tabpanel"
                            aria-labelledby="details-tab"
                            tabIndex={0}
                        >
                            <p>
                                The Dome collection draws inspiration from the rich heritage of the
                                region’s architecture, specifically the diverse and intricately
                                designed ‘domes’ of the mosques and royal palaces in the Middle East
                                and their majestic beauty. The collection is the essence of regal
                                elegance and transforms the beauty of architectural domes into
                                designs which make a bold statement of confidence and self-love, a
                                reflection of the beauty and strength inside every woman. The
                                necklaces, rings, earrings and bracelets in Dome collection can all
                                be paired together for a captivating look and are made around
                                beautiful delicate Malachite, Lapis Lazuli or Tiger Eye dome all are
                                carefully set in 18k yellow and rose gold. Adding to the elegance of
                                the collection, diamond embellishments decorate the vibrant gemstone
                                domes for a regal finishing touch.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default ProductDescription
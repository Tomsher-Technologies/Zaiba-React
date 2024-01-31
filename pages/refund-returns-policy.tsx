import React, { FC } from 'react';

import withMainLayout from '@/hocs/withMainLayout';

const RefundReturnsPolicy: FC = () => {
    return (
        <>
            <section className="zb-inner-strip">
                <div className="container-fluid px-7">
                    <div className="grid grid-cols-2">
                        <h4>Refund and&nbsp;Returns&nbsp;Policy</h4>
                        <ul>
                            <li>
                                <a href="index.html">Home</a>
                            </li>
                            <li>
                                <a href="product-listing.html">Jewellery</a>
                            </li>
                            <li>
                                <a href="product-listing.html">Rings</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="terms-conditions-page">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="mb-2">1. Acceptance of Terms</h4>
                            <p>
                                By accessing or using the services provided by [Your Jewelry
                                Business Name], you agree to comply with and be bound by the terms
                                and conditions outlined herein.{" "}
                            </p>
                            <br />
                            <h4 className="mb-2">2. Product Information</h4>
                            <p>
                                a. We strive to provide accurate and up-to-date information about
                                our jewelry products, including descriptions, materials, and
                                pricing. However, we do not warrant the accuracy, completeness, or
                                reliability of any product information.{" "}
                            </p>
                            <p>
                                b. All images are for illustrative purposes only and may not reflect
                                the actual size or color of the products.
                            </p>
                            <br />
                            <h4>3. Orders and Payment</h4>
                            <p>
                                a. Placing an order constitutes an offer to purchase our products.
                                All orders are subject to availability and acceptance.
                            </p>
                            <p>
                                b. Prices are in [currency] and are subject to change without
                                notice. Any applicable taxes, shipping fees, or other charges will
                                be clearly communicated before the completion of the purchase.
                            </p>
                            <p>
                                c. Payment is required at the time of order placement. We accept
                                [list of accepted payment methods].
                            </p>
                            <br />
                            <h4>4. Shipping and Delivery</h4>
                            <p>
                                a. We aim to process and ship orders promptly. However, we do not
                                guarantee delivery times, as they may vary based on location,
                                shipping method, and other factors beyond our control.
                            </p>
                            <p>
                                b. Shipping fees are calculated based on the shipping destination
                                and the selected shipping method. Customers are responsible for any
                                customs duties or taxes associated with international shipments.
                            </p>
                            <br />
                            <h4>5. Returns and Exchanges</h4>
                            <p>
                                a. We accept returns within [number] days of the delivery date for
                                eligible items. Please refer to our [Return Policy] for detailed
                                information on the return process.
                            </p>
                            <p>
                                b. Items must be returned in their original condition, with all tags
                                and packaging intact.
                            </p>
                            <br />
                            <h4>6. Warranty</h4>
                            <p>
                                a. Our products are covered by a [number]-year warranty against
                                defects in materials and workmanship. This warranty does not cover
                                damage caused by normal wear and tear, misuse, or improper care.
                            </p>
                            <p>
                                b. For warranty claims, please [contact us] with proof of purchase
                                and a detailed description of the issue.
                            </p>
                            <br />
                            <h4>8. Intellectual Property</h4>
                            <p>
                                a. All content, including but not limited to logos, images, and
                                text, is the property of [Your Jewelry Business Name] and is
                                protected by intellectual property laws. Unauthorized use of our
                                content is strictly prohibited.
                            </p>
                            <br />
                            <h4>9. Governing Law</h4>
                            <p>
                                These terms and conditions are governed by the laws of [your
                                jurisdiction]. Any disputes arising from or in connection with these
                                terms shall be subject to the exclusive jurisdiction of the courts
                                in [your jurisdiction].
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default withMainLayout(RefundReturnsPolicy);
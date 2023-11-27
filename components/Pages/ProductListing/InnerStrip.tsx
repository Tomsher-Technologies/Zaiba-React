import React, { FC } from 'react';
import Link from 'next/link';

const InnerStrip: FC = () => {
    return (
        <section className="zb-inner-strip">
            <div className="container-fluid px-7">
                <div className="row">
                    <div className="col-md-6">
                        <h4>Rings</h4>
                    </div>
                    <div className="col-md-6">
                        <ul>
                            <li>
                                <Link href="/index">Home</Link>
                            </li>
                            <li>
                                <Link href="product-listing">Jewellery</Link>
                            </li>
                            <li>
                                <Link href="product-listing">Rings</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default InnerStrip;
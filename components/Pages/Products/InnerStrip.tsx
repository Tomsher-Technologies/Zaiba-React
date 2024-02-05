import React, { FC } from 'react';
import Link from 'next/link';

import { InnerStripProps } from '@/types/ProductsProps';

const InnerStrip: FC<InnerStripProps> = ({ title, items }) => {
    return (
        <section className="zb-inner-strip">
            <div className="container-fluid px-7">
                <div className="row">
                    <div className="col-md-6">
                        <h4>{title}</h4>
                    </div>
                    <div className="col-md-6">
                        <ul>
                            {items && items.map((item: any, index: number) => (
                                <li key={index} >
                                    {index === items.length - 1 ? (
                                        item.label
                                    ) : (item.link ? (
                                        <Link className='ml-1' href={item.link}>{item.label}</Link>
                                    ) :
                                        <>
                                            {item.label}
                                        </>
                                    )}
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>
            </div>
        </section>

    )
}

export default InnerStrip;
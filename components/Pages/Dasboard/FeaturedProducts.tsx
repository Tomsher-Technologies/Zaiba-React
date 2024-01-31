import React, { FC } from 'react';
import Link from 'next/link';

import { APIFetch } from '@/server_api/utils/APIFetch';

const FeaturedProducts: FC<{ collectionBanners: any[] }> = ({ collectionBanners }) => {
    return (
        <section className="featured-products mt-5">
            <div className="featured-inner">
                <div className="container-fluid px-7">
                    <APIFetch lengthCheckObject={(collectionBanners as any)} >
                        <div className="row">
                            {collectionBanners.map((collection: any, index: number) => {
                                let pageRedirect = 'product-lists';

                                if (collection.type === 'product') {
                                    pageRedirect = 'product-details/' + collection.link;
                                } else if (collection.type === 'category') {
                                    pageRedirect = 'product-lists?category=' + collection.link;
                                } else if (collection.type === 'brand') {
                                    pageRedirect = 'product-lists?brand=' + collection.link;
                                } else if (collection.type === 'offer') {
                                    pageRedirect = 'product-lists?offer=' + collection.link;
                                } else if (collection.type === 'external') {
                                    pageRedirect = collection.link;
                                }
                                return (
                                    <div className="col-md-6" key={index}>
                                        <img
                                            src={collection.image}
                                            className="img-fluid rounded-4"
                                            alt=""
                                        />
                                        <div className="d-flex align-items-center justify-content-end">
                                            <Link className="product-title" href={'product-details/' + collection.link}>
                                                {collection.title}
                                            </Link>
                                            <Link href={pageRedirect} className="btn btn-all">
                                                {collection.btn_text}
                                            </Link>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </APIFetch>
                </div>
            </div>
        </section >

    )
}

export default FeaturedProducts
import React, { FC } from 'react';
import { Link } from '@mui/material';

import { APIFetch } from '@/server_api/utils/APIFetch';

const GuideSection: FC<{ midBanners: any }> = ({ midBanners }) => {


  return (
    <section className="guide-section">
      <div className="guide-inner">
        <div className="container-fluid p-0">
          <APIFetch lengthCheckObject={(midBanners as any)} >
            <div className="row g-0">
              {midBanners.map((banner: any, index: number) => {
                let pageRedirect = 'product-lists';

                if (banner.type === 'product') {
                  pageRedirect = 'product-details/' + banner.link;
                } else if (banner.type === 'category') {
                  pageRedirect = 'product-lists?category=' + banner.link;
                } else if (banner.type === 'brand') {
                  pageRedirect = 'product-lists?brand=' + banner.link;
                } else if (banner.type === 'offer') {
                  pageRedirect = 'product-lists?offer=' + banner.link;
                } else if (banner.type === 'external') {
                  pageRedirect = banner.link;
                } return (

                  <div className="col-md-4" key={index}>
                    <div className="guide-block">
                      <img
                        src={banner.image}
                        className="img-fluid"
                        alt=""
                      />
                      <div className="guide-caption">
                        <h4>{banner.title}</h4>
                        <Link href={pageRedirect} className="btn btn-all">
                          {banner.btn_text}
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </APIFetch>
        </div>
      </div>
    </section>
  )
}

export default GuideSection
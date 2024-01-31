import React, { FC } from 'react';

import { APIFetch } from '@/server_api/utils/APIFetch';

const Option: FC<{ footerPoints: any }> = ({ footerPoints }) => {
    return (
        <section className="option">
            <div className="option-inner">
                <div className="container-fluid px-7">
                    <APIFetch lengthCheckObject={footerPoints} >
                        <div className="row">
                            {footerPoints?.map((point: any, index: number) => (
                                <div className="col-md-3" key={index}>
                                    <div className="card">
                                        <img src="/images/option-img1.svg" className="" alt="..." />
                                        <div className="card-body mt-3">
                                            <h5 className="card-title">{point.title}</h5>
                                            <p className="card-text">
                                                {point.sub_title}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </APIFetch>
                </div>
            </div>
        </section>

    )
}

export default Option
import React, { FC } from 'react';

const GetInspired: FC = () => {
    return (
        <section className="get-inspired">
            <div className="inspired-inner">
                <div className="container-fluid px-7">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="title-block text-center mb-4">
                                <h3 className="sub-title">#zaibajewellers</h3>
                                <h4 className="main-title">GET INSPIRED</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row g-0">
                        <div className="col-md-3">
                            <img
                                src="/images/inspired-img1.png"
                                className="img-fluid"
                                alt=""
                            />
                        </div>
                        <div className="col-md-3">
                            <img
                                src="/images/inspired-img2.png"
                                className="img-fluid"
                                alt=""
                            />
                        </div>
                        <div className="col-md-3">
                            <img
                                src="/images/inspired-img3.png"
                                className="img-fluid"
                                alt=""
                            />
                        </div>
                        <div className="col-md-3">
                            <img
                                src="/images/inspired-img4.png"
                                className="img-fluid"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default GetInspired
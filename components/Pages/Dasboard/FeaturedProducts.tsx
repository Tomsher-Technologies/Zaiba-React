import React, { FC } from 'react';

const FeaturedProducts: FC = () => {
    return (
        <section className="featured-products mt-5">
            <div className="featured-inner">
                <div className="container-fluid px-7">
                    <div className="row">
                        <div className="col-md-6">
                            <img
                                src="/images/f-img-1.jpg"
                                className="img-fluid rounded-4"
                                alt=""
                            />
                            <div className="d-flex align-items-center justify-content-end">
                                <a className="product-title" href="#">
                                    ANGEL HOOPS GOLDEN EARRINGS
                                </a>
                                <a href="#" className="btn btn-all">
                                    SHOP NOW
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img
                                src="/images/f-img-2.jpg"
                                className="img-fluid rounded-4"
                                alt=""
                            />
                            <div className="d-flex align-items-center justify-content-end">
                                <a className="product-title" href="#">
                                    ANGEL HOOPS GOLDEN EARRINGS
                                </a>
                                <a href="#" className="btn btn-all">
                                    SHOP NOW
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 mt-4">
                            <img
                                src="/images/f-img-3.jpg"
                                className="img-fluid rounded-4"
                                alt=""
                            />
                            <div className="d-flex align-items-center justify-content-end">
                                <a className="product-title" href="#">
                                    ANGEL HOOPS GOLDEN EARRINGS
                                </a>
                                <a href="#" className="btn btn-all">
                                    SHOP NOW
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 mt-4">
                            <img
                                src="/images/f-img-4.jpg"
                                className="img-fluid rounded-4"
                                alt=""
                            />
                            <div className="d-flex align-items-center justify-content-end">
                                <a className="product-title" href="#">
                                    ANGEL HOOPS GOLDEN EARRINGS
                                </a>
                                <a href="#" className="btn btn-all">
                                    SHOP NOW
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default FeaturedProducts
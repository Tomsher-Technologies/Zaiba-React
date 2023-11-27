import React, { FC } from 'react';

const Option: FC = () => {
    return (
        <section className="option">
            <div className="option-inner">
                <div className="container-fluid px-7">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card">
                                <img src="/images/option-img1.svg" className="" alt="..." />
                                <div className="card-body mt-3">
                                    <h5 className="card-title">DELIVERY</h5>
                                    <p className="card-text">
                                        Free delivery for orders over AED 150.Worldwide delivery.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card">
                                <img src="/images/option-img2.svg" className="" alt="..." />
                                <div className="card-body mt-3">
                                    <h5 className="card-title">CUSTOMER CARE</h5>
                                    <p className="card-text">
                                        Contact us by email info@zaibajewelry.com
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card">
                                <img src="/images/option-img3.svg" className="" alt="..." />
                                <div className="card-body mt-3">
                                    <h5 className="card-title">PAIEMENT SÉCURISÉ</h5>
                                    <p className="card-text">Debit card, credit card &amp; PayPal</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card">
                                <img src="/images/option-img4.svg" className="" alt="..." />
                                <div className="card-body mt-3">
                                    <h5 className="card-title">GUARANTEE</h5>
                                    <p className="card-text">
                                        Give a second life to your ZAIBA jewelry.For more information,
                                        click here.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Option
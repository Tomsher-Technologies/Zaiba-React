import React, { FC } from 'react';

import { PaymentsProps } from '@/types/Account';

const Payments: FC<PaymentsProps> = ({ user }) => {
    return (
        <div
            className="tab-pane fade show active"
            id="v-pills-zayments"
            role="tabpanel"
            aria-labelledby="v-pills-zayments-tab"
            tabIndex={0}
        >
            <h3 className="mb-2">Payments</h3>
            <div className="zb-profile-payment-warpper">
                <div className="zb-profile-payment-item">
                    <div className="zb-profile-card-info">
                        <h4>XXXX XXXX XXXX 1002</h4>
                        <small>Expires 05/25</small>
                    </div>
                    <div className="zb-profile-card-type">
                        <img
                            src="/images/visa-card.png"
                            className="img-fluid"
                            alt=""
                        />
                        <a href="#">Remove</a>
                    </div>
                </div>
                <div className="zb-profile-payment-item">
                    <div className="zb-profile-card-info">
                        <h4>XXXX XXXX XXXX 1002</h4>
                        <small>Expires 05/25</small>
                    </div>
                    <div className="zb-profile-card-type">
                        <img
                            src="/images/visa-card.png"
                            className="img-fluid"
                            alt=""
                        />
                        <a href="#">Remove</a>
                    </div>
                </div>
                <a href="#" className="zb-add-address-btn">
                    <i className="bi bi-plus-circle-fill" />
                </a>
            </div>
        </div>
    )
}

export default Payments;
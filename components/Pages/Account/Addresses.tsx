import React, { FC } from 'react';

const Addresses: FC = () => {
    return (
        <div
            className="tab-pane fade show active"
            id="v-pills-addresses"
            role="tabpanel"
            aria-labelledby="v-pills-addresses-tab"
            tabIndex={0}
        >
            <h3 className="mb-2">Addresses</h3>
            <div className="zb-checkout-warpper">
                <div className="zb-add-address-checkout mb-1">
                    <div className="zb-added-address">
                        <span className="zb-address-label">
                            <i className="bi bi-house-door" /> Home
                        </span>
                        <h4>Umniyah Azizah Nader</h4>
                        <p>Wafi Residence 68JC+5G - Dubai Dubai AE</p>
                        <p>+971-56-123456789</p>
                    </div>
                    <div className="zb-added-address">
                        <span className="zb-address-label">
                            <i className="bi bi-briefcase" /> Work
                        </span>
                        <h4>Umniyah Azizah Nader</h4>
                        <p>Wafi Residence 68JC+5G - Dubai Dubai AE</p>
                        <p>+971-56-123456789</p>
                    </div>
                    <a href="#" className="zb-add-address-btn">
                        <i className="bi bi-plus-circle-fill" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Addresses;
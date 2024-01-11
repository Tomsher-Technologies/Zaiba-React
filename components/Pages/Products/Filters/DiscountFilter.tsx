import React, { FC } from 'react';

const DiscountFilter: FC = () => {
    return (
        <div className="zb-product-list-option-items">
            <h3>Discount</h3>
            <ul>
                <li>
                    <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="Upto5"
                    />
                    <label className="form-check-label" htmlFor="Upto5">
                        Upto 5%
                    </label>
                    <span className="zb-filyter-count">(4)</span>
                </li>
                <li>
                    <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="Off-5-10"
                    />
                    <label className="form-check-label" htmlFor="Off-5-10">
                        5% - 10%
                    </label>
                    <span className="zb-filyter-count">(7)</span>
                </li>
                <li>
                    <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="Off-6-10"
                    />
                    <label className="form-check-label" htmlFor="Off-6-10">
                        6% - 10%
                    </label>
                    <span className="zb-filyter-count">(2)</span>
                </li>
                <li>
                    <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="Off-15-25"
                    />
                    <label className="form-check-label" htmlFor="Off-15-25">
                        15% - 25%
                    </label>
                    <span className="zb-filyter-count">(8)</span>
                </li>
                <li>
                    <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="More-than-25"
                    />
                    <label className="form-check-label" htmlFor="More-than-25">
                        More than 25%
                    </label>
                    <span className="zb-filyter-count">(10)</span>
                </li>
            </ul>
        </div>
    )
}

export default DiscountFilter;
import React, { FC } from 'react'

import { AddAddressProps } from '@/types/CheckoutProps';

const AddAddress: FC<AddAddressProps> = ({ addAddressToggleDrawer, onCloseDrawer }) => {
    return (
        <div
            className="offcanvas-end address-offcanvas p-3"
            tabIndex={-1}
        >
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasRightLabel">
                    Add New Address
                </h5>
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    onClick={onCloseDrawer}
                />
            </div>
            <div className="offcanvas-body">
                <div className="zb-add-address-inner">
                    <div className="zb-add-address-top">
                        <form>
                            <div className="mb-3 position-relative">
                                <input
                                    type="search"
                                    className="form-control"
                                    placeholder="Enter location"
                                    id="exampleInputEmail1"
                                />
                                <svg
                                    className="zb-search-icon"
                                    width="30px"
                                    height="30px"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M14.5776 14.5419C15.5805 13.53 16.2 12.1373 16.2 10.6C16.2 7.50721 13.6928 5 10.6 5C7.50721 5 5 7.50721 5 10.6C5 13.6928 7.50721 16.2 10.6 16.2C12.1555 16.2 13.5628 15.5658 14.5776 14.5419ZM14.5776 14.5419L19 19"
                                        stroke="#6c757d"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </form>
                    </div>
                    <div className="zb-add-address-map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231280.4131872772!2d55.06267957324777!3d25.07624244777802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai!5e0!3m2!1sen!2sae!4v1691651372954!5m2!1sen!2sae"
                            width="100%"
                            height={350}
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                    <div className="zb-address-information">
                        <h5>Address Information</h5>
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                id="formGroupExampleInput"
                                placeholder="Street name"
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                id="formGroupExampleInput2"
                                placeholder="Building name"
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                id="formGroupExampleInput2"
                                placeholder="Landmark (optional)"
                            />
                            <small>e.g metro station</small>
                        </div>
                        <div className="mb-3">
                            <textarea
                                className="form-control"
                                id="exampleFormControlTextarea1"
                                placeholder="Delivery Instructions (optional)"
                                rows={3}
                                defaultValue={""}
                            />
                            <small>Additional information (e.g. Leave outside door)</small>
                        </div>
                        <a href="#" className="btn btn-add-address w-100">
                            ADD ADDRESS
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AddAddress;
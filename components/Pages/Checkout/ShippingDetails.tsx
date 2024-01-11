import React, { FC, KeyboardEvent, MouseEvent, useState } from 'react';
import dynamic from 'next/dynamic';
import { Drawer } from '@mui/material';

const AddAddress = dynamic(() => import('@/components/Pages/Checkout/AddAddress'));

const ShippingDetails: FC = () => {
    const [addAddressDrawer, setAddAddressDrawer] = useState<boolean>(false);


    const addAddressToggleDrawer = (open: boolean) =>
        (event: KeyboardEvent | MouseEvent) => {
            if (
                event.type === 'keydown' &&
                ((event as KeyboardEvent).key === 'Tab' ||
                    (event as KeyboardEvent).key === 'Shift')
            ) {
                return;
            }
            setAddAddressDrawer(open);
        };

    return (
        <div className="col-md-8">
            <h5>Shipping Address</h5>
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
                    <a className="zb-add-address-btn cursor-pointer" onClick={() => setAddAddressDrawer(true)} >
                        <i className="bi bi-plus-circle-fill" />
                        <span>Add New Address</span>
                    </a>
                </div>
                <div className="zb--checkout-billing-address mb-4">
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="flexCheckChecked"
                            defaultChecked={true}
                        />
                        <label className="form-check-label" htmlFor="flexCheckChecked">
                            Same as shipping address
                        </label>
                    </div>
                </div>
                <h5>Payment</h5>
                <div className="zb-checkout-payment">
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="exampleRadios"
                            id="exampleRadios1"
                            defaultValue="option1"
                            defaultChecked={true}
                        />
                        <label className="form-check-label" htmlFor="exampleRadios1">
                            Debit/Credit Card
                        </label>
                        <img
                            src="/images/payment-option.svg"
                            className="float-end"
                            alt=""
                        />
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="exampleRadios"
                            id="exampleRadios2"
                            defaultValue="option2"
                        />
                        <label className="form-check-label" htmlFor="exampleRadios2">
                            Cash On Delivery
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="exampleRadios"
                            id="exampleRadios2"
                            defaultValue="option2"
                        />
                        <label className="form-check-label" htmlFor="exampleRadios2">
                            Apple Pay
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="exampleRadios"
                            id="exampleRadios2"
                            defaultValue="option2"
                        />
                        <label className="form-check-label" htmlFor="exampleRadios2">
                            PayPal
                        </label>
                    </div>
                </div>
            </div>


            <Drawer
                anchor='right'
                open={addAddressDrawer}
                onClose={addAddressToggleDrawer(false)}
            >
                <AddAddress
                    addAddressToggleDrawer={addAddressToggleDrawer}
                    onCloseDrawer={addAddressToggleDrawer(false)}
                />
            </Drawer>

        </div>
    )
}

export default ShippingDetails
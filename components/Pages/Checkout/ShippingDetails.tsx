import React, { FC, Fragment, KeyboardEvent, MouseEvent, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { Checkbox, Drawer, InputAdornment } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

const AddAddress = dynamic(() => import('@/components/Pages/Checkout/AddAddress'));
const BillingAddress = dynamic(() => import('@/components/Pages/Checkout/BillingAddress'));

import { AddressListRowProps, AddressRowProps, ShippingDetailsProps } from '@/types/AccountProps';

import { apiEndpoints } from '@/server_api/config/api.endpoints';
import FetchAPIData from '@/server_api/apifunctions/apifetch';
import { APIFetch } from '@/server_api/utils/APIFetch';
import InputText from '@/components/CustomComponents/InputText';
import { capitalizeWordsFirstLetter, formatPhoneNumber } from '@/utiles/functions';
import { EditOutlined } from '@mui/icons-material';

const ShippingDetails: FC<ShippingDetailsProps> = ({ checkoutFormik, setAddressChange, addressChange, user, addressLists, addressLists_loading }) => {
    const [addAddressDrawer, setAddAddressDrawer] = useState<boolean>(false);
    const [selectedAddrees, setSelectedAddrees] = useState<any>({});
    const [errorMessage, setErrorMessage] = useState<string>('')

    useEffect(() => {
        if (checkoutFormik.values.billing_shipping_same === 1) {
            if (addressLists?.length > 0) {
                setSelectedAddrees(addressLists.find(address => address.id === checkoutFormik.values.address_id));
            }
        }
    }, [checkoutFormik]);

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

    const handle_sameAsShippingaddressChange = (event: any) => {
        if (event.target.value === 'on') {
            if (addressLists?.length > 0) {
                setErrorMessage('');
                checkoutFormik.values.address_id ? checkoutFormik.setFieldValue('billing_shipping_same', 1) : setErrorMessage("Please select a shipping address");
                checkoutFormik.setFieldValue('latitude', addressLists.find(address => address.id === checkoutFormik.values.address_id)?.lat);
                checkoutFormik.setFieldValue('longitude', addressLists.find(address => address.id === checkoutFormik.values.address_id)?.lang);
            }
        } else {
            setErrorMessage('');
            setSelectedAddrees(null)
            checkoutFormik.setFieldValue('billing_shipping_same', 0)
            checkoutFormik.setFieldValue('latitude', '');
            checkoutFormik.setFieldValue('longitude', '');
        }

        checkoutFormik.setFieldValue('billing_shipping_same', 1)
    }

    return (
        <div className="col-md-8">
            <h5>Shipping Address</h5>
            <div className="zb-checkout-warpper">
                <div className="zb-add-address-checkout mb-1 !grid grid-cols-1 lg:grid-cols-2" key={Number(addressChange)}>
                    <APIFetch lengthCheckObject={(addressLists as any)} isLoading={addressLists_loading} animatedLoading="addressLists">
                        {addressLists?.map((address: any, index: number) => (
                            <AddressRow
                                checkoutFormik={checkoutFormik}
                                address={address}
                                setAddressChange={setAddressChange}
                                key={index}
                            />
                        ))}

                    </APIFetch>
                    <a className="zb-add-address-btn cursor-pointer !w-full" onClick={() => setAddAddressDrawer(true)} >
                        <i className="bi bi-plus-circle-fill" />
                        <span>Add New Address</span>
                    </a>
                </div>
                <div className="zb--checkout-billing-address mb-4 pt-3">
                    <div className="form-check !flex items-center">
                        <div className=' relative -left-5'>
                            <Checkbox
                                style={{ width: "20px", padding: 0 }}
                                sx={{
                                    transform: 'scale(1.4)',
                                }}
                                checked={Boolean(checkoutFormik.values.billing_shipping_same)}
                                onChange={handle_sameAsShippingaddressChange}
                            />
                        </div>
                        <label className="form-check-label" htmlFor="flexCheckChecked">
                            Same as shipping address
                        </label>
                    </div>
                </div>
                {checkoutFormik.values.billing_shipping_same === 1 &&
                    <BillingAddress
                        checkoutFormik={checkoutFormik}
                    />
                }
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
                    onCloseDrawer={() => setAddAddressDrawer(false)}
                    setAddressChange={setAddressChange}
                />
            </Drawer>

        </div>
    )
}

export default ShippingDetails;

const AddressRow: FC<AddressListRowProps> = ({ checkoutFormik, address, setAddressChange }) => {
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
        <div className={`zb-added-address ${(checkoutFormik.values.address_id === address.id) ? '!border-primaryhover' : 'border-gray-200'} cursor-pointer `} onClick={() => checkoutFormik.setFieldValue('address_id', address.id)}>
            <div className='flex justify-between'>
                <span className="zb-address-label">
                    <i className="bi bi-house-door" /> {capitalizeWordsFirstLetter(address.type)}
                </span>
                <div className="bg-primaryhover hover:bg-primary cursor-pointer flex justify-center items-center rounded-full p-2">
                    <EditOutlined className='text-white' onClick={() => setAddAddressDrawer(true)} />
                </div>
            </div>
            <h4>{address.name}</h4>
            <p>{`${address.address}, ${address.city_name}, ${address.country_name}`}</p>

            <p>{formatPhoneNumber(address.phone)}</p>

            <Drawer
                anchor='right'
                open={addAddressDrawer}
                onClose={addAddressToggleDrawer(false)}
            >
                <AddAddress
                    address={address}
                    addAddressToggleDrawer={addAddressToggleDrawer}
                    onCloseDrawer={() => setAddAddressDrawer(false)}
                    setAddressChange={setAddressChange}
                />
            </Drawer>
        </div>
    )
}
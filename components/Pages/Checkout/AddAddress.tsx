import React, { FC, useEffect, useState } from 'react'
import dynamic from 'next/dynamic';
import { useDispatch } from 'react-redux';
import { useMutation } from '@tanstack/react-query';
import { useFormik } from 'formik';
import { FormControlLabel, InputAdornment, Radio, RadioGroup } from '@mui/material';

import InputText from '@/components/CustomComponents/InputText';
import Button from '@/components/CustomComponents/Button';
const GoogleMapAPI = dynamic(() => import("@/components/API/GoogleMapAPI"));

import { AddAddressProps } from '@/types/CheckoutProps';
import { countryCode } from '@/utiles/constArraysAndVariables';
import { setMessages } from '@/redux/messagesSlice';
import { addressInitialValues } from '@/utiles/formik/accountFormik';
import { profileValidationSchema } from '@/utiles/validations/accountSchema';

import { apiEndpoints } from '@/server_api/config/api.endpoints';
import PostAPI from '@/server_api/apifunctions/apipost';

const AddAddress: FC<AddAddressProps> = ({ address, setAddressChange, onCloseDrawer, }) => {
    const dispatch = useDispatch();

    const [errorMessages, setErrorMessages] = useState<string | null>(null);

    const formik = useFormik({
        initialValues: addressInitialValues,
        validationSchema: profileValidationSchema,
        onSubmit: (values: any) => {
            updateAddress({ ...values, phone: '+971' + values.phone, apiEndpoint: values.address_id ? apiEndpoints.updateAddress : apiEndpoints.addAddress } as any)
        },
    });


    const { data: updateResponse, mutate: updateAddress, isLoading: update_isLoading, error: profile_error } = useMutation<any>(PostAPI.postAPI, {
        onSuccess: async (response: any) => {
            setErrorMessages(null);
            if (response.status) {
                setAddressChange(true);
                onCloseDrawer();

                dispatch(setMessages({
                    messages: response.message,
                    type: 'success',
                    from: 'add-edit-address',
                }));
            } else {
                dispatch(setMessages({
                    messages: response.message,
                    type: 'error',
                    from: 'add-edit-address',
                }));
            }
        },
        onError: (error: any) => {
            setErrorMessages("Something went wrong.");
        }
    });

    useEffect(() => {
        address && initializeAddressFormikValues()
    }), [address];

    const initializeAddressFormikValues = () => {
        if ((address.id) && (!formik.values.address_id)) {
            formik.setFieldValue('address_id', address.id);
            formik.setFieldValue('name', address.name);
            formik.setFieldValue('address', address.address);
            if ((!formik.values.longitude) && (!formik.values.latitude)) {
                formik.setFieldValue('longitude', parseFloat(address.longitude));
                formik.setFieldValue('latitude', parseFloat(address.latitude));
            }
            if (address.phone.startsWith(countryCode)) {
                formik.setFieldValue('phone', address.phone.slice(countryCode.length));
            } else {
                formik.setFieldValue('phone', address.phone);
            }
            formik.setFieldValue('type', address.type);
            formik.setFieldValue('country_id', address.country_id);
        }
    }

    return (
        <div
            className="offcanvas-end address-offcanvas p-3"
            key={formik?.values.address_id}
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
                    <div className="zb-add-address-map mt-8">
                        <GoogleMapAPI
                            formik={formik}
                        />
                        {(formik?.errors?.latitude || formik?.errors?.longitude) && <div className='text-error text-[13px] pt-5 pl-[20px]'>{(formik as any).errors.latitude || (formik as any).errors.longitude}</div>}
                    </div>
                    <div className="zb-address-information mt-8">
                        <h5>Address Information</h5>
                        <div className="my-3">
                            <InputText
                                labelText="Full Name"
                                placeholder="Enter full name"
                                className="w-full  border "
                                labelClassName='font-semibold'

                                name="name"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                error={formik?.touched?.name && formik.errors.name}
                                textPadding='8px'
                            />
                        </div>
                        <div className="mb-3">
                            <InputText
                                labelText="Phone"
                                placeholder="Enter phone"
                                className="w-full mt-"
                                labelClassName='font-semibold'
                                startAdornment={
                                    <>
                                        <InputAdornment position="start" >
                                            <div className='flex justify-center items-center cursor-default pl-4 text-[15px] font-semibold text-textPrimary' >  +971</div>
                                        </InputAdornment>
                                    </>
                                }
                                name="phone"
                                value={formik.values.phone}
                                onChange={formik.handleChange}
                                error={formik?.touched?.phone && formik.errors.phone}
                                textPadding='8px'
                            />
                        </div>
                        <div className="mb-3">
                            <InputText
                                labelText="Address"
                                placeholder="Enter address"
                                className="w-full "
                                labelClassName='font-semibold'
                                multiline
                                rows={3}

                                name="address"
                                value={formik.values.address}
                                onChange={formik.handleChange}
                                error={formik?.touched?.address && formik.errors.address}
                                textPadding='18px'
                            />
                        </div>
                        <div className="mb-3">
                            <div className={`text-textPrimary mt-0 font-semibold`}>Address Type</div>
                            <RadioGroup
                                className='mt-2'
                                aria-labelledby="demo-radio-buttons-group-label"
                                value={formik.values.type}
                                name="type"
                                row
                                onChange={formik.handleChange}
                            >
                                <FormControlLabel value="home" control={<Radio
                                    sx={{
                                        '& .MuiSvgIcon-root': {
                                            fontSize: 15,
                                        }
                                    }} />} label={<span style={{ fontSize: '13px' }}>Home</span>} />
                                <FormControlLabel value="work" control={<Radio
                                    sx={{
                                        '& .MuiSvgIcon-root': {
                                            fontSize: 15,
                                        }
                                    }} />} label={<span style={{ fontSize: '13px' }}>Work</span>} />
                                <FormControlLabel value="others" control={<Radio
                                    sx={{
                                        '& .MuiSvgIcon-root': {
                                            fontSize: 15,
                                        }
                                    }} />} label={<span style={{ fontSize: '13px' }}>Others</span>} />
                            </RadioGroup>
                            {(formik?.touched?.type && formik?.errors?.type) && <div className='text-error text-[13px] mt-2 pl-[20px]'>{(formik as any).errors.type}</div>}
                        </div>
                        <Button
                            onClick={() => formik.handleSubmit()}
                            isLoading={update_isLoading}
                            className="btn btn-add-address w-100">
                            ADD ADDRESS
                        </Button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AddAddress;
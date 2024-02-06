import InputText from '@/components/CustomComponents/InputText';
import { BillingAddressProps } from '@/types/AccountProps';
import { InputAdornment } from '@mui/material';
import React, { FC, Fragment } from 'react'

const BillingAddress: FC<BillingAddressProps> = ({ checkoutFormik }) => {
    return (
        <Fragment>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
                <InputText
                    labelText="Full Name"
                    placeholder="Enter full name"
                    className="w-full  border "
                    labelClassName='font-semibold'

                    name="name"
                    value={checkoutFormik.values.name}
                    onChange={checkoutFormik.handleChange}
                    error={checkoutFormik?.touched?.name && checkoutFormik.errors.name}
                    textPadding='8px'
                />
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
                    value={checkoutFormik.values.phone}
                    onChange={checkoutFormik.handleChange}
                    error={checkoutFormik?.touched?.phone && checkoutFormik.errors.phone}
                    textPadding='8px'
                />
            </div>
            <InputText
                labelText="Address"
                placeholder="Enter address"
                className="w-full "
                labelClassName='font-semibold'
                multiline
                rows={3}

                name="address"
                value={checkoutFormik.values.address}
                onChange={checkoutFormik.handleChange}
                error={checkoutFormik?.touched?.address && checkoutFormik.errors.address}
                textPadding='18px'
            />
        </Fragment>
    )
}

export default BillingAddress;
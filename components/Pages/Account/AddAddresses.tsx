import React, { FC, KeyboardEvent, MouseEvent, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useFormik } from 'formik';
import { EditLocationOutlined } from '@mui/icons-material';
import { Drawer } from '@mui/material';

import InputText from '@/components/CustomComponents/InputText';
import Button from '@/components/CustomComponents/Button';
import AlertDialogSlide from '@/components/CustomComponents/AlertDialogSlide';
import Success from '@/components/alerts/Success';
import ValidationErrorMessage from '@/components/CustomComponents/ValidationErrorMessage';
const AddAddress = dynamic(() => import('@/components/Pages/Checkout/AddAddress'));

import { AddAddressesProps } from '@/types/Account';
import { profileValidationSchema } from '@/utiles/validations/accountSchema';
import { addressInitialValues, profileFormik } from '@/utiles/formik/accountFormik';

import { APIFetch } from '@/server_api/utils/APIFetch';
import { apiEndpoints } from '@/server_api/config/api.endpoints';
import FetchAPIData from '@/server_api/apifunctions/apifetch';
import PostAPI from '@/server_api/apifunctions/apipost';




const AddAddresses: FC<AddAddressesProps> = ({ user }) => {

    const [enableEdit, setEnableEdit] = useState(false);
    const [alertSuccsess, setAlertSuccsess] = useState<boolean>(false);
    const [errorMessages, setErrorMessages] = useState<string | null>(null);
    const [addAddressDrawer, setAddAddressDrawer] = useState<boolean>(false);

    const formik = useFormik({
        initialValues: addressInitialValues,
        validationSchema: profileValidationSchema,
        onSubmit: (values: any) => {
            updateAddress({ ...values, apiEndpoint: apiEndpoints.updateAddress } as any)
        },
    });


    const { data: userData, isLoading: userDta_loading } = useQuery({
        queryKey: [apiEndpoints.userProfile],
        queryFn: () => FetchAPIData.fetchAPIData({ apiEndpoint: apiEndpoints.userProfile }),
        enabled: Boolean(user?.id)
    });

    const { data: updateResponse, mutate: updateAddress, isLoading: update_isLoading, error: profile_error } = useMutation<any>(PostAPI.postAPI, {
        onSuccess: async (response: any) => {
            setErrorMessages(null);
            if (response.status) {
                setEnableEdit(false);
                setAlertSuccsess(true);
            }
        },
        onError: (error: any) => {
            setErrorMessages("Something went wrong.");
        }
    });

    useEffect(() => {
        userData && userData?.data && initializeAddressData((userData as any).data);
    }, [userDta_loading]);

    const initializeAddressData = (data: any) => {
        if (data.address?.length > 0) {
            formik.setFieldValue('address', data.address);
        }
    }

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
        <div
            className="tab-pane fade show active"
            id="v-pills-addresses"
            role="tabpanel"
            aria-labelledby="v-pills-addresses-tab"
            tabIndex={0}
        >
            <h3 className="mb-2">Addresses</h3>
            <APIFetch isLoading={Boolean(!user?.name)} notLengthCheckObject={true} >
                <APIFetch isLoading={userDta_loading} notLengthCheckObject={true} >
                    <div className="zb-checkout-warpper">
                        <div className="zb-add-address-checkout mb-1">
                            <APIFetch isLoading={userDta_loading} lengthCheckObject={(userData as any)?.data?.address}  >
                                {(userData as any)?.data?.address?.map((address: any, index: number) => (
                                    <div className="zb-added-address h-[160px]" key={index}>
                                        {/* <span className="zb-address-label">
                                        <i className="bi bi-house-door" /> Home
                                    </span> */}
                                        <div className='flex justify-between items-center'>
                                            <h4>{address.name}</h4>
                                            <EditLocationOutlined className='text-gray-500 hover:text-gray-600 cursor-pointer' />
                                        </div>
                                        <p>{address.address}</p>
                                        <p>+971-{address.phone}</p>
                                    </div>
                                ))}
                            </APIFetch>
                            <a href="#" className="zb-add-address-btn"  onClick={() => setAddAddressDrawer(true)}>
                                <i className="bi bi-plus-circle-fill cursor-pointer" />
                            </a>
                        </div>
                    </div>
                </APIFetch>
            </APIFetch>

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

export default AddAddresses;
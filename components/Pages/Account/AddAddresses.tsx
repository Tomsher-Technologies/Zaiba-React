import React, { FC, Fragment, KeyboardEvent, MouseEvent, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { EditLocationOutlined } from '@mui/icons-material';
import { Drawer } from '@mui/material';

const AddAddress = dynamic(() => import('@/components/Pages/Checkout/AddAddress'));

import { AddAddressesProps, AddressRowProps } from '@/types/AccountProps';
import { profileValidationSchema } from '@/utiles/validations/accountSchema';
import { addressInitialValues } from '@/utiles/formik/accountFormik';
import { setMessages } from '@/redux/messagesSlice';

import { APIFetch } from '@/server_api/utils/APIFetch';
import { apiEndpoints } from '@/server_api/config/api.endpoints';
import FetchAPIData from '@/server_api/apifunctions/apifetch';





const AddAddresses: FC<AddAddressesProps> = ({ user }) => {




    const [addAddressDrawer, setAddAddressDrawer] = useState<boolean>(false);



    const { data: userData, isLoading: userDta_loading } = useQuery({
        queryKey: [apiEndpoints.userProfile],
        queryFn: () => FetchAPIData.fetchAPIData({ apiEndpoint: apiEndpoints.userProfile }),
        enabled: Boolean(user?.id)
    });


    // useEffect(() => {
    //     userData && userData?.data && initializeAddressData((userData as any).data);
    // }, [userDta_loading]);

    // const initializeAddressData = (data: any) => {
    //     if (data.address?.length > 0) {
    //         formik.setFieldValue('address', data.address);
    //     }
    // }

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
                        <div className="!grid !grid-cols-2 zb-add-address-checkout mb-1">
                            <APIFetch isLoading={userDta_loading} lengthCheckObject={(userData as any)?.data?.address}  >
                                {(userData as any)?.data?.address?.map((address: any, index: number) => (
                                    <AddressRow
                                        address={address}
                                        key={index}
                                    />
                                ))}
                            </APIFetch>
                            <a className="flex justify-center items-center h-[150px] border-dashed border-2 !border-secondary cursor-pointer" onClick={() => setAddAddressDrawer(true)}>
                                <i className="bi bi-plus-circle-fill  !text-secondary text-[30px]" />
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

const AddressRow: FC<AddressRowProps> = ({ address }) => {
    const [addAddressDrawer, setAddAddressDrawer] = useState<boolean>(false);

    // useEffect(() => {
    //     addAddressDrawer && formik.resetForm();
    // }), [addAddressDrawer];

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
        <Fragment>
            <div className="zb-added-address h-[150px]" >
                {/* <span className="zb-address-label">
                                        <i className="bi bi-house-door" /> Home
                                    </span> */}
                <div className='flex justify-between items-center'>
                    <h4>{address.name}</h4>
                    <EditLocationOutlined className='text-gray-500 hover:text-gray-600 cursor-pointer' onClick={() => setAddAddressDrawer(true)} />
                </div>
                <p>{address.address}</p>
                <p>+971-{address.phone}</p>
            </div>

            <Drawer
                anchor='right'
                open={addAddressDrawer}
                onClose={addAddressToggleDrawer(false)}
            >
                <AddAddress
                    address={address}
                    addAddressToggleDrawer={addAddressToggleDrawer}
                    onCloseDrawer={addAddressToggleDrawer(false)}
                />
            </Drawer>
        </Fragment>
    )
}
import React, { FC, Fragment, KeyboardEvent, MouseEvent, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { EditLocationOutlined } from '@mui/icons-material';
import { Drawer } from '@mui/material';

const AddAddress = dynamic(() => import('@/components/Pages/Checkout/AddAddress'));

import { AddAddressesProps, AddressRowProps } from '@/types/AccountProps';
import { setMessages } from '@/redux/messagesSlice';

import { APIFetch } from '@/server_api/utils/APIFetch';
import { apiEndpoints } from '@/server_api/config/api.endpoints';
import FetchAPIData from '@/server_api/apifunctions/apifetch';
import PostAPI from '@/server_api/apifunctions/apipost';
import Button from '@/components/CustomComponents/Button';

const AddAddresses: FC<AddAddressesProps> = ({ user }) => {
    const dispatch = useDispatch();

    const [addAddressDrawer, setAddAddressDrawer] = useState<boolean>(false);

    const { data: userData, isLoading: userDta_loading, refetch: refetchAddress } = useQuery({
        queryKey: [apiEndpoints.userProfile],
        queryFn: () => FetchAPIData.fetchAPIData({ apiEndpoint: apiEndpoints.userProfile }),
        enabled: Boolean(user?.id)
    });


    const { mutate: makeDefaultAddress, isLoading: makeDefaultAddressLoading, } = useMutation(PostAPI.postAPI, {
        onSuccess: (response: any) => {
            if (response.status) {
                refetchAddress();
                dispatch(setMessages({
                    messages: response.message,
                    type: 'success',
                    from: 'make-defualt-address'
                }));
            } else {
                dispatch(setMessages({
                    messages: response.message,
                    type: 'error',
                    from: 'make-defualt-address'
                }));
            }
        },
        onError: (error: any) => {
            dispatch(setMessages({
                messages: error || error?.message || 'Something went wrong!',
                type: 'error',
                from: 'make-defualt-address'
            }));
        },
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
            if (event.type === 'keydown' &&
                ((event as KeyboardEvent).key === 'Tab' ||
                    (event as KeyboardEvent).key === 'Shift')) {
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
                        <div className="!grid md:!grid-cols-2 zb-add-address-checkout mb-1">
                            <APIFetch isLoading={userDta_loading} lengthCheckObject={(userData as any)?.data?.address}  >
                                {(userData as any)?.data?.address?.map((address: any, index: number) => (
                                    <AddressRow
                                        address={address}
                                        makeDefaultAddress={makeDefaultAddress}
                                        makeDefaultAddressLoading={makeDefaultAddressLoading}
                                        refetchAddress={refetchAddress}
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

const AddressRow: FC<AddressRowProps> = ({ address, makeDefaultAddress, makeDefaultAddressLoading, refetchAddress }) => {
    const dispatch = useDispatch();

    const [addAddressDrawer, setAddAddressDrawer] = useState<boolean>(false);

    // useEffect(() => {
    //     addAddressDrawer && formik.resetForm();
    // }), [addAddressDrawer];


    const { mutate: deleteAddress, isLoading: deleteAddressLoading, } = useMutation(PostAPI.postAPI, {
        onSuccess: (response: any) => {
            if (response.status) {
                refetchAddress();
                dispatch(setMessages({
                    messages: response.message,
                    type: 'success',
                    from: 'delete-address'
                }));
            } else {
                dispatch(setMessages({
                    messages: response.message,
                    type: 'error',
                    from: 'delete-address'
                }));
            }
        },
        onError: (error: any) => {
            dispatch(setMessages({
                messages: error || error?.message || 'Something went wrong!',
                type: 'error',
                from: 'delete-address'
            }));
        },
    });

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

    const handleSetDefualtAddress = () => {
        !makeDefaultAddressLoading && address && makeDefaultAddress({
            apiEndpoint: apiEndpoints.makeDefault,
            address_id: address.id
        } as any)
    }

    const handleDelete = () => {
        address && deleteAddress({
            apiEndpoint: apiEndpoints.deleteAddress,
            address_id: address.id
        } as any)
    }

    return (
        <Fragment>
            <div className={`mt-3 zb-added-address h-[150px] relative ${Boolean(address.is_default) ? '!border-[3px] !border-primary' : ''}`} >
                <Button className={`absolute right-3 -top-4 p-1 flex justify-center items-center ${makeDefaultAddressLoading ? 'opacity-40' : ''} bg-red-500 hover:bg-red-600 cursor-pointer text-white rounded-full text-[13px]`}
                    onClick={handleDelete}
                    isLoading={deleteAddressLoading}
                >{!deleteAddressLoading && 'X'}</Button>
                {address.type &&
                    <span className="zb-address-label">
                        <i className="bi bi-house-door" /> Home
                    </span>
                }
                <div className='flex justify-between items-center'>
                    <h4>{address.name}</h4>
                    <EditLocationOutlined className='text-gray-500 hover:text-gray-600 cursor-pointer mt-1' onClick={() => setAddAddressDrawer(true)} />
                </div>
                {address.address?.split(', ').map((part: any, index: number) => (
                    <p key={index}>{part}</p>
                ))}
                <p>+971-{address.phone}</p>
                {Boolean(!address.is_default) &&
                    <div className={`absolute left-3 -bottom-4 p-1 ${makeDefaultAddressLoading ? 'opacity-40' : ''} bg-primary hover:bg-primaryhover cursor-pointer text-white rounded-md text-[13px]`}
                        onClick={handleSetDefualtAddress}
                    >Make Defualt</div>
                }
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
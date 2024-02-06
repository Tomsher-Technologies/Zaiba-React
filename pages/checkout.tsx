import React, { FC, Fragment, useEffect, useState } from 'react'
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { useMutation, useQuery } from '@tanstack/react-query';

import withAuthLayout from '@/hocs/withAuthLayout';
import { checkoutValidationSchema } from '@/utiles/validations/checkoutSchema';
import { checkoutInitialValuesFormik } from '@/utiles/formik/checkoutFormik';
import { RootState } from '@/redux/store';
import { setMessages } from "@/redux/messagesSlice";

const InnerStrip = dynamic(() => import('@/components/Pages/Products/InnerStrip'));
const ShippingDetails = dynamic(() => import('@/components/Pages/Checkout/ShippingDetails'));
const OrderReview = dynamic(() => import('@/components/Pages/Checkout/OrderReview'));


import PostAPI from '@/server_api/apifunctions/apipost';
import { apiEndpoints } from '@/server_api/config/api.endpoints';
import FetchAPIData from '@/server_api/apifunctions/apifetch';

const Checkout: FC = () => {
    const user = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();
    const { push } = useRouter();

    const [addressChange, setAddressChange] = useState<boolean>(false);

    const checkoutFormik = useFormik({
        initialValues: checkoutInitialValuesFormik,
        validationSchema: checkoutValidationSchema,
        onSubmit: (values: any) => {
            placeOrder({ ...values, apiEndpoint: apiEndpoints.placeOrder })
        },
    });

    const { data: addressLists, isLoading: addressLists_loading, refetch: refetchAddress } = useQuery({
        queryKey: [apiEndpoints.userProfile],
        queryFn: () => FetchAPIData.fetchAPIData({ apiEndpoint: apiEndpoints.userProfile, }),
        onSuccess: (values: any) => {
            setAddressChange(false);
        },
        enabled: Boolean(user.id)
    });

    const { mutate: placeOrder, isLoading: placeOrder_Loading, error: placeOrder_error } = useMutation(PostAPI.postAPI, {
        onSuccess: (response: any) => {
            if (response.status) {
                if ((response.data) && (response.data.payment_type === 'card')) {
                    window.location.assign(response.data.url)
                } else {
                    dispatch(setMessages({
                        messages: response.message,
                        type: 'success',
                        from: 'order'
                    }));
                    console.log('response', response);

                    push(`/order-response/success?status=Success&code=${response.data?.order_code}`);
                }
            } else {
                dispatch(setMessages({
                    messages: response.message,
                    type: 'error',
                    from: 'order'
                }));
            }
        },
        onError: (error: any) => {
            dispatch(setMessages({
                messages: error?.message || 'Something went wrong!',
                type: 'error',
                from: 'order'
            }));
        },
    });

    useEffect(() => {
        addressChange && refetchAddress();
    }, [addressChange]);
    console.log('addressChange', addressChange);

    return (
        <Fragment>
            <InnerStrip
                title='CHECKOUT'
            />
            <section className="zb-checkout-area">
                <div className="container">
                    <div className="row">
                        <ShippingDetails
                            checkoutFormik={checkoutFormik}
                            addressLists={addressLists?.data?.address}
                            addressLists_loading={addressLists_loading}
                            setAddressChange={setAddressChange}
                            user={user}
                        />
                        <OrderReview />
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default withAuthLayout(Checkout);
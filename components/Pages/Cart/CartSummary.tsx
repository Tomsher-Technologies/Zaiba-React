import React, { FC, useRef, useState } from 'react';
import Link from 'next/link';
import { useMutation } from '@tanstack/react-query';
import { CloseOutlined } from '@mui/icons-material';

import Button from '@/components/CustomComponents/Button';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { setMessages } from '@/redux/messagesSlice';
import { CartSummaryProps } from '@/types/CartProps';
import { amountFormat } from '@/utiles/functions';

import { apiEndpoints } from '@/server_api/config/api.endpoints';
import useCart from '@/server_api/hooks/useCart';
import PostAPI from '@/server_api/apifunctions/apipost';
import ValidationErrorMessage from '@/components/CustomComponents/ValidationErrorMessage';
import InputText from '@/components/CustomComponents/InputText';
import Loading from '@/components/CustomComponents/Loading';

const CartSummary: FC<CartSummaryProps> = ({ cartSummary }) => {
    const user = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();
    const { getCartList, cart } = useCart();

    const [couponCode, setCouponCode] = useState<string>('');
    const [errorMessages, setErrorMessages] = useState<string>('');

    const { mutate: applyCouponCode, isLoading: applyCouponCodeLoading, } = useMutation(PostAPI.postAPI, {
        onSuccess: (response: any) => {
            if (response.status) {
                setCouponCode('');
                getCartList();
                dispatch(setMessages({
                    messages: response.message,
                    type: 'success',
                    from: 'apply-coupon-code'
                }));
            } else {
                dispatch(setMessages({
                    messages: response.message,
                    type: 'error',
                    from: 'apply-coupon-code'
                }));
                setErrorMessages(response.message);
            }
        },
        onError: (error: any) => {
            dispatch(setMessages({
                messages: error?.message || 'Something went wrong!',
                type: 'error',
                from: 'apply-coupon-code'
            }));
            setErrorMessages(error.message);
        },
    });

    const { mutate: removeCouponCode, isLoading: removeCouponCodeLoading, } = useMutation(PostAPI.postAPI, {
        onSuccess: (response: any) => {
            if (response.status || response.result) {
                getCartList();
                dispatch(setMessages({
                    messages: response.message,
                    type: 'success',
                    from: 'coupon-remove'
                }));
            } else {
                dispatch(setMessages({
                    messages: response.message,
                    type: 'error',
                    from: 'coupon-remove'
                }));
                setErrorMessages(response.message);
            }
        },
        onError: (error: any) => {
            dispatch(setMessages({
                messages: error?.message || 'Something went wrong!',
                type: 'error',
                from: 'coupon-remove'
            }));
        },
    });


    const handle_applyCouponCode = () => {
        setErrorMessages('');
        if (couponCode?.length > 0) {
            applyCouponCode({
                apiEndpoint: apiEndpoints.applyCouponCode,
                coupon_code: couponCode
            });
        } else {
            setErrorMessages('Please enter coupon code!');
            dispatch(setMessages({
                messages: 'Please enter coupon code!',
                type: 'error',
                from: 'coupon-remove'
            }));
        }
    }

    return (
        <div className="col-md-4">
            <div className="zb-cart-summary">
                <div className="zb-cart-list-title">
                    <h5>Cart Summary</h5>
                </div>
                <div className="zb-cart-summary-content">
                    <InputText
                        key={couponCode}
                        labelText="Coupon Code"
                        placeholder="Enter Coupon Code"
                        className="w-full mt-2 bg-primaryhover/10"
                        endAdornment={
                            <>
                                <Button className=" text-black m-2 text-[16px] font-semibold"
                                    onClick={() => handle_applyCouponCode()}
                                    isLoading={applyCouponCodeLoading}
                                    isLoadingColor="text-black"
                                >
                                    Apply
                                </Button>
                            </>
                        }
                        onChange={(e: any) => setCouponCode(e.target.value)}
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                e.preventDefault();
                                handle_applyCouponCode();
                            }
                        }}
                        required={false}
                    />

                    <ValidationErrorMessage errorMessages={errorMessages} />
                    {cartSummary?.coupon_code &&
                        <div className="ps-checkout__row">
                            <div className="ps-title">Applied Coupon</div>
                            <div className='flex justify-between items-center gap-7 py-3 font-semibold'>
                                <div className="!text-primary underline cursor-default text-[20px]">{cartSummary?.coupon_code}</div>
                                {!removeCouponCodeLoading && <CloseOutlined className='hover:text-primary cursor-pointer h-[28px] w-[28px]'
                                    onClick={() =>
                                        removeCouponCode({
                                            apiEndpoint: apiEndpoints.removeCouponCode
                                        })}
                                />
                                    ||
                                    <Loading className='!text-primaryhover' size={20} />
                                }
                            </div>
                        </div>
                    }
                    <div className="zb-product-amount-list">
                        <ul>
                            <li>
                                <span>Subtotal({cartSummary.productCount} item)</span>
                                <span>{amountFormat(cartSummary.sub_total)}</span>
                            </li>
                            <li>
                                <span>Discount</span>
                                <span>{amountFormat(cartSummary.discount)}</span>
                            </li>
                            {cartSummary.shipping > 0 &&
                                <li>
                                    <span>Shipping</span>
                                    <span>{amountFormat(cartSummary.shipping)}</span>
                                </li>
                            }
                            {cartSummary.vat_amount > 0 &&
                                <li>
                                    <span>VAT</span>
                                    <span>{amountFormat(cartSummary.vat_amount)}</span>
                                </li>
                            }
                            {cartSummary.coupon_applied > 0 && cartSummary.coupon_discount > 0 &&
                                <li>
                                    <span>Coupon Discount</span>
                                    <span>{amountFormat(cartSummary.coupon_discount)}</span>
                                </li>
                            }
                        </ul>
                    </div>
                    <hr />
                    <div className="zb-product-cart-total">
                        <div className='font-semibold text-[14px]  md:text-[17px] 2xl:text-[22px]'>
                            Total <small>(Inclusive of VAT)</small>
                        </div>
                        <div className='font-semibold text-[18px] md:text-[19px] 2xl:text-[22px]'>{amountFormat(cartSummary.total)}</div>
                    </div>
                    <Link href={`${(user && user?.user_id) ? '/checkout' : '/login?rd=/cart'}`} className="btn btn-login w-100">
                        Proceed to Checkout
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default CartSummary;
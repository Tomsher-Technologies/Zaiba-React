import React, { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import { useMutation } from '@tanstack/react-query';
import { InputAdornment } from '@mui/material';

import withMainLayout from '@/hocs/withMainLayout';
import InputText from '@/components/CustomComponents/InputText';
import Button from '@/components/CustomComponents/Button';
import ValidationErrorMessage from '@/components/CustomComponents/ValidationErrorMessage';
import AlertDialogSlide from '@/components/CustomComponents/AlertDialogSlide';
import Success from '@/components/alerts/Success';

import { loginOTPInitialValue, verifyMobile } from '@/utiles/formik/authFormik';
import { loginOTPValidationSchema, verifyMobileValidationSchema } from '@/utiles/validations/authSchema';

import Auth from '@/server_api/apifunctions/auth';
import useAuth from '@/server_api/hooks/useAuth';

const LoginOtp: FC = () => {
    const { user, setLogIn } = useAuth();
    const router = useRouter();

    const [otpEnable, setOtpEnable] = useState<boolean>(false);
    const [resendOTP, setResendOTP] = useState<boolean>(false);
    const [counter, setCounter] = useState<number>(0);
    const [alertSuccsess, setAlertSuccsess] = useState<boolean>(false);

    const loginOTPFormik = useFormik({
        initialValues: loginOTPInitialValue,
        validationSchema: loginOTPValidationSchema,
        onSubmit: (values: any) => {
            loginOTP_API(values)
        },
    });

    const verifyFormik = useFormik({
        initialValues: verifyMobile,
        validationSchema: verifyMobileValidationSchema,
        onSubmit: (values: any) => {
            verifyMobileOTP(values)
        },
    });

    const { data: loginOTPResponse, mutate: loginOTP_API, isLoading: loginOTP_isLoading, error: loginOTP_error } = useMutation<any>(Auth.loginOTP, {
        onSuccess: async (response: any) => {
            setOtpEnable(true);
            setCounter(30);
            setResendOTP(true);
            setAlertSuccsess(true);
        }
    });

    const { mutate: verifyMobileOTP, isLoading: verifyMobileOtp_isLoading, error: verifyMobileOtp_error } = useMutation<any>(Auth.verifyMobileOTP, {
        onSuccess: async (response: any) => {
            console.log('response', response);
            await setLogIn({
                ...response.user,
                user_id: response.user.id,
                access_token: response.access_token,
                token_type: response.token_type,
                expires_at: response.expires_at
            }, response.access_token);
            router.push('/');
        },
        onError: (error: any) => {
            console.log('error', error)
        }
    });

    const { data: resendOTOResponse, mutate: resendMobileOtp, isLoading: resendMobileOtp_isLoading, error: resendMobileOtp_error } = useMutation<any>(Auth.resendOTP, {
        onSuccess: async (response: any) => {
            setCounter(30);
            setResendOTP(true);
            setAlertSuccsess(true);
        }
    });

    useEffect(() => {
        let timer: NodeJS.Timeout | null = null;

        if (resendOTP && counter > 0) {
            timer = setInterval(() => {
                setCounter(prevCounter => prevCounter - 1);
            }, 1000);
        }

        return () => {
            if (timer) {
                clearInterval(timer);
            }
        };
    }, [resendOTP, counter]);

    const handle_resendMobileOtp = () => {
        resendMobileOtp({ user_id: loginOTPResponse?.data?.user_id } as any)
    }

    const handle_submit = () => {
        if (!otpEnable) {
            loginOTPFormik.handleSubmit();
        } else {
            verifyFormik.setFieldValue('user_id', loginOTPResponse?.data?.user_id || '');
            verifyFormik.handleSubmit()
        }
    }

    return (
        <section className="zb-login-area">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 m-auto">
                        <div className="zb-login-warpper">
                            <div className='font-semibold text-2xl text-center'>Login with OTP</div>

                            <div >
                                <div className="mb-3">
                                    <InputText
                                        labelText="Phone"
                                        placeholder="Enter phone"
                                        className="w-full"
                                        name="phone"
                                        disabled={otpEnable}
                                        onChange={loginOTPFormik.handleChange}
                                        error={loginOTPFormik?.touched?.phone && loginOTPFormik.errors.phone && loginOTPFormik.errors.phone}
                                        startAdornment={
                                            <>
                                                <InputAdornment position="start" >
                                                    <div className='flex justify-center items-center text-black cursor-default' >  +971</div>

                                                </InputAdornment>
                                            </>
                                        }
                                    />
                                </div>

                                {otpEnable &&
                                    <div className="mb-3">
                                        <InputText
                                            labelText="OTP"
                                            placeholder="Enter otp"
                                            className="w-full"
                                            name="otp"
                                            value={verifyFormik.values.otp}
                                            onChange={verifyFormik.handleChange}
                                            error={verifyFormik?.touched?.otp && verifyFormik.errors.otp && verifyFormik.errors.otp}
                                        />
                                    </div>}

                                <ValidationErrorMessage errorMessages={loginOTP_error || verifyMobileOtp_error || resendMobileOtp_error} />
                                {counter > 0 &&
                                    <div className="text-xs my-2">You can request a new OTP after a <span className='text-sm font-semibold'>{counter}</span>-second </div>
                                }
                                <div className='w-full flex gap-2'>
                                    {otpEnable && counter === 0 && <Button
                                        className='w-1/2 !bg-primary !hover:bg-primaryhover !text-center py-2 text-base font-medium !rounded-md'
                                        variant="contained"
                                        onClick={handle_resendMobileOtp}
                                        isLoading={resendMobileOtp_isLoading}
                                    >
                                        Resend OTP
                                    </Button>
                                    }
                                    <Button
                                        className={`${(otpEnable && counter === 0) ? 'w-1/2' : 'w-full'} !rounded-md !bg-primary !hover:bg-primaryhover !text-center py-2 text-base font-medium`}
                                        variant="contained"
                                        isLoading={verifyMobileOtp_isLoading || loginOTP_isLoading}
                                        onClick={handle_submit}
                                    >
                                        {!otpEnable && 'Get OTP' || 'Verify'}

                                    </Button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div >

            <AlertDialogSlide
                isOpen={alertSuccsess}
                setIsOpen={setAlertSuccsess}
                contents={<>
                    <Success contents={loginOTPResponse?.message || resendOTOResponse?.message} />
                </>}
                cancelText="Ok"
                onSubmitButton={false}
            />
        </section >
    )
}

export default withMainLayout(LoginOtp);
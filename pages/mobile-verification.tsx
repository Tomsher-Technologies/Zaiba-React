import React, { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { useFormik } from 'formik';
import { useMutation } from '@tanstack/react-query';

import withMainLayout from '@/hocs/withMainLayout';
import InputText from '@/components/CustomComponents/InputText';
import Button from '@/components/CustomComponents/Button';
import ValidationErrorMessage from '@/components/CustomComponents/ValidationErrorMessage';
import AlertDialogSlide from '@/components/CustomComponents/AlertDialogSlide';
import Success from '@/components/alerts/Success';

import { verifyMobile } from '@/utiles/formik/authFormik';
import { verifyMobileValidationSchema } from '@/utiles/validations/authSchema';

import Auth from '@/server_api/apifunctions/auth';
import useAuth from '@/server_api/hooks/useAuth';


const MobileVerification: FC = () => {
    const { user, setLogIn } = useAuth();
    const router = useRouter();
    const { mobile, user_id } = router?.query;

    const [resendOTP, setResendOTP] = useState<boolean>(false);
    const [counter, setCounter] = useState<number>(0);
    const [alertSuccsess, setAlertSuccsess] = useState<boolean>(false);

    const formik = useFormik({
        initialValues: verifyMobile,
        validationSchema: verifyMobileValidationSchema,
        onSubmit: (values: any) => {
            verifyMobileOTP(values)
        },
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

    const { data: resendOTPResponse, mutate: resendMobileOtp, isLoading: resendMobileOtp_isLoading, error: resendMobileOtp_error } = useMutation<any>(Auth.resendOTP, {
        onSuccess: async (response: any) => {
            setCounter(30);
            setResendOTP(true);
            setAlertSuccsess(true);
        }
    });

    useEffect(() => {
        if (router.isReady && router.query) {
            user_id && formik.setFieldValue('user_id', user_id || '');
            setResendOTP(true);
            setCounter(30);
        }

    }, [router]);

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
        resendMobileOtp({ user_id } as any)
    }

    return (
        <section className="zb-login-area">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 m-auto">
                        <div className="zb-login-warpper">
                            <div className='font-semibold text-2xl text-center'>Mobile Number Verification</div>
                            <p>
                                The OTP has been sent to your registered mobile number.
                            </p>
                            <form onSubmit={formik.handleSubmit}>
                                <div className="mb-3">
                                    <InputText
                                        labelText="OTP"
                                        placeholder="Enter otp"
                                        className="w-full"
                                        name="otp"
                                        value={formik.values.otp}
                                        onChange={formik.handleChange}
                                        // helperText={formik.touched.otp && formik.errors.otp}
                                        error={formik?.touched?.otp && formik.errors.otp && formik.errors.otp}
                                    />
                                </div>

                                <ValidationErrorMessage errorMessages={verifyMobileOtp_error || resendMobileOtp_error} />
                                {counter > 0 &&
                                    <div className="text-xs my-2">You can request a new OTP after a <span className='text-sm font-semibold'>{counter}</span>-second </div>
                                }
                                <div className='w-full flex gap-2'>
                                    {counter === 0 && <Button
                                        className='w-1/2 !bg-primary !hover:bg-primaryhover !text-center py-2 text-base font-medium !rounded-md'
                                        variant="contained"
                                        onClick={handle_resendMobileOtp}
                                        isLoading={resendMobileOtp_isLoading}
                                    >
                                        Resend OTP
                                    </Button>
                                    }
                                    <Button
                                        type='submit'
                                        className={`${counter === 0 ? 'w-1/2' : 'w-full'} !rounded-md !bg-primary !hover:bg-primaryhover !text-center py-2 text-base font-medium`}
                                        variant="contained"
                                        isLoading={verifyMobileOtp_isLoading}
                                    >
                                        Verify
                                    </Button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div >

            <AlertDialogSlide
                isOpen={alertSuccsess}
                setIsOpen={setAlertSuccsess}
                contents={<>
                    <Success contents={resendOTPResponse?.message} />
                </>}
                cancelText="Ok"
                onSubmitButton={false}
            />
        </section >
    )
}

export default withMainLayout(MobileVerification);
import React, { FC, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import { useMutation } from '@tanstack/react-query';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import withMainLayout from '@/hocs/withMainLayout';
import InputText from '@/components/CustomComponents/InputText';
import Button from '@/components/CustomComponents/Button';
import ValidationErrorMessage from '@/components/CustomComponents/ValidationErrorMessage';

import { registerFormik } from '@/utiles/formik/authFormik';
import { registerValidationSchema } from '@/utiles/validations/authSchema';

import useAuth from '@/server_api/hooks/useAuth';
import Auth from '@/server_api/apifunctions/auth';
import AlertDialogSlide from '@/components/CustomComponents/AlertDialogSlide';
import Success from '@/components/alerts/Success';

const Register: FC = () => {
    const { user, setLogIn } = useAuth();
    const router = useRouter();

    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [registerSuccsess, setRegisterSuccsess] = useState<boolean>(false);

    const formik = useFormik({
        initialValues: registerFormik,
        validationSchema: registerValidationSchema,
        onSubmit: (values: any) => {
            register(values)
        },
    });

    const { data: registerResponse, mutate: register, isLoading, error: register_error } = useMutation<any>(Auth.registerLogin, {
        onSuccess: async (response: any) => {
            console.log('response', response)
            setRegisterSuccsess(true);
            return

        },
        onError: (error: any) => {
            console.log('error', error)
        }
    });

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    console.log('formik', formik);

    return (
        <section className="zb-login-area">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 m-auto">
                        <div className="zb-login-warpper">
                            <h4>Register to Zaiba</h4>
                            <p>
                                Already have an account <Link href="/login">Login</Link>
                            </p>
                            <form onSubmit={formik.handleSubmit}>
                                <div className="mb-3">
                                    <InputText
                                        labelText="Name"
                                        placeholder="Enter name"
                                        className="w-full"
                                        name="name"
                                        value={formik.values.name}
                                        onChange={formik.handleChange}
                                        error={formik?.touched?.name && formik.errors.name && formik.errors.name}
                                    />
                                </div>
                                <div className="mb-3">
                                    <InputText
                                        labelText="Email"
                                        placeholder="Enter email"
                                        type='email'
                                        className="w-full"
                                        name="email"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        error={formik?.touched?.email && formik.errors.email && formik.errors.email}
                                    />
                                </div>
                                <div className="mb-3">
                                    <InputText
                                        labelText="Phone Number"
                                        placeholder="Enter phone number"
                                        className="w-full"
                                        name="phone_number"
                                        value={formik.values.phone_number}
                                        onChange={formik.handleChange}
                                        startAdornment={
                                            <>
                                                <InputAdornment position="start" >
                                                    <div className='flex justify-center items-center text-black cursor-default' >  +971</div>

                                                </InputAdornment>
                                            </>
                                        }
                                        error={formik?.touched?.phone_number && formik.errors.phone_number && formik.errors.phone_number}
                                    />
                                </div>
                                <div className="mb-3 position-relative">
                                    <InputText
                                        labelText="Password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Enter password"
                                        className="w-full"
                                        endAdornment={
                                            <>
                                                <InputAdornment position="end">
                                                    <IconButton onClick={togglePasswordVisibility}>
                                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            </>
                                        }
                                        name="password"
                                        value={formik.values.password}
                                        onChange={formik.handleChange}

                                        error={formik?.touched?.password && formik.errors.password}
                                    // required = true,
                                    />
                                </div>
                                <div className="mb-3 position-relative">
                                    <InputText
                                        labelText="Confirm Password"
                                        type={"text"}
                                        placeholder="Enter confirm password"
                                        className="w-full"
                                        name="confirm_password"
                                        value={formik.values.confirm_password}
                                        onChange={formik.handleChange}
                                        error={formik?.touched?.confirm_password && formik.errors.confirm_password}
                                        onKeyPress={(e) => {
                                            if (e.key === 'Enter') {
                                                e.preventDefault();
                                                formik.handleSubmit();
                                            }
                                        }}
                                    // required = true,
                                    />
                                </div>
                                <ValidationErrorMessage errorMessages={register_error} />
                                <Button
                                    type="submit"
                                    className='w-full btn btn-login py-2 px-4 rounded  !font-semibold'
                                    isLoading={isLoading}
                                >
                                    Register
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <AlertDialogSlide
                isOpen={registerSuccsess}
                setIsOpen={setRegisterSuccsess}
                contents={<>
                    <Success contents={registerResponse?.message} />
                </>}
                submitText="Verify"
                onSubmit={() => {
                    router.push(`/mobile-verification?mobile=${formik.values.phone_number}&user_id=${registerResponse?.data}`);
                    setRegisterSuccsess(false);
                }}
                onCancelButton={false}
            />
        </section>

    )
}

export default withMainLayout(Register);
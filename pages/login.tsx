import React, { FC, useState } from 'react';
import Link from 'next/link';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import { useMutation } from '@tanstack/react-query';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import withMainLayout from '@/hocs/withMainLayout';
import InputText from '@/components/CustomComponents/InputText';
import Button from '@/components/CustomComponents/Button';
import ValidationErrorMessage from '@/components/CustomComponents/ValidationErrorMessage';

import { loginFormik } from '@/utiles/formik/authFormik';
import { loginValidationSchema } from '@/utiles/validations/authSchema';

import Auth from '@/server_api/apifunctions/auth';
import useAuth from '@/server_api/hooks/useAuth';

const Login: FC = () => {
    const { user, setLogIn } = useAuth();
    const router = useRouter();

    const [showPassword, setShowPassword] = useState<boolean>(false);

    const formik = useFormik({
        initialValues: loginFormik,
        validationSchema: loginValidationSchema,
        onSubmit: (values: any) => {
            login(values)
        },
    });

    const { mutate: login, isLoading, error: login_error } = useMutation<any>(Auth.customerLogin, {
        onSuccess: async (response: any) => {
            console.log('response', response)
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

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <section className="zb-login-area">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 m-auto">
                        <div className="zb-login-warpper">
                            <h4>Login to Zaiba</h4>
                            <p>
                                Don’t have an account? <Link href="/register">Register</Link>
                            </p>
                            <form onSubmit={formik.handleSubmit}>
                                <div className="mb-3">
                                    <InputText
                                        labelText="Email"
                                        placeholder="Enter email"
                                        className="w-full"
                                        name="email"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        // helperText={formik.touched.email && formik.errors.email}
                                        error={formik?.touched?.email && formik.errors.email && formik.errors.email}
                                    />
                                </div>
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
                                    onKeyPress={(e) => {
                                        if (e.key === 'Enter') {
                                            e.preventDefault();
                                            formik.handleSubmit();
                                        }
                                    }}
                                    error={formik?.touched?.password && formik.errors.password}
                                // required = true,
                                />

                                <div className="!flex flex-col md:flex-row !justify-between mb-3 ">
                                    {/* <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="exampleCheck1"
                                        checked
                                    />
                                    <label className="form-check-label" htmlFor="exampleCheck1">
                                        Remember me
                                    </label> */}
                                     <Link href="/login-otp" className="float-start forgot-label">
                                        Login with otp
                                    </Link>
                                    <Link href="/forgot-password" className="float-end forgot-label">
                                        Forgot Password?
                                    </Link>
                                </div>
                                <ValidationErrorMessage errorMessages={login_error} />
                                <Button
                                    type="submit"
                                    className='w-full btn btn-login py-2 px-4 rounded !text-[#D5A83E] !font-bold'
                                    isLoading={isLoading}
                                >
                                    Login
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default withMainLayout(Login);
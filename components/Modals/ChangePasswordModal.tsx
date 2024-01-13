import React, { FC, useState } from 'react';
import dynamic from 'next/dynamic';
import { useDispatch } from 'react-redux';
import { useMutation } from '@tanstack/react-query';
import { useFormik } from 'formik';
import { IconButton, InputAdornment, useMediaQuery } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import ValidationErrorMessage from '@/components/CustomComponents/ValidationErrorMessage';
import OutlinedTextInput from '@/components/CustomComponents/OutlinedTextInput';
const Modal = dynamic(() => import("@/components/CustomComponents/Modal"));

import { ChangePasswordModalProps } from '@/types/AccountProps';
import { changePasswordFormik } from '@/utiles/formik/accountFormik';
import { changePasswordSchema } from '@/utiles/validations/accountSchema';
import { setMessages } from "@/redux/messagesSlice";

import { APIFetch } from '@/server_api/utils/APIFetch';
import { apiEndpoints } from '@/server_api/config/api.endpoints';
import PostAPI from '@/server_api/apifunctions/apipost';

const ChangePasswordModal: FC<ChangePasswordModalProps> = ({
    address,
    isOpen = false,
    setIsOpen = () => { },
}) => {
    const dispatch = useDispatch();

    const [showCurrentPassword, setShowCurrentPassword] = useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

    const isSmallScreen = useMediaQuery('(max-width:764px)');
    const isMediumScreen = useMediaQuery('(min-width:601px) and (max-width:960px)');
    const isLargeScreen = useMediaQuery('(min-width:961px)');

    const formik = useFormik({
        initialValues: changePasswordFormik,
        validationSchema: changePasswordSchema,
        onSubmit: (values: any) => {
            changePassword({ ...values, apiEndpoint: apiEndpoints.changePassword })
        },
    });

    const { mutate: changePassword, isLoading: changePassword_Loading, error: changePassword_error } = useMutation(PostAPI.postAPI, {
        onSuccess: (response: any) => {
            if (response.status) {
                dispatch(setMessages({
                    messages: response.message,
                    type: 'success',
                    from: 'change-password',
                }));
                setIsOpen(false);
            } else {
                dispatch(setMessages({
                    messages: response.message,
                    type: 'error',
                    from: 'change-password',
                }));
            }
        },
        onError: (response: any) => {
            if (response.status) {
                dispatch(setMessages({
                    messages: response.message,
                    type: 'success',
                    from: 'change-password',
                }));
                setIsOpen(false);
            } else {
                dispatch(setMessages({
                    messages: response.message,
                    type: 'error',
                    from: 'change-password',
                }));
            }
        }
    });

    const toggleCurrentPasswordVisibility = () => {
        setShowCurrentPassword(!showCurrentPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <Modal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            buttons={true}
            size={isSmallScreen ? "90%" : (isMediumScreen ? "75%" : (isLargeScreen ? "30%" : "30%"))}
            modalHeight={isSmallScreen ? "'85%'%" : (isMediumScreen ? "75%" : (isLargeScreen ? "60" : "50%"))}
            title="Change Status"
            // onSubmitButtons={false}
            onSubmit={() => formik.handleSubmit()}
            isLoading={changePassword_Loading}
        >
            <APIFetch notLengthCheckObject={true} >
                {address &&
                    <div className='flex flex-col  p-[20px]'>
                        <OutlinedTextInput
                            labelText="Current Password"
                            type={showCurrentPassword ? "text" : "password"}
                            placeholder="Enter current password"
                            className="w-full rounded-full !overflow-hidden"
                            labelClassName='font-semibold'
                            endAdornment={
                                <>
                                    <InputAdornment position="end">
                                        <IconButton onClick={toggleCurrentPasswordVisibility}>
                                            {showCurrentPassword ? <VisibilityOff className='w-[24px] h-[24px]' /> : <Visibility className='w-[24px] h-[24px]' />}
                                        </IconButton>
                                    </InputAdornment>
                                </>
                            }
                            name="current_password"
                            value={formik.values.current_password}
                            onChange={formik.handleChange}
                            error={formik?.touched?.current_password && formik.errors.current_password}
                            textPadding='8px'
                        />

                        <OutlinedTextInput
                            labelText="New Password"
                            type="password"
                            placeholder="Enter new password"
                            className="w-full rounded-full !overflow-hidden mt-1"
                            labelClassName='font-semibold'
                            endAdornment={
                                <>
                                    <InputAdornment position="end">
                                        <VisibilityOff className='w-[24px] h-[24px]' />
                                    </InputAdornment>
                                </>
                            }
                            name="new_password"
                            value={formik.values.new_password}
                            onChange={formik.handleChange}
                            error={formik?.touched?.new_password && formik.errors.new_password}
                            textPadding='8px'
                        />

                        <OutlinedTextInput
                            labelText="Confirm Password"
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Enter confirm password"
                            className="w-full rounded-full !overflow-hidden"
                            labelClassName='font-semibold'
                            endAdornment={
                                <>
                                    <InputAdornment position="end">
                                        <IconButton onClick={toggleConfirmPasswordVisibility}>
                                            {showConfirmPassword ? <VisibilityOff className='w-[24px] h-[24px]' /> : <Visibility className='w-[24px] h-[24px]' />}
                                        </IconButton>
                                    </InputAdornment>
                                </>
                            }
                            name="password_confirmation"
                            value={formik.values.password_confirmation}
                            onChange={formik.handleChange}
                            onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                    e.preventDefault();
                                    formik.handleSubmit();
                                }
                            }}
                            error={formik?.touched?.password_confirmation && formik.errors.password_confirmation}
                            textPadding='8px'
                        />

                        <ValidationErrorMessage errorMessages={changePassword_error} />
                    </div>
                }
            </APIFetch>
        </Modal>
    )
}

export default ChangePasswordModal;
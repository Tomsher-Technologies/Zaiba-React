import React, { FC, useEffect, useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useFormik } from 'formik';

import InputText from '@/components/CustomComponents/InputText';
import Button from '@/components/CustomComponents/Button';
import AlertDialogSlide from '@/components/CustomComponents/AlertDialogSlide';
import Success from '@/components/alerts/Success';
import ValidationErrorMessage from '@/components/CustomComponents/ValidationErrorMessage';

import { ProfileProps } from '@/types/Account';
import { profileValidationSchema } from '@/utiles/validations/accountSchema';
import { profileFormik } from '@/utiles/formik/accountFormik';

import { APIFetch } from '@/server_api/utils/APIFetch';
import { apiEndpoints } from '@/server_api/config/api.endpoints';
import FetchAPIData from '@/server_api/apifunctions/apifetch';
import PostAPI from '@/server_api/apifunctions/apipost';

const Profile: FC<ProfileProps> = ({ user }) => {

    const [enableEdit, setEnableEdit] = useState(false);
    const [alertSuccsess, setAlertSuccsess] = useState<boolean>(false);
    const [errorMessages, setErrorMessages] = useState<string | null>(null);

    const formik = useFormik({
        initialValues: profileFormik,
        validationSchema: profileValidationSchema,
        onSubmit: (values: any) => {
            updateProfile({ ...values, apiEndpoint: apiEndpoints.updateProfile } as any)
        },
    });

    const { data: userData, isLoading: userDta_loading } = useQuery({
        queryKey: [apiEndpoints.userProfile],
        queryFn: () => FetchAPIData.fetchAPIData({ apiEndpoint: apiEndpoints.userProfile }),
        enabled: Boolean(user?.id)
    });


    const { data: updateResponse, mutate: updateProfile, isLoading: update_isLoading, error: profile_error } = useMutation<any>(PostAPI.postAPI, {
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
        userData && userData?.data && initializeProfileData((userData as any).data);
    }, [userDta_loading]);

    const initializeProfileData = (data: any) => {
        formik.setFieldValue('name', data?.name || '');
        formik.setFieldValue('email', data?.email || '');
        formik.setFieldValue('phone_number', data?.phone || '');
    }

    console.log('formik', formik);
    return (
        <div
            className="tab-pane fade show active"
            id="v-pills-profile"
            role="tabpanel"
            aria-labelledby="v-pills-profile-tab"
            tabIndex={0}
        >
            <APIFetch isLoading={Boolean(!user?.name)} notLengthCheckObject={true} >
                <APIFetch isLoading={userDta_loading} notLengthCheckObject={true} >
                    <h3 className="mb-2">Profile</h3>
                    <div className="zb-profile-intro">
                        <h4>Hello {user?.name}!</h4>
                        <small>{user?.email}</small>
                    </div>
                    {(userData as any)?.data &&
                        <div className="zb-profile-information">
                            <div className="d-flex align-items-center justify-content-between">
                                <h3>Contact information</h3>
                                <div className="btn btn-edit" onClick={() => setEnableEdit(!enableEdit)}>

                                    <i className="bi bi-pencil me-1" /> Edit
                                </div>
                            </div>
                            <hr />

                            <div className="row g-3">
                                <div className="col-md-6">
                                    <InputText
                                        labelText="Full Name"
                                        placeholder="Enter full name"
                                        className="w-full"
                                        name="name"
                                        value={(userData as any)?.data?.name}
                                        disabled={!enableEdit}
                                        onChange={formik.handleChange}
                                        error={formik?.touched?.name && formik.errors.name && formik.errors.name}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <InputText
                                        labelText="Email"
                                        placeholder="Enter email"
                                        className="w-full"
                                        name="name"
                                        value={(userData as any)?.data?.email}
                                        disabled={!enableEdit}
                                        // value={formik.values.email}
                                        onChange={formik.handleChange}
                                        error={formik?.touched?.email && formik.errors.email && formik.errors.email}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <InputText
                                        labelText="Phone"
                                        placeholder="Enter phone"
                                        className="w-full"
                                        name="name"
                                        value={(userData as any)?.data?.phone}
                                        disabled={!enableEdit}
                                        // value={formik.values.phone_number}
                                        onChange={formik.handleChange}
                                        error={formik?.touched?.phone_number && formik.errors.phone_number && formik.errors.phone_number}
                                    />
                                </div>
                                <ValidationErrorMessage errorMessages={profile_error || errorMessages} />
                                {enableEdit &&
                                    <div className='w-full md:w-[50%] xl:w-[33%] '>
                                        <Button
                                            className={`w-full md:w-[50%] xl:w-[33%] !rounded-md !bg-primary !hover:bg-primaryhover !text-center py-2 text-base font-medium`}
                                            variant="contained"
                                            isLoading={update_isLoading}
                                            onClick={() => formik.handleSubmit()}
                                        >
                                            Update
                                        </Button>
                                    </div>
                                }
                            </div>

                        </div>
                    }
                    <div className="zb-profile-bottom">
                        <a href="#" className="btn btn-password w-25">
                            Change Password
                        </a>
                        <a href="#" className="btn btn-delete">
                            Delete account
                        </a>
                    </div>
                </APIFetch>

            </APIFetch>
            <AlertDialogSlide
                isOpen={alertSuccsess}
                setIsOpen={setAlertSuccsess}
                contents={<>
                    <Success contents={updateResponse?.message} />
                </>}
                cancelText="Ok"
                onSubmitButton={false}
            />
        </div>
    )
}

export default Profile
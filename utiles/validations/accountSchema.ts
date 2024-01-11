import * as Yup from 'yup';

export const profileValidationSchema = Yup.object().shape({
    name: Yup.string()
        .matches(/^[a-zA-Z ]*$/, 'Name should not contain numbers or special characters')
        .min(2, 'Name must be at least 2 characters')
        .max(50, 'Name cannot exceed 50 characters')
        .required('Full name is required'),
    email: Yup.string()
        .required('Email is required')
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email format'),
    phone_number: Yup.string()
        .required('Mobile number is required').min(9, 'mobile number must be 9 digits'),

});
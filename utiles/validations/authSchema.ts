import * as Yup from 'yup';

export const loginValidationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required.'),
    password: Yup.string().required('Password is required.').min(4, 'Password must be at least 4 characters.'),
});

export const registerValidationSchema = Yup.object().shape({
    name: Yup.string()
        .matches(/^[a-zA-Z ]*$/, 'Name should not contain numbers or special characters')
        .min(2, 'Name must be at least 2 characters')
        .max(50, 'Name cannot exceed 50 characters')
        .required('Full name is required'),
    email: Yup.string()
        .required('Email is required')
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email format'),
    password: Yup.string().required('Password is required.').min(6, 'Password must be at least 4 characters.'),
    confirm_password: Yup.string()
        .required('Confirm password is required.')
        .oneOf([Yup.ref('password'), undefined as any], 'Passwords must match') // Ensure confirm_password matches password
        .min(6, 'Confirm password must be at least 4 characters.'),
    phone_number: Yup.string()
        .required('Mobile number is required').min(9, 'mobile number must be 9 digits'),
    // password: Yup.string()
    // .required('Password is required.')
    // .min(4, 'Password must be at least 4 characters.')
    // .matches(
    //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
    //     'Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character'
    // ),
});

export const verifyMobileValidationSchema = Yup.object().shape({
    otp: Yup.string().matches(/^\d{4}$/, 'OTP must be a 4-digit number')
        .min(4, 'OTP must be exactly 4 digits')
        .max(4, 'OTP must be exactly 4 digits')
        .required('OTP is required')
});

export const loginOTPValidationSchema = Yup.object().shape({
    phone: Yup.string().required('Mobile number is required').min(9, 'mobile number must be 9 digits')
});
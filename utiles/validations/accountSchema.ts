import * as Yup from 'yup';

export const profileValidationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required').min(3, 'Name must be at least 3 characters'),
    address: Yup.string().required('Address is required').min(6, 'Address must be at least 6 characters'),
    country: Yup.string().required('Country is required'),
    // state: Yup.string().required('State is required'),
    // city: Yup.string().required('City is required'),
    longitude: Yup.string().required('Please select location on the map'),
    latitude: Yup.string().required('Please select location on the map'),
    phone: Yup.string()
        .required('Mobile number is required').min(9, 'mobile number must be 9 digits'),
    type: Yup.string().required('Type is required'),

});

export const changePasswordSchema = Yup.object().shape({
    current_password: Yup.string().required('Password is required.').min(6, 'Current password must be at least 6 characters.'),
    new_password: Yup.string().required('Password is required.').min(6, 'New password must be at least 6 characters.'),
    password_confirmation: Yup.string()
        .required('Confirm password is required.')
        .oneOf([Yup.ref('new_password'), undefined as any], 'New passwords must match') // Ensure confirm_password matches password
        .min(6, 'Confirm password must be at least 6 characters.'),

});
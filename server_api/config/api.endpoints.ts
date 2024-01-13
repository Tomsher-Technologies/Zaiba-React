// export const baseURL = "https://mfar.tomsher.net/api/";
export const baseURL = "http://127.0.0.1:8000/api/";
// export const baseURL = "https://medon.tomsher.net/api/v2/";

export const apiEndpoints = {
    customerLogin: 'auth/login',
    registerLogin: 'auth/register',
    resendOTP: 'auth/resend-otp',
    verifyMobileOTP: 'auth/verify-otp',
    loginOTP: 'auth/otp-login',

    userProfile: 'auth/user-profile',
    updateProfile: 'auth/update-profile',
    updateAddress: 'auth/update-address',
    addAddress: 'auth/add-address',
    changePassword: 'auth/change-password',

    productLists: 'products',
    brandLists: 'website/brands',
    categoryLists: 'website/categories',
    
    homePageData: 'auth/home'
}



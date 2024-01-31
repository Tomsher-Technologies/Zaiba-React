export const baseURL = "https://mfar.tomsher.net/api/";
export const appURL = 'https://www.zaiba.ae/'
// export const baseURL = "http://127.0.0.1:8000/api/";

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
    makeDefault: 'auth/set-default-address',
    deleteAddress: 'auth/delete-address',
    changePassword: 'auth/change-password',

    productLists: 'products',
    brandLists: 'website/brands',
    categoryLists: 'website/categories',

    homePageData: 'auth/home',

    cartList: 'cart',
    removeCart: 'cart/remove',
}



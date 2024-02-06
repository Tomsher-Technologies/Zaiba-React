export const baseURL = "https://mfar.tomsher.net/api/";
export const appURL = 'https://www.zaiba.ae/'
// export const baseURL = "http://127.0.0.1:8000/api/";

export const apiEndpoints = {
    // auth
    customerLogin: 'auth/login',
    registerLogin: 'auth/register',
    resendOTP: 'auth/resend-otp',
    verifyMobileOTP: 'auth/verify-otp',
    loginOTP: 'auth/otp-login',

    // account
    userProfile: 'auth/user-profile',
    updateProfile: 'auth/update-profile',
    updateAddress: 'auth/update-address',
    addAddress: 'auth/add-address',
    makeDefault: 'auth/set-default-address',
    deleteAddress: 'auth/delete-address',
    changePassword: 'auth/change-password',

    // product
    productLists: 'products',
    brandLists: 'website/brands',
    categoryLists: 'website/categories',

    productDetails: 'product-details',
    relatedProducts: 'related-products',

    homePageData: 'auth/home',

    // cart
    cartList: 'cart',
    removeCart: 'cart/remove',
    changeQuantity: 'cart/change_quantity',

    // wishlists
    addWishlists: 'wishlists',
    wishlistRemove: 'wishlist/remove',

    // checkout 
    applyCouponCode: 'coupon-apply',
    removeCouponCode: 'coupon-remove',
    placeOrder: 'place-order',
}



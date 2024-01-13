export const countryCode = "+971";
export const screenWidth: any = typeof window !== "undefined" ? window.innerWidth : '';
export const screenHeight: any = typeof window !== "undefined" ? window.innerHeight : '';

export const tabs = [
    { value: 1, title: "Product Description" }, { value: 2, title: "Product Details" },
];

export const accountMenu = [
    { url: '/profile', value: 'profile', title: "Profile", loginRequired: true, icon: "bi bi-person-gear" },
    { url: '/orders', value: 'orders', title: "Orders", loginRequired: true, icon: "bi bi-cart-check" },
    { url: '/returns', value: 'returns', title: "Returns", loginRequired: true, icon: "bi bi-cart-x" },
    { url: '/addresses', value: 'addresses', title: "Addresses", loginRequired: true, icon: "bi bi-pin-map" },
    { url: '/wishlist', value: 'wishlist', title: "Wishlist", loginRequired: true, icon: "bi bi-credit-card" },
    { url: '/payments', value: 'payments', title: "Payments", loginRequired: true, icon: "bi bi-bag-heart" },
];

export const orderBy = [
    { value: 'latest', title: 'Latest' },
    // { value: 'oldest', title: 'Oldest' },
    { value: 'name_asc', title: 'A-Z' },
    { value: 'name_desc', title: 'Z-A' },
    { value: 'price_high', title: 'Price: high to low' },
    { value: 'price_low', title: 'Price: low to high' }
];


export const startRatings = [
    { value: 1, rating: 1 },
    { value: 2, rating: 2 },
    { value: 3, rating: 3 },
    { value: 4, rating: 4 },
    { value: 5, rating: 5 }
];
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

export const priceRange = [
    { min_price: 0, max_price: 500, title: 'Upto 500' },
    { min_price: 500, max_price: 1000, title: '500 - 1000' },
    { min_price: 1000, max_price: 5000, title: '1000 - 5000' },
    { min_price: 5000, max_price: 10000, title: '5000 -10000' },
    { min_price: 10000, max_price: 20000, title: '10000 - 20000' },
    { min_price: 20000, max_price: 50000, title: '20000 -50000' },
    { min_price: 50000, max_price: '', title: 'More than 50000' },
];

export const startRatings = [
    { value: 1, rating: 1 },
    { value: 2, rating: 2 },
    { value: 3, rating: 3 },
    { value: 4, rating: 4 },
    { value: 5, rating: 5 }
];
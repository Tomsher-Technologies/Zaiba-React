export const tabs = [
    { value: 1, title: "Product Description" }, { value: 2, title: "Product Details" },
]

export const accountMenu = [
    { url: '/profile', value: 'profile', title: "Profile", loginRequired: true, icon: "bi bi-person-gear" },
    { url: '/orders', value: 'orders', title: "Orders", loginRequired: true, icon: "bi bi-cart-check" },
    { url: '/returns', value: 'returns', title: "Returns", loginRequired: true, icon: "bi bi-cart-x" },
    { url: '/addresses', value: 'addresses', title: "Addresses", loginRequired: true, icon: "bi bi-pin-map" },
    { url: '/wishlist', value: 'wishlist', title: "Wishlist", loginRequired: true, icon: "bi bi-credit-card" },
    { url: '/payments', value: 'payments', title: "Payments", loginRequired: true, icon: "bi bi-bag-heart" },
]
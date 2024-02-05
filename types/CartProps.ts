export interface CartProps {
    cart: any;
    cartToggleDrawer: any;
};

export interface CartListProps {
    cartProducts: any[];
};

export interface CartSummaryProps {
    cartSummary: any;
};

export interface CartListRowProps {
    product: any;
    user: any;
    quanitityUpdateLoading: boolean;
    quanitityUpdate: any;
    removeCart_cartList: boolean;
    removeCart: any;
};

export interface AddToWishlistAndRemoveCartProps {
    user: any;
    removeCart_cartList: boolean;
    removeCart: any;
    product: any;
};

export interface CartListDrawerRowProps {
    product: any;
};
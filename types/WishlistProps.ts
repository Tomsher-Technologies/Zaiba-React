import { Dispatch, SetStateAction } from "react";

export interface WishlistRowProps {
    product: any;
    addToCart_Loading: boolean;
    addToWishlist_Loading: boolean;
    handle_addToWishlist: any;
    addToCart: any;
    setMovingToCartSlug: any;
    setMovingToCartSku: Dispatch<SetStateAction<string>>;
}
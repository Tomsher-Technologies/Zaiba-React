import { createSlice } from "@reduxjs/toolkit";

interface WishlistDetails {
    wishlistCount: number;
}

const initialState: WishlistDetails = {
    wishlistCount: 0,
};

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        setWishlist: (state, action) => {
            return { ...state, ...action.payload };
        },
        clearWishlist: () => initialState,
    },
});

export const { setWishlist, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

interface CartDetails {
    products: any[];
    summary: any;
}

const initialState: CartDetails = {
    products: [],
    summary: {},
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setCart: (state, action) => {
            return { ...state, ...action.payload };
        },
        clearCart: () => initialState,
    },
});

export const { setCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;


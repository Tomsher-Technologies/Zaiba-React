import { configureStore } from '@reduxjs/toolkit';
import userReducer from '@/redux/userSlice';
import cartReducer from '@/redux/cartSlice';
import messagesReducer from '@/redux/messagesSlice';
import wishlistReducer from '@/redux/wishlistSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    messages: messagesReducer,
    wishlist: wishlistReducer,
    // Add other reducers here if needed
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

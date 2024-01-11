import { configureStore } from '@reduxjs/toolkit';
import userReducer from '@/redux/userSlice';
import cartReducer from '@/redux/cartSlice';
import messagesReducer from '@/redux/messagesSlice';


const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    messages: messagesReducer,
    // Add other reducers here if needed
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

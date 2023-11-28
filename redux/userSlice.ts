import { createSlice } from "@reduxjs/toolkit";

interface UserDetails {
  access_token: string | null;
  token_type: string | null;
  avatar_original: any | null;
  email: string | null;
  expires_at: any;
  id?: number | null;
  user_id?: number | null;
  name: string | null;
  phone: string | null | number;
}

const initialState: UserDetails = {
  name: null,
  access_token: null,
  id: null,
  user_id: null,
  token_type: null,
  avatar_original: null,
  email: null,
  expires_at: null,
  phone: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      return { ...state, ...action.payload };
    },
    clearUser: () => initialState,
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;


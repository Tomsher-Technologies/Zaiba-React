import { createSlice } from "@reduxjs/toolkit";

interface MessagesDetails {
    type: string | null;
    messages: string | null;
    from: string | null;
}

const initialState: MessagesDetails = {
    type: '',
    messages: '',
    from: ''
};

const messagesSlice = createSlice({
    name: "messages",
    initialState,
    reducers: {
        setMessages: (state, action) => {
            return { ...state, ...action.payload };
        },
        clearMessages: () => initialState,
    },
});

export const { setMessages, clearMessages } = messagesSlice.actions;
export default messagesSlice.reducer;


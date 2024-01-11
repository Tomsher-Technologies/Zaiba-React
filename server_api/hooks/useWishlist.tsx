import { useState } from "react";
import { useDispatch } from "react-redux";
import { useMutation } from "@tanstack/react-query";

import { setMessages } from "@/redux/messagesSlice";

import PostAPI from '@/server_api/apifunctions/apipost';

const useWishlist = () => {
    const dispatch = useDispatch();

    const [errorWishlistMessagesEnable, setWishlistErrorMessagesEnable] = useState<boolean>(false);

    const { data: wishlistResponse, mutate: addToWishlist, isLoading: addToWishlist_Loading, data, error: errorWishlistMessage } = useMutation(PostAPI.postAPI, {
        onSuccess: (response: any) => {
            if (response.status) {
                dispatch(setMessages({
                    messages: 'Successfully updated wishlist',
                    type: 'success',
                    from: 'wishlist'
                }));
            } else {
                dispatch(setMessages({
                    messages: response.message,
                    type: 'error',
                    from: 'wishlist'
                }));
            }
        },

        onError: (error: any) => {
            console.log('error', error);
            dispatch(setMessages({
                error: error || error?.message || 'Something went wrong!',
                type: 'error',
                from: 'wishlist'
            }));
            setWishlistErrorMessagesEnable(true)
        },
    });

    return { wishlistResponse, addToWishlist, addToWishlist_Loading, errorWishlistMessagesEnable, setWishlistErrorMessagesEnable, errorWishlistMessage };
};

export default useWishlist;
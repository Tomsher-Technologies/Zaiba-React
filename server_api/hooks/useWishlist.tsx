import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMutation, useQuery } from "@tanstack/react-query";

import { setMessages } from "@/redux/messagesSlice";
import { setWishlist } from "@/redux/wishlistSlice";
import { RootState } from "@/redux/store";

import PostAPI from '@/server_api/apifunctions/apipost';
import { apiEndpoints } from "@/server_api/config/api.endpoints";
import FetchAPIData from '@/server_api/apifunctions/apifetch';

const useWishlist = () => {
    const user = useSelector((state: RootState) => state.user);

    const dispatch = useDispatch();

    const [errorWishlistMessagesEnable, setWishlistErrorMessagesEnable] = useState<boolean>(false);

    const { data: wishlistList, refetch: getWishlistList, isLoading: isLoading_WishlistList } = useQuery({
        queryKey: [apiEndpoints.addWishlists],
        queryFn: () => FetchAPIData.fetchAPIData({ apiEndpoint: apiEndpoints.addWishlists }),
        onSuccess: (response: any) => {
            dispatch(setWishlist({ wishlistCount: response.data?.length || 0 }));
            // queryClient.invalidateQueries([apiEndpoints.addWishlists]);
        },
        enabled: Boolean(user.id)
    });


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
            dispatch(setMessages({
                messages: error?.message || 'Something went wrong!',
                type: 'error',
                from: 'wishlist'
            }));
            setWishlistErrorMessagesEnable(true)
        },
    });

    return { wishlistList, getWishlistList, isLoading_WishlistList, wishlistResponse, addToWishlist, addToWishlist_Loading, errorWishlistMessagesEnable, setWishlistErrorMessagesEnable, errorWishlistMessage };
};

export default useWishlist;
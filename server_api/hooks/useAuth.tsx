import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";

import authStorage from "@/server_api/storage";
import { setUser, clearUser } from "@/redux/userSlice";

interface UserDetailsType {
    access_token: string;
    token_type: string;
    avatar_original: any;
    email: string;
    expires_at: any;
    id?: number;
    user_id: number;
    name: string;
    phone: string | number;
}

interface AuthFunctions {
    setLogIn: (userDetails: UserDetailsType, access_token?: string) => void;
    setLogOut: () => void;
}

const useAuth = () => {
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.user);

    const setLogIn = (userDetails: UserDetailsType, access_token: string = "") => {
        userDetails.access_token = access_token;
        dispatch(setUser(userDetails));
        authStorage.storeUser(userDetails);
    };

    const setLogOut = (user?: any) => {
        dispatch(clearUser());
        authStorage.deleteUser();

    };

    return { user, setLogIn, setLogOut };
};

export default useAuth;
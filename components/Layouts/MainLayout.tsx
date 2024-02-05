import React, { ReactNode, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useSelector } from 'react-redux';

const Container = dynamic(() => import('@/components/CustomComponents/Container'));
const Header = dynamic(() => import('@/components/Layouts/Header'));
const Footer = dynamic(() => import('@/components/Layouts/Footer'));
const SnackbarAlert = dynamic(() => import('@/components/Snackbar/SnackbarAlert'));

import { RootState } from '@/redux/store';
import useWishlist from '@/server_api/hooks/useWishlist';
import useCart from '@/server_api/hooks/useCart';

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    const user = useSelector((state: RootState) => state.user);
    const cart = useSelector((state: RootState) => state.cart);
    const messages = useSelector((state: RootState) => state.messages);
    const wishlist = useSelector((state: RootState) => state.wishlist);

    const { getWishlistList } = useWishlist();
    const { getCartList } = useCart();

    const [successMessagesEnable, settSuccessMessagesEnable] = useState<boolean>(false);

    // const { data: navBarData, isLoading: navBarData_loading } = useQuery({
    //     queryKey: [apiEndpoints.navBarData],
    //     queryFn: () => FetchAPIData.fetchAPIData({ apiEndpoint: apiEndpoints.navBarData }),
    // });

    useEffect(() => {
        updateAlertMessage();
    }, [messages]);

    const updateAlertMessage = () => {
        if (messages.messages !== '') {
            if ((messages.type === 'success') || (messages.type === 'error')) {
                settSuccessMessagesEnable(true)
            }
        }
        if (messages.from === 'wishlist') {
            getWishlistList();
        }
    }

    return (
        <Container>
            <Header
                cart={cart}
                user={user}
                //  navBarData={navBarData?.data}
                wishlistCount={wishlist.wishlistCount}
            />
            {children}
            <Footer />

            {successMessagesEnable &&
                <SnackbarAlert
                    content={messages?.messages}
                    messagesEnable={successMessagesEnable}
                    setMessagesEnable={settSuccessMessagesEnable}
                    type={messages.type}
                />
            }
        </Container>
    );
};

export default MainLayout;
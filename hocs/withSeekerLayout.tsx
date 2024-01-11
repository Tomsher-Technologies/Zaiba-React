import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

const MainLayout = dynamic(() => import('@/components/Layouts/MainLayout'));


import authStorage from '@/server_api/storage';

const withAuthLayout = (WrappedComponent: React.ComponentType) => {
    const WithAuthLayout: React.FC = (props) => {
        const router = useRouter();
        const { rd } = router.query;

        const [user, setUser] = useState(null);


        useEffect(() => {
            getUserSession()
        }, []);

        const getUserSession = async () => {
            const loggedUser = await authStorage.getUser();
            setUser(user);
            if (!loggedUser) {
                router.push('/signin?rd=' + rd ? rd : (router.asPath) as any);
                return null;
            }
        };

        return (
            <MainLayout>
                <WrappedComponent {...props} />
            </MainLayout>
        )

    };

    return WithAuthLayout;
};

export default withAuthLayout;
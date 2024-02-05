import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

const MainLayout = dynamic(() => import('@/components/Layouts/MainLayout'));


import authStorage from '@/server_api/storage';

const withAuthLayout = (WrappedComponent: React.ComponentType) => {
    const WithAuthLayout: React.FC = (props) => {
        const router = useRouter();

        const [user, setUser] = useState(null);


        useEffect(() => {
            getUserSession()
        }, []);

        const getUserSession = async () => {
            const loggedUser = await authStorage.getUser();
            setUser(user);
            if (!loggedUser) {
                const urlObj = router.query;
                if (urlObj && urlObj.auth) {
                    router.push('/login?rd=' + (urlObj.rd ? urlObj.rd : router.asPath));
                } else {
                    router.push('/login?rd=' + router.asPath);
                }
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
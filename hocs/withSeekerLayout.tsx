import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

const SeekerLayout = dynamic(() => import('@/components/layouts/CareerLayout'));
const MainLayout = dynamic(() => import('@/components/Layouts/MainLayout'));

import ObjectIsEmpty from '@/utils/isObjectEmpty';

import authStorage from '@/server_api/storage';

const withVendorLayout = (WrappedComponent: React.ComponentType) => {
    const WithVendorLayout: React.FC = (props) => {
        const router = useRouter();

        const [user, setUser] = useState(null);

        useEffect(() => {
            getUserSession()
        }, []);

        const getUserSession = async () => {
            const loggedUser = await authStorage.getUser();
            setUser(user);
            if (!loggedUser) {
                router.push('/');
                return null;
                if (ObjectIsEmpty(loggedUser)) {
                    router.push('/login');
                    return null;
                }
            }
        };

        return (
            <>
                {user &&
                    <SeekerLayout>
                        <WrappedComponent {...props} />
                    </SeekerLayout>
                    ||
                    <MainLayout>
                        <WrappedComponent {...props} />
                    </MainLayout>

                }
            </>

        )

    };

    return WithVendorLayout;
};

export default withVendorLayout;
import React from 'react';
import dynamic from 'next/dynamic';

const MainLayout = dynamic(() => import('@/components/Layouts/MainLayout'));

const withMainLayout = <P extends {}>(WrappedComponent: React.ComponentType) => {
    
    const WithMainLayout: React.FC<P> = (props) => (
        <MainLayout>
            <WrappedComponent {...props} />
        </MainLayout>
    );

    return WithMainLayout;
};

export default withMainLayout;
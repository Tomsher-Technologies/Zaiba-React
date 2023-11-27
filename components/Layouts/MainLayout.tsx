import React, { ReactNode } from 'react';
import dynamic from 'next/dynamic';


const Container = dynamic(() => import('@/components/CustomComponents/Container'));
const Header = dynamic(() => import('@/components/Layouts/Header'));
const Footer = dynamic(() => import('@/components/Layouts/Footer'));

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <Container>
            <Header />
            {children}
            <Footer />
        </Container>
    );
};

export default MainLayout;
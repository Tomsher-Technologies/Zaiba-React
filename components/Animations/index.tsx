import React, { FC, Fragment } from 'react';
import AddressBook from '@/components/Animations/AddressBook';
import AccountInfo from '@/components/Animations/AccountInfo';
import Offers from '@/components/Animations/Offers';
import OrderDetails from '@/components/Animations/OrderDetails';
import StoreLocator from '@/components/Animations/StoreLocator';
import MyOrders from '@/components/Animations/MyOrders';
import Profile from '@/components/Animations/Profile';
import CartList from '@/components/Animations/CartList';
import ProductDetails from '@/components/Animations/ProductDetails';
import Dashboard from '@/components/Animations/Dashboard';
import ProductList from '@/components/Animations/ProductList';

interface AnimationsProps {
    animation: string
}

const Animations: FC<AnimationsProps> = ({ animation = '' }) => {
    return (
        <Fragment>
            {
                animation === 'accountinfo' &&
                <AccountInfo />
                || animation === 'addressLists' &&
                <AddressBook />
                || animation === 'myorders' &&
                <MyOrders />
                || animation === 'profile' &&
                <Profile />
                || animation === 'orderdetails' &&
                <OrderDetails />
                || animation === 'storelocator' &&
                <StoreLocator />
                || animation === 'cartlist' &&
                <CartList />
                || animation === 'productdetails' &&
                <ProductDetails />
                || animation === 'dashboard' &&
                <Dashboard />
                || animation === 'productlist' &&
                <ProductList />
            }
        </Fragment>
    )
}

export default Animations;
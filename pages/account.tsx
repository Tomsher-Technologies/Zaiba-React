import React, { FC, Fragment, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

import withMainLayout from '@/hocs/withMainLayout';
const InnerStrip = dynamic(() => import('@/components/Pages/Products/InnerStrip'));
const Profile = dynamic(() => import('@/components/Pages/Account/Profile'));
const Orders = dynamic(() => import('@/components/Pages/Account/Orders'));
const Returns = dynamic(() => import('@/components/Pages/Account/Returns'));
const Addresses = dynamic(() => import('@/components/Pages/Account/AddAddresses'));
const Wishlist = dynamic(() => import('@/components/Pages/Account/Wishlist'));
const Payments = dynamic(() => import('@/components/Pages/Account/Payments'));

import { accountMenu } from '@/utiles/constArraysAndVariables';
import { RootState } from '@/redux/store';

const Account: FC = () => {
    const user = useSelector((state: RootState) => state.user);
    const router = useRouter();
    const { type = 'profile' } = router?.query;

    const [menuSelect, setMenuSelect] = useState<string | string[] | undefined>('profile');
    const [userDataLoaded, setUserDataLoaded] = useState(false);

    useEffect(() => {
        if ((router.isReady && router.query) && ((user) && (user.name !== null))) {
            setMenuSelect(type);
        }
    }, [router, user]);


    // console.log('user', user);
    const handle_routerRedirect = (menu: any) => {
        if ((user) && (user.name !== null)) {
            router.push('/account?type=' + menu.value);
        } else {
            router.push(`/login?rd=/account?type=${menu.value}`);
        }
    }

    return (
        <Fragment>
            <InnerStrip
                title='SHOPPING CART'
            />
            <section className="zb-profile__area pt-120 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="zb-profile-tab-warpper">
                                <div className="d-flex align-items-start">
                                    <div
                                        className="nav flex-column nav-pills me-3"
                                        id="v-pills-tab"
                                        role="tablist"
                                        aria-orientation="vertical"
                                    >
                                        {accountMenu.map((menu: any, index: number) => (
                                            <button
                                                key={index}
                                                className={`nav-link ${menuSelect === menu.value ? 'active' : ''}`}
                                                id="v-pills-profile-tab"
                                                data-bs-toggle="pill"
                                                data-bs-target="#v-pills-profile"
                                                type="button"
                                                role="tab"
                                                aria-controls="v-pills-profile"
                                                aria-selected="true"
                                                onClick={() => handle_routerRedirect(menu)}
                                            >
                                                <i className={menu.icon} /> {menu.title}
                                            </button>
                                        ))}
                                    </div>
                                    <div className="tab-content" id="v-pills-tabContent">
                                        {menuSelect === 'profile' &&
                                            <Profile user={user} />
                                            || menuSelect === 'orders' &&
                                            <Orders user={user} />
                                            || menuSelect === 'returns' &&
                                            <Returns user={user} />
                                            || menuSelect === 'addresses' &&
                                            <Addresses user={user} />
                                            || menuSelect === 'wishlist' &&
                                            <Wishlist user={user} />
                                            || menuSelect === 'payments' &&
                                            <Payments user={user} />
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </Fragment>
    )
}

export default withMainLayout(Account);
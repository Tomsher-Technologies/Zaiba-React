import React, { FC, Fragment, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import withMainLayout from '@/hocs/withMainLayout';
const InnerStrip = dynamic(() => import('@/components/Pages/Products/InnerStrip'));
const Profile = dynamic(() => import('@/components/Pages/Account/Profile'));
const Orders = dynamic(() => import('@/components/Pages/Account/Orders'));
const Returns = dynamic(() => import('@/components/Pages/Account/Returns'));
const Addresses = dynamic(() => import('@/components/Pages/Account/Addresses'));
const Wishlist = dynamic(() => import('@/components/Pages/Account/Wishlist'));
const Payments = dynamic(() => import('@/components/Pages/Account/Payments'));

import { accountMenu } from '@/utiles/constArrays';

const Account: FC = () => {
    const router = useRouter();
    const { type = 'profile' } = router?.query;

    const [menuSelect, setMenuSelect] = useState<string | string[] | undefined>('profile');

    useEffect(() => {
        if (router.isReady && router.query) {
            setMenuSelect(type)
        }

    }, [router]);

    console.log('router', router);


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
                                                onClick={() => router.push('/account?type=' + menu.value)}
                                            >
                                                <i className={menu.icon} /> {menu.title}
                                            </button>
                                        ))}
                                    </div>
                                    <div className="tab-content" id="v-pills-tabContent">
                                        {menuSelect === 'profile' &&
                                            <Profile />
                                            || menuSelect === 'orders' &&
                                            <Orders />
                                            || menuSelect === 'returns' &&
                                            <Returns />
                                            || menuSelect === 'addresses' &&
                                            <Addresses />
                                            || menuSelect === 'wishlist' &&
                                            <Wishlist />
                                            || menuSelect === 'payments' &&
                                            <Payments />
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
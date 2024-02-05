import { FC, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import Drawer from '@mui/material/Drawer';

const CartDrawer = dynamic(() => import('@/components/Pages/Cart/CartSlider'));
const SearchDrawer = dynamic(() => import('@/components/Layouts/SearchDrawer'));
const MenuDrawer = dynamic(() => import('@/components/Layouts/MenuDrawer'));

import { HeaderProps } from '@/types/LayoutProps';
import { FavoriteBorder, LocalMallOutlined, Person2Outlined, SearchOutlined } from '@mui/icons-material';

const Header: FC<HeaderProps> = ({ cart, user, wishlistCount }) => {
    const searchDrawerRef = useRef(null);

    const [cartDrawer, setCartDrawer] = useState<boolean>(false);
    const [searchDrawer, setSearchDrawer] = useState<boolean>(false);
    const [menuDrawer, setMenuDrawer] = useState<boolean>(false);

    const cartToggleDrawer = (open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event.type === 'keydown' &&
                ((event as React.KeyboardEvent).key === 'Tab' ||
                    (event as React.KeyboardEvent).key === 'Shift')
            ) {
                return;
            }

            setCartDrawer(open);
        };

    const menuToggleDrawer = (open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event.type === 'keydown' &&
                ((event as React.KeyboardEvent).key === 'Tab' ||
                    (event as React.KeyboardEvent).key === 'Shift')
            ) {
                return;
            }

            setMenuDrawer(open);
        };

    const searchToggleDrawer = (open: any) => (event: any) => {
        setSearchDrawer(open);
    };

    const handleOutsideClick = (event: any) => {
        if (searchDrawerRef.current && !(searchDrawerRef.current as any).contains(event.target)) {
            setSearchDrawer(false);
        }
    };

    useEffect(() => {
        if (searchDrawer) {
            document.addEventListener('mousedown', handleOutsideClick);
        } else {
            document.removeEventListener('mousedown', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [searchDrawer]);

    return (
        <header className="main__header">
            <div>
            </div>
            <div className="header__inner">
                <div className="header-top">
                    <div className="container-fluid px-7">
                        <div className="row align-items-center justify-content-center ">
                            <div className="col-4 col-md-3">
                                <div className="header-top-start">
                                    <div className="support-block">
                                        <svg
                                            fill="#fff"
                                            width="50px"
                                            height="50px"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M6,17 L6,11 L4.5,11 C3.67157288,11 3,11.6715729 3,12.5 L3,15.5 C3,16.3284271 3.67157288,17 4.5,17 L6,17 Z M13.9146471,20 L16.0584816,20 C16.7041272,20 17.2773354,19.5868549 17.4815065,18.9743416 L17.7094306,18.2905694 C17.7432317,18.1891661 17.7850711,18.0921054 17.8340988,18 L17.5,18 C17.2238576,18 17,17.7761424 17,17.5 L17,10.5 C17,10.2238576 17.2238576,10 17.5,10 L18,10 L18,8.98439023 C18,5.67068173 15.3137085,2.98439023 12,2.98439023 C8.6862915,2.98439023 6,5.67068173 6,8.98439023 L6,10 L6.5,10 C6.77614237,10 7,10.2238576 7,10.5 L7,17.5 C7,17.7761424 6.77614237,18 6.5,18 L4.5,18 C3.11928813,18 2,16.8807119 2,15.5 L2,12.5 C2,11.1192881 3.11928813,10 4.5,10 L5,10 L5,8.98439023 C5,5.11839698 8.13400675,1.98439023 12,1.98439023 C15.8659932,1.98439023 19,5.11839698 19,8.98439023 L19,10 L19.5,10 C20.8807119,10 22,11.1192881 22,12.5 L22,15.5 C22,16.8807119 20.8807119,18 19.5,18 C19.1180249,18 18.778905,18.2444238 18.6581139,18.6067972 L18.4301898,19.2905694 C18.0899047,20.3114248 17.1345576,21 16.0584816,21 L13.9146471,21 C13.7087289,21.5825962 13.1531094,22 12.5,22 L11.5,22 C10.6715729,22 10,21.3284271 10,20.5 C10,19.6715729 10.6715729,19 11.5,19 L12.5,19 C13.1531094,19 13.7087289,19.4174038 13.9146471,20 L13.9146471,20 Z M18,11 L18,17 L19.5,17 C20.3284271,17 21,16.3284271 21,15.5 L21,12.5 C21,11.6715729 20.3284271,11 19.5,11 L18,11 Z M11,20.5 C11,20.7761424 11.2238576,21 11.5,21 L12.5,21 C12.7761424,21 13,20.7761424 13,20.5 C13,20.2238576 12.7761424,20 12.5,20 L11.5,20 C11.2238576,20 11,20.2238576 11,20.5 Z" />
                                        </svg>
                                    </div>
                                    <div className="support-bock-content">
                                        <span>24/7 Support</span>
                                        <h5>+971 12 34 5678</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center col-12 col-md-6">
                                <div className="header-top-center text-center">
                                    <Link href="/" className="navbar-brand">
                                        <img src="/images/logo.png" alt="ZAIBA LOGO" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-8 col-md-3">
                                <div className="header-top-end">
                                    <ul>
                                        <li>
                                            <a
                                                className='cursor-pointer'
                                                onClick={searchToggleDrawer(true)}>
                                                <SearchOutlined className="text-white text-[42px]" />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className='cursor-pointer'
                                                onClick={cartToggleDrawer(true)}
                                                key={cart?.products?.reduce((sum: any, cart: any) => sum + cart.quantity, 0)}
                                            >
                                                <LocalMallOutlined className="text-white text-[42px]" />
                                                {cart.cartCount > 0 &&
                                                    <span className="badge badge-light">{cart?.products?.reduce((sum: any, cart: any) => sum + cart.quantity, 0)}</span>
                                                }
                                            </a>
                                        </li>
                                        <li>
                                            <Link href={(user && user?.user_id) ? '/wishlist' : '/login'} key={wishlistCount}>
                                                <FavoriteBorder className="text-white text-[42px]" />
                                                {wishlistCount > 0 && <span className="badge badge-light">{wishlistCount}</span>}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={`${user?.user_id ? '/account' : '/login'}`}>
                                                <Person2Outlined className="text-white text-[42px]" />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-bottom">
                    <div className="container-fluid px-7">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-6 col-md-10">
                                <div className="header-bottom-start">
                                    {/* header bottom start */}
                                    <div className="tp-header-bottom tp-header-bottom-border d-none d-lg-block">
                                        <div className="tp-mega-menu-wrapper p-relative">
                                            <div className="row align-items-center">
                                                <div className="col-xl-12 col-lg-12">
                                                    <div className="main-menu menu-style-1">
                                                        <nav className="tp-main-menu-content">
                                                            <ul>
                                                                <li className="has-dropdown has-mega-menu">
                                                                    <a href="shop.html">BRACELETS</a>
                                                                    <div className="shop-mega-menu tp-submenu tp-mega-menu">
                                                                        <div className="row">
                                                                            <div className="col-lg-3">
                                                                                <div className="shop-mega-menu-list">
                                                                                    <a
                                                                                        href="#"
                                                                                        className="shop-mega-menu-title"
                                                                                    >
                                                                                        Shop by category
                                                                                    </a>
                                                                                    <ul>
                                                                                        <li>
                                                                                            <a href="#">The zaiba collection</a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="#">Studs</a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="#">Pearls</a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="#">Petite Collection</a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="#">The Classic Collection</a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="#">
                                                                                                Affordable luxury aed 135 – aed 159
                                                                                            </a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="#">The sofia collection</a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="#">The miranda collection</a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="#">The coco collection</a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="#">Star sign</a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-lg-3">
                                                                                <div className="shop-mega-menu-list">
                                                                                    <a
                                                                                        href="#"
                                                                                        className="shop-mega-menu-title"
                                                                                    >
                                                                                        Trending
                                                                                    </a>
                                                                                    <ul>
                                                                                        <li>
                                                                                            <a href="#">Bestsellers</a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="#">New in this Week</a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="#">Most Wishlisted</a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="#">Exclusive on ZAIBA</a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-lg-2">
                                                                                <a
                                                                                    href="#"
                                                                                    className="shop-mega-menu-title"
                                                                                >
                                                                                    Collab
                                                                                </a>
                                                                                <div className="shop-mega-menu-img">
                                                                                    <img
                                                                                        src="/images/menu-img-01.webp"
                                                                                        className="img-fluid"
                                                                                        alt=""
                                                                                    />
                                                                                    <div className="shop-mega-menu-btn">
                                                                                        <a href="#" className="btn btn-view">
                                                                                            VIEW COLLECTION
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-lg-2">
                                                                                <a
                                                                                    href="#"
                                                                                    className="shop-mega-menu-title"
                                                                                >
                                                                                    &nbsp;{" "}
                                                                                </a>
                                                                                <div className="shop-mega-menu-img">
                                                                                    <img
                                                                                        src="/images/menu-img-02.webp"
                                                                                        alt=""
                                                                                    />
                                                                                    <div className="shop-mega-menu-btn">
                                                                                        <a href="#" className="btn btn-view">
                                                                                            VIEW COLLECTION
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-lg-2">
                                                                                <a
                                                                                    href="#"
                                                                                    className="shop-mega-menu-title"
                                                                                >
                                                                                    &nbsp;{" "}
                                                                                </a>
                                                                                <div className="shop-mega-menu-img">
                                                                                    <img
                                                                                        src="/images/menu-img-03.webp"
                                                                                        alt=""
                                                                                    />
                                                                                    <div className="shop-mega-menu-btn">
                                                                                        <a href="#" className="btn btn-view">
                                                                                            VIEW COLLECTION
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li className="has-dropdown has-mega-menu">
                                                                    <a href="#">COLLECTIONS</a>
                                                                    <div className="home-menu tp-submenu tp-mega-menu">
                                                                        <div className="row">
                                                                            <div className="col">
                                                                                <div className="home-menu-item ">
                                                                                    <a href="#">
                                                                                        <div className="home-menu-thumb">
                                                                                            <img
                                                                                                src="/images/collection-img1.png"
                                                                                                alt=""
                                                                                            />
                                                                                        </div>
                                                                                        <div className="home-menu-content">
                                                                                            <h5 className="home-menu-title">
                                                                                                {" "}
                                                                                                <img
                                                                                                    src="/images/btn-icon.svg"
                                                                                                    alt=""
                                                                                                />{" "}
                                                                                                MADE OF WHITE GOLD{" "}
                                                                                            </h5>
                                                                                        </div>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col">
                                                                                <div className="home-menu-item ">
                                                                                    <a href="#">
                                                                                        <div className="home-menu-thumb p-relative fix">
                                                                                            <img
                                                                                                src="/images/collection-img2.png"
                                                                                                alt=""
                                                                                            />
                                                                                        </div>
                                                                                        <div className="home-menu-content">
                                                                                            <h5 className="home-menu-title">
                                                                                                {" "}
                                                                                                <img
                                                                                                    src="/images/btn-icon.svg"
                                                                                                    alt=""
                                                                                                />{" "}
                                                                                                MADE OF WHITE GOLD{" "}
                                                                                            </h5>
                                                                                        </div>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col">
                                                                                <div className="home-menu-item ">
                                                                                    <a href="#">
                                                                                        <div className="home-menu-thumb p-relative fix">
                                                                                            <img
                                                                                                src="/images/collection-img3.png"
                                                                                                alt=""
                                                                                            />
                                                                                        </div>
                                                                                        <div className="home-menu-content">
                                                                                            <h5 className="home-menu-title">
                                                                                                {" "}
                                                                                                <img
                                                                                                    src="/images/btn-icon.svg"
                                                                                                    alt=""
                                                                                                />{" "}
                                                                                                MADE OF WHITE GOLD{" "}
                                                                                            </h5>
                                                                                        </div>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col">
                                                                                <div className="home-menu-item ">
                                                                                    <a href="#">
                                                                                        <div className="home-menu-thumb p-relative fix">
                                                                                            <img
                                                                                                src="/images/collection-img4.png"
                                                                                                alt=""
                                                                                            />
                                                                                        </div>
                                                                                        <div className="home-menu-content">
                                                                                            <h5 className="home-menu-title">
                                                                                                {" "}
                                                                                                <img
                                                                                                    src="/images/btn-icon.svg"
                                                                                                    alt=""
                                                                                                />{" "}
                                                                                                MADE OF WHITE GOLD
                                                                                            </h5>
                                                                                        </div>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <a href="product-listing.html">NECKLACES</a>
                                                                </li>
                                                                <li>
                                                                    <a href="product-listing.html">RINGS</a>
                                                                </li>
                                                                <li>
                                                                    <a href="product-listing.html">RINGS</a>
                                                                </li>
                                                                <li>
                                                                    <a href="product-listing.html">PENDANTS</a>
                                                                </li>
                                                                <li>
                                                                    <a href="product-listing.html">EARRINGS</a>
                                                                </li>
                                                                <li>
                                                                    <a href="product-listing.html">CHAINS</a>
                                                                </li>
                                                                <li>
                                                                    <a href="product-listing.html">DIAMOND</a>
                                                                </li>
                                                            </ul>
                                                            <ul>
                                                                <li>
                                                                    <a href="#">CATALOG</a>
                                                                </li>
                                                                <li>
                                                                    <Link href="/about">ABOUT US</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/find-store">FIND A STORE</Link>
                                                                </li>
                                                            </ul>
                                                        </nav>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tp-header-action-item d-lg-none">
                                        <button
                                            type="button"
                                            className="tp-header-action-btn tp-offcanvas-open-btn"
                                            onClick={menuToggleDrawer(true)}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={30}
                                                height={16}
                                                viewBox="0 0 30 16"
                                            >
                                                <rect x={10} width={20} height={2} fill="currentColor" />
                                                <rect
                                                    x={5}
                                                    y={7}
                                                    width={25}
                                                    height={2}
                                                    fill="currentColor"
                                                />
                                                <rect
                                                    x={10}
                                                    y={14}
                                                    width={20}
                                                    height={2}
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-2 w-auto">
                                <div className="header-bottom-end">
                                    <div className="today-rate">
                                        <span>TODAY RATE 24K </span>
                                        <h5>AED 242.25</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Drawer
                anchor="top"
                open={searchDrawer}
                onClose={searchToggleDrawer(false)}
                ref={searchDrawerRef}
            >
                <SearchDrawer
                />
            </Drawer>

            <Drawer
                anchor='right'
                open={cartDrawer}
                onClose={cartToggleDrawer(false)}
            >
                <CartDrawer
                    cart={cart}
                    cartToggleDrawer={cartToggleDrawer}
                />
            </Drawer>

            <Drawer
                anchor='right'
                open={menuDrawer}
                onClose={menuToggleDrawer(false)}
            >
                <MenuDrawer
                    menuToggleDrawer={menuToggleDrawer}
                />
            </Drawer>
        </header>
    )
}

export default Header;


import { FC, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import Drawer from '@mui/material/Drawer';


type Anchor = 'top' | 'left' | 'bottom' | 'right';

const CartDrawer = dynamic(() => import('@/components/Pages/Cart/CartSlider'));
const SearchDrawer = dynamic(() => import('@/components/Layouts/SearchDrawer'));
const MenuDrawer = dynamic(() => import('@/components/Layouts/MenuDrawer'));

const Header: FC = () => {
    const user = useSelector((state: RootState) => state.user);
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
                                                <svg
                                                    width="50px"
                                                    height="50px"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M14.5776 14.5419C15.5805 13.53 16.2 12.1373 16.2 10.6C16.2 7.50721 13.6928 5 10.6 5C7.50721 5 5 7.50721 5 10.6C5 13.6928 7.50721 16.2 10.6 16.2C12.1555 16.2 13.5628 15.5658 14.5776 14.5419ZM14.5776 14.5419L19 19"
                                                        stroke="#fff"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className='cursor-pointer'
                                                onClick={cartToggleDrawer(true)}
                                                data-bs-toggle="offcanvas"
                                                data-bs-target="#offcanvasRight"
                                                aria-controls="offcanvasRight"
                                            >
                                                <svg
                                                    fill="#fff"
                                                    height="32px"
                                                    width="33px"
                                                    version="1.1"
                                                    id="Capa_1"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    viewBox="0 0 489 489"
                                                    xmlSpace="preserve"
                                                >
                                                    <g>
                                                        <path
                                                            d="M440.1,422.7l-28-315.3c-0.6-7-6.5-12.3-13.4-12.3h-57.6C340.3,42.5,297.3,0,244.5,0s-95.8,42.5-96.6,95.1H90.3
                                       c-7,0-12.8,5.3-13.4,12.3l-28,315.3c0,0.4-0.1,0.8-0.1,1.2c0,35.9,32.9,65.1,73.4,65.1h244.6c40.5,0,73.4-29.2,73.4-65.1
                                       C440.2,423.5,440.2,423.1,440.1,422.7z M244.5,27c37.9,0,68.8,30.4,69.6,68.1H174.9C175.7,57.4,206.6,27,244.5,27z M366.8,462
                                       H122.2c-25.4,0-46-16.8-46.4-37.5l26.8-302.3h45.2v41c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5v-41h139.3v41
                                       c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5v-41h45.2l26.9,302.3C412.8,445.2,392.1,462,366.8,462z"
                                                        />
                                                    </g>
                                                </svg>
                                                <span className="badge badge-light">24</span>
                                            </a>
                                        </li>
                                        <li>
                                            <Link href="/wishlist">
                                                <svg
                                                    fill="#fff"
                                                    width="32px"
                                                    height="32px"
                                                    viewBox="0 0 32 32"
                                                    version="1.1"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M8.999 3.567c0.98 0 2.753 0.469 5.628 3.301l1.425 1.403 1.404-1.426c1.996-2.028 4.12-3.288 5.543-3.288 1.919 0 3.432 0.656 4.907 2.128 1.39 1.386 2.156 3.23 2.156 5.191 0.001 1.962-0.764 3.807-2.169 5.209-0.114 0.116-6.156 6.634-11.218 12.097-0.238 0.227-0.511 0.26-0.656 0.26-0.143 0-0.412-0.032-0.65-0.253-1.233-1.372-10.174-11.313-11.213-12.351-1.391-1.388-2.157-3.233-2.157-5.194s0.766-3.804 2.158-5.192c1.353-1.352 2.937-1.885 4.842-1.885zM8.999 1.567c-2.392 0-4.5 0.715-6.255 2.469-3.659 3.649-3.659 9.566 0 13.217 1.045 1.045 11.183 12.323 11.183 12.323 0.578 0.578 1.336 0.865 2.093 0.865s1.512-0.287 2.091-0.865c0 0 11.090-11.97 11.208-12.089 3.657-3.652 3.657-9.57 0-13.219-1.816-1.813-3.845-2.712-6.319-2.712-2.364 0-5 1.885-6.969 3.885-2.031-2-4.585-3.874-7.031-3.874v0z" />
                                                </svg>
                                                <span className="badge badge-light">24</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={`${user?.user_id ? '/account' : '/login'}`}>
                                                <svg
                                                    fill="#fff"
                                                    width="32px"
                                                    height="32px"
                                                    viewBox="0 0 16 16"
                                                    id="user-16px"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        id="Path_18"
                                                        data-name="Path 18"
                                                        d="M29.991,8a4,4,0,1,1,4-4A4,4,0,0,1,29.991,8Zm0-7a3,3,0,1,0,3,3A3,3,0,0,0,29.991,1ZM36.5,16h-13A1.5,1.5,0,0,1,22,14.5,4.505,4.505,0,0,1,26.5,10h7A4.505,4.505,0,0,1,38,14.5,1.5,1.5,0,0,1,36.5,16Zm-10-5A3.5,3.5,0,0,0,23,14.5a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5A3.5,3.5,0,0,0,33.5,11Z"
                                                        transform="translate(-22)"
                                                    />
                                                </svg>
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


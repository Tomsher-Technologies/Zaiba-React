import React, { FC, useEffect, useState } from 'react';
import Box from '@mui/material/Box';

import { MenuDrawerProps } from '@/types/common/LayoutProps';
import InputText from '../CustomComponents/InputText';

const MenuDrawer: FC<MenuDrawerProps> = ({ menuToggleDrawer }) => {
    const [screenWidth, setScreenWidth] = useState<number>(1024)

    useEffect(() => {
        if (typeof window === "object") {
            setScreenWidth(window.innerWidth);
        }
    }, []);
    return (
        <Box
            sx={{ width: screenWidth > 1024 ? 390 : (screenWidth > 480 ? 380 : '100%') }}
            role="presentation"
        >
            <div className="offcanvas__radius">
                <div className="offcanvas__wrapper">
                    <div className="offcanvas__close">
                        <button className="offcanvas__close-btn offcanvas-close-btn">
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                                onClick={menuToggleDrawer(false)}
                                onKeyDown={menuToggleDrawer(false)}
                            />
                        </button>
                    </div>
                    <div className="offcanvas__content">
                        <div className="offcanvas__top mb-70 d-flex justify-content-between align-items-center">
                            <div className="offcanvas__logo logo">
                                <a href="index.html">
                                    <img src="/images/logo.png" alt="logo" />
                                </a>
                            </div>
                        </div>
                        <div className="tp-main-menu-mobile fix d-lg-none mb-40" />
                    </div>
                </div>
            </div>

        </Box>
    )
}

export default MenuDrawer;
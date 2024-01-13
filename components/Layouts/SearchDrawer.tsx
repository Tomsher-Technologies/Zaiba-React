import React, { FC } from 'react';
import Box from '@mui/material/Box';

import { SearchDrawerProps } from '@/types/common/LayoutProps';
import InputText from '../CustomComponents/InputText';

const SearchDrawer: FC<SearchDrawerProps> = ({  }) => {
    return (
        <Box
            sx={{ width: 'auto', height: 160 }}
            role="presentation"
        >
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="tp-search-form">
                            <div className="tp-search-close text-center mb-20">
                                <button className="tp-search-close-btn tp-search-close-btn" />
                            </div>
                            <div className="tp-search-input mt-3 ">
                                <InputText
                                    placeholder="Search for product..."
                                    className="w-full"
                                    name="name"
                                    value=""
                                    rows={1.5}
                                    multiline={true}
                                    endAdornment={<>
                                        <a href="#" className="search-body-btn">
                                            <svg
                                                width={30}
                                                height={30}
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M18.9999 19L14.6499 14.65"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </a>
                                    </>}
                                // onChange={formik.handleChange}
                                // error={formik?.touched?.otp && formik.errors.otp && formik.errors.otp}
                                />

                                <div className="tp-search-category">
                                    <span>Search by : </span>
                                    <a href="#">Necklaces, </a>
                                    <a href="#">Rings, </a>
                                    <a href="#">Pendants, </a>
                                    <a href="#">Chains, </a>
                                    <a href="#">Diamond</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Box>
    )
}

export default SearchDrawer;
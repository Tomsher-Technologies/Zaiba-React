import React, { FC } from 'react';

const ProductMoreWarpper: FC = () => {
    return (
        <div className="col-md-3">
            <div className="zb-product-more-warpper">
                <ul>
                    <li>
                        <a href="#">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={22}
                                height={22}
                                viewBox="0 0 22 22"
                                fill="none"
                            >
                                <path
                                    d="M5.95824 3.66699L2.75 6.41699L5.95824 9.62533"
                                    stroke="#1F4932"
                                    strokeWidth={4}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M2.75 6.41699H13.2888C16.4435 6.41699 19.1226 8.99301 19.2456 12.1462C19.3755 15.4781 16.6224 18.3337 13.2888 18.3337H5.49927"
                                    stroke="#1F4932"
                                    strokeWidth={4}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <span>Refunds &amp; Returns policy</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={25}
                                height={25}
                                viewBox="0 0 25 25"
                                fill="none"
                            >
                                <path
                                    d="M17.1875 4.6875H21.0938V22.6562H3.90625V4.6875H7.8125V6.25H17.1875V4.6875ZM7.03125 12.5H17.9688V10.9375H7.03125V12.5ZM7.03125 18.75H17.9688V17.1875H7.03125V18.75ZM9.375 4.6875V2.34375H15.625V4.6875H9.375Z"
                                    fill="#0E4431"
                                />
                            </svg>
                            <span>Certified Jewelry</span>
                        </a>
                    </li>
                    <li>
                        <a className="mb-0" href="#">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={19}
                                height={19}
                                viewBox="0 0 19 19"
                                fill="none"
                            >
                                <path
                                    d="M9.5 2.375C5.56455 2.375 2.375 5.56455 2.375 9.5V16.1797C2.375 16.4265 2.57354 16.625 2.82031 16.625H6.23438C6.88936 16.625 7.42188 16.0925 7.42188 15.4375V11.5781C7.42188 10.9231 6.88936 10.3906 6.23438 10.3906H3.71094V9.5C3.71094 6.30303 6.30303 3.71094 9.5 3.71094C12.697 3.71094 15.2891 6.30303 15.2891 9.5V10.3906H12.7656C12.1106 10.3906 11.5781 10.9231 11.5781 11.5781V15.4375C11.5781 16.0925 12.1106 16.625 12.7656 16.625H16.1797C16.4265 16.625 16.625 16.4265 16.625 16.1797V9.5C16.625 5.56455 13.4354 2.375 9.5 2.375Z"
                                    fill="#1F4932"
                                />
                            </svg>
                            <span>Need Assistance?</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ProductMoreWarpper
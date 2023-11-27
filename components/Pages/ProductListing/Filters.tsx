import React, { FC } from 'react';

const Filters: FC = () => {
    return (
        <div className="col-md-3">
            <div className="zb-product-filter-warpper">
                <div className="zb-filter-list-label">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={21}
                        height={20}
                        viewBox="0 0 21 20"
                        fill="none"
                    >
                        <g clipPath="url(#clip0_665_1295)">
                            <path
                                d="M12.7951 12L20.7439 4V0H0.87207V4L8.82079 12V20L12.7951 16V12Z"
                                fill="#777777"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_665_1295">
                                <rect
                                    width="19.8718"
                                    height={20}
                                    fill="white"
                                    transform="translate(0.87207)"
                                />
                            </clipPath>
                        </defs>
                    </svg>
                    <h4>Filters</h4>
                </div>
                <div className="zb-filter-list-options">
                    <div className="zb-product-list-option-items">
                        <h3>Brands</h3>
                        <ul>
                            <li>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    defaultValue=""
                                    id="Zaiba"
                                />
                                <label className="form-check-label" htmlFor="Zaiba">
                                    Zaiba
                                </label>
                                <span className="zb-filyter-count">(10)</span>
                            </li>
                            <li>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    defaultValue=""
                                    id="Rose"
                                />
                                <label className="form-check-label" htmlFor="Rose">
                                    Rose
                                </label>
                                <span className="zb-filyter-count">(12)</span>
                            </li>
                            <li>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    defaultValue=""
                                    id="Daffodil"
                                />
                                <label className="form-check-label" htmlFor="Daffodil">
                                    Daffodil
                                </label>
                                <span className="zb-filyter-count">(40)</span>
                            </li>
                            <li>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    defaultValue=""
                                    id=" Lily"
                                />
                                <label className="form-check-label" htmlFor=" Lily">
                                    Lily
                                </label>
                                <span className="zb-filyter-count">(20)</span>
                            </li>
                            <li>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    defaultValue=""
                                    id="   Dahlia"
                                />
                                <label className="form-check-label" htmlFor="   Dahlia">
                                    Dahlia
                                </label>
                                <span className="zb-filyter-count">(15)</span>
                            </li>
                            <li>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    defaultValue=""
                                    id="Tulip"
                                />
                                <label className="form-check-label" htmlFor="Tulip">
                                    Tulip
                                </label>
                                <span className="zb-filyter-count">(5)</span>
                            </li>
                        </ul>
                    </div>
                    <div className="zb-product-list-option-items">
                        <h3>Discount</h3>
                        <ul>
                            <li>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    defaultValue=""
                                    id="Upto5"
                                />
                                <label className="form-check-label" htmlFor="Upto5">
                                    Upto 5%
                                </label>
                                <span className="zb-filyter-count">(4)</span>
                            </li>
                            <li>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    defaultValue=""
                                    id="Off-5-10"
                                />
                                <label className="form-check-label" htmlFor="Off-5-10">
                                    5% - 10%
                                </label>
                                <span className="zb-filyter-count">(7)</span>
                            </li>
                            <li>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    defaultValue=""
                                    id="Off-6-10"
                                />
                                <label className="form-check-label" htmlFor="Off-6-10">
                                    6% - 10%
                                </label>
                                <span className="zb-filyter-count">(2)</span>
                            </li>
                            <li>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    defaultValue=""
                                    id="Off-15-25"
                                />
                                <label className="form-check-label" htmlFor="Off-15-25">
                                    15% - 25%
                                </label>
                                <span className="zb-filyter-count">(8)</span>
                            </li>
                            <li>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    defaultValue=""
                                    id="More-than-25"
                                />
                                <label className="form-check-label" htmlFor="More-than-25">
                                    More than 25%
                                </label>
                                <span className="zb-filyter-count">(10)</span>
                            </li>
                        </ul>
                    </div>
                    <div className="zb-product-list-option-items">
                        <h3>Categories</h3>
                        <div className="zb-filter-category-search">
                            <form action="#">
                                <input
                                    type="search"
                                    className="form-control"
                                    placeholder="Search Categories"
                                    aria-label="Category Search"
                                />
                                <span className="zb-filter-search-icon">
                                    <i className="bi bi-search" />
                                </span>
                            </form>
                        </div>
                        <ul>
                            <li>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    defaultValue=""
                                    id="Pendants"
                                />
                                <label className="form-check-label" htmlFor="Pendants">
                                    Pendants
                                </label>
                                <span className="zb-filyter-count">(4)</span>
                            </li>
                            <li>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    defaultValue=""
                                    id="Rings"
                                />
                                <label className="form-check-label" htmlFor="Rings">
                                    Rings
                                </label>
                                <span className="zb-filyter-count">(7)</span>
                            </li>
                            <li>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    defaultValue=""
                                    id="Necklaces"
                                />
                                <label className="form-check-label" htmlFor="Necklaces">
                                    Necklaces
                                </label>
                                <span className="zb-filyter-count">(2)</span>
                            </li>
                            <li>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    defaultValue=""
                                    id="Earrings"
                                />
                                <label className="form-check-label" htmlFor="Earrings">
                                    Earrings
                                </label>
                                <span className="zb-filyter-count">(8)</span>
                            </li>
                            <li>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    defaultValue=""
                                    id="Bracelets"
                                />
                                <label className="form-check-label" htmlFor="Bracelets">
                                    Bracelets
                                </label>
                                <span className="zb-filyter-count">(10)</span>
                            </li>
                            <li>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    defaultValue=""
                                    id="Bangles"
                                />
                                <label className="form-check-label" htmlFor="Bangles">
                                    Bangles
                                </label>
                                <span className="zb-filyter-count">(10)</span>
                            </li>
                        </ul>
                    </div>
                    <div className="zb-product-list-option-items">
                        <h3>Price</h3>
                        ...
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Filters
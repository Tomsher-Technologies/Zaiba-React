import React, { FC, Fragment } from 'react';
import dynamic from 'next/dynamic';

import withMainLayout from '@/hocs/withMainLayout';
const InnerStrip = dynamic(() => import('@/components/Pages/Products/InnerStrip'));


const FindStore: FC = () => {
    return (
        <Fragment>
            <InnerStrip
                title='FIND STORE'
            />
            <section className="zb-find-store-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="zb-find-store-warpper">
                                <div className="zb-find-store-top">
                                    <h4>Store Locator - Finf Zaiba products near you.</h4>
                                    <div className="row g-3 ">
                                        <div className="col-md-9 position-relative">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Search location"
                                                aria-label="First name"
                                            />
                                            <svg
                                                className="find-search-icon"
                                                width="50px"
                                                height="50px"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M14.5776 14.5419C15.5805 13.53 16.2 12.1373 16.2 10.6C16.2 7.50721 13.6928 5 10.6 5C7.50721 5 5 7.50721 5 10.6C5 13.6928 7.50721 16.2 10.6 16.2C12.1555 16.2 13.5628 15.5658 14.5776 14.5419ZM14.5776 14.5419L19 19"
                                                    stroke="#000"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                        <div className="col">
                                            <a href="#" className="btn btn-find">
                                                search for location
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="zb-find-store-bottom">
                                    <div className="row">
                                        <div className="d-flex align-items-start">
                                            <div
                                                className="nav flex-column nav-pills me-3"
                                                id="v-pills-tab"
                                                role="tablist"
                                                aria-orientation="vertical"
                                            >
                                                <button
                                                    className="nav-link active"
                                                    id="v-pills-home-tab"
                                                    data-bs-toggle="pill"
                                                    data-bs-target="#v-pills-home"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="v-pills-home"
                                                    aria-selected="true"
                                                >
                                                    <h3>ZAIBA JEWELS</h3>
                                                    <p>Deira &amp; Al Qouz , Dubai, United Arab Emirates</p>
                                                    <a href="#">VIEW ON MAP</a>
                                                </button>
                                                <button
                                                    className="nav-link"
                                                    id="v-pills-profile-tab"
                                                    data-bs-toggle="pill"
                                                    data-bs-target="#v-pills-profile"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="v-pills-profile"
                                                    aria-selected="false"
                                                >
                                                    <h3>ZAIBA JEWELS</h3>
                                                    <p>Deira &amp; Al Qouz , Dubai, United Arab Emirates</p>
                                                    <a href="#">VIEW ON MAP</a>
                                                </button>
                                                <button
                                                    className="nav-link"
                                                    id="v-pills-disabled-tab"
                                                    data-bs-toggle="pill"
                                                    data-bs-target="#v-pills-disabled"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="v-pills-disabled"
                                                    aria-selected="false"
                                                >
                                                    <h3>ZAIBA JEWELS</h3>
                                                    <p>Deira &amp; Al Qouz , Dubai, United Arab Emirates</p>
                                                    <a href="#">VIEW ON MAP</a>
                                                </button>
                                            </div>
                                            <div className="tab-content" id="v-pills-tabContent">
                                                <div
                                                    className="tab-pane fade show active"
                                                    id="v-pills-home"
                                                    role="tabpanel"
                                                    aria-labelledby="v-pills-home-tab"
                                                    tabIndex={0}
                                                >
                                                    <iframe
                                                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d57728.707428951886!2d55.284403934731685!3d25.269098051340997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sae!4v1691579000468!5m2!1sen!2sae"
                                                        width="100%"
                                                        height={430}
                                                        style={{ border: 0 }}
                                                        allowFullScreen={false}
                                                        loading="lazy"
                                                        referrerPolicy="no-referrer-when-downgrade"
                                                    />
                                                </div>
                                                <div
                                                    className="tab-pane fade"
                                                    id="v-pills-profile"
                                                    role="tabpanel"
                                                    aria-labelledby="v-pills-profile-tab"
                                                    tabIndex={0}
                                                >
                                                    <iframe
                                                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d57728.707428951886!2d55.284403934731685!3d25.269098051340997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sae!4v1691579000468!5m2!1sen!2sae"
                                                        width="100%"
                                                        height={430}
                                                        style={{ border: 0 }}
                                                        allowFullScreen={false}
                                                        loading="lazy"
                                                        referrerPolicy="no-referrer-when-downgrade"
                                                    />
                                                </div>
                                                <div
                                                    className="tab-pane fade"
                                                    id="v-pills-disabled"
                                                    role="tabpanel"
                                                    aria-labelledby="v-pills-disabled-tab"
                                                    tabIndex={0}
                                                >
                                                    <iframe
                                                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d57728.707428951886!2d55.284403934731685!3d25.269098051340997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sae!4v1691579000468!5m2!1sen!2sae"
                                                        width="100%"
                                                        height={430}
                                                        style={{ border: 0 }}
                                                        allowFullScreen={false}
                                                        loading="lazy"
                                                        referrerPolicy="no-referrer-when-downgrade"
                                                    />
                                                </div>
                                            </div>
                                        </div>
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

export default withMainLayout(FindStore)
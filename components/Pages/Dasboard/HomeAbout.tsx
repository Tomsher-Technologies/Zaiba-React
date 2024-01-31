import React, { FC } from 'react';

const HomeAbout: FC<{ aboutUs: any }> = ({ aboutUs }) => {
    return (
        <section className="home-about">
            <div className="home-about-inner">
                <div className="container-fluid px-7">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-md-4">
                            <h3 className="sub-title">{aboutUs?.title}</h3>
                            <h4 className="main-title">{aboutUs?.sub_title}</h4>
                            <p>
                                {aboutUs?.description}
                            </p>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-6">
                                    <img
                                        src={aboutUs?.image1}
                                        className="img-fluid"
                                        alt=""
                                    />
                                </div>
                                <div className="col-md-6">
                                    <img
                                        src={aboutUs?.image2}
                                        className="img-fluid"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default HomeAbout
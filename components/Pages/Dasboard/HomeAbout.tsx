import React, { FC } from 'react';

const HomeAbout: FC = () => {
    return (
        <section className="home-about">
            <div className="home-about-inner">
                <div className="container-fluid px-7">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-md-4">
                            <h3 className="sub-title">ABOUT US</h3>
                            <h4 className="main-title">Modular fine jewelry</h4>
                            <p>
                                With Bijoux, we’ve built a clever, customizable jewelry line that
                                morphs with you. A necklace becomes a pair of anklets; an earring
                                turns into a ring. Crafted from the finest materials and precious
                                stones, Bijoux’s contemporary fine jewelry can be modified to match
                                your mood, no matter where you are.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-6">
                                    <img
                                        src="/images/about-img1.png"
                                        className="img-fluid"
                                        alt=""
                                    />
                                </div>
                                <div className="col-md-6">
                                    <img
                                        src="/images/about-img2.png"
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
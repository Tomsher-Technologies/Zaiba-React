import React, { FC, Fragment } from 'react';
import dynamic from 'next/dynamic';


import withMainLayout from '@/hocs/withMainLayout';
const InnerStrip = dynamic(() => import('@/components/Pages/Products/InnerStrip'));


const About: FC = () => {
    return (
        <Fragment>
            <InnerStrip
                title='ABOUT US'
            />
            <section className="ad-about-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <small>History</small>
                            <h3>Well-coordinated Teamwork Speaks About Us</h3>
                            <img
                                src="/images/about-big-1.jpg"
                                className="img-fluid mb-3"
                                alt=""
                            />
                            <p>
                                We are thrilled to offer you a wide range of products that you won&apos;t
                                find anywhere else. Whether you&apos;re shopping for clothing, accessories,
                                gadgets, or home decor, we have something for everyone.
                            </p>
                            <br />
                            <p>
                                Our commitment to quality is reflected in every product we offer. We
                                work with top suppliers and manufacturers to ensure that every item we
                                sell meets our high standards for durability, performance, and style.
                                And with a user-friendly interface and intuitive navigation, shopping
                                on our site is a breeze. We understand that security is a top concern
                                for online shoppers, which is why we employ the latest encryption
                                technologies and follow industry best practices to keep your personal
                                information safe. And with fast, reliable shipping options, you can
                                enjoy your purchases in no time.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </Fragment>
    )
}

export default withMainLayout(About);
import Image from 'next/image';
import React, { FC } from 'react';

const GetInspired: FC<{ getInspired: any }> = ({ getInspired }) => {
    return (
        <section className="get-inspired">
            <div className="inspired-inner">
                <div className="container-fluid px-7">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="title-block text-center mb-4">
                                <h3 className="sub-title">{getInspired?.title}</h3>
                                <h4 className="main-title">{getInspired?.sub_title}</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row g-0">
                        {Object.values(getInspired)?.slice(2)?.map((image: any, index) => (
                            <div key={index} className="col-md-3">
                                <img src={image} className="img-fluid" alt={`Inspired Image ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

    )
}

export default GetInspired
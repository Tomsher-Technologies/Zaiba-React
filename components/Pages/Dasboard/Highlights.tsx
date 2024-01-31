import React, { FC } from 'react';

const Highlights: FC<{ highlights: any }> = ({ highlights }) => {
    return (
        <section className="zaiba-highlights">
            <div className="highlights-inner">
                <div className="container-fluid px-7">
                    <div className="highlights-warpper">
                        <div className="row justify-content-between">
                            <div className="col-md-4">
                                <div className="highlights-top-start">
                                    <h3>
                                        {highlights?.title}
                                    </h3>
                                    <p>
                                        {highlights?.sub_title}
                                    </p>
                                </div>
                                {highlights?.counts &&
                                    <div className="highlights-top-bottom">
                                        {highlights.counts?.count_1_count &&
                                            <div className="count-blocks">
                                                <div className="customer-block">
                                                    <img src={highlights.counts?.count_1_icon} alt="" />
                                                    <h3>{highlights.counts?.count_1_count}</h3>
                                                </div>
                                                <h5>{highlights.counts?.count_1_title}</h5>
                                            </div>
                                        }
                                        {highlights.counts?.count_2_count &&
                                            <div className="count-blocks">
                                                <div className="customer-block">
                                                    <img src={highlights.counts?.count_2_icon} alt="" />
                                                    <h3>{highlights.counts?.count_2_count}</h3>
                                                </div>
                                                <h5>{highlights.counts?.count_2_title}</h5>
                                            </div>
                                        }
                                    </div>
                                }
                            </div>
                            <div className="col-md-6">
                                <div className="highlights-top-right">
                                    {highlights?.points &&
                                        <ul>
                                            {Object.keys(highlights.points).map((key) => {
                                                if (key.includes("_icon")) {
                                                    const titleKey = key.replace("_icon", "_title");
                                                    return (
                                                        <li key={key}>
                                                            <img src={highlights.points[key]} alt="" />
                                                            <span>{highlights.points[titleKey]}</span>
                                                        </li>
                                                    );
                                                }
                                                return null;
                                            })}
                                        </ul>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Highlights
import React, { FC } from 'react';

const GuideSection:FC = () => {
  return (
<section className="guide-section">
  <div className="guide-inner">
    <div className="container-fluid p-0">
      <div className="row g-0">
        <div className="col-md-4">
          <div className="guide-block">
            <img
              src="/images/guides-img1.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="guide-caption">
              <h4>moment of precious craft</h4>
              <a href="#" className="btn btn-all">
                VIEW COLLECTION
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="guide-block">
            <img
              src="/images/guides-img2.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="guide-caption">
              <h4>moment of precious craft</h4>
              <a href="#" className="btn btn-all">
                VIEW COLLECTION
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="guide-block">
            <img
              src="/images/guides-img3.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="guide-caption">
              <h4>moment of precious craft</h4>
              <a href="#" className="btn btn-all">
                VIEW COLLECTION
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default GuideSection
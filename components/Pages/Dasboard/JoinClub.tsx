import React, { FC } from 'react';

const JoinClub: FC = () => {
    return (
        <section
        className="join-club"
        style={{ backgroundImage: "url(./images/join-bg.jpg)" }}
      >
        <div className="join-inner">
          <div className="container-fluid px-7">
            <div className="row align-items-center">
              <div className="col-md-4">
                <h5>latest collection news</h5>
                <h3>Join the Club</h3>
                <form className="d-flex align-items-center g-0 position-relative">
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Enter your email"
                    aria-label="Search"
                  />
                  <button className="btn btn-submit" type="submit">
                    Submit
                  </button>
                </form>
                <p>
                  Discover our new jewelry first hand and receive 10% off your first
                  order!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    )
}

export default JoinClub
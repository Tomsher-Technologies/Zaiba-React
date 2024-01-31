import React, { FC } from 'react';

const JoinClub: FC<{ newsLetter: any }> = ({ newsLetter }) => {
  return (
    <section
      className="join-club"
      style={{ backgroundImage: `url(${newsLetter?.image})` }}
    >
      <div className="join-inner">
        <div className="container-fluid px-7">
          <div className="row align-items-center">
            <div className="col-md-4">
              <h5>{newsLetter?.title}</h5>
              <h3>{newsLetter?.sub_title}</h3>
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
                {newsLetter?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default JoinClub
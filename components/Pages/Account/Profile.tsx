import React, { FC } from 'react';

const Profile: FC = () => {
    
    return (
        <div
            className="tab-pane fade show active"
            id="v-pills-profile"
            role="tabpanel"
            aria-labelledby="v-pills-profile-tab"
            tabIndex={0}
        >
            <h3 className="mb-2">Profile</h3>
            <div className="zb-profile-intro">
                <h4>Hello Umniyah!</h4>
                <small>umniyah123@gmail.com</small>
            </div>
            <div className="zb-profile-information">
                <div className="d-flex align-items-center justify-content-between">
                    <h3>Contact information</h3>
                    <a href="#" className="btn btn-edit">

                        <i className="bi bi-pencil me-1" /> Edit
                    </a>
                </div>
                <hr />
                <form action="#">
                    <div className="row g-3">
                        <div className="col-md-2">
                            <label htmlFor="inputEmail4" className="form-label">
                                Title
                            </label>
                            <select
                                className="form-select form-control"
                                aria-label="Default select example"
                            >
                                <option selected={true}>Ms.</option>
                                <option value={1}>Mr.</option>
                            </select>
                        </div>
                        <div className="col-md-5">
                            <label htmlFor="inputEmail4" className="form-label">
                                First Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="First name"
                                defaultValue="Umniyah Azizah"
                                aria-label="First name"
                            />
                        </div>
                        <div className="col-md-5">
                            <label htmlFor="inputEmail4" className="form-label">
                                Last Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Last name"
                                defaultValue="Nader"
                                aria-label="Last name"
                            />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputEmail4" className="form-label">
                                Email
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Last name"
                                defaultValue="umniyah123@gmail.com"
                                aria-label="Last name"
                            />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputEmail4" className="form-label">
                                Phone
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Last name"
                                defaultValue="+971-56-123456789"
                                aria-label="Last name"
                            />
                        </div>
                    </div>
                    <div className="row g-3 mt-1">
                        <div className="col-md-2">
                            <label htmlFor="inputEmail4" className="form-label">
                                Date Of Birth
                            </label>
                            <select
                                className="form-select form-control"
                                aria-label="Default select example"
                            >
                                <option selected={false}>02</option>
                                <option value={1}>03</option>
                                <option value={2}>04</option>
                            </select>
                        </div>
                        <div className="col-md-2 align-self-end">
                            <select
                                className="form-select form-control"
                                aria-label="Default select example"
                            >
                                <option>January</option>
                                <option value={1} selected={false}>
                                    February
                                </option>
                                <option value={2}>March</option>
                            </select>
                        </div>
                        <div className="col-md-2 align-self-end">
                            <select
                                className="form-select form-control"
                                aria-label="Default select example"
                            >
                                <option>1992</option>
                                <option value={1} selected={false}>
                                    1990
                                </option>
                                <option value={2}>1991</option>
                            </select>
                        </div>
                        <div className="col-md-12 mt-4">
                            <a href="#" className="btn btn-login w-25">
                                Update
                            </a>
                        </div>
                    </div>
                </form>
            </div>
            <div className="zb-profile-bottom">
                <a href="#" className="btn btn-password w-25">
                    Change Password
                </a>
                <a href="#" className="btn btn-delete">
                    Delete account
                </a>
            </div>
        </div>
    )
}

export default Profile
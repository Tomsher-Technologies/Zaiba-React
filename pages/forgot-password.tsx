import React, { FC } from 'react';
import Link from 'next/link';

import withMainLayout from '@/hocs/withMainLayout';

const ForgotPassword: FC = () => {
    return (
        <section className="zb-login-area">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 m-auto">
                        <div className="zb-login-warpper">
                            <h4>Reset Passowrd</h4>
                            <p>
                                Enter your email address and we&apos;ll send you a link to reset your
                                password
                            </p>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="EmailInput" className="form-label">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="EmailInput"
                                        placeholder="Enter your email"
                                    />
                                </div>
                                <button type="submit" className="btn btn-login w-100">
                                    Send Email
                                </button>
                            </form>
                            <p className="mb-0 mt-3">
                                Remeber Passowrd? <Link href="/login">Login</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default withMainLayout(ForgotPassword)
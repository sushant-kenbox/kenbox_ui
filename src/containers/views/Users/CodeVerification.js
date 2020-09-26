import React from "react";
import { Link } from "react-router-dom"
import logo from "./../../../assets/img/final-logo.png"
import apple from "./../../../assets/img/apple-ios.png"
import android from "./../../../assets/img/anroid-icon.png"
//import confirm from "./../../../assets/img/confirm.png"

class CodeVerification extends React.Component {
    render() {
        return (
            <section id="confirmPwd-section">
                <div className="black-bg">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12 mt-4 logo-prt text-center">
                                <figure>
                                    <img
                                        src={logo}
                                        className="img-fluid"
                                        alt="login"
                                    />
                                </figure>
                            </div>
                            <div className="col-md-12">
                                <div className="confirmPwd-form-t">
                                    <div className="text-center">
                                        <p>Enter the verification code we sent on your mail id.</p>
                                    </div>
                                    <div className="confirmPwd-form verifyCode">
                                        <form action="/action_page.php">
                                            <div className="form-group col-md-12">
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    id="vCode"
                                                    placeholder
                                                    name="vCode"
                                                />
                                                <Link to="/admin/users/profile" className="resendCode verifyCode">
                                                    Resend Code
                            </Link>
                                            </div>
                                            <div className="submit-wrap verifyCode">
                                            <Link to="/admin/users/profile"
                                                    type="submit"
                                                    className="btn btn-primary"
                                                >
                                                    Verify
                            </Link>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="social-media text-right">
                                    <div className="social-media-app" />
                                    <div className="overlay">
                                        <article>
                                            <h1>Download App</h1>
                                            <ul>
                                                <li>
                                                <Link to="/admin/users/profile">
                                                        <img
                                                            src={apple}
                                                            className="img-fluid"
                                                            alt="media"
                                                        />
                                                    </Link>
                                                </li>
                                                <li>
                                                <Link to="/admin/users/profile">
                                                        <img
                                                            src={android}
                                                            className="img-fluid"
                                                            alt="media"
                                                        />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer className="confirmPwd-footer">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12 copywrite text-left">
                                    <p>Powered By @Kenbox</p>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </section>
        )
    }
}

export default CodeVerification

import React from "react";
//import { Link } from "react-router-dom"
import logo from "./../../../assets/img/kenbox-login-logo.png"
import apple from "./../../../assets/img/apple-ios.png"
import android from "./../../../assets/img/anroid-icon.png"

class ConfirmPassword extends React.Component {
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
                                        <p>Please enter the new password and confirm password</p>
                                    </div>
                                    <div className="confirmPwd-form">
                                        <form action="/action_page.php">
                                            <div className="form-group col-md-12">
                                                <label htmlFor="pwd">Password:</label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    id="pwd"
                                                    placeholder
                                                    name="pswd"
                                                />
                                            </div>
                                            <div className="form-group col-md-12">
                                                <label htmlFor="cpwd">Confirm Password:</label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    id="cpwd"
                                                    placeholder
                                                    name="cfmpswd"
                                                />
                                            </div>
                                            <div className="submit-wrap">
                                                <a
                                                    href="index.html"
                                                    type="submit"
                                                    className="btn btn-primary"
                                                >
                                                    Login
                            </a>
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
                                                    <a href="#">
                                                        <img
                                                            src={apple}
                                                            className="img-fluid"
                                                            alt="media"
                                                        />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img
                                                            src={android}
                                                            className="img-fluid"
                                                            alt="media"
                                                        />
                                                    </a>
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
        );
    }
}

export default ConfirmPassword

import React, { Fragment } from "react";
import { Link } from "react-router-dom"
import gplus from "./../../assets/img/google-plus.png"
import fb from "./../../assets/img/face-book.png"
import twitter from "./../../assets/img/twitter.png"
import Loading from "./../Common/Loading"

const LoginForm = ({ users, handleChange, handleLogin }) => {

    //console.log("LoginForm", users.error)
    return (
        <Fragment>
            {users.pending === true && <Loading />}
            <form>
                <div className="form-group col-md-12">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Email"
                        name="email"
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group col-md-12">
                    <label htmlFor="pwd">Password:</label>
                    <input
                        type="password"
                        className="form-control"
                        id="pwd"
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                    />
                </div>
                <div className="col-md-12">
                    <div className="row forgot-yu">
                        <div className="form-group col-md-6 text-left">
                            <Link to="/forgotPassword">Forgot Password</Link>
                        </div>
                        <div className="form-group form-check form-check-ty col-md-6 text-right">
                            <label className="form-check-label">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="remember"
                                />{" "}
Remember me
</label>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <Link to="/login"
                        type="submit"
                        className="btn btn-primary"
                        onClick={handleLogin}
                    >
                        Login
</Link>
                </div>
                <div className="col-md-12 social-media-icon text-center mt-3">
                    <span>or login with</span>
                    <ul>
                        <li>
                            <Link to="/login">
                                <img
                                    src={gplus}
                                    className="img-fluid"
                                    alt="google plus"
                                />
                            </Link>
                        </li>
                        <li>
                            <Link to="/login">
                                <img
                                    src={fb}
                                    className="img-fluid"
                                    alt="Face book"
                                />
                            </Link>
                        </li>
                        <li>
                            <Link to="/login">
                                <img
                                    src={twitter}
                                    className="img-fluid"
                                    alt="Twitter"
                                />
                            </Link>
                        </li>
                    </ul>
                </div>
            </form>
        </Fragment>
    )
}

export default LoginForm;

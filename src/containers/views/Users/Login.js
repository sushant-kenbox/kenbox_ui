import React from "react";
import { Link } from "react-router-dom"
import logo from "./../../../assets/img/kenbox-login-logo.png"
import gplus from "./../../../assets/img/google-plus.png"
import fb from "./../../../assets/img/face-book.png"
import twitter from "./../../../assets/img/twitter.png"
import apple from "./../../../assets/img/apple-ios.png"
import android from "./../../../assets/img/anroid-icon.png"


class Login extends React.Component {
	render() {
		return (
			<section id="login-section">
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
								<div className="login-form-t">
									<div className="text-center">
										<h1>Login</h1>
										<p>Access to our Dashboard</p>
									</div>
									<div className="login-form">
										<form action="/action_page.php">
											<div className="form-group col-md-12">
												<label htmlFor="email">Email:</label>
												<input
													type="email"
													className="form-control"
													id="email"
													placeholder
													name="email"
												/>
											</div>
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
											<div className="col-md-12">
												<div className="row forgot-yu">
													<div className="form-group col-md-6 text-left">
														<a href="#">Forgot Password</a>
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
												>
													Login
                        </Link>
											</div>
											<div className="col-md-12 social-media-icon text-center mt-3">
												<span>or login with</span>
												<ul>
													<li>
														<a href />
														<img
															src={gplus}
															className="img-fluid"
															alt="google plus"
														/>
													</li>
													<li>
														<a href />
														<img
															src={fb}
															className="img-fluid"
															alt="Face book"
														/>
													</li>
													<li>
														<a href />
														<img
															src={twitter}
															className="img-fluid"
															alt="Twitter"
														/>
													</li>
												</ul>
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
					<footer className="login-footer">
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

export default Login

import React, { Fragment } from "react";
import { Link } from "react-router-dom"

export default class Login extends React.Component {

	componentDidMount = () => {
		document.body.classList.add('bg-dark')
	}


	render() {
		return (
			<Fragment>

				<div className="backstretch">
					{/* <img src={loginBgImage} className="backstrach-image"/> */}

				</div>

				<div id="login-page">
					<div className="container">
						<form className="form-login" action="index.html">
							<h2 className="form-login-heading">Registration</h2>
							<div className="login-wrap">
								<input
									type="text"
									className="form-control"
									placeholder="User ID"
									autofocus
								/>
								<br />
								<input
									type="password"
									className="form-control"
									placeholder="Password"
								/>

								<button
									className="btn btn-theme btn-block"
									href="index.html"
									type="submit"
								>
									<i className="fa fa-lock" /> Submit </button>
								{/* <hr />
								<div className="login-social-link centered">
									<p>or you can sign in via your social network</p>
									<button className="btn btn-facebook" type="submit">
										<i className="fa fa-facebook" /> Facebook
                </button>
									<button className="btn btn-twitter" type="submit">
										<i className="fa fa-twitter" /> Twitter
                </button>
								</div> */}
								<div className="registration">

									<br />
									<Link to="/login">
										SIGN IN
                </Link>
								</div>
							</div>
			
						</form>
					</div>
				</div>
			</Fragment>
		);
	}
}



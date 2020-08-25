import React, { Fragment } from "react";
import { Link } from "react-router-dom"
import Modal from 'react-modal';
const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)'
	}
};
var subtitle;

class Login extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			modalIsOpen: false
		}
	}

	componentDidMount = () => {
		document.body.classList.add('bg-dark')
	}


	openModal = (e) => {
		e.preventDefault();
		this.setState({ modalIsOpen: true });
	}
	afterOpenModal = (e) => {
		e.preventDefault();
		this.setState({ modalIsOpen: true });
	}

	closeModal = (e) => {
		e.preventDefault();
		this.setState({ modalIsOpen: false });
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
							<h2 className="form-login-heading">sign in now</h2>
							<div className="login-wrap">
								<input
									type="text"
									className="form-control"
									placeholder="User ID"
									autoFocus
								/>
								<br />
								<input
									type="password"
									className="form-control"
									placeholder="Password"
								/><br/>
								<label className="checkbox">
									<input type="checkbox" defaultValue="remember-me" /> Remember me
                <span className="pull-right">
										{/* <button onClick={this.openModal}>
											Forgot Password?
                  </button> */}

									</span>
								</label>
								<button
									className="btn btn-theme btn-block"
									href="index.html"
									type="submit"
								>
									<i className="fa fa-lock" /> SIGN IN
              </button>
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
									Don't have an account yet?
                <br />
									<Link to="/registration">
										Create an account
                </Link>
								</div>
							</div>
							{}
							{/* <div
								aria-hidden="true"
								aria-labelledby="myModalLabel"
								role="dialog"
								tabIndex={-1}
								id="myModal"
								className="modal fade"
							>
								<div className="modal-dialog">
									<div className="modal-content">
										<div className="modal-header">
											<button
												type="button"
												className="close"
												data-dismiss="modal"
												aria-hidden="true"
											>
												×
                    </button>
											<h4 className="modal-title">Forgot Password ?</h4>
										</div>
										<div className="modal-body">
											<p>
												Enter your e-mail address below to reset your password.
                    </p>
											<input
												type="text"
												name="email"
												placeholder="Email"
												autoComplete="off"
												className="form-control placeholder-no-fix"
											/>
										</div>
										<div className="modal-footer">
											<button
												data-dismiss="modal"
												className="btn btn-default"
												type="button"
											>
												Cancel
                    </button>
											<button className="btn btn-theme" type="button">
												Submit
                    </button>
										</div>
									</div>
								</div>
							</div>
							 */}

							
						</form>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Login;

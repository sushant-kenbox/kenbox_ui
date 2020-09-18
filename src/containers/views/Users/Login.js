import React, { Component } from "react";
import { connect } from 'react-redux';
import { userLogin } from './../../../redux/actions/usersAction';
import { Link } from "react-router-dom"
import LoginFormComponent from "./../../../components/Users/LoginForm.Component"
import logo from "./../../../assets/img/kenbox-login-logo.png"
import apple from "./../../../assets/img/apple-ios.png"
import android from "./../../../assets/img/anroid-icon.png"

class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {
			users: {
				email: "",
				password: ""
			}
		}
	}

	handleChange = (e) => {

		const name = e.target.name;
		const value = e.target.value;
		let {users} = this.state
		this.setState({
			users: {
				...users,
				[name]: value
			}
		});


		console.log('handleChange', e.target.value)
	}

	handleLogin = () => {
		let {users} = this.state
		console.log('handleChange', this.state.users)
		this.props.userLogin(users)
	}
	render() {
		//console.log('click login', this.props)
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
										<LoginFormComponent
											{...this.props}
											handleChange={this.handleChange}
											handleLogin={this.handleLogin} />
									</div>
								</div>
								<div className="social-media text-right">
									<div className="social-media-app" />
									<div className="overlay">
										<article>
											<h1>Download App</h1>
											<ul>
												<li>
													<Link to="/login">
														<img
															src={apple}
															className="img-fluid"
															alt="media"
														/>
													</Link>
												</li>
												<li>
													<Link to="/login">
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


const mapStateToProps = (state) => {
	console.log("mapStateToProps loading data", state)
	let { users, pending, error } = state;
	return {
		users: users,
		pending: pending,
		error: error
	};

};


export default connect(mapStateToProps, { userLogin })(Login);
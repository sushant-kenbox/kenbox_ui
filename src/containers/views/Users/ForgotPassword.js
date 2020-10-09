import React from "react";
import { Link } from "react-router-dom"
import logo from "./../../../assets/img/final-logo.png"
import apple from "./../../../assets/img/apple-ios.png"
import android from "./../../../assets/img/anroid-icon.png"

class ForgotPassword extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			users: {
				username: "",
				// password: "",
				company: "local"
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
    }

    render() {
    	const users = this.state.users;
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
    									<h1>Forgot Password?</h1>
    									<p>Enter your password associated with your account</p>
    								</div>
    								<div className="confirmPwd-form">
    									<form action="/action_page.php">
    										<div className="form-group col-md-12">
    											<label htmlFor="pwd">Email:</label>
    											<input
    												type="text"
    												className="form-control"
    												id="username"
    												placeholder="Email"
    												name="username"
    												onChange={this.handleChange}
    											/>
    										</div>
    										<div className="submit-wrap">
    											<p className="center">Try Another Way</p>
    											<Link to=  {{pathname : `confirmPassword/${users.username}/${users.company}`}}>
                                                    Next
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
    	);
    }
}

export default ForgotPassword

import React from "react";
import { Link } from "react-router-dom"
import logo from "./../../../assets/img/final-logo.png"
import apple from "./../../../assets/img/apple-ios.png"
import android from "./../../../assets/img/anroid-icon.png"
import axios from "axios";
import {RESET_PASSWORD_API,FORGOT_PASSWORD_API } from "./../../../data/index"
// import { resetRequest } from "./ResetRequest";

class ConfirmPassword extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			password: "",
			token: "",
		}
	}

	componentDidMount(){
		 
		const email = this.props.match.params.email;
		const company = this.props.match.params.company;
        
		let token =  axios
			.post(FORGOT_PASSWORD_API,{},{
				params: {email : email,
					company : company}
			})
			.then((response) => {console.log(response.data);
				this.setState({token: response.data});
			});
              
		console.log("token" ,token);
	}
    
    handleSubmit = (e) => {
        
    	
    		const token = this.state.token;
    		const password = this.state.password
        
    	axios
    		.post(RESET_PASSWORD_API,{},{
    			params:{
    				token : token,
    				password : password
    			}
    		})
    		.then((response) => {console.log(response.data);
    		});
				  

    	
    }
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
    									<form>
    										<div className="form-group col-md-12">
    											<label htmlFor="pwd">Password:</label>
    											<input
    												type="password"
    												className="form-control"
    												id="password"
    												placeholder="password"
    												name="password"
    												onChange = {(e) => {this.setState({password: e.target.value})}}
    											/>
    										</div>
    										{/* <div className="form-group col-md-12">
												<label htmlFor="cpwd">Confirm Password:</label>
												<input
													type="password"
													className="form-control"
													id="cpwd"
													placeholder
													name="cfmpswd"
												/>
											</div> */}
    										<div className="submit-wrap">
    											<Link to="/updatePassword"
    												type="submit"
    												className="btn btn-primary"
    												onClick={this.handleSubmit}
    											>
                                                    Confirm
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

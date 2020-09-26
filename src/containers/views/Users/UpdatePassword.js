import React from "react";
import { Link } from "react-router-dom"
import logo from "./../../../assets/img/final-logo.png"
import apple from "./../../../assets/img/apple-ios.png"
import android from "./../../../assets/img/anroid-icon.png"
import confirm from "./../../../assets/img/confirm.png"

class ConfirmPassword extends React.Component {
    render() {
        return (
            <section id="confirmPwd-section" data-component="UpdatePassword">
                <div class="black-bg">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-12 mt-4 logo-prt text-center">
                                <figure><img src={logo} class="img-fluid" alt="login" /></figure>
                            </div>
                            <div class="col-md-12">
                                <div class="updatePwd-form-t">
                                    <div class="col-md-12 mt-4 logo-prt text-center">
                                        <figure><img src={confirm} class="img-fluid" alt="login" /></figure>
                                    </div>
                                    <div class="text-center">
                                        <h1>Password Updated</h1>
                                        <p>Your password has been changed successfully</p>
                                        <p>Use your new password to log in.</p>
                                    </div>
                                </div>
                                <div class="social-media text-right">
                                    <div class="social-media-app">

                                    </div>
                                    <div class="overlay">
                                        <article>
                                            <h1>Download App</h1>
                                            <ul>
                                                <li><Link to="/admin/users/profile"><img src={apple} class="img-fluid" alt="media" /></Link></li>
                                                <li><Link to="/admin/users/profile"><img src={android} class="img-fluid" alt="media" /></Link></li>
                                            </ul>
                                        </article>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                    <footer class="confirmPwd-footer">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-12 copywrite text-left">
                                    <p>Powered By @Kenbox</p>
                                </div>
                            </div>
                        </div>

                    </footer>
                </div>
            </section>);
    }
}

export default ConfirmPassword

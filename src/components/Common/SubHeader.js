import React, { Fragment } from "react";
import { Link } from "react-router-dom"

import logo from "./../../assets/img/kenbox-logo.png"
import mesh from "./../../assets/img/mesh-h.png"
import task from "./../../assets/img/task-h.png"
import notification from "./../../assets/img/notifications-h.png"
import profile from "./../../assets/img/profile-h.png"
import change from "./../../assets/img/change-img.png"
import password from "./../../assets/img/password.png"
import user from "./../../assets/img/user-p.png"
import gear from "./../../assets/img/gear-p.png"
import logout from "./../../assets/img/logout.png"

const SubHeader = () => {

  return (
    <Fragment>
        <header id="header" className="sticky-top">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-2">
                <a id="show-sidebar" href="#">
                  <img src={mesh} alt="mesh" />
                </a>
              </div>
              <div className="col-md-10">
                <div className="brand-logo text-left">
                  <Link to="/admin/users/dashboard">
                    <img src={logo} alt="brand logo" />
                  </Link>
                </div>
                <div className="user-info-t text-right">
                  <ul>
                    <li className="nav-item dropdown">
                      <a href="#">
                        <i className="noti-mess">
                          {" "}
                          <img src={task} alt="notification" />
                        </i>
                        <span className="badge badge-pill">3</span>
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a href="#">
                        <i className="task-a">
                          {" "}
                          <img src={notification} alt="task" />
                        </i>
                        <span className="badge badge-pill">3</span>
                      </a>
                    </li>
                    <li className="nav-item dropdown has-arrow main-drop">
                      <a
                        href="#"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        aria-expanded="true"
                      >
                        <span className="user-img">
                          <img src={profile} alt="profile" />
                          <span className="status online" />
                        </span>
                        <span className="profile-ftr">Ravi</span>
                      </a>
                      <div
                        className="dropdown-menu profile-set"
                        x-placement="bottom-start"
                        style={{
                          position: "absolute",
                          willChange: "transform",
                          top: "0px",
                          left: "0px",
                          transform: "translate3d(-11px, 60px, 0px)"
                        }}
                      >
                        <div className="profile-set-menu text-center">
                          <a href="#">
                            <img src={change} alt="frofile pic" />
                          </a>
                          <h6>RAVI SINGH (EP-2303)</h6>
                          <p>ravisig@gmail.com</p>
                        </div>
                        <a className="dropdown-item" href="#">
                          <i>
                            <img src={user} />
                          </i>{" "}
                          My Profile
                        </a>
                        <Link className="dropdown-item" to="#">
                          <i>
                            <img src={password} />
                          </i>{" "}
                          Change Password
                        </Link>
                        <a className="dropdown-item" href="#">
                          <i>
                            <img src={gear} />
                          </i>{" "}
                          Settings
                        </a>
                        <a className="dropdown-item" href="#">
                          <i>
                            <img src={logout} />
                          </i>{" "}
                          Logout
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>
        
    </Fragment>
  );

}

export default SubHeader;

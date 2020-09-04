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
import search from "./../../assets/img/search.png"
import shutblue from "./../../assets/img/shout-blue.png"
import team from "./../../assets/img/team.png"
import statusblue from "./../../assets/img/status-blue.png"
import hierarchy from "./../../assets/img/hierarchy.jpg"


const Dashboard = () => {

  return (
    <Fragment>
      <div className="page-wrapper main-top-wrapper">
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
        <section id="profile-section">
          <div className="container">
            <div className="row mt-3 pro-prty">
              <div className="col-md-6">
                <p>Hi Ravi Singh</p>
              </div>
              <div className="col-md-3 text-right ">
                <div className="dropdown">
                  <a
                    type="button"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <span>Role Switcher</span>
                    <i className="fa fa-angle-down" aria-hidden="true" />
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">
                      Hr Manager
                    </a>
                    <a className="dropdown-item" href="#">
                      Manager
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 search-box-ty text-right">
                {}
                <form className="form-inline search-form">
                  <input
                    className="form-control form-control-sm ml-3 w-75"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <i>
                    <img src={search} alt="search" />
                  </i>
                </form>
              </div>
            </div>
            <div className="row profile-content-sec">
              <div className="col-md-6">
                <div className="row profile-card">
                  <div className="col-md-4 text-center">
                    <article>
                      <Link to="/admin/users/profile">
                        <div className="card-content">
                          <figure>
                            <img
                              src={user}
                              className="img-fluid"
                              alt="my profile"
                            />
                          </figure>
                          <h2>My Profile</h2>
                        </div>
                      </Link>
                    </article>
                  </div>
                  <div className="col-md-4 text-center">
                    <article>
                      <a href="#">
                        <div className="card-content">
                          <figure>
                            <img
                              src={shutblue}
                              className="img-fluid"
                              alt="my profile"
                            />
                          </figure>
                          <h2>Organization Announcement </h2>
                        </div>
                      </a>
                    </article>
                  </div>
                  <div className="col-md-4 text-center">
                    <article>
                      <a href="#">
                        <div className="card-content card-task">
                          <figure>
                            <img
                              src={task}
                              className="img-fluid"
                              alt="my profile"
                            />
                          </figure>
                          <h2>Task(2) Notification(5)</h2>
                        </div>
                      </a>
                    </article>
                  </div>
                  <div className="col-md-4 text-center">
                    <article>
                      <a href="#">
                        <div className="card-content">
                          <figure>
                            <img
                              src={user}
                              className="img-fluid"
                              alt="my profile"
                            />
                          </figure>
                          <h2>My Status</h2>
                        </div>
                      </a>
                    </article>
                  </div>
                  <div className="col-md-4 text-center">
                    <article>
                      <a href="#">
                        <div className="card-content">
                          <figure>
                            <img
                              src={team}
                              className="img-fluid"
                              alt="my profile"
                            />
                          </figure>
                          <h2>My Team</h2>
                        </div>
                      </a>
                    </article>
                  </div>
                  <div className="col-md-4 text-center">
                    <article>
                      <a href="#">
                        <div className="card-content">
                          <figure>
                            <img
                              src={statusblue}
                              className="img-fluid"
                              alt="my profile"
                            />
                          </figure>
                          <h2>My Reports</h2>
                        </div>
                      </a>
                    </article>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <figure>
                  <img
                    src={hierarchy}
                    className="img-fluid"
                    alt="manager"
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>
      </div>

    </Fragment>
  );

}

export default Dashboard;

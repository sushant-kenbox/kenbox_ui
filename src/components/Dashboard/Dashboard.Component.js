import React, { Fragment } from "react";
import { Link } from "react-router-dom"
import SubHeader from "./../Common/SubHeader"
import task from "./../../assets/img/task-h.png"
import user from "./../../assets/img/user-p.png"
import search from "./../../assets/img/search.png"
import shutblue from "./../../assets/img/shout-blue.png"
import team from "./../../assets/img/team.png"
import statusblue from "./../../assets/img/status-blue.png"
import hierarchy from "./../../assets/img/hierarchy.jpg"


const Dashboard = () => {

  return (
    <Fragment>
      <div className="page-wrapper main-top-wrapper">
      <SubHeader/>
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
import React from "react";
import { Link } from "react-router-dom"
import { Dropdown } from 'react-bootstrap';
import task from "./../../assets/img/task.png"
import user from "./../../assets/img/user.png"
import search from "./../../assets/img/search.png"
import shutblue from "./../../assets/img/shout-blue.png"
import team from "./../../assets/img/team.png"
import statusblue from "./../../assets/img/status-blue.png"
import hierarchy from "./../../assets/img/hierarchy.jpg"


const Dashboard = () => {

  return (

    <section id="profile-section">
      <div className="container">
        <div className="row mt-3 pro-prty">
          <div className="col-md-6">
            <p>Hi Ravi Singh</p>
          </div>
          <div className="col-md-3 text-right ">
            <div className="dropdown">
              <Dropdown>
                <Dropdown.Toggle className="dropdown-toggle"
                  variant="nav-link text-primary"
                  id="dropdown-basic">
                  Role Switcher  <i className="fa fa-angle-down" aria-hidden="true"></i>
                </Dropdown.Toggle>

                <Dropdown.Menu className="dropdown-menu">
                  <Dropdown.Item href="/admin/users/dashboard" className="dropdown-item">Hr Manager</Dropdown.Item>
                  <Dropdown.Item href="/admin/users/dashboard" className="dropdown-item">Manager</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
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
                  <Link to="/admin/users/dashboard">
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
                  </Link>
                </article>
              </div>
              <div className="col-md-4 text-center">
                <article>
                  <Link to="/admin/users/dashboard">
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
                  </Link>
                </article>
              </div>
              <div className="col-md-4 text-center">
                <article>
                  <Link to="/admin/users/dashboard">
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
                  </Link>
                </article>
              </div>
              <div className="col-md-4 text-center">
                <article>
                  <Link to="/admin/users/dashboard">
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
                  </Link>
                </article>
              </div>
              <div className="col-md-4 text-center">
                <article>
                  <Link to="/admin/users/dashboard">
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
                  </Link>
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
  );

}

export default React.memo(Dashboard);

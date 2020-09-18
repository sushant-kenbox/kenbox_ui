import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom"
import { Dropdown } from "react-bootstrap";
import LeftSubNavBar from "./LeftSubNavBar"
import { ModelBoxImageUpload } from "./../Model"

import { logout } from "./../../router/utils"

import logo from "./../../assets/img/kenbox-logo.png"
import mesh from "./../../assets/img/meshp-h.png"
import task from "./../../assets/img/taskp-h.png"
import notification from "./../../assets/img/notificationsp-h.png"
import profile from "./../../assets/img/profilep-h.png"
import change from "./../../assets/img/change-img.png"
import password from "./../../assets/img/password.png"
import user from "./../../assets/img/user-p.png"
import gear from "./../../assets/img/gear-p.png"
import logoutIcon from "./../../assets/img/logout.png"

const SubHeader = () => {

  const [show, setShow] = useState(false);

  let [showSubNav, setShowSubNav] = useState(false)

  const handleOpenSideBar = () => {

    let dashboard = document.getElementById('dashboard')
    dashboard.classList.add('toggled')
    setShowSubNav(true)
    console.log('show-sidebar ',)


  }

  const handleLogout = () => {
    console.log('handleLogout ',)
    logout();
  }

  const handleUploadImage = ()=>{
    setShow(true);
  }

  const handleCloseModel = () => setShow(false);

  return (
    <Fragment>
      <ModelBoxImageUpload show={show} handleCloseModel={handleCloseModel} />
      <header id="header" className="sticky-top">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2">
              <Link id="show-sidebar" to="/admin/users/dashboard">
                <img src={mesh} alt="mesh" onClick={handleOpenSideBar} />
              </Link>
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
                    <Link to="/admin/users/dashboard">
                      <i className="noti-mess">
                        {" "}
                        <img src={task} alt="mesh" />
                      </i>
                      <span className="badge badge-pill">3</span>
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link to="/admin/users/dashboard">
                      <i className="task-a">
                        {" "}
                        <img src={notification} alt="mesh" />
                      </i>
                      <span className="badge badge-pill">3</span>
                    </Link>
                  </li>
                  <li className="nav-item dropdown has-arrow main-drop">
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="nav-link text-primary"
                        id="dropdown-basic"
                      >
                        <span className="user-img">
                          <img src={profile} alt="mesh" />
                          <span className="status online" />
                        </span>
                        <span className="profile-ftr">Ravi</span>

                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <div className="profile-set-menu text-center">
                          <Dropdown.Item>
                            <i><img src={change} alt="mesh"  onClick={handleUploadImage}/></i>
                            <h6>RAVI SINGH (EP-2303)</h6>
                            <p>ravisig@gmail.com</p>
                          </Dropdown.Item>
                        </div>

                        <Dropdown.Item>
                          <i><img src={user} alt="mesh" /></i>My Profile
                      </Dropdown.Item>

                        <Dropdown.Item>
                          <i><img src={password} alt="mesh" /></i>Change Password
                      </Dropdown.Item>

                        <Dropdown.Item>
                          <i><img src={gear} alt="mesh" /></i>Settings
                      </Dropdown.Item>

                        <Dropdown.Item onClick={handleLogout}>
                          <i><img src={logoutIcon} alt="mesh" /></i>Logout
                      </Dropdown.Item>

                      </Dropdown.Menu>

                    </Dropdown>
                  </li>

                </ul>
              </div>


            </div>
          </div>
        </div>
      </header>
      {showSubNav === true && <LeftSubNavBar />}
    </Fragment>

  );

}

export default SubHeader;

import React from "react";
import { Link } from "react-router-dom"

import progress from "./../../assets/img/progress-m.png"
import shout from "./../../assets/img/shout-m.png"
import status from "./../../assets/img/status-m.png"
import notification from "./../../assets/img/notification-m.png"
import user from "./../../assets/img/user-p.png"
import group from "./../../assets/img/group-m.png"


const LeftSubNavBar = () => {

    const handleOpenSideBar = () => {

        let dashboard = document.getElementById('dashboard')
        dashboard.classList.remove('toggled')
        console.log('hide-sidebar ',)
    }

    return (
        <nav id="sidebar" className="sidebar-wrapper">
            <div className="sidebar-content">
                <div className="sidebar-brand">
                    <Link to="/admin/users/profile">Dashboard</Link>
                    <div id="close-sidebar" onClick={handleOpenSideBar}>
                        <i className="fa fa-times"></i>
                    </div>
                </div>
                {/* <!-- sidebar-header  --> */}
                {/* <!--<div className="dashboard-m">

                    <a href="#">
                        <i><img src="img/dashboard.png" alt="dashboard"></i>
                            <span>Dashboard</span>
                            <div id="close-sidebar">
                                <i className="fa fa-times"></i>
                            </div>-->
					<!--</a>-->

				<!--</div>-->
				<!-- sidebar-search  --> */}
                <div className="sidebar-menu">
                    <ul>



                        <li className=" nav-link sidebar-dropdown">
                            <Link to="/admin/users/profile">
                                <i><img src={user} alt="user" /></i>
                                <span>My Profile</span>
                            </Link>
                            <div className="sidebar-submenu">
                                <ul>
                                    <li>
                                    <Link to="/admin/users/profile">My Profile-1</Link>
                                    </li>
                                    <li>
                                    <Link to="/admin/users/profile">My Profile-2</Link>
                                    </li>
                                    <li>
                                    <Link to="/admin/users/profile">My Profile-3</Link>
                                    </li>
                                    <li>
                                    <Link to="/admin/users/profile">My Profile-4</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-link">
                            <Link to="/admin/users/organizationAnnouncement">
                                <i><img src={shout} alt="user" /></i>
                                <span>Organization Announcement </span>
                            </Link>
                        </li>
                        <li className="nav-link sidebar-dropdown">
                            <Link to="/admin/users/profile">
                                <i><img src={user} alt="user" /></i>
                                <span>Task </span>
                            </Link>
                            <div className="sidebar-submenu">
                                <ul>
                                    <li>
                                        <Link to="/admin/users/profile">Pending Task(3)</Link>
                                    </li>
                                    <li>
                                        <Link to="/admin/users/profile">Approved Task(4)</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-link">
                        <Link to="/admin/users/profile">
                                <i><img src={notification} alt="user" /></i>
                                <span>Notification(3) </span>
                            </Link>
                        </li>
                        <li className="nav-link">
                            <Link to="/admin/users/profile">
                                <i><img src={status} alt="user" /></i>
                                <span>My Status</span>
                            </Link>
                        </li>
                        <li className="nav-link">
                            <Link to="/admin/users/profile">
                                <i><img src={group} alt="user" /></i>
                                <span>My Team </span>
                            </Link>
                        </li>
                        <li className="nav-link">
                            <Link to="/admin/users/profile">
                                <i><img src={progress} alt="user" /></i>
                                <span>My Reports </span>
                            </Link>
                        </li>

                    </ul>
                </div>
                {/* <!-- sidebar-menu  --> */}
            </div>
        </nav>
    );

}

export default LeftSubNavBar;

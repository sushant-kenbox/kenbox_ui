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
                    <a href="#">Dashboard</a>
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
                            <a href="profile.html">
                                <i><img src={user} alt="user" /></i>
                                <span>My Profile</span>
                            </a>
                            <div className="sidebar-submenu">
                                <ul>
                                    <li>
                                        <a href="#">My Profile-1</a>
                                    </li>
                                    <li>
                                        <a href="#">My Profile-2</a>
                                    </li>
                                    <li>
                                        <a href="#">My Profile-3</a>
                                    </li>
                                    <li>
                                        <a href="#">My Profile-4</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-link">
                            <a href="#">
                                <i><img src={shout} alt="user" /></i>
                                <span>Organization Announcement </span>
                            </a>
                        </li>
                        <li className="nav-link sidebar-dropdown">
                            <a href="#">
                                <i><img src={user} alt="user" /></i>
                                <span>Task </span>
                            </a>
                            <div className="sidebar-submenu">
                                <ul>
                                    <li>
                                        <a href="#">Pending Task(3)</a>
                                    </li>
                                    <li>
                                        <a href="#">Approved Task(4)</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-link">
                            <a href="#">
                                <i><img src={notification} alt="user" /></i>
                                <span>Notification(3) </span>
                            </a>
                        </li>
                        <li className="nav-link">
                            <a href="#">
                                <i><img src={status} alt="user" /></i>
                                <span>My Status</span>
                            </a>
                        </li>
                        <li className="nav-link">
                            <a href="#">
                                <i><img src={group} alt="user" /></i>
                                <span>My Team </span>
                            </a>
                        </li>
                        <li className="nav-link">
                            <a href="#">
                                <i><img src={progress} alt="user" /></i>
                                <span>My Reports </span>
                            </a>
                        </li>

                    </ul>
                </div>
                {/* <!-- sidebar-menu  --> */}
            </div>
        </nav>
    );

}

export default LeftSubNavBar;

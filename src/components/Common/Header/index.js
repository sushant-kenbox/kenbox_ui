import React from "react"
import { Link } from "react-router-dom"


export default () => {
	console.log("%c RENDER Nav', 'color: orange; font-size: 20px")

	return (

		<header className="header black-bg">
          <div className="sidebar-toggle-box">
            <div  className="fa fa-bars tooltips"   data-placement="right"  data-original-title="Toggle Navigation"
            />
          </div>
          {}
          <Link to="/admin/dashboard" className="logo">
            <b>
              KenBox<span>.IN</span>
            </b>
          </Link>
          {}
          <div className="nav notify-row" id="top_menu">
            {}
            <ul className="nav top-menu">
              {}
              <li className="dropdown">
                <a
                  data-toggle="dropdown"
                  className="dropdown-toggle"
                  href="index.html#"
                >
                  <i className="fa fa-tasks" />
                  <span className="badge bg-theme">4</span>
                </a>
                <ul className="dropdown-menu extended tasks-bar">
                  <div className="notify-arrow notify-arrow-green" />
                  <li>
                    <p className="green">You have 4 pending tasks</p>
                  </li>
                  <li>
                    <a href="index.html#">
                      <div className="task-info">
                        <div className="desc">Dashio Admin Panel</div>
                        <div className="percent">40%</div>
                      </div>
                      <div className="progress progress-striped">
                        <div
                          className="progress-bar progress-bar-success"
                          role="progressbar"
                          aria-valuenow={40}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{
                            width: "40%"
                          }}
                        >
                          <span className="sr-only">
                            40% Complete (success)
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="index.html#">
                      <div className="task-info">
                        <div className="desc">Database Update</div>
                        <div className="percent">60%</div>
                      </div>
                      <div className="progress progress-striped">
                        <div
                          className="progress-bar progress-bar-warning"
                          role="progressbar"
                          aria-valuenow={60}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{
                            width: "60%"
                          }}
                        >
                          <span className="sr-only">
                            60% Complete (warning)
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="index.html#">
                      <div className="task-info">
                        <div className="desc">Product Development</div>
                        <div className="percent">80%</div>
                      </div>
                      <div className="progress progress-striped">
                        <div
                          className="progress-bar progress-bar-info"
                          role="progressbar"
                          aria-valuenow={80}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{
                            width: "80%"
                          }}
                        >
                          <span className="sr-only">80% Complete</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="index.html#">
                      <div className="task-info">
                        <div className="desc">Payments Sent</div>
                        <div className="percent">70%</div>
                      </div>
                      <div className="progress progress-striped">
                        <div
                          className="progress-bar progress-bar-danger"
                          role="progressbar"
                          aria-valuenow={70}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{
                            width: "70%"
                          }}
                        >
                          <span className="sr-only">
                            70% Complete (Important)
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="external">
                    <a href="#">See All Tasks</a>
                  </li>
                </ul>
              </li>
              {}
              {}
              <li id="header_inbox_bar" className="dropdown">
                <a
                  data-toggle="dropdown"
                  className="dropdown-toggle"
                  href="index.html#"
                >
                  <i className="fa fa-envelope-o" />
                  <span className="badge bg-theme">5</span>
                </a>
                <ul className="dropdown-menu extended inbox">
                  <div className="notify-arrow notify-arrow-green" />
                  <li>
                    <p className="green">You have 5 new messages</p>
                  </li>
                  <li>
                    <a href="index.html#">
                      <span className="photo">
                        <img alt="avatar" src="img/ui-zac.jpg" />
                      </span>
                      <span className="subject">
                        <span className="from">Zac Snider</span>
                        <span className="time">Just now</span>
                      </span>
                      <span className="message">
                        Hi mate, how is everything?
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="index.html#">
                      <span className="photo">
                        <img alt="avatar" src="img/ui-divya.jpg" />
                      </span>
                      <span className="subject">
                        <span className="from">Divya Manian</span>
                        <span className="time">40 mins.</span>
                      </span>
                      <span className="message">
                        Hi, I need your help with this.
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="index.html#">
                      <span className="photo">
                        <img alt="avatar" src="img/ui-danro.jpg" />
                      </span>
                      <span className="subject">
                        <span className="from">Dan Rogers</span>
                        <span className="time">2 hrs.</span>
                      </span>
                      <span className="message">Love your new Dashboard.</span>
                    </a>
                  </li>
                  <li>
                    <a href="index.html#">
                      <span className="photo">
                        <img alt="avatar" src="img/ui-sherman.jpg" />
                      </span>
                      <span className="subject">
                        <span className="from">Dj Sherman</span>
                        <span className="time">4 hrs.</span>
                      </span>
                      <span className="message">Please, answer asap.</span>
                    </a>
                  </li>
                  <li>
                    <a href="index.html#">See all messages</a>
                  </li>
                </ul>
              </li>
              {}
              {}
              <li id="header_notification_bar" className="dropdown">
                <a
                  data-toggle="dropdown"
                  className="dropdown-toggle"
                  href="index.html#"
                >
                  <i className="fa fa-bell-o" />
                  <span className="badge bg-warning">7</span>
                </a>
                <ul className="dropdown-menu extended notification">
                  <div className="notify-arrow notify-arrow-yellow" />
                  <li>
                    <p className="yellow">You have 7 new notifications</p>
                  </li>
                  <li>
                    <a href="index.html#">
                      <span className="label label-danger">
                        <i className="fa fa-bolt" />
                      </span>
                      Server Overloaded.
                      <span className="small italic">4 mins.</span>
                    </a>
                  </li>
                  <li>
                    <a href="index.html#">
                      <span className="label label-warning">
                        <i className="fa fa-bell" />
                      </span>
                      Memory #2 Not Responding.
                      <span className="small italic">30 mins.</span>
                    </a>
                  </li>
                  <li>
                    <a href="index.html#">
                      <span className="label label-danger">
                        <i className="fa fa-bolt" />
                      </span>
                      Disk Space Reached 85%.
                      <span className="small italic">2 hrs.</span>
                    </a>
                  </li>
                  <li>
                    <a href="index.html#">
                      <span className="label label-success">
                        <i className="fa fa-plus" />
                      </span>
                      New User Registered.
                      <span className="small italic">3 hrs.</span>
                    </a>
                  </li>
                  <li>
                    <a href="index.html#">See all notifications</a>
                  </li>
                </ul>
              </li>
              {}
            </ul>
            {}
          </div>
          <div className="top-menu">
            <ul className="nav pull-right top-menu">
              <li>
                <Link className="logout" to="/login">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </header>

	)

}
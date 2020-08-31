import React from "react"
import { Link } from "react-router-dom"
import mypic from "./../../assets/img/mypic.jpeg"
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import './../../assets/css/navigation.css';

const SideBar = () => {
  //console.log("%c RENDER Nav', 'color: orange; font-size: 20px")

  const navBar = [
    {
      label: "My Account",
      subMenu: [
        {
          label: "Login",
          path: "/login",

        },
        {
          label: "Signup",
          path: "/registration",

        },
        {
          label: "Add User",
          path: "/admin/users/add",

        },
        {
          label: "User List",
          path: "/admin/users/list",

        },

      ]
    },
    {
      label: "Employee",
      subMenu: [
        {
          label: "Add Employee",
          path: "/admin/users/add",

        },
        {
          label: "Employee List",
          path: "/admin/users/list",

        },
      ]
    }
  ]

  return (

    <aside>
      <div id="sidebar" className="nav-collapse">
        {}
        <ul className="sidebar-menu" id="nav-accordion">
          <p className="centered">
            <a href="profile.html">
              <img src={mypic} className="img-circle" width={80} alt="alt" />
            </a>
          </p>
          <h5 className="centered">Varun</h5>
          <li className="mt">
            <Link className="active" to="/admin/users/dashboard">
              <i className="fa fa-dashboard" />
              <span>Dashboard</span>
            </Link>
          </li>
          <ProSidebar>
            {navBar.map((list, index) => {
              return <Menu iconShape="square" className="sub-menu" key={index}>
                <span><SubMenu title={list.label}>
                  {list.subMenu !== undefined && list.subMenu.length > 0 &&
                    list.subMenu.map((subNav, index) => {
                      return <MenuItem className="sub" key={index}><Link to={subNav.path}>{subNav.label}</Link></MenuItem>
                    })
                  }
                </SubMenu></span>
              </Menu>

            })}
          </ProSidebar>
        </ul>
        {}
      </div>
    </aside>
  )

}

export default SideBar 
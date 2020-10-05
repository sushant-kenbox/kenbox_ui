import React, { Component } from "react";
import { Dropdown } from 'react-bootstrap';
import SubHeader from "./../../../components/Common/SubHeader"
import search from "./../../../assets/img/search.png"
import UserProfileComponent from "./../../../components/Users/UserProfile.Component"

class UserProfile extends Component {

  handleAddUser = () => {
    console.log('handleAddUser', this.props.history)
    //this.props.history.push("/admin/users/add")
  }

  render() {

    return (
      <div className="page-wrapper main-top-wrapper">
        <SubHeader />

        <section id="profile">
          <div className="container">
            <div className="row mt-3 pro-prty">
              <div className="col-md-6">
                <p>Hi Ravi Singh</p>
                <h4>Add New Employee</h4>
              </div>
              <div className="col-md-4 search-box-ty text-center">
                {}
                <form className="form-inline search-form">
                  <input
                    className="form-control form-control-sm ml-3 w-100 searchBarYellow"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <i>
                    <img src={search} alt="search" />
                  </i>
                </form>
              </div>
              <div className="col-md-2 text-center">
                <div className="dropdown">
                  <Dropdown>
                    <Dropdown.Toggle className="dropdown-toggle"
                      variant="nav-link text-primary"
                      id="dropdown-basic">
                      My Role  <i className="fa fa-angle-down" aria-hidden="true"></i>
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="dropdown-menu">
                      <Dropdown.Item href="#" className="dropdown-item">UI/UX Designer</Dropdown.Item>
                      <Dropdown.Item href="#" className="dropdown-item">Basic Information</Dropdown.Item>
                      <Dropdown.Item href="#" className="dropdown-item">Job Information</Dropdown.Item>
                      <Dropdown.Item href="#" className="dropdown-item">Family Infomation</Dropdown.Item>
                      <Dropdown.Item href="#" className="dropdown-item">Qualification Info</Dropdown.Item>
                      <Dropdown.Item href="#" className="dropdown-item">Document Details</Dropdown.Item>
                      <Dropdown.Item href="#" className="dropdown-item">Identity Info</Dropdown.Item>
                      <Dropdown.Item href="#" className="dropdown-item">Background Details</Dropdown.Item>
                      <Dropdown.Item href="#" className="dropdown-item">Good to Know</Dropdown.Item>
                      <Dropdown.Item href="#" className="dropdown-item">Reward & Recognition</Dropdown.Item>
                      <Dropdown.Item href="#" className="dropdown-item">Bank Information</Dropdown.Item>
                      <Dropdown.Item href="#" className="dropdown-item">Contact Information</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </div>
          </div>
          <UserProfileComponent />
       
         </section>

      </div>

    )
  }
}

export default UserProfile;

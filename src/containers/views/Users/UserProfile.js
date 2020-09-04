import React from "react";
import search from "./../../../assets/img/search.png"
import UserProfileComponent from "./../../../components/Users/UserProfile.Component"


export class UserProfile extends React.Component {


  handleAddUser = () => {
    console.log('handleAddUser', this.props.history)
    //this.props.history.push("/admin/users/add")
  }

  render() {

    return (
      <section id="profile">
        <div className="container">
          <div className="row mt-3 pro-prty">
            <div className="col-md-6">
              <p>Hi Ravi Singh</p>
            </div>
            <div className="col-md-4 search-box-ty text-center">
              {}
              <form className="form-inline search-form">
                <input
                  className="form-control form-control-sm ml-3 w-100"
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
                <a
                  type="button"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                >
                  <span>My Role</span>
                  <i className="fa fa-angle-down" aria-hidden="true" />
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">
                    UI/UX Designer
              </a>
                  <a className="dropdown-item" href="#">
                    Web Developer
              </a>
                  <a className="dropdown-item" href="#">
                    Front End Developer
              </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <UserProfileComponent/>
      </section>


    )
  }
}

export default UserProfile;

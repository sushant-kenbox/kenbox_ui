import React from "react";
import UserHomeComponent from "./../../../components/Users/UserHome.Component"


class UserHome extends React.Component {


  handleAddUser = () => {
    console.log('handleAddUser', this.props.history)
    this.props.history.push("/admin/addUser")
  }

  render() {

    return (<section id="main-content">
      <section className="wrapper">

        <div className="container">

          <div className="row" className="hdr">
          </div>

          <div className="container" style={{ marginTop: 50 }}>
            <button type="button" className="mr-1  btn btn-primary btn-sm" onClick={this.handleAddUser}>
              <i className="fa fa-user-plus">
              </i></button>
            <br />
            <UserHomeComponent />
          </div>

        </div>
      </section>
    </section>
    )
  }
}

export default UserHome;

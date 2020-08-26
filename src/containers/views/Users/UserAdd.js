import React, { Component } from "react";
import AddUserComponent from "./../../../components/Users/AddUser.Component"
class UserAdd extends Component {


    handleAddUser = (e) => {
        e.preventDefault();
        console.log('handleAddUser')
    }

    render() {

        return (

            <section id="main-content">
                <section className="wrapper">
                    <div className="row mt">
                        <div className="col-lg-12">
                            <div className="form-panel">
                                <h4 className="mb">
                                    <i className="fa fa-angle-right" /> Add User
                                </h4>
                                <AddUserComponent/>
                            </div>
                        </div>
                        {}
                    </div>
                </section>
                {}
            </section>

        )
    }
}

export default UserAdd;

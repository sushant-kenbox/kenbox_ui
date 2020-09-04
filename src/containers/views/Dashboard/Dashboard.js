import React from "react";
import DashboardComponent from "./../../../components/Dashboard/Dashboard.Component"


export class Dashboard extends React.Component {

  handleAddUser = () => {
    console.log('handleAddUser', this.props.history)
    //this.props.history.push("/admin/users/add")
  }

  render() {

    return (
            <DashboardComponent/>
        )
  }
}

export default Dashboard;

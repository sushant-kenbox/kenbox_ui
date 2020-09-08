import React, { Fragment, Suspense } from "react";
import SubHeader from "./../../../components/Common/SubHeader"
import Loading from "./../../../components/Common/Loading"
//import DashboardComponent from "./../../../components/Dashboard/Dashboard.Component"
const DashboardComponent = React.lazy(() => import('./../../../components/Dashboard/Dashboard.Component'));

export class Dashboard extends React.Component {

  handleAddUser = () => {
    console.log('handleAddUser', this.props.history)
    //this.props.history.push("/admin/users/add")
  }

  render() {

    return (
      <Fragment>
        <div className="page-wrapper main-top-wrapper">
          <SubHeader />
          <Suspense fallback={<Loading/>}>
            <DashboardComponent />
          </Suspense>
        </div>
      </Fragment>
    )
  }
}

export default Dashboard;

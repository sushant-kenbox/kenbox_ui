import React, { Fragment, Suspense } from "react";
import SubHeader from "./../../../components/Common/SubHeader";
import Loading from "./../../../components/Common/Loading";
import { connect } from "react-redux";
import { getUser } from "./../../../redux/actions/usersAction";

const DashboardComponent = React.lazy(() =>
	import("./../../../components/Dashboard/Dashboard.Component")
);

class Dashboard extends React.Component {
  
  //added to get the user details
  componentDidMount=()=> {      
	  this.props.getUser();	  
  }
  handleAddUser = () => {
  	console.log("handleAddUser")
  	//this.props.history.push("/admin/users/add")
  }

  render() {
	  console.log(this.props);
	  
  	
  	return (
  		<Fragment>
			  {this.props.users.pending === true && <Loading />}
  			<div className="page-wrapper main-top-wrapper" id="dashboard">
  				<SubHeader {...this.props.users.employee}/>
  				
  				<Suspense fallback={<Loading />}>
  					<DashboardComponent {...this.props.users.employee} />
  					
  				</Suspense>
  			</div>
  		</Fragment>
  	);
  }
}
const mapStateToProps = (state) => {
	console.log("mapStateToProps loading data", state)
	let { users, pending, error, employee } = state;
	return {
		users: users,
		pending: pending,
		error: error,
		employee: employee
	};

};

export default connect(mapStateToProps, { getUser })(Dashboard);


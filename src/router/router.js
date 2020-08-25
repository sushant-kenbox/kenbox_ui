import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"

//import RouteList from "./routeList"
import AdminRouteList from "./adminRouteList"

//import MainDefault from "../containers/layouts/Default"
import MainAdminLayout from "../containers/layouts/MainAdmin"

// views



import Login from "../containers/views/Main/Login/Login"
import Registration from "../containers/views/Main/Login/Registration"
import NoMatch from "../components/Common/NoMatch"
// admin Views


export default () => {

	return (
		<Switch>
			<Route exact path={["/", "/login", "/defaultPath"]} component={Login} />
			<Route path='/registration' component={Registration} />
			{/* <Route path='/admin/:path?' exact></Route> */}
			<Route path='/admin/:path?' exact>
				<MainAdminLayout>
					<Switch>
						<AdminRouteList />
						
					</Switch>

				</MainAdminLayout>

			</Route>

			<Route render={(props) => <NoMatch {...props} />} />
			{/* <Route>
				<MainDefault>
					<Switch>
						<RouteList />
					</Switch>
				</MainDefault>
			</Route> */}

		</Switch>

	)

}


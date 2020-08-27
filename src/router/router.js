import React from "react"
import { Route, Switch} from "react-router-dom"

//import RouteList from "./routeList"
import AdminRouteList from "./adminRouteList"

//import MainDefault from "../containers/layouts/Default"
import MainAdminLayout from "../containers/layouts/MainAdmin"

// views

import Login from "../containers/views/Users/Login"
import Registration from "../containers/views/Users/Registration"
import NoMatch from "../components/Common/NoMatch"
// admin Views
//import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export default () => {

	return (
		<Switch>
			<PublicRoute restricted={true} exact path={["/", "/login", "/defaultPath"]} component={Login} />
			<PublicRoute restricted={true} path='/registration' component={Registration} />
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


import React from "react"
import { Route, Switch } from "react-router-dom"

import AdminRouteList from "./AdminRouteList"
import PublicRoute from './PublicRoute';

//import MainDefault from "../containers/layouts/Default"
import MainAdminLayout from "../containers/layouts/MainAdmin"
import NoMatch from "../components/Common/NoMatch"
// views

import Login from "../containers/views/Users/Login"
import ForgotPassword from "../containers/views/Users/ForgotPassword"
import ConfirmPassword from "../containers/views/Users/ConfirmPassword"
import UpdatePassword from "../containers/views/Users/UpdatePassword"
import CodeVerification from "../containers/views/Users/CodeVerification"





export default () => {

	return (
		<Switch>
			<PublicRoute restricted={true} exact path={["/", "/login", "/defaultPath"]} component={Login} />
			<PublicRoute restricted={true} exact path={["/forgotPassword"]} component={ForgotPassword} />
			<PublicRoute restricted={true} exact path={["/confirmPassword"]} component={ConfirmPassword} />
			<PublicRoute restricted={true} exact path={["/updatePassword"]} component={UpdatePassword} />
			<PublicRoute restricted={true} exact path={["/codeVerification"]} component={CodeVerification} />
			{/* <PublicRoute restricted={true} path='/registration' component={Registration} /> */}
			<Route path='/admin/:path?/:path?/:path?/:path?' exact>
				<MainAdminLayout>
					<Switch>
						<AdminRouteList />
					</Switch>
				</MainAdminLayout>
			</Route>

			<Route render={(props) => <NoMatch {...props} />} />
		</Switch>

	)

}


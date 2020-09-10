import React from "react"
import { Route, Switch } from "react-router-dom"
import { Dashboard } from "../containers/views/Dashboard"
import { UserProfile } from "../containers/views/Users"
import NoMatch from "../components/Common/NoMatch"
import PrivateRoute from "./PrivateRoute";

const routes = [
	{
		path: "/",
		exact: true,
		Component: Dashboard,
	},
	{
		path: "/admin/users/dashboard",
		exact: true,
		Component: Dashboard,
	},
	{
		path: "/admin/users/profile",
		exact: true,
		Component: UserProfile,
	},
	{
		path: "(/admin/users/profile/edit/:catId|/admin/users/profile/edit)",
		exact: true,
		Component: UserProfile,
	}

]

const index = () => (
	<Switch>

		{routes.map(({ path, exact, Component }) => (
			<PrivateRoute path={path} component={Component} key={path} exact={exact} render={(props) => (
				<Component {...props} />
			)} />
		))}
		<Route render={(props) => <NoMatch {...props} />} />
	</Switch>
)


export default index

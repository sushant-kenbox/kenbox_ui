import React from "react"
import { Route, Switch } from "react-router-dom"
import Main from "../components/Home/"
import { UserHome, UserAdd ,UserView } from "./../containers/views/Users/"
import NoMatch from "../components/Common/NoMatch"
import PrivateRoute from "./PrivateRoute";

const routes = [
	{
		path: "/",
		exact: true,
		Component: Main,
	},
	{
		path: "/admin/users/dashboard",
		exact: true,
		Component: Main,
	},
	{
		path: "/admin/users/list",
		exact: true,
		Component: UserHome,
	},
	{
		path: "/admin/users/add",
		exact: true,
		Component: UserAdd,
	},
	{
		path: "/admin/users/view",
		exact: true,
		Component: UserView,
	},
	
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

import React from "react"
import { Route, Switch } from "react-router-dom"
import Main from "../components/Home/"
import UserHome from "./../containers/views/Users/UserHome"
import UserAdd from "./../containers/views/Users/UserAdd"
import NoMatch from "../components/Common/NoMatch"
import PrivateRoute from "./PrivateRoute";

const routes = [
	{
		path: "/",
		exact: true,
		Component: Main,
	},
	{
		path: "/admin/dashboard",
		exact: true,
		Component: Main,
	},
	{
		path: "/admin/userDetails",
		exact: true,
		Component: UserHome,
	},
	{
		path: "/admin/addUser",
		exact: true,
		Component: UserAdd,
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

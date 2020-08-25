import React from "react"
import { Route, Switch } from "react-router-dom"
import Main from "../components/Common/Main"
import UserHome from "../components/Common/UserHome"
import UserAdd from "../components/Common/UserAdd"
import NoMatch from "../components/Common/NoMatch"


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
			<Route path={path} key={path} exact={exact} render={(props) => (
				<Component {...props} />
			)} />
		))}
		 <Route render={(props) => <NoMatch {...props} />} />
	</Switch>
)


export default index

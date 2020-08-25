import React from "react"
import { Route, Switch } from "react-router-dom"
import About from "../containers/views/Main/About"
import NoMatch from "../components/Common/NoMatch"



const routes = [

	{
		path: "/about",
		exact: true,
		Component: About,
	},
	

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

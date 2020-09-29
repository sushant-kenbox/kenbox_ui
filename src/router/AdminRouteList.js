import React from "react"
import { Route, Switch } from "react-router-dom"
import Dashboard  from "../containers/views/Dashboard/Dashboard"
import UserProfile  from "../containers/views/Users/UserProfile"
import OrganizationAnnouncement from "./../containers/views/Users/OrganizationAnnouncement"
import AnnouncementDetails from "../components/Users/AnnouncementDetails.Component"
import AddAnnouncement from "./../containers/views/Users/AddAnnouncement"
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
		path: "/admin/users/profile/edit/:catId",
		exact: true,
		Component: UserProfile,
	},
	{
		path: "/admin/users/organizationAnnouncement",
		exact: true,
		Component: OrganizationAnnouncement,
	},
	{
		path: "/admin/users/announcementDetails",
		exact: true,
		Component: AnnouncementDetails,
	},
	{
		path: "/admin/users/addAnnouncement",
		exact: true,
		Component: AddAnnouncement,
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

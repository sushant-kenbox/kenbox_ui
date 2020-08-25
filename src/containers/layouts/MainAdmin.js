import React from "react";
import Header from "../../components/Common/Header"
import SideBar from "../../components/Common/SideBar"
import Footer from "../../components/Common/Footer"

export default ({ children }) => {



	document.body.classList.remove('bg-dark')

	console.log("render Main Admin")

	return (
		<div>
			<Header />
			<SideBar />
			{children}
			<Footer/>
		</div>
	)
}


import React,{Fragment} from "react";
import Header from "./../../components/Common/Header"
import Footer from "./../../components/Common/Footer"

export default ({ children }) => {



	//document.body.classList.remove('bg-dark')

	console.log("render Main Admin")

	return (
		<Fragment>
			<Header />
			{children}
			<Footer/>
		</Fragment>
	)
}


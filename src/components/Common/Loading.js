import React from "react";

const spinner = {
	position: "absolute",
	height: "50px",
	width: "50px",
	top: "50%",
	left: "50%",
	marginLeft: "-50px",
	marginTop: "50px",
	backgroundSize: "100%",
}
export default () => {
	return <div className="spinner-border text-danger" role="status" style={spinner}>
		<span className="sr-only">Loading...</span>
	</div>
}

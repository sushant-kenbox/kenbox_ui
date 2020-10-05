import React from "react";
import Routers from "./router/router";
import NetworkDetector from "./components/Common/NetworkDetector"
import ErrorBoundary from "./components/Common/ErrorBoundary"
function App() {
	return (
		<ErrorBoundary>
			<Routers />
		</ErrorBoundary>
	);
}

export default NetworkDetector(App);

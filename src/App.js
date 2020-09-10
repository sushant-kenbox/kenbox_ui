import React from "react";
import Routers from "./router/router";
import ErrorBoundary from "./components/Common/ErrorBoundary"
function App() {
	return (
		<ErrorBoundary>
			<Routers />
		</ErrorBoundary>
	);
}

export default App;

import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/style.css"
import "./assets/css/responsive.css"
import 'font-awesome/css/font-awesome.min.css';

//import 'lib/gritter/css/jquery.gritter.css'

import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(

	<Provider store={store}>
		<StrictMode>
			<Router>
				<App />
			</Router>
		</StrictMode>
	</Provider>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

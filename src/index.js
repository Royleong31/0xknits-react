import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import WalletProvider from "./store/WalletProvider";
import { NavbarProvider } from "./store/navbarContext";

import "./index.scss";
import App from "./App";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<NavbarProvider>
				<WalletProvider>
					<App />
				</WalletProvider>
			</NavbarProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);

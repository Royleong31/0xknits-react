import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import WalletProvider from "./store/WalletProvider";
import { NavbarProvider } from "./store/navbarContext";
import ScrollToTop from "./helpers/ScrollToTop";

import "./index.scss";
import App from "./App";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<ScrollToTop>
				<NavbarProvider>
					<WalletProvider>
						<App />
					</WalletProvider>
				</NavbarProvider>
			</ScrollToTop>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);

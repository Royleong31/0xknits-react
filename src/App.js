import { Route, Switch, Redirect } from "react-router-dom";

import FAQ from "./components/pages/FAQ/FAQ";
import Home from "./components/pages/Home/Home";

// TODO: Routing between different pages
export default function App() {
	// TODO: Fallback
	return (
		<Switch>
			<Route path="/" exact>
				<Home />
			</Route>

			<Route path="/faq">
				<FAQ />
			</Route>

			<Route path="*">
				<Home />
			</Route>
		</Switch>
	);
}

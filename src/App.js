import { Route, Switch, Redirect } from "react-router-dom";

import FAQ from "./components/pages/FAQ/FAQ";
import Home from "./components/pages/Home/Home";
import CheckoutPending from "./components/pages/Checkout/CheckoutPending";
import CheckoutSuccess from "./components/pages/Checkout/CheckoutSuccess";
import Shipping from "./components/pages/Redeem/Shipping";
import Orders from "./components/pages/Orders/Orders";

// TODO: Routing between different pages
export default function App() {
	// TODO: Fallback
	return (
		<Switch>
			<Route path="/" exact>
				<Home />
			</Route>

			<Route path="/faq" exact>
				<FAQ />
			</Route>

			<Route path="/checkout" exact>
				<CheckoutPending />
			</Route>

			<Route path="/checkout/success" exact>
				<CheckoutSuccess />
			</Route>

			<Route path="/orders" exact>
				<Orders />
			</Route>

			<Route path="/redeem" exact>
				<Shipping />
			</Route>

			<Route path="*">
				<Home />
			</Route>
		</Switch>
	);
}

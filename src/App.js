import { useContext } from "react";

import { Route, Switch, Redirect } from "react-router-dom";

import WalletContext, { Connection } from "./store/wallet-context";
import NavbarContext from "./store/navbarContext";

import FAQ from "./components/pages/FAQ/FAQ";
import Home from "./components/pages/Home/Home";
import CheckoutPending from "./components/pages/Checkout/CheckoutPending";
import CheckoutSuccess from "./components/pages/Checkout/CheckoutSuccess";
import Shipping from "./components/pages/Redeem/Shipping";
import Orders from "./components/pages/Orders/Orders";
import OrderDetails from "./components/pages/Redeem/OrderDetails";
import Modal from "./components/UI/Modals/Modal";
import NavbarModal from "./components/UI/Modals/NavbarModal";

export default function App() {
	const walletCtx = useContext(WalletContext);
	const navbarCtx = useContext(NavbarContext);

	// TODO: Fallback
	return (
		<>
			<Modal
				isModalOpen={walletCtx.connectionStatus === Connection.connecting}
				cancelHandler={() => walletCtx.disconnectWallet()}
				successHandler={() => walletCtx.connectedWallet()}
			/>

			{navbarCtx.navbarOpen && <NavbarModal />}

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

				<Route path="/order-details/:orderId">
					<OrderDetails />
				</Route>

				<Route path="*">
					<Home />
				</Route>
			</Switch>
		</>
	);
}

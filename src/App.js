import { useContext } from "react";

import { Route, Switch, Redirect } from "react-router-dom";
import useWindowDimensions from "./hooks/useWindowDimensions";

import WalletContext, { Connection } from "./store/wallet-context";
import NavbarContext from "./store/navbarContext";

import FAQ from "./components/pages/FAQ/FAQ";
import Home from "./components/pages/Home/Home";
import CheckoutPending from "./components/pages/Checkout/CheckoutPending";
import CheckoutSuccess from "./components/pages/Checkout/CheckoutSuccess";
import Shipping, { MobileShipping } from "./components/pages/Redeem/Shipping";
import OrderDetails, { MobileOrderDetails } from "./components/pages/Redeem/OrderDetails";
import Orders from "./components/pages/Orders/Orders";
import Modal from "./components/UI/Modals/Modal";
import NavbarModal from "./components/UI/Modals/NavbarModal";

export default function App() {
	const walletCtx = useContext(WalletContext);
	const navbarCtx = useContext(NavbarContext);
	const { isMobileSized } = useWindowDimensions();

	// TODO: Fallback
	return (
		<>
			<Modal
				isModalOpen={walletCtx.connectionStatus === Connection.connecting}
				cancelHandler={() => walletCtx.disconnectWallet()}
				successHandler={() => walletCtx.connectedWallet()}
			/>

		<NavbarModal isModalOpen={navbarCtx.navbarOpen} />

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
					{isMobileSized ? <MobileShipping /> : <Shipping />}
				</Route>

				<Route path="/order-details/:orderId">
					{isMobileSized ? <MobileOrderDetails /> : <OrderDetails />}
				</Route>

				<Route path="*">
					<Home />
				</Route>
			</Switch>
		</>
	);
}

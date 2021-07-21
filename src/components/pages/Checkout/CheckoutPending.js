import { useContext } from "react";

import { useHistory } from "react-router-dom";
import WalletContext, { Connection } from "../../../store/wallet-context";

import CheckoutCard from "../../UI/Cards/CheckoutCard";
import Button from "../../UI/Buttons/Button";
import img from "../../../img/dany-front.png";

import "./Checkout.scss";

const cardDetails = { img, name: "0xDaenerys", pool: 20, initial: 49, priceInEth: 20 };

export default function ConnectWallet() {
	const history = useHistory();
	// ?: Wallet connection status is stored globally as the user can edit it from the nav as well as here
	const walletCtx = useContext(WalletContext);
	const connectionStatus = walletCtx.connectionStatus;

	const walletBtn =
		walletCtx.connectionStatus === Connection.notConnected ? (
			<Button className="checkout-pending__btn" tertiary onClick={() => walletCtx.connectingWallet()}>
				{connectionStatus === Connection.notConnected && "Connect wallet"}
			</Button>
		) : (
			<Button className="checkout-pending__btn" onClick={() => history.push("/checkout/success")}>
				Buy
			</Button>
		);

	// TODO: Closing the modal may not mean that it is connected as the request may have been rejected. Can store the state of whether the user is connected in local storage or something
	return (
		<section className="checkout-pending">
			<CheckoutCard {...cardDetails} className="checkout-pending__card" />
			{walletBtn}
		</section>
	);
}

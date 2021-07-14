import { useState } from "react";
import { useHistory } from "react-router-dom";

import CheckoutCard from "../../UI/Cards/CheckoutCard";
import Modal from "../../UI/Modals/Modal";
import Button from "../../UI/Buttons/Button";
import img from "../../../img/dany-front.png";

import "./Checkout.scss";

const cardDetails = { img, name: "0xDaenerys", pool: 20, initial: 49, priceInEth: 20 };

const Connection = { connected: 2, connecting: 1, notConnected: 0 };

export default function ConnectWallet() {
	const [walletStatus, setWalletStatus] = useState(Connection.notConnected);
	const history = useHistory();

	const connectWalletHandler = () => {
		console.log("connecting wallet");
		if (walletStatus === Connection.notConnected) setWalletStatus(Connection.connecting);
		else if (walletStatus === Connection.connected) history.push("/checkout/success");
	};

	// TODO: Closing the modal may not mean that it is connected as the request may have been rejected.
	return (
		<section className="checkout-pending">
			<Modal
				isModalOpen={walletStatus === Connection.connecting}
				cancelHandler={() => setWalletStatus(Connection.notConnected)}
				successHandler={() => {
					console.log("inside success handler");
					setWalletStatus(Connection.connected);
				}}
			/>

			<CheckoutCard {...cardDetails} className="checkout-pending__card" />
			<Button
				className="checkout-pending__btn"
				tertiary={walletStatus === Connection.notConnected}
				onClick={connectWalletHandler}
			>
				{walletStatus === Connection.notConnected && "Connect wallet"}
				{walletStatus === Connection.connecting && "Buy"}
				{walletStatus === Connection.connected && "Buy"}
			</Button>
		</section>
	);
}

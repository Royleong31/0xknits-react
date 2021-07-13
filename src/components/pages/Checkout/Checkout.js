import { useState } from "react";

import CheckoutCard from "../../UI/Cards/CheckoutCard";
import Modal from "../../UI/Modals/Modal";
import Button from "../../UI/Buttons/Button";
import img from "../../../img/dany-front.png";

import "./Checkout.scss";

const cardDetails = { img, name: "0xDaenerys", pool: 20, initial: 49, priceInEth: 20 };

const Connection = { connected: 2, connecting: 1, notConnected: 0 };

export default function ConnectWallet() {
	const [walletStatus, setWalletStatus] = useState(Connection.notConnected);

	const connectWalletHandler = () => {
		console.log("connecting wallet");
		if (walletStatus === Connection.notConnected) setWalletStatus(Connection.connecting);
		else if (walletStatus === Connection.connecting) setWalletStatus(Connection.connected);
	};

	// TODO: Closing the modal may not mean that it is connected as the request may have been rejected.
	return (
		<section className="checkout">
			<Modal
				isModalOpen={walletStatus === Connection.connecting}
				closeModalHandler={() => setWalletStatus(Connection.connected)}
			/>

			<CheckoutCard {...cardDetails} className="checkout__card" />
			<Button
				className="checkout__btn"
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

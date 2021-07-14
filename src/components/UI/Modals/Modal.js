import { useState } from "react";
import ReactDOM from "react-dom";

import styles from "./Modal.module.scss";
import CSSTransition from "react-transition-group/CSSTransition";

import Button from "../../UI/Buttons/Button";
import { KnitCardBack } from "../Cards/KnitCard";
import MetamaskLogo from "../../../icons/Payment/Metamask";
import TrustWalletLogo from "../../../icons/Payment/TrustWallet";
import CoinbaseLogo from "../../../icons/Payment/Coinbase";
import CloseIcon from "../../../icons/Buttons/Close";

const dummyKnit = {
	name: "0xDaenerys",
	initial: 20,
	redeemed: 2,
	pool: 18,
	priceInEth: 30,
	height: 20,
	weight: 100,
	width: 5,
	material: "Wool",
};

export default function Modal({ isModalOpen, cancelHandler, successHandler, connectWallet = true }) {
	// ?: If connectwallet == true, then show the connect wallet modal. Otherwise, show the order details
	const [isHovered, setIsHovered] = useState(false);

	const modal = (
		<CSSTransition
			mountOnEnter
			unmountOnExit
			in={isModalOpen}
			timeout={300}
			classNames={{
				enter: styles["modalAnimation-enter"],
				enterActive: styles["modalAnimation-enter-active"],
				exit: styles["modalAnimation-exit"],
				exitActive: styles["modalAnimation-exit-active"],
			}}
		>
			<div className={styles["modal__container"]}>
				<div className={styles["modal__overlay"]} onClick={cancelHandler} />

				{connectWallet ? (
					<aside className={`${styles["modal"]} ${styles["modal--wallet"]}`}>
						<div className={styles["modal__header"]}>
							<h5 className={styles["modal__header-text"]}>Connect Wallet</h5>
							<CloseIcon
								className={styles["modal__close-icon"]}
								onClick={cancelHandler}
								onMouseEnter={() => setIsHovered(true)}
								onMouseLeave={() => setIsHovered(false)}
								hover={isHovered}
							/>
						</div>

						<Button onClick={successHandler} className={styles["modal__btn"]} tertiary>
							<p className={styles["modal__btn-text"]}>Metamask</p>
							<MetamaskLogo className={styles["modal__payment-icon"]} />
						</Button>

						<Button onClick={successHandler} className={styles["modal__btn"]} tertiary>
							<p className={styles["modal__btn-text"]}>Trust Wallet</p>
							<TrustWalletLogo className={styles["modal__payment-icon"]} />
						</Button>

						<Button onClick={successHandler} className={styles["modal__btn"]} tertiary>
							<p className={styles["modal__btn-text"]}>Coinbase</p>
							<CoinbaseLogo className={styles["modal__payment-icon"]} />
						</Button>
					</aside>
				) : (
					<aside className={styles["modal"]}>
						<KnitCardBack standAloneCard={true} {...dummyKnit} />
					</aside>
				)}
			</div>
		</CSSTransition>
	);

	const portalElement = document.getElementById("overlays");

	// ?: Create a portal to the overlays div in index.html to ensure that the modal is over everything else
	return <>{ReactDOM.createPortal(modal, portalElement)}</>;
}

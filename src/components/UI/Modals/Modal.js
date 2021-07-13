import { useState } from "react";

import styles from "./Modal.module.scss";
import CSSTransition from "react-transition-group/CSSTransition";

import Button from "../../UI/Buttons/Button";
import MetamaskLogo from "../../../icons/Payment/Metamask";
import TrustWalletLogo from "../../../icons/Payment/TrustWallet";
import CoinbaseLogo from "../../../icons/Payment/Coinbase";
import CloseIcon from "../../../icons/Buttons/Close";

export default function Modal({ isModalOpen, closeModalHandler }) {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div className={styles["modal"]}>
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
				<div className={styles["modal--overlay"]} onClick={closeModalHandler}>
					<aside className={styles["modal"]}>
						<div className={styles["modal__header"]}>
							<h5 className={styles["modal__header-text"]}>Connect Wallet</h5>
							<CloseIcon
								className={styles["modal__close-icon"]}
								onClick={closeModalHandler}
								onMouseEnter={() => setIsHovered(true)}
								onMouseLeave={() => setIsHovered(false)}
								hover={isHovered}
							/>
						</div>

						<Button className={styles["modal__btn"]} tertiary>
							<p className={styles["modal__btn-text"]}>Metamask</p>
							<MetamaskLogo className={styles["modal__payment-icon"]} />
						</Button>

						<Button className={styles["modal__btn"]} tertiary>
							<p className={styles["modal__btn-text"]}>Trust Wallet</p>
							<TrustWalletLogo className={styles["modal__payment-icon"]} />
						</Button>

						<Button className={styles["modal__btn"]} tertiary>
							<p className={styles["modal__btn-text"]}>Coinbase</p>
							<CoinbaseLogo className={styles["modal__payment-icon"]} />
						</Button>
					</aside>
				</div>
			</CSSTransition>
		</div>
	);
}

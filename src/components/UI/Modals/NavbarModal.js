import { useContext, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";

import WalletContext from "../../../store/wallet-context";
import NavbarContext from "../../../store/navbarContext";

import Logo from "../../../icons/Logo";

import CloseIcon from "../../../icons/Buttons/Close";
import styles from "./NavbarModal.module.scss";
import Button from "../../UI/Buttons/Button";

export default function NavbarModal() {
	const history = useHistory();
	const { connectingWallet } = useContext(WalletContext);
	const { closeNavbar } = useContext(NavbarContext);

	useEffect(() => {
		function disableScroll() {
			document.body.classList.add("stop-scrolling");
		}

		function enableScroll() {
			document.body.classList.remove("stop-scrolling");
		}

		disableScroll();

		return enableScroll;
	}, []);

	const connectWalletHandler = () => {
		closeNavbar();
		connectingWallet();
	};

	const ordersHandler = () => {
		closeNavbar();
		history.push("/orders");
	};

	const goHomeHandler = () => {
		closeNavbar();
		history.push("/");
	};

	// TODO: Fix the alignment of the navbar of the navbarModal, landing page and navbar

	return (
		<aside className={styles["modal"]}>
			<div className={styles["modal__nav-container"]}>
				<Logo isNavLogo className={styles["modal__nav-logo"]} onClick={goHomeHandler} />
				<CloseIcon isNavLogo className={styles["modal__nav-close"]} onClick={closeNavbar} />
			</div>

			<div className={styles["modal__btn-container"]}>
				<Button
					navbar
					fullWidth
					className={styles["navbar__connect-btn"]}
					onClick={connectWalletHandler}
				>
					Connect Wallet
				</Button>

				<Button
					fullWidth
					tertiary
					navbar
					className={styles["navbar__knits-btn"]}
					onClick={ordersHandler}
				>
					0 Knits
				</Button>
			</div>
		</aside>
	);
}

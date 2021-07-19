import { useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import CSSTransition from "react-transition-group/CSSTransition";
import ReactDOM from "react-dom";

import WalletContext from "../../../store/wallet-context";
import NavbarContext from "../../../store/navbarContext";

import Logo from "../../../icons/Logo";

import CloseIcon from "../../../icons/Buttons/Close";
import styles from "./NavbarModal.module.scss";
import Button from "../../UI/Buttons/Button";

export default function NavbarModal({ isModalOpen }) {
	const history = useHistory();
	const { connectingWallet } = useContext(WalletContext);
	const { closeNavbar } = useContext(NavbarContext);

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

	const modal = (
		<CSSTransition
			mountOnEnter
			unmountOnExit
			in={isModalOpen}
			timeout={400}
			classNames={{
				enter: styles["modalAnimation-enter"],
				enterActive: styles["modalAnimation-enter-active"],
				exit: styles["modalAnimation-exit"],
				exitActive: styles["modalAnimation-exit-active"],
			}}
		>
			<aside className={styles["modal"]}>
				<div className={styles["modal__nav-container"]}>
					<Logo small isNavLogo className={styles["modal__nav-logo"]} onClick={goHomeHandler} />
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
		</CSSTransition>
	);

	const portalElement = document.getElementById("overlays");

	// ?: Create a portal to the overlays div in index.html to ensure that the modal is over everything else
	return <>{ReactDOM.createPortal(modal, portalElement)}</>;

	// TODO: Fix the alignment of the navbar of the navbarModal, landing page and navbar
}

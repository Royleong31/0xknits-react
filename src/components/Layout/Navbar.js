import { useHistory, Link } from "react-router-dom";
import { useContext } from "react";
import WalletContext from "../../store/wallet-context";

import Logo from "../../icons/Logo";
import Button from "../UI/Buttons/Button";

import "./Layout.scss";

export default function Navbar() {
	const history = useHistory();
	const walletCtx = useContext(WalletContext);

	return (
		<nav className="navbar">
			<div className="navbar__container">
				<Link className="navbar__nav-logo" to="/">
					<Logo className="navbar__nav-logo" />
				</Link>

				<Button navbar className="navbar__connect-btn" onClick={() => walletCtx.connectingWallet()}>
					Connect Wallet
				</Button>

				<Button tertiary navbar className="navbar__knits-btn" onClick={() => history.push("/orders")}>
					0 Knits
				</Button>
			</div>
		</nav>
	);
}

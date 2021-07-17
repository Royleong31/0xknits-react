import { useHistory, Link } from "react-router-dom";
import { useContext } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import WalletContext from "../../store/wallet-context";

import Logo from "../../icons/Logo";
import Button from "../UI/Buttons/Button";

import "./Layout.scss";

export default function Navbar() {
	const history = useHistory();
	const { isMobileSized } = useWindowDimensions();
	const walletCtx = useContext(WalletContext);

	// TODO: Change to phone sized only
	if (isMobileSized)
		return (
			<nav className="navbar">
				<div className="navbar__container--mobile">
					<Link className="navbar__nav-logo--mobile" to="/">
						<Logo className="navbar__nav-logo--mobile" />
					</Link>

					<div className="navbar__nav-btn--mobile">
						<span />
					</div>
				</div>
			</nav>
		);

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

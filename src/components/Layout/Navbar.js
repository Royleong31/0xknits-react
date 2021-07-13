import { Link } from "react-router-dom";

import Logo from "../../icons/Logo";
import Button from "../UI/Buttons/Button";

import "./Layout.scss";

export default function Navbar() {
	return (
		<nav className="navbar">
			<div className="navbar__container">
				<Link className="navbar__nav-logo" to="/">
					<Logo className="navbar__nav-logo" />
				</Link>

				<Button navbar className="navbar__connect-btn">
					Connect Wallet
				</Button>

				<Button tertiary navbar className="navbar__knits-btn">
					0 Knits
				</Button>
			</div>
		</nav>
	);
}

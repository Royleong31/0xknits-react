import { useContext } from "react";
import WalletContext from "../../../store/wallet-context";
import { useHistory } from "react-router-dom";
import LandingImage from "../../../icons/LandingImage";

import Button from "../../UI/Buttons/Button";
import Logo from "../../../icons/Logo";

export default function Landing() {
	const walletCtx = useContext(WalletContext);
	const history = useHistory();

	return (
		<section className="landing">
			<div className="landing__container">
				<div className="landing__nav-container">
					{/* <div className="landing__nav-logo">
						<Logo className="landing__nav-logo" />
					</div> */}

					<Button
						navbar
						className="landing__connect-btn"
						onClick={() => walletCtx.connectingWallet()}
					>
						Connect Wallet
					</Button>
					<Button
						tertiary
						navbar
						className="landing__knits-btn"
						onClick={() => history.push("/orders")}
					>
						0 Knits
					</Button>
				</div>

				<div className="landing__main-logo">
					<Logo width={"275"} />
				</div>

				<h1 className="landing__main">Knits of Crypto Founders</h1>
				<p className="landing__sub">Trade handmade, limited edition dolls</p>
			</div>
		</section>
	);
}

export function MobileLanding() {
	return (
		<section className="landing">
			<div className="landing__container--mobile">
				<div className="landing__nav-container--mobile">
					<Logo className="landing__nav-logo--mobile" />

					<div className="landing__nav-btn--mobile">
						<span />
					</div>
				</div>

				<div className="landing__content--mobile">
					<LandingImage className="landing__img--mobile" />

					<h1 className="landing__main--mobile">Knits of Crypto Founders</h1>
					<p className="landing__sub--mobile">Trade handmade, limited edition dolls</p>
				</div>
			</div>
		</section>
	);
}

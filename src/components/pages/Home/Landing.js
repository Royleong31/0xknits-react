import Button from "../../UI/Buttons/Button";
import Logo from "../../../icons/Logo";

export default function Landing() {
	return (
		<section className="landing">
			<div className="landing__container">
				<div className="landing__nav-container">
					{/* <div className="landing__nav-logo">
						<Logo className="landing__nav-logo" />
					</div> */}

					<Button navbar className="landing__connect-btn">
						Connect Wallet
					</Button>
					<Button tertiary navbar className="landing__knits-btn">
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

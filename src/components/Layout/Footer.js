import Logo from "../../icons/Logo";
import InstagramIcon from "../../icons/Buttons/Instagram";
import TwitterIcon from "../../icons/Buttons/Twitter";

export default function Footer() {
	return (
		<footer className="footer">
			<div className="footer__container">
				<Logo className="footer__logo" />
				<h4 className="footer__about">About this project</h4>
				<p className="footer__content">
					A collaborative project between HedgedHog and Bernie. One individual completely immersed
					in the 0x world and another individual just interested in knitting. Intricate Washlet
					boulevard Gaggenau Ettinger, efficient tote bag the best Winkreative iconic bureaux
					liveable Asia-Pacific alluring Porter.
				</p>
				<p className="footer__content">
					Airbus A380 concierge impeccable Melbourne Toto izakaya St Moritz bespoke alluring lovely.
					Handsome Marylebone Swiss Singapore. Soft power intricate bureaux classic. Swiss pintxos
					carefully curated boulevard quality of life. Artisanal Toto St Moritz, Swiss tote bag
					K-pop exquisite iconic Singapore.
				</p>
				<h4 className="footer__faq">FAQ</h4>
				<div className="footer__icon-container">
					<TwitterIcon className="footer__icon" />
					<InstagramIcon className="footer__icon" />
				</div>
			</div>
		</footer>
	);
}

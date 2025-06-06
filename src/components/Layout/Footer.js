import { useState } from "react";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";

import "./Layout.scss";
import Logo from "../../icons/Logo";
import InstagramIcon from "../../icons/Buttons/Instagram";
import TwitterIcon from "../../icons/Buttons/Twitter";

export default function Footer() {
	// ?: As the hover icons and the non hovered icons are different, i used useState to manage the hover state of the icons. onMouseEnter => hover = true, onMouseLeave => hover = false
	const [isTwitterHovered, setIsTwitterHovered] = useState(false);
	const [isInstagramHovered, setIsInstagramHovered] = useState(false);

	return (
		<footer className="footer">
			<div className="footer__container">
				<Logo className="footer__logo" />
				<h4 className="footer__heading">About this project</h4>
				<p className="footer__content footer__content--1">
					A collaborative project between HedgedHog and Bernie. One individual completely immersed
					in the 0x world and another individual just interested in knitting. Intricate Washlet
					boulevard Gaggenau Ettinger, efficient tote bag the best Winkreative iconic bureaux
					liveable Asia-Pacific alluring Porter.
				</p>
				<p className="footer__content footer__content--2">
					Airbus A380 concierge impeccable Melbourne Toto izakaya St Moritz bespoke alluring lovely.
					Handsome Marylebone Swiss Singapore. Soft power intricate bureaux classic. Swiss pintxos
					carefully curated boulevard quality of life. Artisanal Toto St Moritz, Swiss tote bag
					K-pop exquisite iconic Singapore.
				</p>

					<Link className="footer__faq" to="/faq">
						<h4 className="footer__heading">FAQ</h4>
					</Link>

				<div className="footer__icon-container">
					<a href="https://twitter.com/0xknits?lang=en">
						<TwitterIcon
							hover={isTwitterHovered}
							onMouseEnter={isMobile ? () => {} : () => setIsTwitterHovered(true)}
							onMouseLeave={isMobile ? () => {} : () => setIsTwitterHovered(false)}
							className="footer__icon"
						/>
					</a>
					<a href="https://www.instagram.com/">
						<InstagramIcon
							hover={isInstagramHovered}
							onMouseEnter={isMobile ? () => {} : () => setIsInstagramHovered(true)}
							onMouseLeave={isMobile ? () => {} : () => setIsInstagramHovered(false)}
							className="footer__icon footer__icon--2"
						/>
					</a>
				</div>
			</div>
		</footer>
	);
}

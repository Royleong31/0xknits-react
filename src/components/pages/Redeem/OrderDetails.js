import { useState } from "react";
import { useHistory } from "react-router-dom";
import { isMobile } from "react-device-detect";


import "./Redeem.scss";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Buttons/Button";
import RedeemCard from "../../UI/Cards/RedeemCard";
import img from "../../../img/dany-front.png";
import CloseIcon from "../../../icons/Buttons/Close";

const dummyRedeemArr = [
	{
		img,
		name: "0xDaenerys",
		serial: "987676",
		quantity: "1",
	},
	{
		img,
		name: "0xDaenerys",
		quantity: "1",
		hash: "0x129890989E12av81280av8F19fdeD89199205",
		NFT: true,
	},
];

export default function OrderDetails() {
	const [closeBtnHovered, setCloseBtnHovered] = useState(false);
	const history = useHistory();

	return (
		<section className="shipping">
			<div className="shipping__card shipping__card--order">
				<div className="shipping__details shipping__details--order">
					<h3>Order details</h3>
					<div className="order__sub">
						<p className="order__num">Order #23456</p>
						<span className="order__divider" />
						<p className="order__date">13 June 2021</p>
					</div>

					<hr className="shipping__divider" />

					<h3 className="order__heading">Your order is confirmed!</h3>
					<div className="order__tracking-container">
						<p className="order__tracking-title">Order tracking number:</p>
						<p className="order__tracking__num">DHL 123999102039</p>
					</div>

					<hr className="shipping__divider" />

					<h4 className="order__heading order__heading--1">Shipping information</h4>
					<h6 className="shipping__title">Ship to</h6>
					<p className="shipping__content">Sheldon Cooper</p>
					<p className="shipping__content">
						2311 North Los Robles Avenue, Pasadena, California, United States 91001
					</p>
					<h6 className="shipping__title">Email</h6>
					<p className="shipping__content">sheldoncooper@gmail.com</p>
					<h6 className="shipping__title">Mobile</h6>
					<p className="shipping__content">9123 4879</p>

					<Button
						small
						secondary
						className="shipping__next-btn order__btn"
						onClick={() => history.push("/orders")}
					>
						View All Orders
					</Button>
				</div>

				<div className="shipping__order-summary">
					<div className="shipping__order-header">
						<h5>Order summary</h5>
						<CloseIcon
							className="shipping__close"
							onClick={() => history.push("/orders")}
							hover={closeBtnHovered}
							onMouseEnter={isMobile ? () => {} : () => setCloseBtnHovered(true)}
							onMouseLeave={isMobile ? () => {} : () => setCloseBtnHovered(false)}
						/>
					</div>
					{dummyRedeemArr.map((item, i) => (
						<RedeemCard key={i} {...item} />
					))}
				</div>

				<div className="shipping__price">
					<p className="shipping__label">Shipping</p>
					<p className="shipping__amt">FREE</p>
				</div>
			</div>
		</section>
	);
}

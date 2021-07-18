import { useState, useRef } from "react";
import { useHistory } from "react-router-dom";

import { isMobile } from "react-device-detect";
import "./Redeem.scss";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Buttons/Button";
import RedeemCard from "../../UI/Cards/RedeemCard";
import img from "../../../img/dany-front.png";
import CloseIcon from "../../../icons/Buttons/Close";
import Chevron from "../../../icons/Chevron";
import Logo from "../../../icons/Logo";

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

export default function Shipping() {
	const history = useHistory();
	const [closeBtnHovered, setCloseBtnHovered] = useState(false);
	const [enteringDetails, setEnteringDetails] = useState(true);

	const backHandler = () => history.goBack();

	const shippingDetails = enteringDetails ? (
		<div className="shipping__details">
			<h3>Shipping details</h3>

			<Input name="First name" className="shipping__first-name" />
			<Input name="Last name" className="shipping__last-name" />
			<Input name="Address Line" className="shipping__address" />
			<Input name="City" className="shipping__city" />
			<Input name="State" className="shipping__state" />
			<Input name="Zip code" type="number" className="shipping__zip" />
			<Input name="Country/Region" className="shipping__country" />

			<h4>Contact information</h4>
			<Input name="Email Address" className="shipping__email" />
			<Input name="Mobile Number (optional)" className="shipping__mobile" />

			<p className="shipping__cancel" onClick={backHandler}>
				Cancel
			</p>
			<Button small secondary className="shipping__next-btn" onClick={() => setEnteringDetails(false)}>
				Next
			</Button>
		</div>
	) : (
		<div className="shipping__details shipping__details--2">
			<h3>Shipping details</h3>
			<h6 className="shipping__title">Ship to</h6>
			<p className="shipping__content">Sheldon Cooper</p>
			<p className="shipping__content">
				2311 North Los Robles Avenue, Pasadena, California, United States 91001
			</p>
			<p className="shipping__edit" onClick={() => setEnteringDetails(true)}>
				Edit
			</p>
			<hr className="shipping__divider" />
			<h6 className="shipping__title">Email</h6>
			<p className="shipping__content">sheldoncooper@gmail.com</p>
			<h6 className="shipping__title">Mobile</h6>
			<p className="shipping__content">9123 4879</p>

			<div className="shipping__bottom-container">
				<p className="shipping__cancel" onClick={backHandler}>
					Back
				</p>
				<Button
					small
					className="shipping__next-btn"
					onClick={() => history.push("/order-details/abcdefg12345")}
				>
					Place Order
				</Button>
			</div>
		</div>
	);

	return (
		<section className="shipping">
			<div className="shipping__card">
				{shippingDetails}
				<div className="shipping__order-summary">
					<div className="shipping__order-header">
						<h5>Order summary</h5>
						<CloseIcon
							className="shipping__close"
							onClick={backHandler}
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

export function MobileShipping() {
	const history = useHistory();
	const [enteringDetails, setEnteringDetails] = useState(false);
	const dropdownBodyRef = useRef();
	const chevronRef = useRef();

	const clickHandler = () => {
		// ?: Toggle active states to control whether the accordion is open or closed
		dropdownBodyRef.current.classList.toggle("active");
		chevronRef.current.classList.toggle("active");
	};

	const backHandler = () => history.goBack();

	const shippingDetails = enteringDetails ? (
		<div className="shipping__details--mobile">
			<h4>Shipping Details</h4>
			<Input name="First name" className="shipping__first-name--mobile" />
			<Input name="Last name" className="shipping__last-name--mobile" />
			<Input name="Address Line" className="shipping__address--mobile" />
			<Input name="City" className="shipping__city--mobile" />
			<Input name="State" className="shipping__state--mobile" />
			<Input name="Zip code" type="number" className="shipping__zip--mobile" />
			<Input name="Country/Region" className="shipping__country--mobile" />

			<h5>Contact Information</h5>
			<Input name="Email Address" className="shipping__email" />
			<Input name="Mobile Number (optional)" className="shipping__mobile" />
			<Button
				small
				secondary
				className="shipping__next-btn--mobile"
				onClick={() => setEnteringDetails(false)}
			>
				Next
			</Button>
			<p className="shipping__cancel--mobile" onClick={backHandler}>
				Cancel
			</p>
		</div>
	) : (
		<div className="shipping__details--mobile shipping__details--mobile-2">
			<h4>Shipping Details</h4>

			<div className="shipping__title-container">
				<h6 className="shipping__title">Ship to</h6>
				<p className="shipping__edit" onClick={() => setEnteringDetails(true)}>
					Edit
				</p>
			</div>

			<p className="shipping__content">Sheldon Cooper</p>
			<p className="shipping__content">
				2311 North Los Robles Avenue, Pasadena, California, United States 91001
			</p>

			<hr className="shipping__divider" />
			<h6 className="shipping__title">Email</h6>
			<p className="shipping__content">sheldoncooper@gmail.com</p>
			<h6 className="shipping__title">Mobile</h6>
			<p className="shipping__content">9123 4879</p>

			<div className="shipping__bottom-container">
				<Button
					small
					className="shipping__next-btn"
					onClick={() => history.push("/order-details/abcdefg12345")}
				>
					Place Order
				</Button>
				<p className="shipping__cancel" onClick={backHandler}>
					Back
				</p>
			</div>
		</div>
	);

	return (
		<section className="shipping--mobile">
			<Logo small className="shipping__logo" onClick={() => history.push("/")} />
			<div className="shipping__dropdown">
				<div className="shipping__dropdown-header" onClick={clickHandler}>
					<h4>Order Summary</h4>
					<Chevron className="shipping__chevron" reference={chevronRef} />
				</div>

				<div className="shipping__dropdown-body" ref={dropdownBodyRef}>
					{dummyRedeemArr.map((item, i) => (
						<RedeemCard mobile key={i} {...item} />
					))}

					<div className="shipping__price--mobile">
						<p className="shipping__label--mobile">Shipping</p>
						<p className="shipping__amt--mobile">FREE</p>
					</div>
				</div>
			</div>

			{shippingDetails}
		</section>
	);
}

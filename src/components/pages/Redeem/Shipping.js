import { useState } from "react";
import { useHistory } from "react-router-dom";

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

export default function Shipping() {
	const history = useHistory();
	const [closeBtnHovered, setCloseBtnHovered] = useState(false);

	const backHandler = () => history.goBack();

	return (
		<section className="shipping">
			<div className="shipping__card">
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
					<Input name="Mobile Number(optional)" className="shipping__mobile" />

					<p className="shipping__cancel" onClick={backHandler}>
						Cancel
					</p>
					<Button small secondary className="shipping__next-btn">
						Next
					</Button>
				</div>

				<div className="shipping__order-summary">
					<div className="shipping__order-header">
						<h5>Order summary</h5>
						<CloseIcon
							className="shipping__close"
							onClick={backHandler}
							hover={closeBtnHovered}
							onMouseEnter={() => setCloseBtnHovered(true)}
							onMouseLeave={() => setCloseBtnHovered(false)}
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

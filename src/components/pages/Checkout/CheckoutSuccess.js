import { useHistory } from "react-router-dom";

import "./Checkout.scss";
import Button from "../../UI/Buttons/Button";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

import knitImg from "../../../img/dany-front.png";
import SuccessIcon1 from "../../../icons/Display/SuccessIcon1";
import SuccessIcon2 from "../../../icons/Display/SuccessIcon2";
import SuccessIcon3 from "../../../icons/Display/SuccessIcon3";

export default function CheckoutSuccess() {
	const history = useHistory();
	const { isMobileSized } = useWindowDimensions();
	// ?: Only display the success icons if the screen is large enough, otherwise, it will overflow

	return (
		<section className="checkout-success">
			<div className="checkout-success__card">
				{!isMobileSized && (
					<>
						<SuccessIcon1 className="checkout-success__logo checkout-success__logo--1" />
						<SuccessIcon2 className="checkout-success__logo checkout-success__logo--2" />
						<SuccessIcon3 className="checkout-success__logo checkout-success__logo--3" />
					</>
				)}

				<div className="checkout-success__img-container">
					<img src={knitImg} alt="Image of knit" className="checkout-success__img" />
				</div>

				<h3 className="checkout-success__heading">Hooray!</h3>
				<p className="checkout-success__text">You're now the proud owner of 0xJonSnow!</p>

				<Button
					small
					className="checkout-success__btn"
					onClick={() => history.push("/order-details/abcde")}
				>
					See Order
				</Button>
				<Button
					onClick={() => history.push("/redeem")}
					small
					className="checkout-success__btn"
					secondary
				>
					Redeem
				</Button>
			</div>
		</section>
	);
}

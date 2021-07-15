import { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import styles from "./CheckoutCard.module.scss";
import CloseIcon from "../../../icons/Buttons/Close";
import Chevron from "../../../icons/Chevron";

export default function CheckoutCard({ img, name, pool, initial, priceInEth, className }) {
	const history = useHistory();
	const [isHovered, setIsHovered] = useState(false);

	const closeHandler = () => {
		console.log("closing checkout card");
		history.goBack();
	};

	return (
		<div className={styles["card"]}>
			<div className={styles["card__header"]}>
				<h4>Checkout</h4>
				<CloseIcon
					className={styles["card__close-btn"]}
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
					onClick={closeHandler}
					hover={isHovered}
				/>
			</div>

			<div className={styles["card__image-container"]}>
				<img src={img} alt="Knit Image" className={styles["card__image"]} />
			</div>

			<div className={styles["card__title"]}>
				<h3 className={styles["card__name"]}>{name}</h3>
				<p className={styles["card__available"]}>
					{pool}/{initial} available
				</p>
			</div>

			<div className={styles["card__price"]}>
				<p className={styles["card__detail"]}>Quantity</p>
				<p className={styles["card__detail"]}>Price</p>
				<DropdownMenu optionsArr={[1, 2, 3, 4, 5]} />
				<DropdownMenu optionsArr={[`${priceInEth} ETH`, `${priceInEth * 2100} USD`]} />
			</div>
		</div>
	);
}

function DropdownMenu({ optionsArr }) {
	const menuRef = useRef(false);
	const [open, setOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState(optionsArr[0]);
	const [isHovered, setIsHovered] = useState(false);

	const clickHandler = () => {
		menuRef.current.classList.toggle(styles["active"]);
	};

	return (
		<div className={styles["menu"]} onClick={clickHandler} ref={menuRef}>
			<div
				className={styles["menu__default"]}
				onClick={() => setOpen(!open)}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				<p className={styles["menu__default-option"]}>{selectedOption}</p>

				<Chevron hover={isHovered} className={styles["menu__chevron"]} down />
			</div>
			<div className={styles["menu__options"]}>
				{optionsArr.map(option => (
					<div onClick={() => setSelectedOption(option)} className={styles["menu__option"]}>
						{option}
					</div>
				))}
			</div>
		</div>
	);
}

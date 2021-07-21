import { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";

import useWindowDimensions from "../../../hooks/useWindowDimensions";

import styles from "./OrdersCard.module.scss";
import Button from "../../UI/Buttons/Button";
import Modal from "../Modals/Modal";
import Chevron from "../../../icons/Chevron";

export default function OrdersCard({ img, name, serial, orderNum, date, status, trackingNum, hash }) {
	const { isMobileSized } = useWindowDimensions();
	const history = useHistory();
	const [showWallet, setShowWallet] = useState(false);
	const isNFT = status === "NFT";
	const dropdownBodyRef = useRef();
	const chevronRef = useRef();

	const showTrackOrder = status === "For Delivery" || status === "Delivered";

	let btn1;
	if (status === "Available for redemption") {
		btn1 = (
			<Button onClick={() => history.push("/redeem")} small className={styles["card__order-btn"]}>
				Redeem
			</Button>
		);
	} else if (isNFT) {
		btn1 = null;
	} else if (status === "For Delivery" || status === "Delivered") {
		btn1 = (
			<Button
				onClick={() => history.push("/order-details/1234")}
				secondary
				small
				className={styles["card__order-btn"]}
			>
				Order Details
			</Button>
		);
	}

	const btn2 = isNFT ? (
		<CopyToClipboard text={hash}>
			<Button tertiary small className={styles["card__item-btn"]}>
				Copy Address
			</Button>
		</CopyToClipboard>
	) : (
		<Button onClick={() => setShowWallet(true)} tertiary small className={styles["card__item-btn"]}>
			View Item Details
		</Button>
	);

	const imgClasses = [styles["card__img-container"]];
	if (isNFT) imgClasses.push(styles["card__img-container--NFT"]);
	if (isMobileSized) imgClasses.push(styles["card__img-container--mobile"]);

	const dropdownHandler = () => {
		// ?: Toggle active states to control whether the accordion is open or closed
		dropdownBodyRef.current.classList.toggle(styles["active"]);
		chevronRef.current.classList.toggle(styles["active"]);
	};

	if (isMobileSized)
		return (
			<>
				<Modal
					connectWallet={false}
					isModalOpen={showWallet}
					cancelHandler={() => setShowWallet(false)}
				/>

				<div className={styles["card--mobile"]}>
					<div className={styles["card__img-wrapper--mobile"]}>
						<div className={imgClasses.join(" ")}>
							<div className={styles["card__img-border--mobile"]}>
								<img src={img} alt="Knit Image" className={styles["card__img--mobile"]} />
							</div>
						</div>
					</div>

					<div onClick={dropdownHandler} className={styles["card__dropdown-header"]}>
						<h3 className={styles["card__name"]}>{name}</h3>
						<Chevron className={styles["card__chevron"]} reference={chevronRef} />
					</div>

					<div ref={dropdownBodyRef} className={styles["card__dropdown-body"]}>
						<div className={styles["card__dropdown-body-container"]}>
							{!isNFT && <p className={styles["card__detail--mobile"]}>Knit: {serial}</p>}
							{isNFT && <p className={styles["card__detail--mobile"]}>{hash}</p>}

							<p className={styles["card__detail--mobile"]}>Order: {orderNum}</p>
							<p className={styles["card__detail--mobile"]}>Date ordered: {date}</p>

							{status !== "NFT" && (
								<>
									<div className={styles["card__status--mobile"]}>
										<p>Status:&nbsp;</p>
										<h6>{status}</h6>
									</div>
									<p className={styles["card__tracking-num--mobile"]}>{trackingNum}</p>
									{showTrackOrder && (
										<a href="#" className={styles["card__track-order--mobile"]}>
											Track your order
										</a>
									)}
								</>
							)}

							<div className={styles["card__btn-container--mobile"]}>
								{btn1}
								{btn2}
							</div>
						</div>
					</div>
				</div>
			</>
		);

	return (
		<>
			<Modal
				connectWallet={false}
				isModalOpen={showWallet}
				cancelHandler={() => setShowWallet(false)}
			/>

			<div className={styles["card"]}>
				<div className={imgClasses.join(" ")}>
					<div className={styles["card__img-border"]}>
						<img src={img} alt="Knit Image" className={styles["card__img"]} />
					</div>
				</div>

				<div className={styles["card__details"]}>
					<div className={styles["card__details-left"]}>
						<h3 className={styles["card__name"]}>{name}</h3>
						{!isNFT && <p className={styles["card__detail"]}>Knit: {serial}</p>}
						{isNFT && <p className={styles["card__detail"]}>{hash}</p>}

						<p className={styles["card__detail"]}>Order: {orderNum}</p>
						<p className={styles["card__detail"]}>Date ordered: {date}</p>

						{status !== "NFT" && (
							<>
								<div className={styles["card__status"]}>
									<p>Status:</p>
									<h6>{status}</h6>
								</div>
								<p className={styles["card__tracking-num"]}>{trackingNum}</p>
								{showTrackOrder && (
									<a href="#" className={styles["card__track-order"]}>
										Track your order
									</a>
								)}
							</>
						)}
					</div>

					<div className={styles["card__details-right"]}>
						{btn1}
						{btn2}
					</div>
				</div>
			</div>
		</>
	);
}

import { useState } from "react";

import styles from "./OrdersCard.module.scss";
import Button from "../../UI/Buttons/Button";
import Modal from "../Modals/Modal";

export default function OrdersCard({ img, name, serial, orderNum, date, status, trackingNum, hash }) {
	const [showWallet, setShowWallet] = useState(false);
	const isNFT = status === "NFT";

	const showTrackOrder = status === "For Delivery" || status === "Delivered";

	let primaryBtn;
	if (status === "Available for redemption") {
		primaryBtn = (
			<Button small className={styles["card__order-btn"]}>
				Redeem
			</Button>
		);
	} else if (isNFT) {
		primaryBtn = null;
	} else if (status === "For Delivery" || status === "Delivered") {
		primaryBtn = (
			<Button secondary small className={styles["card__order-btn"]}>
				Order Details
			</Button>
		);
	}

	const tertiaryBtn = isNFT ? (
		<Button tertiary small className={styles["card__item-btn"]}>
			Copy Address
		</Button>
	) : (
		<Button onClick={() => setShowWallet(true)} tertiary small className={styles["card__item-btn"]}>
			View Item Details
		</Button>
	);

	const imgClasses = [styles["card__img-container"]];
	if (isNFT) imgClasses.push(styles["card__img-container--NFT"]);

	return (
		<>
			<Modal connectWallet={false} isModalOpen={showWallet} cancelHandler={() => setShowWallet(false)} />

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
						{primaryBtn}
						{tertiaryBtn}
					</div>
				</div>
			</div>
		</>
	);
}

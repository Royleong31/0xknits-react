import styles from "./RedeemCard.module.scss";

export default function RedeemCard({ img, NFT = false, name, hash, serial, quantity, mobile }) {
	let classes = styles["card__img-container"];
	if (NFT) classes += " " + styles["card__img-container--NFT"];

	const serialNum = NFT ? hash : `Knit: #${serial}`;

	return (
		<>
			<div className={classes}>
				<div className={styles["card__img-border--outer"]}>
					<div className={styles["card__img-border--inner"]}>
						<img src={img} alt="Knit Image" className={styles["card__img"]} />
					</div>
				</div>
			</div>

			<div className={styles["card__order-detail-group"]}>
				<p className={styles["card__order-name"]}>{name}</p>
				<p className={styles["card__order-detail"]}>{serialNum}</p>
				<p className={styles["card__order-detail"]}>Quantity: {quantity}</p>
			</div>
		</>
	);
}



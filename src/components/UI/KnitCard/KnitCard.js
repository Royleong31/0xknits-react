import styles from "./KnitCard.module.scss";
import InfoIcon from "../../../icons/Buttons/Info";
import CloseIcon from "../../../icons/Buttons/Close";

import InitialIcon from "../../../icons/Primary/Initial";
import RedeemedIcon from "../../../icons/Primary/Redeemed";
import PoolIcon from "../../../icons/Primary/Pool";

import HeightIcon from "../../../icons/Secondary/Height";
import WeightIcon from "../../../icons/Secondary/Weight";
import WidthIcon from "../../../icons/Secondary/Width";
import WoolIcon from "../../../icons/Secondary/Wool";
import Button from "../../UI/Buttons/Button";

export default function KnitCard({
	name,
	initial,
	redeemed,
	pool,
	priceInEth,
	height,
	weight,
	width,
	material,
	img,
}) {
	return (
		<div>
			<div className={styles["card"]}>
				<div className={styles["card__front"]}>
					<div className={styles["card__image-container"]}>
						<img src={img} alt="Knit Image" className={styles["card__image"]} />
					</div>

					<InfoIcon width="35" className={styles["card__btn"]} hover={false} />

					<div className={styles["card__title"]}>
						<h3 className={styles["card__name"]}>{name}</h3>
						<p className={styles["card__available"]}>
							{pool}/{initial}
						</p>
					</div>

					<div className={styles["card__price"]}>
						<p className={styles["card__eth"]}>{priceInEth} ETH</p>
						<p className={styles["card__USD"]}>${priceInEth * 2100} USD</p>
					</div>
				</div>

				<div className={styles["card__back"]}>
					<div className={styles["card__back-top"]}>
						<h3 className={styles["card__name"]}>{name}</h3>
						<CloseIcon width="35" className={styles["card__btn"]} />

						<div className={styles["card__info"]}>
							<InitialIcon className={styles["card__info-icon"]} />
							<p className={styles["card__info-title"]}>Initial</p>
							<p className={styles["card__info-desc"]}>{initial}</p>
						</div>
						<div className={styles["card__info"]}>
							<RedeemedIcon className={styles["card__info-icon"]} />
							<p className={styles["card__info-title"]}>Redeemed</p>
							<p className={styles["card__info-desc"]}>{redeemed}</p>
						</div>
						<div className={styles["card__info"]}>
							<PoolIcon className={styles["card__info-icon"]} />
							<p className={styles["card__info-title"]}>Pool</p>
							<p className={styles["card__info-desc"]}>{pool}</p>
						</div>
					</div>

					<div className={styles["card__back-bottom"]}>
						<h5 className={styles["card__attributes-title"]}>Attributes</h5>

						<div className={styles["card__attribute"]}>
							<HeightIcon className={styles["card__attribute-icon"]} />
							<p className={styles["card__info-title"]}>Height</p>
							<p className={styles["card__info-desc"]}>{height}</p>
						</div>

						<div className={styles["card__attribute"]}>
							<WeightIcon className={styles["card__attribute-icon"]} />
							<p className={styles["card__info-title"]}>Weight</p>
							<p className={styles["card__info-desc"]}>{weight}</p>
						</div>

						<div className={styles["card__attribute"]}>
							<WidthIcon className={styles["card__attribute-icon"]} />
							<p className={styles["card__info-title"]}>Width</p>
							<p className={styles["card__info-desc"]}>{width}</p>
						</div>

						<div className={styles["card__attribute"]}>
							<WoolIcon className={styles["card__attribute-icon"]} />
							<p className={styles["card__info-title"]}>Material</p>
							<p className={styles["card__info-desc"]}>{material}</p>
						</div>
					</div>
				</div>
			</div>

			<Button>Buy</Button>
		</div>
	);
}

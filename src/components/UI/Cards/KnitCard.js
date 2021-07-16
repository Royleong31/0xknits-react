import { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { isMobile } from "react-device-detect";
import { useSwipeable } from "react-swipeable";

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
import Button from "../Buttons/Button";

import imgTest from "../../../img/dany-front.png";

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
	img1,
	img2,
	img3,
	img4,
}) {
	const [showBack, setShowBack] = useState(false);
	const [isHovered, setIsHovered] = useState(false);
	const [img, setImg] = useState(img1);
	const imgContainerRef = useRef();
	const history = useHistory();
	const currentImgNumRef = useRef(1);

	let cardClasses = [styles["card"]];
	if (showBack) cardClasses.push(styles["card--clicked"]);

	const swipingHandler = direction => {
		const isSwipingLeft = direction === "left";
		isSwipingLeft ? currentImgNumRef.current++ : currentImgNumRef.current--;

		if (currentImgNumRef.current === 0) currentImgNumRef.current = 4;
		else if (currentImgNumRef.current === 5) currentImgNumRef.current = 1;

		switch (currentImgNumRef.current) {
			case 1:
				setImg(img1);
				break;
			case 2:
				setImg(img2);
				break;
			case 3:
				setImg(img3);
				break;
			case 4:
				setImg(img4);
				break;

			default:
				setImg(img1);
				break;
		}
	};

	let handlers = useSwipeable({
		onSwipedLeft: swipingHandler.bind(this, "left"),
		onSwipedRight: swipingHandler.bind(this, "right"),
	});
	if (!isMobile) handlers = {};

	const buyHandler = () => {
		history.push("/checkout");
	};

	const mouseMoveHandler = event => {
		const { clientX } = event;
		const { left, width } = imgContainerRef.current.getBoundingClientRect();
		const quarterWidth = width / 4; // TODO: Change to 8 if 8 images are used
		const xRelativeToEle = clientX - left;
		const quarterMouseIsIn = Math.floor(xRelativeToEle / quarterWidth) + 1;

		switch (quarterMouseIsIn) {
			case 1:
				setImg(img1);
				break;
			case 2:
				setImg(img2);
				break;
			case 3:
				setImg(img3);
				break;
			case 4:
				setImg(img4);
				break;

			default:
				setImg(img1);
				break;
		}
	};

	return (
		<div className={styles["card__wrapper"]}>
			<div
				className={cardClasses.join(" ")}
				onMouseEnter={isMobile ? () => {} : () => setIsHovered(true)}
				onMouseLeave={isMobile ? () => {} : () => setIsHovered(false)}
				onClick={isMobile ? () => {} : () => setShowBack(val => !val)}
			>
				<div className={styles["card__front"]}>
					<div
						onMouseMove={isMobile ? () => {} : mouseMoveHandler}
						onMouseLeave={isMobile ? () => {} : () => setImg(img1)}
						ref={imgContainerRef}
						className={styles["card__image-container"]}
						{...handlers}
					>
						<img src={img} alt="Knit Image" className={styles["card__image"]} />
					</div>

					<InfoIcon
						className={styles["card__btn"]}
						hover={isHovered}
						onClick={isMobile ? () => setShowBack(val => !val) : () => {}}
					/>

					<div className={styles["card__title"]}>
						<h3 className={styles["card__name"]}>{name}</h3>
						<p className={styles["card__available"]}>
							{pool}/{initial} available
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

						<CloseIcon
							className={styles["card__btn"]}
							hover={isHovered}
							onClick={isMobile ? () => setShowBack(val => !val) : () => {}}
						/>

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
							<p className={styles["card__info-desc"]}>{height}cm</p>
						</div>

						<div className={styles["card__attribute"]}>
							<WeightIcon className={styles["card__attribute-icon"]} />
							<p className={styles["card__info-title"]}>Weight</p>
							<p className={styles["card__info-desc"]}>{weight}g</p>
						</div>

						<div className={styles["card__attribute"]}>
							<WidthIcon className={styles["card__attribute-icon"]} />
							<p className={styles["card__info-title"]}>Width</p>
							<p className={styles["card__info-desc"]}>{width}cm</p>
						</div>

						<div className={styles["card__attribute"]}>
							<WoolIcon className={styles["card__attribute-icon"]} />
							<p className={styles["card__info-title"]}>Material</p>
							<p className={styles["card__info-desc"]}>{material}</p>
						</div>
					</div>
				</div>
			</div>

			<Button onClick={buyHandler}>Buy</Button>
		</div>
	);
}

export function KnitCardBack({ name, initial, redeemed, pool, height, weight, width, material, onClick }) {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div className={`${styles["card"]} ${styles["card--modal"]}`}>
			<div className={styles["card__back"]}>
				<div className={styles["card__back-top"]}>
					<h3 className={styles["card__name"]}>{name}</h3>
					<CloseIcon
						className={styles["card__btn"]}
						onMouseEnter={isMobile ? () => {} : () => setIsHovered(true)}
						onMouseLeave={isMobile ? () => {} : () => setIsHovered(false)}
						onClick={onClick}
						hover={isHovered}
					/>

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
						<p className={styles["card__info-desc"]}>{height}cm</p>
					</div>

					<div className={styles["card__attribute"]}>
						<WeightIcon className={styles["card__attribute-icon"]} />
						<p className={styles["card__info-title"]}>Weight</p>
						<p className={styles["card__info-desc"]}>{weight}g</p>
					</div>

					<div className={styles["card__attribute"]}>
						<WidthIcon className={styles["card__attribute-icon"]} />
						<p className={styles["card__info-title"]}>Width</p>
						<p className={styles["card__info-desc"]}>{width}cm</p>
					</div>

					<div className={styles["card__attribute"]}>
						<WoolIcon className={styles["card__attribute-icon"]} />
						<p className={styles["card__info-title"]}>Material</p>
						<p className={styles["card__info-desc"]}>{material}</p>
					</div>
				</div>
			</div>
			);
		</div>
	);
}

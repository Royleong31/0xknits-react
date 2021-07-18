import styles from "./Buttons.module.scss";
import { isMobile } from "react-device-detect";

export default function PrimaryBtn({
	children,
	className,
	small,
	mobile,
	navbar,
	secondary,
	tertiary,
	onClick,
	fullWidth,
}) {
	const classesArr = [styles["btn"]];

	if (!isMobile) classesArr.push(styles["btn--not-mobile"]);
	if (fullWidth) classesArr.push(styles["btn--full-width"]);

	// ?: large is the default size
	if (small) classesArr.push(styles["btn--small"]);
	else if (mobile) classesArr.push(styles["btn--mobile"]);
	else if (navbar) classesArr.push(styles["btn--navbar"]);

	// ?: primary is the default style
	if (tertiary) classesArr.push(styles["btn--tertiary"]);
	else if (secondary) classesArr.push(styles["btn--secondary"]);

	const classes = classesArr.join(" ") + " " + className;

	return (
		<button onClick={onClick} className={classes}>
			{children}
		</button>
	);
}

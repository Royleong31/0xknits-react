import { useRef } from "react";

import styles from "./Accordion.module.scss";
import Chevron from "../../../icons/Chevron";

export default function Accordion({ question, answer }) {
	const ansRef = useRef();
	const chevronRef = useRef();

	const clickHandler = () => {
		// ?: Toggle active states to control whether the accordion is open or closed
		ansRef.current.classList.toggle(styles["active"]);
		chevronRef.current.classList.toggle(styles["active"]);
	};

	return (
		<div className={styles["accordion"]}>
			<div className={styles["accordion__qn"]} onClick={clickHandler}>
				<p>{question}</p>
				<Chevron reference={chevronRef} className={`${styles["accordion__chevron-down"]}`} down />
			</div>

			<div ref={ansRef} className={styles["accordion__ans"]}>
				<p>{answer}</p>
			</div>
		</div>
	);
}

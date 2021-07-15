import styles from "./Input.module.scss";

export default function Input({ className, name, type }) {
	// TODO: Add validation
	
	return (
		<div className={`${className} ${styles["input__form-group"]}`}>
			<input placeholder={name} name={name} type="text" className={styles["input"]} />
			<label htmlFor={name} className={styles["input__label"]}>
				{name}
			</label>
		</div>
	);
}

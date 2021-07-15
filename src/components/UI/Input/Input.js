import styles from "./Input.module.scss";

export default function Input({ className, name, type }) {
	return <input placeholder={name} type="text" className={`${styles["input"]} ${className}`} />;
}

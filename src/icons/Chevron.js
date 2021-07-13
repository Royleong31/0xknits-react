export default function Chevron({ up, down, className, reference }) {
	if ((up && down) || (!up && !down)) throw new Error("Chevron: Choose either up or down chevron");

	if (up)
		return (
			<svg
				ref={reference}
				className={className}
				width="32"
				height="32"
				viewBox="0 0 32 32"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M22 19L17.5364 13.6437C16.7369 12.6842 15.2631 12.6842 14.4636 13.6437L10 19"
					stroke="#FD247B"
					stroke-width="3"
					stroke-linecap="round"
				/>
			</svg>
		);

	if (down)
		return (
			<svg
				ref={reference}
				className={className}
				width="32"
				height="32"
				viewBox="0 0 32 32"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M10 13L14.4636 18.3563C15.2631 19.3158 16.7369 19.3158 17.5364 18.3563L22 13"
					stroke="#FD247B"
					stroke-width="3"
					stroke-linecap="round"
				/>
			</svg>
		);
}

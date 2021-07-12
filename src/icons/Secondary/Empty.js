export default function Empty({className}) {
	return (
		<svg
			className={className}
			width="84"
			height="84"
			viewBox="0 0 84 84"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle cx="44" cy="44" r="38.5" fill="url(#paint0_linear)" stroke="#DC2E74" stroke-width="3" />
			<circle cx="40" cy="40" r="38.5" fill="#FFBFD9" stroke="#DC2E74" stroke-width="3" />
			<defs>
				<linearGradient
					id="paint0_linear"
					x1="11.4227"
					y1="78.7872"
					x2="46.3064"
					y2="-2.26502"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#6BDDEF" />
					<stop offset="0.5" stop-color="#CDA5CA" />
					<stop offset="1" stop-color="#FFBFD9" />
				</linearGradient>
			</defs>
		</svg>
	);
}

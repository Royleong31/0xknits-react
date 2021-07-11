import "./KnitCard.module.scss";

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
}) {
	return (
		<div className="knit-card">
			{name}, {initial}, {redeemed}, {pool}, {priceInEth}, {height}, {weight}, {width}, {material},
		</div>
	);
}

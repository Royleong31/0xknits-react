import KnitCard from "../../UI/KnitCard/KnitCard";

const dummyKnitsArr = [
	{
		name: "0xDaenerys",
		initial: 20,
		redeemed: 2,
		pool: 18,
		priceInEth: 30,
		height: 20,
		weight: 100,
		width: 5,
		material: "Wool",
	},
	{
		name: "0xTyrion",
		initial: 49,
		redeemed: 29,
		pool: 20,
		priceInEth: 20,
		height: 30,
		weight: 200,
		width: 50,
		material: "Wool",
	},
	{
		name: "0xJon",
		initial: 40,
		redeemed: 20,
		pool: 20,
		priceInEth: 10,
		height: 100,
		weight: 300,
		width: 100,
		material: "Cotton",
	},
];

export default function Knits({ second }) {
	const knitsClasses = ["knits"];
	if (second) knitsClasses.push("knits--second");

	return (
		<section className={knitsClasses.join(" ")}>
			<div className="knits__container">
				<h2 className="knits__main">Ice and Fire</h2>
				<p className="knits__sub">
					About this collection. Baggu espresso boutique premium, global discerning sophisticated
					first-class. Finest smart St Moritz wardrobe alluring.{" "}
				</p>

				<div className="knits__cards-container">
					{dummyKnitsArr.map((knit, i) => (
						<KnitCard key={i} {...knit} />
					))}
				</div>
			</div>
		</section>
	);
}

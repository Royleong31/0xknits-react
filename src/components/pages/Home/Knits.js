import KnitCard from "../../UI/KnitCard/KnitCard";

import dany1 from "../../../img/dany-front.png";
import dany2 from "../../../img/dany-left.png";
import dany3 from "../../../img/dany-back.png";
import dany4 from "../../../img/dany-right.png";
import jon1 from "../../../img/jon.png";
import tyrion1 from "../../../img/tyrion.png";

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
		img1: dany1,
		img2: dany2,
		img3: dany3,
		img4: dany4,
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
		img1: jon1,
		img2: dany2,
		img3: dany3,
		img4: dany4,
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
		material: "Wool",
		img1: tyrion1,
		img2: dany2,
		img3: dany3,
		img4: dany4,
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

import OrdersCard from "../../UI/Cards/OrdersCard";
import Layout from "../../Layout/Layout";
import "./Orders.scss";
import img1 from "../../../img/dany-front.png";
import img2 from "../../../img/tyrion.png";
import img3 from "../../../img/jon.png";

const dummyOrdersArr = [
	{
		img: img1,
		name: "0xDaenarys",
		serial: "#012345",
		orderNum: "12345",
		date: "3 June 2021",
		status: "Available for redemption",
	},
	{
		img: img2,
		name: "0xJon",
		orderNum: "12345",
		date: "3 June 2021",
		status: "NFT",
		hash: "0x8013150018372173812983812739",
	},
	{
		img: img3,
		name: "0xTyrion",
		serial: "#012345",
		orderNum: "12345",
		date: "13 June 2021",
		status: "For Delivery",
		trackingNum: "UPS 12345",
	},
	{
		img: img1,
		name: "0xDaenarys",
		serial: "#012345",
		orderNum: "12345",
		date: "13 July 2021",
		status: "Delivered",
		trackingNum: "UPS 654321",
	},
];

export default function Orders() {
	return (
		<Layout navbar footer page="orders">
			<section className="orders">
				<div className="orders__header-container">
					<h1 className="orders__header">Your Knits</h1>
					<p className="orders__sub">A place to keep track of all your knits</p>
				</div>

				{dummyOrdersArr.map(order => (
					<OrdersCard {...order} />
				))}
			</section>
		</Layout>
	);
}

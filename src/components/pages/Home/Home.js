import { useEffect, useState } from "react";

import "./Home.scss";
import Layout from "../../Layout/Layout";
import Landing from "./Landing";
import Knits from "./Knits";

export default function Home() {
	const [showNavbar, setShowNavbar] = useState(false);
	const viewportHeight = window.innerHeight;

	const scrollHandler = () => {
		const y = window.scrollY;

		if (y < (viewportHeight / 4) * 3) {
			setShowNavbar(false);
			return;
		}

		setShowNavbar(true);
	};

	useEffect(() => {
		console.log("inside useeffect");
		window.addEventListener("scroll", scrollHandler);

		return () => {
			console.log("removeing useeffect");
			window.removeEventListener("scroll", scrollHandler);
		};
	}, []);

	return (
		<Layout footer navbar={showNavbar} page="home">
			<Landing />
			<Knits />
			<Knits second />
		</Layout>
	);
}

import "./Home.scss";
import Layout from "../../Layout/Layout";
import Landing, { MobileLanding } from "./Landing";
import Knits, { MobileKnits } from "./Knits";
import useShowNavbar from "../../../hooks/useShowNavbar";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

export default function Home() {
	const { height, isMobileSized, isPhoneSized } = useWindowDimensions();
	const showNavbar = useShowNavbar(height);

	const homeBody = isMobileSized ? (
		<>
			{isPhoneSized ? <MobileLanding /> : <Landing />}
			<MobileKnits />
			<MobileKnits second />
		</>
	) : (
		<>
			<Landing />
			<Knits />
			<Knits second />
		</>
	);

	return (
		<Layout footer navbar={showNavbar} page="home">
			{homeBody}
		</Layout>
	);
}

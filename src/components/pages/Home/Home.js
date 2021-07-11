import "./Home.scss";
import Layout from "../../Layout/Layout";
import Landing from "./Landing";
import Knits from "./Knits";

export default function Home() {
	return (
		<Layout>
			<Landing />
			<Knits />
			<Knits second />
		</Layout>
	);
}

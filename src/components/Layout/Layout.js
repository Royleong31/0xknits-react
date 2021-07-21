import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Layout.scss";

export default function Layout({ navbar, footer, page, children }) {
	let mainClasses = ["container"];

	if (page === "faq" || page === "orders") {
		mainClasses.push("container--secondary");
	}

	return (
		<main className={mainClasses.join(" ")}>
			{navbar && <Navbar />}
			{children}
			{footer && <Footer />}
		</main>
	);
}

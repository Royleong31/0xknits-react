import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Layout.scss";

export default function Layout({ navbar, footer, page, children }) {
	let mainClasses = ["container"];

	if (page === "home") {
		mainClasses.push("container--home");
	} else if (page === "faq" || page === "orders") {
		mainClasses.push("container--faq");
	}

	return (
		<main className={mainClasses.join(" ")}>
			{navbar && <Navbar />}
			{children}
			{footer && <Footer />}
		</main>
	);
}

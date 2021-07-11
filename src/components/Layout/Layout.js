import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Layout.scss";

export default function Layout({ children }) {
	return (
		<main className="home-container">
			<Navbar />
			{children}
			<Footer />
		</main>
	);
}

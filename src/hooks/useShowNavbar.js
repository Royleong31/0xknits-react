import { useEffect, useState } from "react";

export default function useShowNavbar(viewportHeight) {
	// ?: viewportHeight comes from home.js, which in turns gets the height from useWindowDimensions hook
	const [showNavbar, setShowNavbar] = useState(false);

	useEffect(() => {
		const scrollHandler = () => {
			if (window.scrollY < (viewportHeight / 4) * 3) return setShowNavbar(false);

			setShowNavbar(true);
		};

		window.addEventListener("scroll", scrollHandler);
		return () => window.removeEventListener("scroll", scrollHandler);
	}, []);

	return showNavbar;
}

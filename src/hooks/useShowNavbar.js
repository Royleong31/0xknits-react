import { useEffect, useState } from "react";
import { isSamsungBrowser } from "react-device-detect";

export default function useShowNavbar(viewportHeight) {
	// ?: viewportHeight comes from home.js, which in turns gets the height from useWindowDimensions hook
	const [showNavbar, setShowNavbar] = useState(false);

	useEffect(() => {
		const scrollHandler = () => {
			const y = window.scrollY;

			// ?: Samsung Browser seems to show navbar too late, so this is a workaround
			if (isSamsungBrowser && y < viewportHeight / 2) return setShowNavbar(false);
			if (y < (viewportHeight / 4) * 3) return setShowNavbar(false);

			setShowNavbar(true);
		};

		window.addEventListener("scroll", scrollHandler);
		return () => window.removeEventListener("scroll", scrollHandler);
	}, []);

	return showNavbar;
}

import { useState, useEffect } from "react";

function getWindowDimensions() {
	const { innerWidth: width, innerHeight: height } = window;
	return { width, height };
}

export default function useWindowDimensions() {
	const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

	useEffect(() => {
		const handleResize = () => setWindowDimensions(getWindowDimensions());
		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const isMobileSized = windowDimensions.width < 950;
	const isPhoneSized = windowDimensions.width < 650;

	return { ...windowDimensions, isMobileSized, isPhoneSized };
}

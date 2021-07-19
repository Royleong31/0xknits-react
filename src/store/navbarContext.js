import { createContext, useState } from "react";

const NavbarContext = createContext({
	navbarOpen: false,
	openNavbar: () => {},
	closeNavbar: () => {},
});

function disableScroll() {
	document.body.classList.add("stop-scrolling");
}

function enableScroll() {
	document.body.classList.remove("stop-scrolling");
}

export function NavbarProvider({ children }) {
	const [navbarOpen, setNavbarOpen] = useState(false);

	const navbarContext = {
		navbarOpen,
		openNavbar: () => {
			setNavbarOpen(true);
			disableScroll();
		},
		closeNavbar: () => {
			setNavbarOpen(false);
			enableScroll();
		},
	};

	return <NavbarContext.Provider value={navbarContext}>{children}</NavbarContext.Provider>;
}

export default NavbarContext;

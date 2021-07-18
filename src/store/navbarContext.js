import { createContext, useState } from "react";

const NavbarContext = createContext({
	navbarOpen: false,
	openNavbar: () => {},
	closeNavbar: () => {},
});

export function NavbarProvider({ children }) {
	const [navbarOpen, setNavbarOpen] = useState(false);

	const navbarContext = {
		navbarOpen,
		openNavbar: () => setNavbarOpen(true),
		closeNavbar: () => setNavbarOpen(false),
	};

	return <NavbarContext.Provider value={navbarContext}>{children}</NavbarContext.Provider>;
}

export default NavbarContext;

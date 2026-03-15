"use client";

// This is the main layout for the dashboard pages. It includes the navbar, header, and main content container. It also manages the state for the mobile navbar (open/close) and provides the OrdersContext to all child components.
import Navbar from "../components/layout/navbar/Navbar";
import Header from "../components/layout/header/Header";
import MainContentContainer from "./MainContentContainer";
import { OrdersProvider } from "../lib/ordersContext";
import { type ReactNode, useState } from "react";
import NavbarOverlay from "../components/layout/navbar/NavbarOverlay";
import BurgerButton from "../components/layout/navbar/BurgerButton";

type LayoutProps = {
	children: ReactNode;
};

export default function DashboardLayout({ children }: LayoutProps) {
	// state for open/close navbar in mobile view
	const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

	function closeNavbar() {
		setIsMobileNavOpen(false);
	}

	function toggleNavbar() {
		setIsMobileNavOpen(!isMobileNavOpen);
	}

	return (
		<OrdersProvider>
			{/* overlay for mobile navbar (appears when navbar is open in mobile view,
			covers the rest of the screen and closes the navbar when clicked) */}
			{isMobileNavOpen ? (
				<NavbarOverlay closeNavbar={closeNavbar}></NavbarOverlay>
			) : (
				false
			)}

			{/* main layout container with navbar and right section */}
			<div
				className=" main-layout-container overflow-hidden overflow-x-hidden 
			h-screen w-full grid lg:grid-cols-[16rem_1fr]"
			>
				{/* burger button */}
				<BurgerButton
					toggleNavbar={toggleNavbar}
					isMobileNavOpen={isMobileNavOpen}
				></BurgerButton>

				{/* navbar section (hidden in mobile view) */}
				{/* For large screens, navbar is always visible */}
				<div className="navbar-container hidden lg:block">
					<Navbar></Navbar>
				</div>

				{/* Mobile drawer */}
				{/* For mobile screens, navbar is hidden by default and can be toggled with the burger button. When open, it slides in from the left and an overlay appears to cover the rest of the screen. */}
				<div
					className={`fixed top-0 left-0 z-70 h-screen transition-transform duration-300 lg:hidden ${
						isMobileNavOpen ? "translate-x-0" : "-translate-x-full"
					}`}
				>
					<Navbar closeNavbar={closeNavbar} />
				</div>

				{/*  right section with header and main content container */}
				<div
					className="right-section bg-grey-2 overflow-hidden  
				grid grid-rows-[auto_1fr] min-w-0 min-h-0 "
				>
					<Header></Header>
					<MainContentContainer>{children}</MainContentContainer>
				</div>
			</div>
		</OrdersProvider>
	);
}

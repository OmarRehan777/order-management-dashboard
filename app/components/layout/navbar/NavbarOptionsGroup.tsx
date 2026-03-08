"use client";
// This component renders the group of navigation options in the navbar. It uses the usePathname hook to determine the current URL and applies an active style to the corresponding navigation option. It also calls the closeNavbar function when a navigation link is clicked to close the mobile navbar if it's open.

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMdHome } from "react-icons/io";
import { FaHistory, FaShoppingCart } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";
import NavbarOption from "./NavbarOption";

type NavbarOptionsGroupProps = {
	closeNavbar?: () => void;
};

export default function NavbarOptionsGroup({
	closeNavbar,
}: NavbarOptionsGroupProps) {
	const pathname = usePathname();

	// helper function to prevent home option from being always active
	const isActive = (path) => {
		// condition : if we are in the home option code
		if (path === "/") {
			// return true only if the current url is literally "/"
			return pathname === "/";
		}
		// else : return true if the url matches the option or its descendants
		return pathname.startsWith(path);
	};

	return (
		/* This container holds all navigation choices in a vertical list */
		<div className="w-full flex-1 flex flex-col items-center justify-start gap-2 ">
			{/*---------------------------------------------------------------------------------------------*/}
			{/* Home Navigation Link */}
			<Link href={"/"} className="w-full" onClick={closeNavbar}>
				<NavbarOption name="HOME" active={isActive("/")}>
					<IoMdHome />
				</NavbarOption>
			</Link>

			{/* Order History Navigation Link */}
			<Link
				href={"/order_history"}
				className="w-full"
				onClick={closeNavbar}
			>
				<NavbarOption
					name="ORDER HISTORY"
					active={isActive("/order_history")}
				>
					<FaHistory />
				</NavbarOption>
			</Link>

			{/* Statistics Navigation Link */}
			<Link href={"/statistics"} className="w-full" onClick={closeNavbar}>
				<NavbarOption
					name="STATISTICS"
					active={isActive("/statistics")}
				>
					<IoStatsChart />
				</NavbarOption>
			</Link>

			{/* Products Navigation Link */}
			<Link href={"/products"} className="w-full" onClick={closeNavbar}>
				<NavbarOption name="PRODUCTS" active={isActive("/products")}>
					<FaShoppingCart />
				</NavbarOption>
			</Link>
		</div>
	);
}

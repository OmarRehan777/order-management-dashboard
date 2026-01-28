"use client";
import { useEffect, useState } from "react";
import NavbarOptionsGroup from "./NavbarOptionsGroup";
import Logo from "./Logo";
import BurgerButton from "./BurgerButton";
import NavbarOverlay from "./NavbarOverlay";
import { usePathname } from "next/navigation";

type NavbarProps = {
	className?: string;
};

export default function Navbar({ className = "" }: NavbarProps) {
	const [isOpen, setIsOpen] = useState(false);
	const currentPathName = usePathname();

	useEffect(() => {
		setIsOpen(false);
	}, [currentPathName]);

	return (
		<div>
			{/* burger button */}
			<BurgerButton isOpen={isOpen} setIsOpen={setIsOpen}></BurgerButton>

			{/* overlay */}
			{isOpen ? (
				<NavbarOverlay setIsOpen={setIsOpen}></NavbarOverlay>
			) : (
				false
			)}
			{/* navbar */}
			<div
				className={`${className}
					fixed top-0 left-0 z-20 lg:static 
					h-screen w-64 shrink-0 bg-grey-1
					transform transition-transform duration-300
					${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0
					flex flex-col items-center justify-start gap-8 p-7 `}
			>
				{/* logo */}
				<Logo></Logo>

				<NavbarOptionsGroup></NavbarOptionsGroup>
			</div>
		</div>
	);
}

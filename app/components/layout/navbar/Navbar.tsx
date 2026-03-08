// This component is the sidebar navbar that appears on the left side of the screen in desktop view, and slides in from the left in mobile view. It contains the logo and the navigation options. It receives an optional className prop for additional styling and an optional closeNavbar function prop that can be called to close the mobile navbar when a navigation option is clicked. The closeNavbar function is only used in mobile view, as the navbar is always visible in desktop view.
import NavbarOptionsGroup from "./NavbarOptionsGroup";
import Logo from "./Logo";

type NavbarProps = {
	className?: string;
	closeNavbar?: () => void;
};

export default function Navbar({ className = "", closeNavbar }: NavbarProps) {
	return (
		<>
			{/* navbar */}
			<div
				// changed styles :(fixed top-0 left-0)
				className={`navbar-component ${className} w-64 h-screen  bg-grey-1 flex flex-col items-center justify-start gap-8 p-7 `}
			>
				{/* logo */}
				<Logo></Logo>

				<NavbarOptionsGroup
					closeNavbar={closeNavbar}
				></NavbarOptionsGroup>
			</div>
		</>
	);
}

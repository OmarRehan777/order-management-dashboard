// This component is the burger button that appears in mobile view to toggle the mobile navbar. It receives the state of whether the mobile navbar is open and a function to toggle that state as props. When clicked, it toggles the mobile navbar open/close state. The button displays a hamburger icon (☰) when the navbar is closed and a close icon (×) when the navbar is open.

type BurgerButtonProps = {
	toggleNavbar: () => void;
	isMobileNavOpen: boolean;
};

export default function BurgerButton({
	toggleNavbar,
	isMobileNavOpen,
}: BurgerButtonProps) {
	return (
		<button
			onClick={toggleNavbar}
			className="fixed top-5.5 left-4 z-80 block clickable lg:hidden text-2xl text-white 
			hover:text-grey-5"
		>
			{isMobileNavOpen ? "×" : "☰"}
		</button>
	);
}

type NavbarOverlayProps = {
	closeNavbar: () => void;
};

export default function NavbarOverlay({ closeNavbar }: NavbarOverlayProps) {
	return (
		<div
			onClick={closeNavbar}
			className="
      fixed inset-0 bg-black/40 backdrop-blur-xs z-60 lg:hidden
    "
		/>
	);
}

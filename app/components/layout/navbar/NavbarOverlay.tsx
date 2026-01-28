
type NavbarOverlayProps = {
	setIsOpen: (isOpen: boolean) => void;
};

export default function NavbarOverlay({ setIsOpen }: NavbarOverlayProps) {
	return (
		<div
			onClick={() => setIsOpen(false)}
			className="
      fixed inset-0 bg-black/40 backdrop-blur-xs z-10 lg:hidden
    "
		/>
	);
}

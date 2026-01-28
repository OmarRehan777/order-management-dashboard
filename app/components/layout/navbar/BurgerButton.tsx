type BurgerButtonProps = {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
};

export default function BurgerButton({ isOpen, setIsOpen }: BurgerButtonProps) {
	return (
		<button
			onClick={() => setIsOpen(!isOpen)}
			className="fixed top-6 left-4 z-10  lg:hidden clickable text-2xl"
		>
			{isOpen ? "✖" : "☰"}
		</button>
	);
}

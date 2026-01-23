export default function BurgerButton({ isOpen, setIsOpen }) {
	return (
		<button
			onClick={() => setIsOpen(!isOpen)}
			className="fixed top-6 left-4 z-50  lg:hidden clickable text-2xl"
		>
			{isOpen ? "✖" : "☰"}
		</button>
	);
}

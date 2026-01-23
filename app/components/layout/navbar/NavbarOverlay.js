export default function ({ setIsOpen }) {
	return (
		<div
			onClick={() => setIsOpen(false)}
			className="
      fixed inset-0 bg-black/40 backdrop-blur-xs z-10 lg:hidden
    "
		/>
	);
}

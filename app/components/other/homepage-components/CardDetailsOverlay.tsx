type CardDetailsOverlayProps = {
	onClose?: () => void;
	className?: string;
};

export default function CardDetailsOverlay({
	onClose,
	className = "",
}: CardDetailsOverlayProps) {
	return (
		<div
			aria-hidden="true"
			onClick={onClose}
			className={`fixed inset-0 bg-black/40 backdrop-blur-xs z-20  ${className}`}
		/>
	);
}

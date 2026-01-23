export default function OrangeButton({ className, children }) {
	return (
		<button
			className={` ${className}  hover:cursor-pointer gradient-orange gradient-orange-button clickable`}
		>
			{children}
		</button>
	);
}

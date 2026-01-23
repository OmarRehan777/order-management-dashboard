export default function OrderStatus() {
	const orderStatus = "completed";
	return (
		<div
			className={`order-status h-11/12 w-1/2 ${
				orderStatus === "completed"
					? "gradient-orange"
					: "gradient-grey-1"
			} rounded-xl flex items-center justify-center text-xs xs:text-base  font-medium `}
		>
			{orderStatus === "completed" ? "✓ COMPLETED" : "⌛ PREPARING"}
		</div>
	);
}

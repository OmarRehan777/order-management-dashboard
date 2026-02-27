import { OrderStatus } from "../../../../types/order";

type OrderStatusCardProps = {
	status: OrderStatus;
};

// This component is responsible for rendering the order status in the order card, it receives the order status as a prop and renders the corresponding color and text based on the status value
export default function OrderStatusCard({ status }: OrderStatusCardProps) {
	let cardColor = "";
	let cardText = "";

	// Determine card color and text based on order status
	switch (status) {
		case "pending":
			cardColor = "bg-grey-4";
			cardText = "⌛ PENDING";
			break;

		case "preparing":
			cardColor = "gradient-grey-3";
			cardText = "🔥 PREPARING";
			break;

		case "completed":
			cardColor = "gradient-orange";
			cardText = "✓ COMPLETED";
			break;
	}

	return (
		<div
			className={`order-status h-11/12 w-1/2 ${cardColor} rounded-xl flex items-center justify-center text-xs xs:text-base font-medium`}
		>
			{cardText}
		</div>
	);
}

// This is the page component for displaying the details of a specific order based on the orderId parameter from the URL. It uses the OrderDetailsClient component to fetch and display the order details.
import OrderDetailsClient from "./OrderDetailsClient";

// Define the type for the page props, which includes the orderId parameter
type PageProps = {
	params: Promise<{ orderId: string }>;
};

// The OrderDetailsPage component is an async function that fetches and displays the details of a specific order based on the orderId parameter from the URL
export default async function OrderDetailsPage({ params }: PageProps) {
	// Extract the orderId from the params promise
	const { orderId } = await params;

	// Render the OrderDetailsClient component, passing the orderId as a prop

	return (
		<div className="order-details-container flex justify-center items-start">
			<OrderDetailsClient orderId={orderId} />
		</div>
	);
}

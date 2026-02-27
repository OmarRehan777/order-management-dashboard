import mockOrders from "../../data/mockOrders";
import OrderCard from "../components/other/homepage-components/OrderCard";

export default function page() {
	return (
		<div className="absolute inset-0 flex flex-wrap justify-center items-center gap-8 sm:flex-row sm:justify-center sm:items-center sm:flex-wrap p-6">
			{/* Render the OrderCard component for each order in the mockOrders array */}
			{mockOrders.map((order) => (
				<OrderCard key={order.id} order={order}></OrderCard>
			))}
		</div>
	);
}

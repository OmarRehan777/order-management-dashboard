"use client";

import OrderCard from "../components/other/homepage-components/OrderCard";
import { useOrders } from "../lib/ordersContext";
import { isActiveOrder } from "../lib/orderFilters";

export default function page() {
	// Get orders from context
	const { orders } = useOrders();

	return (
		<div className="flex flex-wrap justify-center items-center gap-8 sm:flex-row sm:justify-center sm:items-center sm:flex-wrap py-6">
			{/* Render the OrderCard component for each active order */}
			{orders
				.filter((order) => isActiveOrder(order))
				.map((order) => (
					<OrderCard key={order.id} order={order}></OrderCard>
				))}
		</div>
	);
}

"use client";
// This component renders a table of finished orders (delivered or cancelled) using the OrderRow component for each order. It uses the useOrders hook to access the orders from the context and filters them to display only the finished ones. The table is styled with Tailwind CSS classes for a clean and responsive design.
import OrderRow from "./OrdersRow";
import { useOrders } from "../../lib/ordersContext";
import { isFinishedOrder } from "../../lib/orderFilters";

export default function OrderTable() {
	const { orders } = useOrders();

	return (
		// Table container
		<table className="w-full border-separate border-spacing-y-2 ">
			{/* Table header */}
			<thead className="text-left text-white">
				<tr>
					<th className="px-4 py-2 hidden sm:table-cell">ID</th>
					<th className="px-4 py-2">Customer</th>
					<th className="px-4 py-2 hidden xxxs:table-cell">Date</th>
					<th className="px-4 py-2 hidden xs:table-cell">Total</th>
					<th className="px-7 py-2 text-right ">Status</th>
				</tr>
			</thead>
			{/* Table body */}
			<tbody>
				{/* Render only finished orders (delivered or cancelled) */}
				{orders
					.filter((order) => isFinishedOrder(order))
					.map((order) => (
						<OrderRow key={order.id} order={order}></OrderRow>
					))}
			</tbody>
		</table>
	);
}
